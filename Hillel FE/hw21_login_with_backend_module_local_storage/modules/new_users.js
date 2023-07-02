import { deleteUser } from './users.js';
import { editUser } from './users.js';
import { userNum } from '../main.js';

const newUserList = document.getElementById('new-user-list');

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

   newUserList.appendChild(li);
}

export { addNewUser };
