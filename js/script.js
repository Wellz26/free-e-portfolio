
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = "Sending... (Form is static)";
    setTimeout(() => {
      status.textContent = "Thanks for reaching out!";
      form.reset();
    }, 1500);
  });
});
