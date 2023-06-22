const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const userList = document.getElementById('user-list');

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

      const div = document.createElement('div');
      div.classList.add(`user-name`);
      div.textContent = `${user.first_name} ${user.last_name}`;

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => {
         editUser(user.id);
      });

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
         deleteUser(user.id);
      });

      li.appendChild(div);
      li.appendChild(editButton);
      li.appendChild(deleteButton);
      userList.appendChild(li);
   });
}

async function editUser(userId) {
   const newName = prompt('Enter new name:');
   if (newName) {
      try {
         const response = await fetch(`https://reqres.in/api/users/${userId}`, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: newName }),
         });

         if (response.ok) {
            console.log('User updated successfully');

            const userItem = document.querySelector(
               `.user-${userId} .user-name`
            );

            if (userItem) {
               userItem.textContent = newName;
            }
         } else {
            console.error('Error:', response.status);
         }
      } catch (error) {
         console.error('Error:', error);
      }
   }
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
