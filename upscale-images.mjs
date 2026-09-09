import sharp from 'sharp';
import { existsSync } from 'fs';

const files = ['download (1).jpg', 'download (2).jpg', 'ser3.jpg'];

for (const f of files) {
  const input = `public/${f}`;
  if (!existsSync(input)) {
    console.log(`Skipping ${f} - not found`);
    continue;
  }
  
  const meta = await sharp(input).metadata();
  console.log(`${f}: ${meta.width}x${meta.height}`);
  
  // Upscale to at least 1200x900 with high quality
  const targetW = Math.max(meta.width || 0, 1200);
  const targetH = Math.max(meta.height || 0, 900);
  
  const outName = f.replace('.jpg', '-hq.webp');
  await sharp(input)
    .resize(targetW, targetH, {
      kernel: sharp.kernel.lanczos3,   // best upscale quality
      fit: 'cover',
      position: 'centre'
    })
    .webp({ quality: 92, effort: 6 })
    .toFile(`public/${outName}`);
  
  console.log(`✓ Saved ${outName} at ${targetW}x${targetH}`);
}
console.log('Done!');
