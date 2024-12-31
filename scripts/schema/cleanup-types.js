import fs from 'fs';
import path from 'path';

// Path to the 'types' direct
/**
 * @param {string} directoryPath
 */
function deleteFolderRecursive(directoryPath) {
  if (fs.existsSync(directoryPath)) {
    fs.readdirSync(directoryPath).forEach((file) => {
      const currentPath = path.join(directoryPath, file);
      if (fs.lstatSync(currentPath).isDirectory()) {
        // Recursively delete subdirectory
        deleteFolderRecursive(currentPath);
      } else {
        fs.unlinkSync(currentPath);
      }
    });
    fs.rmdirSync(directoryPath); // Remove the empty folder itself
    console.log(`Deleted folder: ${directoryPath}`);
  } else {
    console.log(`Directory not found: ${directoryPath}`);
  }
}

/**
 * @param {string} types_folder
 */
function cleanTypesDirectory(types_folder) {
  const __dirname = process.cwd()
  const typesDir = path.join(__dirname, types_folder);
  console.log(`Cleaning up the 'types' directory at: ${typesDir}`);

  deleteFolderRecursive(typesDir);
}

// Execute the cleanup function
cleanTypesDirectory('/packages/locoui-core/types');
