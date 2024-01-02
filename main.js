const fs = require('fs');

// Step 1: Create a file named "welcome.txt" with content "Hello Node"
const filePath = 'welcome.txt';
const fileContent = 'Hello Node';

fs.writeFile(filePath, fileContent, (err) => {
  if (err) {
    console.error('Error creating the file:', err);
    return;
  }
  console.log(`File "${filePath}" created successfully with content: "${fileContent}"`);
});

// Step 2: Read and console.log data from "welcome.txt"
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  console.log(`Data read from "${filePath}": ${data}`);
});



