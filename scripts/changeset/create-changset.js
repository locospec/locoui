import { execSync } from 'child_process';
import * as fs from "fs";
import * as path from "path";

// Step 1: Run the npx command to create an empty changeset and capture the output
const output = execSync('npx changeset add --empty', { encoding: 'utf-8' });

// Step 2: Extract the changeset file path from the output
const changesetPathMatch = output.match(/info (.*\.md)/);

if (!changesetPathMatch) {
  console.error('No changeset file path found in the command output.');
  process.exit(1);
}

const changesetFilePath = changesetPathMatch[1];
const changesetFile = path.basename(changesetFilePath);

// Step 3: Modify the changeset file with the package name and custom content
const packageName = process.argv[2]; // Expecting package name to be passed as a command-line argument

const version_increment = process.argv[3];

if (!packageName) {
  console.error('No package name provided.');
  process.exit(1);
}

if (!version_increment) {
  console.error('No version_increment provided.');
  process.exit(1);
}

// Read the content of the file
let content = fs.readFileSync(changesetFilePath, 'utf8');

const updatedContent = content.replace('---\n---', `---\n"@locoui/${packageName}": ${version_increment === "pre" ? "patch" : version_increment}\n---\n\nThis changeset was generated automatically.`);

fs.writeFileSync(changesetFilePath, updatedContent);

console.log(`Changeset file ${changesetFile} updated successfully for package ${packageName}.`);
