import { getUsers } from './modules/api.js';
import { addNewUser } from './modules/new_users.js';

//TODO: допилить функционал в new_users.js

const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const userForm = document.getElementById('user-form');
const newUserContainer = document.querySelector('.container-new-users');

let userNum = 7;

loginForm.addEventListener('submit', async (e) => {
   e.preventDefault();

   const email = emailInput.value;
   const password = passwordInput.value;

   try {
      const response = await fetch('https://reqres.in/api/login', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
         const data = await response.json();
         if (data.token) {
            localStorage.setItem('token', data.token);
            loginSuccess();
            await getUsers();
         } else {
            console.warn('Login failed');
         }
      } else {
         console.error('Error:', response.status);
      }
   } catch (error) {
      console.error('Error:', error);
   }

   emailInput.value = '';
   passwordInput.value = '';
});

userForm.addEventListener('submit', async (e) => {
   e.preventDefault();

   const firstNameInput = document.getElementById('first-name');
   const lastNameInput = document.getElementById('last-name');
   const emailInput = document.getElementById('email');
   const jobInput = document.getElementById('job');

   const newUser = {
      first_name: firstNameInput.value,
      last_name: lastNameInput.value,
      email: emailInput.value,
      job: jobInput.value,
      id: userNum,
   };

   addNewUser(newUser);

   try {
      const response = await fetch(`https://reqres.in/api/users`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ newUser }),
      });

      if (response.ok) {
         console.log('User added successfully');
         userNum++;
      } else {
         console.error('Error:', response.status);
      }
   } catch (error) {
      console.error('Error:', error);
   }

   firstNameInput.value = '';
   lastNameInput.value = '';
   emailInput.value = '';
   jobInput.value = '';
});

function loginSuccess() {
   const formContainer = document.querySelector('.form-container');
   const userListContainer = document.querySelector('.user-list');

   formContainer.style.display = 'none';
   userListContainer.style.display = 'block';
   newUserContainer.style.display = 'block';
}

export { userNum };
