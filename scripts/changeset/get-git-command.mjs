import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

/**
 * Get the version of a specified package from the ${repo_name} packages directory.
 *
 * @param {string} repo_name - The name of the repository.
 * @param {string} packageName - The name of the package to fetch the version for.
 * @returns {string} The git log output.
 */
export function getGitLogs(repo_name, packageName) {
  // Validate packageName input
  if (!packageName) {
    console.error('Please provide a package name.');
    process.exit(1);
  }
  // Get the current directory
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // Construct the path to the package's package.json file
  const packageJsonPath = path.join(__dirname, `../../packages/${repo_name}-${packageName}/package.json`);

  // Check if the package.json exists
  if (!fs.existsSync(packageJsonPath)) {
    console.error(`Package.json not found for ${packageName}. Check if the package exists.`);
    process.exit(1);
  }

  // Read and parse the package.json file
  let packageJson;
  try {
    packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
  } catch (err) {
    throw new Error(`Failed to read or parse package.json for ${packageName}: ${err}`);
  }

  // Extract the version from package.json
  const { version } = packageJson;
  if (!version) {
    throw new Error(`Version not found in package.json for ${packageName}.`);
  }

  if (!version) {
    console.error(`Version not found in package.json for ${packageName}.`);
    process.exit(1);
  }

  const gitLogCommand = `git log --oneline @${repo_name}/${packageName}@${version}..HEAD -- ./packages/${repo_name}-${packageName}`;

  console.log(">>> GIT COMMAND >>>", gitLogCommand);
  try {
    execSync("git fetch --tag");
    const output = execSync(gitLogCommand, { encoding: 'utf-8' });
    return output;
  } catch (err) {
    throw new Error(`Failed to execute git log command: ${err}`);
  }
}
