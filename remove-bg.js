import sharp from 'sharp';

async function generateCleanCutout() {
  const inputPath = 'public/assets/gomathinathan.jpg';
  const outputPath = 'public/assets/gomathinathan.png';

  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const { width, height } = metadata;

  const rawBuffer = await image.ensureAlpha().raw().toBuffer();
  
  // Background in this photo is near-white background surrounding the subject.
  // We flood-fill strictly from the borders (x=0, x=width-1, y=0, and top corners).
  // A pixel is background if it connects to border and is bright white/off-white.
  const isBgPixel = (r, g, b) => {
    // White/near-white studio backdrop
    const minVal = Math.min(r, g, b);
    const maxVal = Math.max(r, g, b);
    const avg = (r + g + b) / 3;
    const diff = maxVal - minVal;

    // Strict background criteria:
    // Pure white or near white with low saturation
    if (minVal >= 210) return true;
    if (avg >= 200 && diff < 30) return true;
    if (avg >= 185 && diff < 20) return true;

    return false;
  };

  const isBg = new Uint8Array(width * height);
  const visited = new Uint8Array(width * height);
  const queue = [];

  // Seed flood fill from the borders, but only where it's background
  for (let x = 0; x < width; x++) {
    // Top border
    let idx = (0 * width + x) * 4;
    if (isBgPixel(rawBuffer[idx], rawBuffer[idx+1], rawBuffer[idx+2])) {
      queue.push(x, 0);
      visited[0 * width + x] = 1;
      isBg[0 * width + x] = 1;
    }
    // Bottom corners / border
    idx = ((height - 1) * width + x) * 4;
    if (isBgPixel(rawBuffer[idx], rawBuffer[idx+1], rawBuffer[idx+2])) {
      queue.push(x, height - 1);
      visited[(height - 1) * width + x] = 1;
      isBg[(height - 1) * width + x] = 1;
    }
  }

  for (let y = 0; y < height; y++) {
    // Left border
    let idx = (y * width + 0) * 4;
    if (isBgPixel(rawBuffer[idx], rawBuffer[idx+1], rawBuffer[idx+2])) {
      queue.push(0, y);
      visited[y * width + 0] = 1;
      isBg[y * width + 0] = 1;
    }
    // Right border
    idx = (y * width + (width - 1)) * 4;
    if (isBgPixel(rawBuffer[idx], rawBuffer[idx+1], rawBuffer[idx+2])) {
      queue.push(width - 1, y);
      visited[y * width + (width - 1)] = 1;
      isBg[y * width + (width - 1)] = 1;
    }
  }

  let head = 0;
  while (head < queue.length) {
    const x = queue[head++];
    const y = queue[head++];

    const neighbors = [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIndex = ny * width + nx;
        if (!visited[nIndex]) {
          visited[nIndex] = 1;
          const nr = rawBuffer[nIndex * 4];
          const ng = rawBuffer[nIndex * 4 + 1];
          const nb = rawBuffer[nIndex * 4 + 2];
          if (isBgPixel(nr, ng, nb)) {
            isBg[nIndex] = 1;
            queue.push(nx, ny);
          }
        }
      }
    }
  }

  // Build the output buffer
  const resultBuffer = Buffer.from(rawBuffer);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const pos = y * width + x;

      if (isBg[pos] === 1) {
        resultBuffer[idx + 3] = 0; // 100% transparent for background
      } else {
        // Foreground pixel: full opacity by default
        resultBuffer[idx + 3] = 255;

        // Check if directly adjacent to background to perform subpixel antialiasing
        let bgNeighbors = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (dx === 0 && dy === 0) continue;
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
              if (isBg[ny * width + nx] === 1) {
                bgNeighbors++;
              }
            }
          }
        }

        if (bgNeighbors > 0) {
          const r = rawBuffer[idx];
          const g = rawBuffer[idx + 1];
          const b = rawBuffer[idx + 2];
          const avg = (r + g + b) / 3;
          // Only feather pixels that are transitional/light
          if (avg > 190) {
            const alpha = Math.max(80, Math.min(255, Math.round(255 * (1 - (bgNeighbors / 8) * 0.5))));
            resultBuffer[idx + 3] = alpha;
          }
        }
      }
    }
  }

  await sharp(resultBuffer, {
    raw: { width, height, channels: 4 }
  })
  .png()
  .toFile(outputPath);

  await sharp(resultBuffer, {
    raw: { width, height, channels: 4 }
  })
  .png()
  .toFile('public/assets/profile.png');

  console.log('Clean cutout created successfully!');
}

generateCleanCutout().catch(console.error);
