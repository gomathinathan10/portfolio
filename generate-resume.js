import PDFDocument from 'pdfkit';
import fs from 'fs';

function generateResume() {
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 40, bottom: 40, left: 45, right: 45 }
  });

  const writeStream = fs.createWriteStream('public/assets/resume.pdf');
  doc.pipe(writeStream);

  // Colors
  const primaryColor = '#111827';
  const accentColor = '#2563EB';
  const textColor = '#374151';
  const mutedColor = '#6B7280';

  // Header - Name
  doc.font('Helvetica-Bold')
     .fontSize(22)
     .fillColor(primaryColor)
     .text('GOMATHINATHAN.V', { characterSpacing: 1 });
  
  doc.moveDown(0.3);

  // Contact Info
  doc.font('Helvetica-Bold').fontSize(11).fillColor(accentColor).text('CONTACT');
  doc.font('Helvetica').fontSize(10).fillColor(textColor);
  doc.text('Mobile No. : ', { continued: true }).font('Helvetica-Bold').text('+91 6382988134');
  doc.font('Helvetica').text('E-mail: ', { continued: true }).font('Helvetica-Bold').fillColor(accentColor).text('gomathinathanv1@gmail.com');
  doc.font('Helvetica').fillColor(textColor).text('Address: 73, VVK Street, Pettai, Tirunelveli – 627004.');

  doc.moveDown(0.8);
  doc.strokeColor('#E5E7EB').lineWidth(1).moveTo(45, doc.y).lineTo(550, doc.y).stroke();
  doc.moveDown(0.8);

  // Career Objective
  doc.font('Helvetica-Bold').fontSize(11).fillColor(accentColor).text('CAREER OBJECTIVE');
  doc.moveDown(0.2);
  doc.font('Helvetica').fontSize(10).fillColor(textColor).text(
    'To obtain a challenging position in a reputable organization where I can apply my knowledge and analytical skills for organizational growth.',
    { lineGap: 3 }
  );

  doc.moveDown(0.8);
  doc.strokeColor('#E5E7EB').lineWidth(1).moveTo(45, doc.y).lineTo(550, doc.y).stroke();
  doc.moveDown(0.8);

  // Educational Qualification
  doc.font('Helvetica-Bold').fontSize(11).fillColor(accentColor).text('EDUCATIONAL QUALIFICATION');
  doc.moveDown(0.4);
  
  const education = [
    { title: 'M. Sc. Data Analytics (2024 – 2026)', school: 'Manonmaniam Sundaranar University, Tirunelveli.' },
    { title: 'B. Sc. Computer Science (2021 – 2024)', school: 'The MDT Hindu College, Tirunelveli.' },
    { title: 'HSC (2019 – 2021)', school: 'Meenakshi Matriculation Hr. Sec. School, Tirunelveli.' },
    { title: 'SSLC (2019)', school: 'Meenakshi Matriculation Hr. Sec. School, Tirunelveli.' }
  ];

  education.forEach(edu => {
    doc.font('Helvetica-Bold').fontSize(9.5).fillColor(primaryColor).text(`•  ${edu.title}, `, { continued: true });
    doc.font('Helvetica').fontSize(9.5).fillColor(textColor).text(edu.school);
    doc.moveDown(0.25);
  });

  doc.moveDown(0.6);
  doc.strokeColor('#E5E7EB').lineWidth(1).moveTo(45, doc.y).lineTo(550, doc.y).stroke();
  doc.moveDown(0.8);

  // Experience
  doc.font('Helvetica-Bold').fontSize(11).fillColor(accentColor).text('EXPERIENCE');
  doc.moveDown(0.4);
  doc.font('Helvetica-Bold').fontSize(9.5).fillColor(primaryColor).text('•  Data Entry (May 2026 – July 2026) ', { continued: true });
  doc.font('Helvetica').fontSize(9.5).fillColor(textColor).text('in Indian Oil Corporation, Chennai.');

  doc.moveDown(0.8);
  doc.strokeColor('#E5E7EB').lineWidth(1).moveTo(45, doc.y).lineTo(550, doc.y).stroke();
  doc.moveDown(0.8);

  // Technical Skills
  doc.font('Helvetica-Bold').fontSize(11).fillColor(accentColor).text('TECHNICAL SKILLS');
  doc.moveDown(0.4);
  doc.font('Helvetica-Bold').fontSize(9.5).fillColor(primaryColor).text('•  Programming Languages: ', { continued: true });
  doc.font('Helvetica').fontSize(9.5).fillColor(textColor).text('HTML, CSS, JS, Python');
  doc.moveDown(0.25);
  doc.font('Helvetica-Bold').fontSize(9.5).fillColor(primaryColor).text('•  Proficient in Ms Office System Automations ', { continued: true });
  doc.font('Helvetica').fontSize(9.5).fillColor(textColor).text('(Word, Excel, PowerPoint)');

  doc.moveDown(0.8);
  doc.strokeColor('#E5E7EB').lineWidth(1).moveTo(45, doc.y).lineTo(550, doc.y).stroke();
  doc.moveDown(0.8);

  // Projects
  doc.font('Helvetica-Bold').fontSize(11).fillColor(accentColor).text('PROJECTS');
  doc.moveDown(0.4);

  const projects = [
    {
      title: '1. Next–Gen Resume Ranking Using BM25 & SBERT Embeddings',
      desc: 'Automatically analyze and rank Resumes according to job description, calculating scores using ML models.'
    },
    {
      title: '2. Driver Fatigue Detection System',
      desc: 'Vision based fatigue detection and alarm system using Convolutional Neural Networks (CNN) and OpenCV.'
    },
    {
      title: '3. DataTalk – Conversational Analytical Assistant',
      desc: 'A voice conversational chatbot for Data Analytical Queries connecting with API key.'
    },
    {
      title: '4. Analysis of Commercial Electricity Consumption in Indian State',
      desc: 'Dashboard Visualisation of Electricity Consumption using Powerbi.'
    }
  ];

  projects.forEach(proj => {
    doc.font('Helvetica-Bold').fontSize(9.5).fillColor(primaryColor).text(proj.title);
    doc.font('Helvetica').fontSize(9).fillColor(textColor).text(`   ${proj.desc}`, { lineGap: 2 });
    doc.moveDown(0.35);
  });

  doc.end();

  writeStream.on('finish', () => {
    console.log('Resume PDF generated successfully at public/assets/resume.pdf');
  });
}

generateResume();
