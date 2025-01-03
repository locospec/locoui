import * as path from "path";

/**
 * Get the version of a specified package from the ${repo_name} packages directory from inputs
 * and validae for presence for each input
 *
 * @param void
 * @returns {{repo_name:string, packageName:string, version_increment:string}} Repo name, package name and version increment.
 */
const process_and_validate = () => {
  const repo_name = process.argv[2]; // Expecting repo name to be passed as a command-line argument
  const packageName = process.argv[3]; // Expecting package name to be passed as a command-line argument
  const version_increment = process.argv[4]; // Expecting version increment to be passed as a command-line argument

  if (!repo_name) {
    console.error("No repo name provided.");
    process.exit(1);
  }
  if (!packageName) {
    console.error("No package name provided.");
    process.exit(1);
  }
  if (!version_increment) {
    console.error("No version_increment provided.");
    process.exit(1);
  }

  return { repo_name, packageName, version_increment };
};

/**
 * Get the version of a specified package from the ${repo_name} packages directory.
 *
 * @param {string} output - The response of create empty changeset command.
 * @returns {{changesetFilePath: string, changesetFile: string}} File path and name.
 */
const extract_and_return_file_path_and_name = (output) => {
  const changesetPathMatch = output.match(/\.changeset\/([a-z-]+\.md)/);

  if (!changesetPathMatch || !changesetPathMatch[1]) {
    console.error("No changeset file path found in the command output.");
    process.exit(1);
  }

  const __dirname = process.cwd();

  const changesetFilePath = __dirname + "/.changeset/" + changesetPathMatch[1];
  const changesetFile = path.basename(changesetFilePath);

  return { changesetFilePath, changesetFile };
};

export { process_and_validate, extract_and_return_file_path_and_name };
