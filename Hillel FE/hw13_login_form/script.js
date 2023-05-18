const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const button = document.getElementById('button');
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');

button.disabled = true;

function emailPassValidation(email, password) {
   successMessage.textContent = '';

   if (email === 'admin' && password === 'password123') {
      successMessage.textContent = 'Success!';
      form.replaceWith(successMessage);
      return;
   }

   errorMessage.textContent = 'This user does not exist';
}

function emailValidation(email) {
   if (!email) {
      errorMessage.textContent = 'Email is empty';
      return false;
   }

   const emailValidation = email.split('@');
   const emailPart = emailValidation[1]?.split('.');

   if (
      emailValidation.length !== 2 ||
      !emailValidation[0] ||
      !emailValidation[1]?.includes('.') ||
      emailPart[0]?.length < 2 ||
      emailPart[1]?.length < 2
   ) {
      errorMessage.textContent = 'Email entered incorrectly';
      return false;
   }

   errorMessage.textContent = '';
   return true;
}

function passwordValidation(password) {
   if (!password) {
      errorMessage.textContent = 'Password is empty';
      return false;
   }

   if (password.length < 6) {
      errorMessage.textContent = 'Password must be at least 6 characters long';
      return false;
   }

   errorMessage.textContent = '';
   return true;
}

function checkInputs() {
   if (emailValidation(emailInput.value) && passwordValidation(passwordInput.value)) {
      button.disabled = false;
   } else {
      button.disabled = true;
   }
}

emailInput.addEventListener('blur', () => {
   emailValidation(emailInput.value);
});

passwordInput.addEventListener('input', () => {
   passwordValidation(passwordInput.value);
   checkInputs();
});

form.addEventListener('submit', (e) => {
   e.preventDefault();

   const email = emailInput.value;
   const password = passwordInput.value;

   emailPassValidation(email, password);
});