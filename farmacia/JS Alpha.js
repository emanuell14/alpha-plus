const passwordInput = document.getElementById('password');
const showPasswordBtn = document.getElementById('show-password-btn');

showPasswordBtn.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showPasswordBtn.textContent = 'Ocultar senha';
  } else {
    passwordInput.type = 'password';
    showPasswordBtn.textContent = 'Mostrar senha';
  }
});