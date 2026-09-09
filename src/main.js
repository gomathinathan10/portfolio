import './styles/variables.css';
import './styles/base.css';
import './styles/components.css';
import './styles/animations.css';

import { portfolioData } from '../portfolio-data.js';

import { renderHeaderFooter } from './render/renderHeaderFooter.js';
import { renderHero } from './render/renderHero.js';
import { renderAbout } from './render/renderAbout.js';
import { renderSkills } from './render/renderSkills.js';
import { renderExperience } from './render/renderExperience.js';
import { renderEducation } from './render/renderEducation.js';
import { renderProjects } from './render/renderProjects.js';
import { renderServices } from './render/renderServices.js';
import { renderContact } from './render/renderContact.js';
import { renderCustomizerDrawer } from './render/renderCustomizerDrawer.js';

import { initTheme, toggleTheme } from './utils/theme.js';
import { initNavigation } from './utils/navigation.js';
import { initContactForm } from './utils/formHandler.js';

// Dynamically sync document title and meta description from portfolioData
function syncMetadata(data) {
  document.title = `${data.personal.name} — ${data.personal.title}`;
  
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', `${data.personal.name}: ${data.personal.title}. ${data.personal.tagline}`);
  }
}

// Bootstrap Portfolio Application
function initApp() {
  syncMetadata(portfolioData);

  // Render all modules from the centralized configuration
  renderHeaderFooter(portfolioData);
  renderHero(portfolioData);
  renderAbout(portfolioData);
  renderSkills(portfolioData);
  renderExperience(portfolioData);
  renderEducation(portfolioData);
  renderProjects(portfolioData);
  renderServices(portfolioData);
  renderContact(portfolioData);
  renderCustomizerDrawer(portfolioData);

  // Initialize theme, navigation, and interactive handlers
  initTheme();
  initNavigation();
  initContactForm(portfolioData.contact);

  // Bind theme toggle button
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      toggleTheme();
    });
  }
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
