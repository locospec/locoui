import * as path from "path";

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

const extract_and_return_file_path_and_name = (output: string) => {
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
