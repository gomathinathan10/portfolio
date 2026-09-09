/**
 * Renders Skills Section dynamically from portfolioData
 * Uses clean SVG icons, simple English, and zero emojis
 */

export function renderSkills(data) {
  const container = document.getElementById('skillsContainer');
  if (!container) return;

  const { skills } = data;

  const categoriesHtml = (skills.categories || []).map(cat => {
    const itemsHtml = cat.items.map(item => `
      <div class="skill-item">
        <div class="skill-meta">
          <span class="skill-name">${item.name}</span>
          <span class="skill-tag">${item.tag}</span>
        </div>
        <div class="skill-progress-track" role="progressbar" aria-valuenow="${item.level}" aria-valuemin="0" aria-valuemax="100" aria-label="${item.name} proficiency">
          <div class="skill-progress-bar" style="width: ${item.level}%;"></div>
        </div>
      </div>
    `).join('');

    return `
      <div class="skill-category-card">
        <div class="skill-cat-header">
          <div class="skill-cat-icon">${renderCategorySvg(cat.icon)}</div>
          <div>
            <h3 class="skill-cat-title">${cat.name}</h3>
          </div>
        </div>
        <p class="skill-cat-desc">${cat.description}</p>
        <div class="skill-items-list">
          ${itemsHtml}
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <section class="section skills-section" id="skills" aria-label="Skills">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">Skills</div>
          <h2 class="section-title">${skills.sectionTitle}</h2>
          <p class="section-subtitle">${skills.sectionSubtitle}</p>
        </div>

        <div class="skills-grid">
          ${categoriesHtml}
        </div>
      </div>
    </section>
  `;
}

function renderCategorySvg(icon) {
  switch (icon) {
    case 'layout':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`;
    case 'server':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`;
    case 'cloud':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`;
    case 'database':
    default:
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`;
  }
}
