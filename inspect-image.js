import sharp from 'sharp';
import fs from 'fs';

async function extractPerson() {
  const inputPath = 'C:/Users/lenovo/.gemini/antigravity-ide/brain/25cbefe5-979e-4a9f-9365-26249d61d28b/.user_uploaded/media_1791267941718.png';
  const img = sharp(inputPath);
  const metadata = await img.metadata();
  console.log('Metadata:', metadata);
}

extractPerson();
