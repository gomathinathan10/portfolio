/**
 * Renders Featured Projects Section dynamically from portfolioData
 * Uses simple English and zero emojis
 */

export function renderProjects(data) {
  const container = document.getElementById('projectsContainer');
  if (!container) return;

  const { projects } = data;

  const categories = projects.categories || ['All'];
  const filterBtnsHtml = categories.map((cat, idx) => `
    <button class="filter-btn ${idx === 0 ? 'active' : ''}" data-category="${cat}">
      ${cat}
    </button>
  `).join('');

  const projectCardsHtml = (projects.items || []).map(p => {
    const tagsHtml = (p.techStack || []).map(t => `<span class="tech-tag">${t}</span>`).join('');

    return `
      <article class="project-card" data-category="${p.category}">
        <div class="project-thumbnail-wrapper">
          <img 
            src="${p.image}" 
            alt="${p.title} Preview" 
            class="project-thumbnail"
            width="600"
            height="340"
            loading="lazy"
          />
          <div class="project-badge-overlay">${p.badge || p.category}</div>
        </div>

        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.description}</p>

          <div class="project-impact-box">
            <strong>Summary:</strong> ${p.keyImpact}
          </div>

          <div class="project-tags-row">
            ${tagsHtml}
          </div>

          <div class="project-actions">
            ${p.liveUrl ? `
              <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary" aria-label="View live project ${p.title}">
                <span>Live Demo</span>
              </a>
            ` : ''}
            ${p.githubUrl ? `
              <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary" aria-label="View code for ${p.title}">
                <span>Source Code</span>
              </a>
            ` : ''}
          </div>
        </div>
      </article>
    `;
  }).join('');

  container.innerHTML = `
    <section class="section projects-section" id="projects" aria-label="Projects">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">Projects</div>
          <h2 class="section-title">${projects.sectionTitle}</h2>
          <p class="section-subtitle">${projects.sectionSubtitle}</p>
        </div>

        <div class="projects-filter-bar" id="projectsFilterBar">
          ${filterBtnsHtml}
        </div>

        <div class="projects-grid" id="projectsGrid">
          ${projectCardsHtml}
        </div>
      </div>
    </section>
  `;

  initProjectsFilter();
}

function initProjectsFilter() {
  const filterBtns = document.querySelectorAll('#projectsFilterBar .filter-btn');
  const projectCards = document.querySelectorAll('#projectsGrid .project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const selectedCategory = btn.getAttribute('data-category');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (selectedCategory === 'All' || cardCategory === selectedCategory) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
