const userList = document.getElementById('user-list');
const newUserList = document.getElementById('new-user-list');

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

   const jobInput = document.createElement('input');
   jobInput.type = 'text';
   jobInput.value = user.job;

   const saveButton = document.createElement('button');
   saveButton.textContent = 'Save';

   saveButton.addEventListener('click', async (e) => {
      e.preventDefault();

      const updatedUser = {
         first_name: firstNameInput.value,
         last_name: lastNameInput.value,
         email: emailInput.value,
         job: jobInput.value,
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
                                        <span class="user-email">${updatedUser.job}</span>
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
   form.appendChild(jobInput);
   form.appendChild(saveButton);
   form.appendChild(cancelButton);

   if (user.id >= 7) {
      newUserList.querySelector(`.user-${user.id} .user-details`).appendChild(form);
   } else {
      userList.querySelector(`.user-${user.id} .user-details`).appendChild(form);
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

export { displayUsers, deleteUser, editUser };
