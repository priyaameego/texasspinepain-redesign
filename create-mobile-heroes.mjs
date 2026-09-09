import sharp from 'sharp';

// Create mobile-optimized hero images (640px wide for mobile LCP)
const heroImages = ['hero-slide-1', 'hero-slide-2', 'hero-slide-3', 'hero-slide-4'];

for (const name of heroImages) {
  await sharp(`public/${name}.webp`)
    .resize(640, 900, { fit: 'cover', position: 'centre', kernel: sharp.kernel.lanczos3 })
    .webp({ quality: 82, effort: 4 })
    .toFile(`public/${name}-mobile.webp`);
  console.log(`✓ Created ${name}-mobile.webp`);
}

console.log('Mobile hero images done!');
