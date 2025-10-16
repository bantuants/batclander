import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const ASSETS_DIR = 'src/assets';
const OUTPUT_DIR = 'public';
const SIZE_THRESHOLD = 5 * 1024 * 1024; // 5MB

async function optimizeImages() {
  try {
    const files = fs.readdirSync(ASSETS_DIR);
    
    for (const file of files) {
      if (!file.match(/\.(png|jpg|jpeg)$/i)) continue;
      
      const filePath = path.join(ASSETS_DIR, file);
      const stats = fs.statSync(filePath);
      
      if (stats.size > SIZE_THRESHOLD) {
        const outputFile = path.join(OUTPUT_DIR, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
        
        await sharp(filePath)
          .webp({ quality: 80, effort: 6 })
          .toFile(outputFile);
        
        const newStats = fs.statSync(outputFile);
        const savings = ((stats.size - newStats.size) / stats.size * 100).toFixed(2);
        
        console.log(`✓ Optimized ${file}`);
        console.log(`  Original: ${(stats.size / 1024 / 1024).toFixed(2)}MB`);
        console.log(`  Optimized: ${(newStats.size / 1024 / 1024).toFixed(2)}MB`);
        console.log(`  Saved: ${savings}%\n`);
      }
    }
    
    console.log('All images optimized successfully!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();