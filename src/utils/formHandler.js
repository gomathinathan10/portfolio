/**
 * Contact Form & Toast Notification Handler
 */

export function initContactForm(contactData) {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('contactSubmitBtn');
  const toast = document.getElementById('toastNotification');

  if (!form || !submitBtn) return;

  // Real-time error clearance
  form.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('input', () => {
      field.closest('.form-group')?.classList.remove('has-error');
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameField = document.getElementById('senderName');
    const emailField = document.getElementById('senderEmail');
    const subjectField = document.getElementById('senderSubject');
    const messageField = document.getElementById('senderMessage');

    let isValid = true;

    // Validate Name
    if (!nameField.value.trim() || nameField.value.trim().length < 2) {
      nameField.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value.trim())) {
      emailField.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    // Validate Message
    if (!messageField.value.trim() || messageField.value.trim().length < 10) {
      messageField.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    if (!isValid) return;

    // Show sending state
    const originalBtnHtml = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="spinner" style="display:inline-block; width:16px; height:16px; border:2px solid currentColor; border-right-color:transparent; border-radius:50%; animation:spin 0.8s linear infinite; margin-right:8px;"></span>
      Sending Message...
    `;

    // Simulate realistic async delivery (e.g., API gateway or Web3Forms)
    await new Promise(resolve => setTimeout(resolve, 900));

    // Reset button
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnHtml;

    // Show success toast
    showToast(`Thank you, ${nameField.value.trim()}! Your message has been received. ${contactData.responseTime || "I'll reply shortly."}`);

    // Reset fields
    form.reset();
  });
}

export function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const toastText = document.getElementById('toastMessageText');
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 5000);
}
