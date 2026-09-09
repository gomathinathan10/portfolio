/**
 * Renders About Section dynamically from portfolioData
 * Uses clear, simple English and zero emojis
 */

export function renderAbout(data) {
  const container = document.getElementById('aboutContainer');
  if (!container) return;

  const { about } = data;

  const paragraphsHtml = (about.paragraphs || []).map(p => `
    <p>${p}</p>
  `).join('');

  const principlesHtml = (about.principles || []).map(pr => `
    <div class="principle-box">
      <div class="principle-title">${pr.title}</div>
      <div class="principle-desc">${pr.description}</div>
    </div>
  `).join('');

  const quickFactsHtml = (about.quickFacts || []).map(f => `
    <div class="quick-fact-item">
      <span class="quick-fact-label">${f.label}</span>
      <span class="quick-fact-value">${f.value}</span>
    </div>
  `).join('');

  container.innerHTML = `
    <section class="section about-section" id="about" aria-label="About Me">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">Background</div>
          <h2 class="section-title">${about.sectionTitle}</h2>
          <p class="section-subtitle">${about.sectionSubtitle}</p>
        </div>

        <div class="about-grid">
          <div class="about-card">
            <div class="about-paragraphs">
              ${paragraphsHtml}
            </div>

            <div class="about-principles">
              ${principlesHtml}
            </div>
          </div>

          <div class="quick-facts-card">
            <h3 style="font-size: var(--text-lg); margin-bottom: var(--space-2); color: var(--primary-light);">
              Quick Information
            </h3>
            ${quickFactsHtml}
          </div>
        </div>
      </div>
    </section>
  `;
}
