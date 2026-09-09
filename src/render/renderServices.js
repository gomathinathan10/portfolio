/**
 * Renders Services / Capabilities Section dynamically from portfolioData
 * Uses clean SVG icons, simple English, and zero emojis
 */

export function renderServices(data) {
  const container = document.getElementById('servicesContainer');
  if (!container || !data.services) return;

  const { services } = data;

  const servicesHtml = (services.items || []).map(svc => {
    const deliverablesHtml = (svc.deliverables || []).map(d => `
      <li>${d}</li>
    `).join('');

    return `
      <div class="service-card">
        <div class="service-icon-box">
          ${renderServiceSvg(svc.icon)}
        </div>
        <h3 class="service-title">${svc.title}</h3>
        <p class="service-desc">${svc.description}</p>
        <ul class="service-deliverables">
          ${deliverablesHtml}
        </ul>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <section class="section services-section" id="services" aria-label="Services">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">What I Do</div>
          <h2 class="section-title">${services.sectionTitle}</h2>
          <p class="section-subtitle">${services.sectionSubtitle}</p>
        </div>

        <div class="services-grid">
          ${servicesHtml}
        </div>
      </div>
    </section>
  `;
}

function renderServiceSvg(icon) {
  switch (icon) {
    case 'code':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
    case 'database':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`;
    case 'zap':
    default:
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`;
  }
}
