import { execSync } from 'child_process';
import * as fs from "fs";
import * as path from "path";
import { getGitLogs } from './get-git-command.mjs';
import { getChangesetFilename } from './getFileName.js';

const repo_name = process.argv[2] // Expecting repo name to be passed as a command-line argument
const packageName = process.argv[3]; // Expecting package name to be passed as a command-line argument
const version_increment = process.argv[4]; // Expecting version increment to be passed as a command-line argument

if(!repo_name){
  console.error('No repo name provided.');
  process.exit(1);
}
if (!packageName) {
  console.error('No package name provided.');
  process.exit(1);
}
if (!version_increment) {
  console.error('No version_increment provided.');
  process.exit(1);
}

// Step 1: Run the npx command to create an empty changeset and capture the output
const output = execSync('npx changeset add --empty', { encoding: 'utf-8' });
console.log("Creating new Empty Changeset \n", output);

const __dirname = process.cwd()
const second_output = getChangesetFilename(output);

// Step 2: Extract the changeset file path from the output
// const changesetPathMatch = output.match(/info (.*\.md)/);
const changesetPathMatch = output.match(/info\s+(.+\.md)/);

if (!changesetPathMatch || !changesetPathMatch[1]) {
  console.error('No changeset file path found in the command output.');
  process.exit(1);
}

// const changesetFilePath = changesetPathMatch[1];
const changesetFilePath = __dirname + "/.changeset/" + second_output;
const changesetFile = path.basename(changesetFilePath);

// console.log(">>>>>>> changesetFilePath",changesetFilePath);
// console.log("22>>>>> changesetFilePath", __dirname + "/.changeset/" + second_output);

// console.log(">>>>>>> changesetFile",changesetFile);
// console.log("22>>>>> changesetFile", second_output);


console.log("Empty changeset created as ",changesetFile);

// Step 3: Get all git logs based on package name
const gitlogs = getGitLogs(repo_name, packageName);

let content = fs.readFileSync(changesetFilePath, 'utf8');

const updatedContent = content.replace('---\n---', `---\n"@locoui/${packageName}": ${version_increment === "pre" ? "patch" : version_increment}\n---\n\n This changeset was generated automatically. \n\n ${gitlogs}\n`);

fs.writeFileSync(changesetFilePath, updatedContent);

console.log(`Changeset file ${changesetFile} updated successfully for package ${packageName}.`);
