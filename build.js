
const fs = require('node:fs');
const path = require('node:path');

const sourceFile = path.join(__dirname, 'src', 'index.js');
const outputDir = path.join(__dirname, 'dist');

fs.mkdirSync(outputDir, { recursive: true });

fs.copyFileSync(
  sourceFile,
  path.join(outputDir, 'index.js')
);

console.log('Build completed successfully');
