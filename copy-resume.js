import fs from 'fs';

const src = 'C:/Users/lenovo/.gemini/antigravity-ide/brain/25cbefe5-979e-4a9f-9365-26249d61d28b/.user_uploaded/media_1791268005287.pdf';
const dest = 'public/assets/resume.pdf';

fs.copyFileSync(src, dest);
console.log('Successfully copied uploaded PDF to public/assets/resume.pdf');
