const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const button = document.getElementById('button');
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');

function emailPassValidation(email, password) {
   successMessage.textContent = '';

   if (!email || !password) {
      errorMessage.textContent = 'Email or password is empty';
      return;
   }

   if (email === 'admin' && password === 'password123') {
      successMessage.textContent = 'Success!';
      form.replaceWith(successMessage);
      return;
   }

   if (password.length <= 6) {
      errorMessage.textContent = 'Password must be more than 6 characters';
      return;
   }

   const emailValidation = email.split('@');
   const emailPart = emailValidation[1].split('.');
   if (
      emailValidation.length !== 2 ||
      !emailValidation[0] ||
      !emailValidation[1].includes('.') ||
      emailPart[0].length < 2 ||
      emailPart[1].length < 2
   ) {
      errorMessage.textContent = 'Email entered incorrectly';
      return;
   }

   if (email || password) {
      errorMessage.textContent = 'This user does not exist';
   }
}

function checkInputs() {
   if (emailInput.value && passwordInput.value) {
      button.disabled = false;
   } else {
      button.disabled = true;
   }
}

emailInput.addEventListener('input', checkInputs);
passwordInput.addEventListener('input', checkInputs);

form.addEventListener('submit', (e) => {
   e.preventDefault();

   const email = emailInput.value;
   const password = passwordInput.value;

   emailPassValidation(email, password);
});