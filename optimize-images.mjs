import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = 'c:/Users/Priya/Documents/Ameegolabs/texasspaine redesign/public';

async function optimizeImages() {
  try {
    const files = fs.readdirSync(PUBLIC_DIR);
    const jpgFiles = files.filter(f => f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.jpeg'));
    
    for (const file of jpgFiles) {
      const inputPath = path.join(PUBLIC_DIR, file);
      const outputPath = path.join(PUBLIC_DIR, file.replace(/\.jpe?g$/i, '.webp'));
      
      console.log(`Optimizing ${file}...`);
      
      await sharp(inputPath)
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath);
        
      const inStat = fs.statSync(inputPath);
      const outStat = fs.statSync(outputPath);
      console.log(`Saved ${(100 - (outStat.size / inStat.size * 100)).toFixed(2)}% (${(inStat.size / 1024).toFixed(1)}KB -> ${(outStat.size / 1024).toFixed(1)}KB)`);
      
      // Optionally delete original jpg if we are completely replacing
      // fs.unlinkSync(inputPath);
    }
    console.log('Image optimization complete.');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();
