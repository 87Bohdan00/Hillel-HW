const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const userList = document.getElementById('user-list');
const userForm = document.getElementById('user-form');
const newUserList = document.getElementById('new-user-list');
const newUserContainer = document.querySelector('.container-new-users');

let userNum = 1;

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
            loginSuccess();
            await fetchUsers();
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

async function fetchUsers() {
   try {
      const response = await fetch('https://reqres.in/api/users?page=1');

      if (response.ok) {
         const data = await response.json();

         displayUsers(data.data);
      } else {
         console.error('Error:', response.status);
      }
   } catch (error) {
      console.error('Error:', error);
   }
}

function displayUsers(users) {
   userList.innerHTML = '';

   users.forEach((user) => {
      const li = document.createElement('li');
      li.classList.add(`user-${user.id}`);

      const avatar = document.createElement('img');
      avatar.src = user.avatar;
      avatar.alt = `Avatar of ${user.first_name} ${user.last_name}`;
      avatar.classList.add('user-avatar');
      li.appendChild(avatar);

      const div = document.createElement('div');
      div.classList.add('user-details');
      div.innerHTML = `
            <span class="user-name">${user.first_name} ${user.last_name}</span>
            <span class="user-email">${user.email}</span>
        `;
      li.appendChild(div);

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => {
         editUser(user);
      });

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
         deleteUser(user.id);
      });

      li.appendChild(editButton);
      li.appendChild(deleteButton);
      userList.appendChild(li);
   });
}

async function editUser(user) {
   const form = document.createElement('form');

   const firstNameInput = document.createElement('input');
   firstNameInput.type = 'text';
   firstNameInput.value = user.first_name;

   const lastNameInput = document.createElement('input');
   lastNameInput.type = 'text';
   lastNameInput.value = user.last_name;

   const emailInput = document.createElement('input');
   emailInput.type = 'email';
   emailInput.value = user.email;

   const saveButton = document.createElement('button');
   saveButton.textContent = 'Save';

   saveButton.addEventListener('click', async (e) => {
      e.preventDefault();

      const updatedUser = {
         first_name: firstNameInput.value,
         last_name: lastNameInput.value,
         email: emailInput.value,
      };

      try {
         const response = await fetch(
            `https://reqres.in/api/users/${user.id}`,
            {
               method: 'PUT',
               headers: {
                  'Content-Type': 'application/json',
               },
               body: JSON.stringify(updatedUser),
            }
         );

         if (response.ok) {
            console.log('User updated successfully');
            const userItem = document.querySelector(
               `.user-${user.id} .user-details`
            );

            if (userItem) {
               userItem.innerHTML = `
                                        <span class="user-name">${updatedUser.first_name} ${updatedUser.last_name}</span>
                                        <span class="user-email">${updatedUser.email}</span>
                                    `;
            }
         } else {
            console.error('Error:', response.status);
         }
      } catch (error) {
         console.error('Error:', error);
      }

      form.remove();
   });

   const cancelButton = document.createElement('button');
   cancelButton.textContent = 'Cancel';
   cancelButton.addEventListener('click', (e) => {
      e.preventDefault();
      form.remove();
   });

   form.appendChild(firstNameInput);
   form.appendChild(lastNameInput);
   form.appendChild(emailInput);
   form.appendChild(saveButton);
   form.appendChild(cancelButton);

   userList.querySelector(`.user-${user.id} .user-details`).appendChild(form);
}

async function deleteUser(userId) {
   try {
      const response = await fetch(`https://reqres.in/api/users/${userId}`, {
         method: 'DELETE',
      });

      if (response.ok) {
         const userItem = document.querySelector(`.user-${userId}`);
         if (userItem) {
            userItem.remove();
            console.log('User deleted successfully');
         }
      } else {
         console.error('Error:', response.status);
      }
   } catch (error) {
      console.error('Error:', error);
   }
}

function addNewUser(user) {
   const li = document.createElement('li');
   li.classList.add(`user-${userNum}`);

   const div = document.createElement('div');
   div.classList.add('user-details');
   div.innerHTML = `
            <span class="user-name">${user.first_name} ${user.last_name}</span>
            <span class="user-email">${user.email}</span>
            <span class="user-job">${user.job}</span>
        `;
   li.appendChild(div);

   const deleteButton = document.createElement('button');
   deleteButton.textContent = 'Delete';
   deleteButton.addEventListener('click', () => {
      li.remove();
   });

   li.appendChild(deleteButton);

   newUserList.appendChild(li);

   userNum++;
}

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
