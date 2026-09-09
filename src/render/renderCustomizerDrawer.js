/**
 * Renders an interactive Floating Config Guide & JSON Inspector
 * Helps user understand how the centralized portfolio-data.js file drives the whole website
 * Uses clean SVGs, simple English, and zero emojis
 */

export function renderCustomizerDrawer(data) {
  const container = document.getElementById('customizerDrawerContainer');
  if (!container) return;

  container.innerHTML = `
    <!-- Floating Trigger Pill -->
    <button class="config-trigger-btn" id="configTriggerBtn" aria-label="Open portfolio edit guide">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
      <span>Edit Portfolio File</span>
    </button>

    <!-- Drawer Backdrop -->
    <div class="config-drawer-overlay" id="configDrawerOverlay"></div>

    <!-- Slide-over Drawer -->
    <aside class="config-drawer" id="configDrawer" aria-label="Portfolio Data Configuration Guide">
      <div class="config-drawer-header">
        <div>
          <h3 style="font-size: var(--text-base); font-weight: 700;">Portfolio Edit Guide</h3>
          <p style="font-size: var(--text-xs); color: var(--text-muted);">How to update your information</p>
        </div>
        <button id="closeConfigDrawerBtn" class="btn btn-sm btn-secondary" aria-label="Close drawer">Close</button>
      </div>

      <div class="config-drawer-body">
        <div style="background: var(--bg-pill); border: 1px solid var(--border-medium); padding: 12px; border-radius: var(--radius-md);">
          <div style="font-weight: 700; font-size: var(--text-sm); margin-bottom: 4px; color: var(--primary-light);">
            How to edit your portfolio:
          </div>
          <p style="font-size: var(--text-xs); color: var(--text-secondary); line-height: 1.5;">
            Open <code>portfolio-data.js</code> in your code editor. You can change your name, photo, phone, email, education, experience, and projects. Saving the file will update this website immediately.
          </p>
        </div>

        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-size: var(--text-xs); font-weight: 700; text-transform: uppercase; color: var(--text-muted);">
              Current Settings (JSON)
            </span>
            <button id="copyConfigJsonBtn" class="btn btn-sm btn-secondary">
              <span id="copyJsonBtnLabel">Copy Settings</span>
            </button>
          </div>
          <pre class="config-code-preview" id="configCodePreview"><code>${escapeHtml(JSON.stringify(data, null, 2))}</code></pre>
        </div>
      </div>
    </aside>
  `;

  const triggerBtn = document.getElementById('configTriggerBtn');
  const closeBtn = document.getElementById('closeConfigDrawerBtn');
  const overlay = document.getElementById('configDrawerOverlay');
  const drawer = document.getElementById('configDrawer');
  const copyBtn = document.getElementById('copyConfigJsonBtn');
  const copyLabel = document.getElementById('copyJsonBtnLabel');

  function openDrawer() {
    overlay.classList.add('open');
    drawer.classList.add('open');
  }

  function closeDrawer() {
    overlay.classList.remove('open');
    drawer.classList.remove('open');
  }

  if (triggerBtn) triggerBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(JSON.stringify(data, null, 2));
        copyLabel.textContent = 'Copied!';
        setTimeout(() => {
          copyLabel.textContent = 'Copy Settings';
        }, 2500);
      } catch (err) {
        copyLabel.textContent = 'Error copying';
      }
    });
  }
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
}
