/**
 * Renders Hero Section dynamically from portfolioData
 * Uses simple English, clean layout, fully visible picture, and zero emojis
 */

export function renderHero(data) {
  const container = document.getElementById('heroContainer');
  if (!container) return;

  const { personal } = data;

  const statsHtml = (personal.stats || []).map(s => `
    <div class="stat-item">
      <div class="stat-number">${s.value}</div>
      <div class="stat-label">${s.label}</div>
      <div class="stat-helper">${s.helper}</div>
    </div>
  `).join('');

  container.innerHTML = `
    <section class="section hero-section" id="hero" aria-label="Introduction">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="hero-status-badge">
              <span class="status-indicator-dot"></span>
              <span>${personal.availability?.status || 'Available'} &bull; ${personal.availability?.type || 'Full-Time & Consulting'}</span>
            </div>

            <h1 class="hero-title">
              Hello, I am <span class="gradient-text">${personal.name}</span>
            </h1>

            <div class="hero-subtitle">
              ${personal.title}
            </div>

            <p class="hero-tagline">
              ${personal.tagline}
            </p>

            <div class="hero-ctas">
              <a href="#projects" class="btn btn-lg btn-primary" id="heroExploreProjectsBtn">
                <span>View Projects</span>
              </a>
              <a href="#contact" class="btn btn-lg btn-secondary" id="heroContactBtn">
                <span>Contact Me</span>
              </a>
              <a href="${personal.resumeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-lg btn-secondary" id="heroDownloadResumeBtn" download>
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

          <div class="hero-avatar-container">
            <div class="hero-avatar-wrapper">
              <div class="hero-avatar-glow"></div>
              <img 
                src="${personal.avatar}" 
                alt="Photograph of ${personal.name}" 
                class="hero-avatar-img"
                loading="eager"
              />
              <div class="hero-floating-card">
                <div>
                  <div class="floating-card-title">${personal.location}</div>
                  <div class="floating-card-desc">${personal.relocation || 'Open to Work'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hero-stats-row">
          ${statsHtml}
        </div>
      </div>
    </section>
  `;
}
