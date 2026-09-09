/**
 * Renders Site Header & Footer dynamically from portfolioData
 * Uses clean SVG icons and simple English text (no emojis)
 */

export function renderHeaderFooter(data) {
  const headerContainer = document.getElementById('siteHeaderContainer');
  const footerContainer = document.getElementById('siteFooterContainer');

  if (headerContainer) {
    headerContainer.innerHTML = `
      <header class="site-header" id="siteHeader">
        <div class="container header-inner">
          <a href="#" class="logo-brand" id="headerLogoBrand" aria-label="${data.personal.name} Portfolio">
            <span class="logo-monogram">${data.personal.initials || 'GV'}</span>
            <span class="logo-name">${data.personal.name}</span>
          </a>

          <nav class="nav-desktop" id="navDesktop" aria-label="Main Navigation">
            <a href="#about" class="nav-link">About</a>
            <a href="#skills" class="nav-link">Skills</a>
            <a href="#experience" class="nav-link">Experience</a>
            <a href="#education" class="nav-link">Education</a>
            <a href="#projects" class="nav-link">Projects</a>
            <a href="#contact" class="nav-link">Contact</a>
          </nav>

          <div class="header-actions">
            <button class="theme-toggle-btn" id="themeToggleBtn" aria-label="Toggle dark/light mode" title="Toggle theme">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
              </svg>
            </button>
            <a href="${data.personal.resumeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary" id="headerResumeBtn" download>
              <span>Resume</span>
            </a>
            <button class="mobile-nav-toggle" id="mobileNavToggle" aria-label="Toggle mobile menu" aria-expanded="false">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <div class="mobile-nav-drawer" id="mobileNavDrawer">
          <a href="#about" class="nav-link">About</a>
          <a href="#skills" class="nav-link">Skills</a>
          <a href="#experience" class="nav-link">Experience</a>
          <a href="#education" class="nav-link">Education</a>
          <a href="#projects" class="nav-link">Projects</a>
          <a href="#contact" class="nav-link">Contact</a>
          <a href="${data.personal.resumeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="margin-top: 8px;" download>
            <span>Download Resume (PDF)</span>
          </a>
        </div>
      </header>
    `;
  }

  if (footerContainer) {
    const currentYear = new Date().getFullYear();
    const socialIconsHtml = data.socialLinks.map(s => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="${s.name}" title="${s.name}: ${s.username}">
        ${renderSocialSvg(s.icon)}
      </a>
    `).join('');

    footerContainer.innerHTML = `
      <footer class="site-footer" id="siteFooter">
        <div class="container footer-inner">
          <div class="footer-col-left">
            <div class="logo-brand" style="margin-bottom: 8px;">
              <span class="logo-monogram">${data.personal.initials || 'GV'}</span>
              <span>${data.personal.name}</span>
            </div>
            <p style="font-size: var(--text-xs); color: var(--text-muted);">
              Copyright ${currentYear} ${data.footer.copyrightText || `${data.personal.name}. All rights reserved.`}
            </p>
            <p style="font-size: var(--text-xs); color: var(--text-muted); margin-top: 4px;">
              ${data.footer.builtWith}
            </p>
          </div>

          <div class="footer-col-right">
            <div class="footer-social-row" style="margin-bottom: 12px;">
              ${socialIconsHtml}
            </div>
            <a href="#siteHeader" class="back-to-top-btn" id="backToTopBtn">
              <span>Back to top</span>
            </a>
          </div>
        </div>
      </footer>
    `;
  }
}

function renderSocialSvg(icon) {
  switch (icon) {
    case 'github':
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`;
    case 'linkedin':
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`;
    case 'twitter':
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>`;
    case 'phone':
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;
    case 'mail':
    default:
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`;
  }
}
