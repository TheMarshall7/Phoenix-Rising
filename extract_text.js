import Tesseract from 'tesseract.js';
import fs from 'fs';
import path from 'path';

const directory = process.argv[2];

if (!directory) {
  console.log("Provide directory path");
  process.exit(1);
}

fs.readdir(directory, (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  const pngFiles = files.filter(file => file.endsWith('.png') || file.endsWith('.PNG')).slice(5, 12); 
  
  const processFiles = async () => {
    for (const file of pngFiles) {
      console.log(`\n--- ${file} ---`);
      const filePath = path.join(directory, file);
      try {
        const { data: { text } } = await Tesseract.recognize(filePath, 'eng');
        console.log(text.replace(/\n\s*\n/g, '\n').trim());
      } catch (error) {
        console.error(`Error processing ${file}:`, error);
      }
    }
  };
  
  processFiles();
});
