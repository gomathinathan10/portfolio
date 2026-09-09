/**
 * Renders Education Section dynamically from portfolioData
 * Uses simple English and zero emojis
 */

export function renderEducation(data) {
  const container = document.getElementById('educationContainer');
  if (!container) return;

  const { education } = data;

  const degreesHtml = (education.degrees || []).map(deg => {
    const highlightsHtml = (deg.highlights || []).map(h => `<li>${h}</li>`).join('');

    return `
      <div class="edu-card">
        <h4 class="edu-title">${deg.degree}</h4>
        <div class="edu-institution">
          <span>${deg.institution}</span>
          <span style="font-size: var(--text-xs); color: var(--text-muted); font-weight: normal;">&bull; ${deg.location}</span>
        </div>
        <div class="edu-period">${deg.period}</div>
        ${deg.grade ? `<div class="edu-grade">${deg.grade}</div>` : ''}
        <ul class="edu-highlights">
          ${highlightsHtml}
        </ul>
      </div>
    `;
  }).join('');

  const certsHtml = (education.certifications || []).map(cert => `
    <div class="cert-card">
      <h4 class="cert-title">${cert.title}</h4>
      <div class="cert-issuer">${cert.issuer}</div>
      <div class="cert-date">${cert.date}</div>
      ${cert.credentialId ? `<div style="font-size: var(--text-xs); color: var(--text-muted); margin-bottom: 4px;">ID: ${cert.credentialId}</div>` : ''}
      <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="cert-verify-link">
        <span>View Certificate</span>
      </a>
    </div>
  `).join('');

  container.innerHTML = `
    <section class="section education-section" id="education" aria-label="Education">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">Education</div>
          <h2 class="section-title">${education.sectionTitle}</h2>
          <p class="section-subtitle">${education.sectionSubtitle}</p>
        </div>

        <div class="edu-cert-grid">
          <div class="edu-column">
            <h3 class="column-heading">
              <span>Degrees and Schooling</span>
            </h3>
            ${degreesHtml}
          </div>

          <div class="cert-column">
            <h3 class="column-heading">
              <span>Certificates</span>
            </h3>
            ${certsHtml}
          </div>
        </div>
      </div>
    </section>
  `;
}
