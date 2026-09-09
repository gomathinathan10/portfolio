/**
 * Renders Experience Section dynamically from portfolioData
 * Uses simple English, clear timeline, and zero emojis
 */

export function renderExperience(data) {
  const container = document.getElementById('experienceContainer');
  if (!container) return;

  const { experience } = data;

  const rolesHtml = (experience.roles || []).map(role => {
    const highlightsHtml = (role.highlights || []).map(h => `
      <li>${h}</li>
    `).join('');

    const techTagsHtml = (role.techStack || []).map(t => `
      <span class="tech-tag">${t}</span>
    `).join('');

    return `
      <div class="timeline-item">
        <div class="timeline-node"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <h3 class="timeline-role">${role.role}</h3>
            <span class="timeline-period">${role.period}</span>
          </div>

          <div class="timeline-company">
            <span>at</span>
            <a href="${role.companyUrl || '#'}" target="_blank" rel="noopener noreferrer" style="font-weight: 700; color: var(--primary-light);">
              ${role.company}
            </a>
            <span style="color: var(--text-muted); font-size: var(--text-xs);">&bull; ${role.location}</span>
          </div>

          <p style="font-size: var(--text-sm); margin-bottom: var(--space-4); color: var(--text-secondary);">
            ${role.description}
          </p>

          <ul class="timeline-highlights">
            ${highlightsHtml}
          </ul>

          <div class="timeline-tech-tags">
            ${techTagsHtml}
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <section class="section experience-section" id="experience" aria-label="Work Experience">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">Work Experience</div>
          <h2 class="section-title">${experience.sectionTitle}</h2>
          <p class="section-subtitle">${experience.sectionSubtitle}</p>
        </div>

        <div class="experience-timeline">
          ${rolesHtml}
        </div>
      </div>
    </section>
  `;
}
