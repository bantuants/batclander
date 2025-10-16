import sharp from 'sharp';

async function optimizeImage() {
  try {
    await sharp('src/assets/batc_scene.png')
      .webp({ quality: 80, effort: 6 })
      .toFile('public/batc_scene.webp');
    
    console.log('Image optimized successfully!');
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimizeImage();