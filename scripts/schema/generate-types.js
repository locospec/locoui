import fs from "fs";
import path from "path";
import { compileFromFile } from "json-schema-to-typescript"

/**
 * @param {string} input
 * @param {string} output
 */
async function generateTypesFromSchemas(input, output) {
  const __dirname = process.cwd()
  const schemaDir = path.join(__dirname, input);
  const outputDir = path.join(__dirname, output);

  /**
   * @param {string} dir
   * @param {string[]} fileList
   */
  function getJsonFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isDirectory()) {
        fileList = getJsonFiles(filePath, fileList);
      } else if (file.endsWith('.json')) {
        fileList.push(filePath);
      }
    });
    return fileList;
  }

  // Ensure the output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Generate TypeScript files for each JSON schema
  const jsonFiles = getJsonFiles(schemaDir);
  for (const jsonFile of jsonFiles) {
    const relativePath = path.relative(schemaDir, jsonFile);
    const outputFilePath = path.join(outputDir, relativePath.replace('.json', '.ts'));
    const outputDirPath = path.dirname(outputFilePath);

    // Ensure the output subdirectories exist
    if (!fs.existsSync(outputDirPath)) {
      fs.mkdirSync(outputDirPath, { recursive: true });
    }

    // Compile the JSON schema to TypeScript and write to file
    try {
      const ts = await compileFromFile(jsonFile);
      fs.writeFileSync(outputFilePath, ts);
      console.log(`Generated: ${outputFilePath}`);
    } catch (error) {
      console.error(`Error processing ${jsonFile}:`, error);
    }
  }
}

generateTypesFromSchemas('schemas', 'types');
