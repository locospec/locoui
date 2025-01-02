import { execSync } from 'child_process';
// import * as fs from "fs";
// import * as path from "path";


const output = execSync('git fetch --tag && git tag', { encoding: 'utf-8' });

console.log(">>>> output",output)
