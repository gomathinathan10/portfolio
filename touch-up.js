import sharp from 'sharp';

async function touchUp() {
  const img = sharp('public/assets/gomathinathan.png');
  const { width, height } = await img.metadata();
  const rawBuffer = await img.ensureAlpha().raw().toBuffer();

  const cleaned = Buffer.from(rawBuffer);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const r = rawBuffer[idx];
      const g = rawBuffer[idx+1];
      const b = rawBuffer[idx+2];
      const a = rawBuffer[idx+3];

      if (a > 0) {
        // Check for stray light pixels near the bottom left
        if (x < 40 && y > height * 0.8 && r > 200 && g > 200 && b > 200) {
          cleaned[idx+3] = 0;
        }
      }
    }
  }

  await sharp(cleaned, {
    raw: { width, height, channels: 4 }
  })
  .png()
  .toFile('public/assets/gomathinathan.png');

  await sharp(cleaned, {
    raw: { width, height, channels: 4 }
  })
  .png()
  .toFile('public/assets/profile.png');

  console.log('Touched up image saved.');
}

touchUp();
