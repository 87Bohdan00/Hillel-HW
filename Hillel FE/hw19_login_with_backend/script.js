const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const userList = document.getElementById('user-list');
const xhr = new XMLHttpRequest();

loginForm.addEventListener('submit', (e) => {
   e.preventDefault();

   const email = emailInput.value;
   const password = passwordInput.value;

   xhr.open('POST', 'https://reqres.in/api/login');
   xhr.setRequestHeader('Content-Type', 'application/json');
   xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
         if (xhr.status === 200) {
            const parse = JSON.parse(xhr.responseText);
            if (parse.token) {
               fetchUsers();
            } else {
               console.warn('Login failed');
            }
         } else {
            console.error('Error:', xhr.status);
         }
      }
   };

   const requestBody = JSON.stringify({ email, password });
   xhr.send(requestBody);

   emailInput.value = '';
   passwordInput.value = '';
});

function fetchUsers() {
   xhr.open('GET', 'https://reqres.in/api/users?page=1');
   xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
         if (xhr.status === 200) {
            const parse = JSON.parse(xhr.responseText);
            displayUsers(parse.data);
         } else {
            console.error('Error:', xhr.status);
         }
      }
   };
   xhr.send();
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

function editUser(userId) {
   const newName = prompt('Enter new name:');
   if (newName) {
      xhr.open('PUT', `https://reqres.in/api/users/${userId}`);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onreadystatechange = function () {
         if (xhr.readyState === 4) {
            if (xhr.status === 200) {
               console.log('User updated successfully');
               const userItem = document.querySelector(`.user-${userId}`);
               if (userItem) {
                  const nameElement = userItem.querySelector('.user-name');
                  if (nameElement) {
                     nameElement.textContent = newName;
                  }
               }
            } else {
               console.error('Error:', xhr.status);
            }
         }
      };
      xhr.send(JSON.stringify({ name: newName }));
   }
}

function deleteUser(userId) {
   xhr.open('DELETE', `https://reqres.in/api/users/${userId}`);
   xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
         if (xhr.status === 204) {
            const userItem = document.querySelector(`.user-${userId}`);
            console.log(userItem);
            if (userItem) {
               userItem.remove();
               console.log('User deleted successfully');
            }
         } else {
            console.error('Error:', xhr.status);
         }
      }
   };
   xhr.send();
}
