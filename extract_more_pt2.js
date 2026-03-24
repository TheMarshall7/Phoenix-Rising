import Tesseract from 'tesseract.js';
import fs from 'fs';
import path from 'path';

const directory1 = "/home/isiata/Documents/Maria/Folder/Website March 2026/Phoenix Rising/Testimonials/PR 1 ";
const directory2 = "/home/isiata/Documents/Maria/Folder/Website March 2026/Phoenix Rising/Testimonials/PR 3 ";

const files1 = fs.readdirSync(directory1).filter(file => file.endsWith('.png') || file.endsWith('.PNG')).slice(15, 19).map(f => path.join(directory1, f));
const files2 = fs.readdirSync(directory2).filter(file => file.endsWith('.png') || file.endsWith('.PNG') || file.endsWith('.jpg') || file.endsWith('.jpeg')).slice(0, 6).map(f => path.join(directory2, f));

const allFiles = [...files1, ...files2];

const processFiles = async () => {
  const promises = allFiles.map(async (filePath) => {
    try {
      const { data: { text } } = await Tesseract.recognize(filePath, 'eng');
      console.log(`\n--- ${path.basename(filePath)} ---`);
      console.log(text.replace(/\n\s*\n/g, '\n').trim());
    } catch (error) {
      console.error(`Error processing ${path.basename(filePath)}:`, error);
    }
  });

  await Promise.all(promises);
  console.log("DONE PT2");
  process.exit(0);
};

processFiles();
