import sharp from 'sharp';

async function perfectGrownowwCutout() {
  const inputPath = 'C:/Users/lenovo/.gemini/antigravity-ide/brain/25cbefe5-979e-4a9f-9365-26249d61d28b/.user_uploaded/media_1791267941718.png';
  const img = sharp(inputPath);
  const { width, height } = await img.metadata();
  const rawBuffer = await img.ensureAlpha().raw().toBuffer();

  // Let's trace the left contour of the person:
  // Head / hair: starts around x=370, top at y=305
  // Left ear / neck: x ~ 370-390, y ~ 410-500
  // Left shoulder: slopes from (x=380, y=510) down to (x=260, y=600)
  // Left arm outer curve:
  // - upper arm: x ~ 255 at y=600..700
  // - elbow: x ~ 260-270 at y=700..800
  // - forearm / waist: x ~ 270-300 at y=800..1024
  
  // The dark letters "V GOMATHINATHAN" are located at x <= 245.
  // The background behind the text is light grey / white (x <= 255).
  // So anything with x < 255 at all y levels is definitely outside the person, EXCEPT elbow might touch x=262!

  // Let's check background criteria:
  // 1. Studio background (top, right, left of person):
  //    Bright pixels: R,G,B > 215, or (R+G+B)/3 > 200 with low saturation.
  // 2. Left banner: anything with x <= 252 is part of the banner/text.
  // 3. Top area: anything with y <= 300 is the top logo/header.
  // 4. Right side: anything to the right of the person's right shoulder/arm (right shoulder is at x=682, right elbow is at border).

  const isBgCandidate = (x, y, r, g, b) => {
    // Top banner
    if (y <= 300) return true;

    // Left graphic banner
    if (x <= 254) return true;

    // Head top boundary
    if (y < 305 && x < 400) return true;

    // White/grey background
    const avg = (r + g + b) / 3;
    const diff = Math.max(r, g, b) - Math.min(r, g, b);
    if (avg > 210 && diff < 30) return true;
    if (avg > 225) return true;

    // Space to the left of head and neck: (x between 255 and 375, y between 300 and 510)
    // Left of head/neck has grey/white background
    if (x < 370 && y < 510 && avg > 170) return true;

    // Space to the right of head and neck: (x > 570, y < 520)
    if (x > 570 && y < 520 && avg > 170) return true;

    return false;
  };

  const isBg = new Uint8Array(width * height);
  const visited = new Uint8Array(width * height);
  const queue = [];

  // Seed flood fill from outer boundaries
  for (let x = 0; x < width; x++) {
    queue.push(x, 0);
    visited[0 * width + x] = 1;
    isBg[0 * width + x] = 1;
  }
  for (let y = 0; y < height; y++) {
    queue.push(0, y);
    visited[y * width + 0] = 1;
    isBg[y * width + 0] = 1;

    queue.push(width - 1, y);
    visited[y * width + (width - 1)] = 1;
    isBg[y * width + (width - 1)] = 1;
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
          if (isBgCandidate(nx, ny, nr, ng, nb)) {
            isBg[nIndex] = 1;
            queue.push(nx, ny);
          }
        }
      }
    }
  }

  // Ensure left banner and top area are 100% removed
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (x <= 254 || y <= 300) {
        isBg[y * width + x] = 1;
      }
      // Top left triangle outside shoulder
      if (y < 515 && x < 370) {
        const avg = (rawBuffer[(y*width+x)*4] + rawBuffer[(y*width+x)*4+1] + rawBuffer[(y*width+x)*4+2]) / 3;
        if (avg > 160) {
          isBg[y * width + x] = 1;
        }
      }
      // Top right triangle outside shoulder
      if (y < 520 && x > 570) {
        const avg = (rawBuffer[(y*width+x)*4] + rawBuffer[(y*width+x)*4+1] + rawBuffer[(y*width+x)*4+2]) / 3;
        if (avg > 160) {
          isBg[y * width + x] = 1;
        }
      }
    }
  }

  const resultBuffer = Buffer.from(rawBuffer);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const pos = y * width + x;

      if (isBg[pos]) {
        resultBuffer[idx + 3] = 0;
      } else {
        resultBuffer[idx + 3] = 255;

        // Subpixel smoothing along the boundary
        let bgNeighbors = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
              if (isBg[ny * width + nx]) bgNeighbors++;
            }
          }
        }
        if (bgNeighbors > 0) {
          const avg = (rawBuffer[idx] + rawBuffer[idx+1] + rawBuffer[idx+2]) / 3;
          if (avg > 170) {
            resultBuffer[idx + 3] = Math.max(50, Math.round(255 * (1 - (bgNeighbors / 8) * 0.7)));
          }
        }
      }
    }
  }

  // Find tight bounding box of remaining foreground
  let minX = width, maxX = 0, minY = height, maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      if (resultBuffer[idx + 3] > 0) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log(`Clean bounding box: x: ${minX}..${maxX}, y: ${minY}..${maxY}`);

  const croppedWidth = maxX - minX + 1;
  const croppedHeight = maxY - minY + 1;

  const croppedBuffer = Buffer.alloc(croppedWidth * croppedHeight * 4);
  for (let y = 0; y < croppedHeight; y++) {
    for (let x = 0; x < croppedWidth; x++) {
      const srcX = minX + x;
      const srcY = minY + y;
      const srcIdx = (srcY * width + srcX) * 4;
      const dstIdx = (y * croppedWidth + x) * 4;
      croppedBuffer[dstIdx] = resultBuffer[srcIdx];
      croppedBuffer[dstIdx + 1] = resultBuffer[srcIdx + 1];
      croppedBuffer[dstIdx + 2] = resultBuffer[srcIdx + 2];
      croppedBuffer[dstIdx + 3] = resultBuffer[srcIdx + 3];
    }
  }

  await sharp(croppedBuffer, {
    raw: {
      width: croppedWidth,
      height: croppedHeight,
      channels: 4
    }
  })
  .png()
  .toFile('public/assets/gomathinathan.png');

  await sharp(croppedBuffer, {
    raw: {
      width: croppedWidth,
      height: croppedHeight,
      channels: 4
    }
  })
  .png()
  .toFile('public/assets/profile.png');

  console.log('Clean Grownoww developer cutout saved successfully!');
}

perfectGrownowwCutout().catch(console.error);
