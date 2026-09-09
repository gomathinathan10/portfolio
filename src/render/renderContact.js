/**
 * Renders Contact Section dynamically from portfolioData
 * Uses clean SVGs, simple English, and zero emojis
 */

export function renderContact(data) {
  const container = document.getElementById('contactContainer');
  if (!container) return;

  const { contact } = data;

  container.innerHTML = `
    <section class="section contact-section" id="contact" aria-label="Contact Information">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">Contact</div>
          <h2 class="section-title">${contact.sectionTitle}</h2>
          <p class="section-subtitle">${contact.sectionSubtitle}</p>
        </div>

        <div class="contact-grid">
          <!-- Left Column: Channels & Availability -->
          <div class="contact-info-card">
            <h3 style="font-size: var(--text-xl); font-weight: 700; margin-bottom: var(--space-4);">
              Direct Contact
            </h3>

            <!-- Email Channel -->
            <div class="contact-channel-item">
              <div class="channel-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div class="channel-details">
                <span class="channel-label">Email</span>
                <a href="mailto:${contact.email}" class="channel-value" id="directEmailLink">${contact.email}</a>
                <button class="copy-email-btn" id="copyEmailBtn" aria-label="Copy email address to clipboard">
                  <span id="copyEmailLabel">Copy address</span>
                </button>
              </div>
            </div>

            <!-- Phone Channel -->
            <div class="contact-channel-item">
              <div class="channel-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div class="channel-details">
                <span class="channel-label">Phone / WhatsApp</span>
                <a href="tel:${contact.phone.replace(/\s+/g, '')}" class="channel-value">${contact.phone}</a>
              </div>
            </div>

            <!-- Location Channel -->
            <div class="contact-channel-item">
              <div class="channel-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div class="channel-details">
                <span class="channel-label">Location</span>
                <span class="channel-value">${contact.location}</span>
              </div>
            </div>

            <!-- Response Time & Timezone Widget -->
            <div class="contact-timezone-widget">
              <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">
                Response Time
              </div>
              <div>${contact.responseTime}</div>
              <div style="margin-top: 8px; font-size: var(--text-xs); color: var(--primary-light);">
                Current Time in India: <span id="bengaluruLiveClock" style="font-weight: bold;">--:-- IST</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Interactive Contact Form -->
          <div class="contact-form-card">
            <h3 style="font-size: var(--text-xl); font-weight: 700; margin-bottom: var(--space-4);">
              Send a Direct Message
            </h3>

            <form class="contact-form" id="contactForm" novalidate>
              <div class="form-group">
                <label for="senderName" class="form-label">Your Name *</label>
                <input 
                  type="text" 
                  id="senderName" 
                  class="form-input" 
                  placeholder="${contact.formFields?.namePlaceholder || 'Enter your name'}" 
                  required
                />
                <span class="form-error">Please enter your name.</span>
              </div>

              <div class="form-group">
                <label for="senderEmail" class="form-label">Your Email *</label>
                <input 
                  type="email" 
                  id="senderEmail" 
                  class="form-input" 
                  placeholder="${contact.formFields?.emailPlaceholder || 'name@example.com'}" 
                  required
                />
                <span class="form-error">Please enter a valid email address.</span>
              </div>

              <div class="form-group">
                <label for="senderSubject" class="form-label">Subject</label>
                <input 
                  type="text" 
                  id="senderSubject" 
                  class="form-input" 
                  placeholder="${contact.formFields?.subjectPlaceholder || 'Job opportunity / project'}"
                />
              </div>

              <div class="form-group">
                <label for="senderMessage" class="form-label">Your Message *</label>
                <textarea 
                  id="senderMessage" 
                  class="form-textarea" 
                  placeholder="${contact.formFields?.messagePlaceholder || 'Write your message here...'}" 
                  required
                ></textarea>
                <span class="form-error">Please enter a message (at least 10 characters).</span>
              </div>

              <button type="submit" class="btn btn-lg btn-primary" id="contactSubmitBtn">
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;

  // Initialize Copy Email button
  const copyBtn = document.getElementById('copyEmailBtn');
  const copyLabel = document.getElementById('copyEmailLabel');
  if (copyBtn && copyLabel) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(contact.email);
        copyLabel.textContent = 'Copied to clipboard!';
        setTimeout(() => {
          copyLabel.textContent = 'Copy address';
        }, 3000);
      } catch (err) {
        copyLabel.textContent = contact.email;
      }
    });
  }

  // Live time ticker
  updateLiveClock();
  setInterval(updateLiveClock, 1000);
}

function updateLiveClock() {
  const clockEl = document.getElementById('bengaluruLiveClock');
  if (!clockEl) return;
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
  clockEl.textContent = `${timeStr} (IST)`;
}
