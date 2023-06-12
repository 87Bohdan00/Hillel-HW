document.addEventListener('DOMContentLoaded', () => {
   const xhr = new XMLHttpRequest();
   const userList = document.getElementById('user-list');
   const prevButton = document.getElementById('prev-button');
   const nextButton = document.getElementById('next-button');
   const userForm = document.getElementById('user-form');
   const newUserList = document.getElementById('new-user-list');
   let currentPage = 1;

   function sendRequest(url) {
      xhr.open('GET', url, false);
      xhr.send();
      return xhr.responseText;
   }

   function getUsers(page) {
      const url = `https://reqres.in/api/users?page=${page}`;
      const response = JSON.parse(sendRequest(url));

      userList.innerHTML = '';

      response.data.forEach((user) => {
         const li = document.createElement('li');
         li.textContent = `${user.first_name} ${user.last_name}`;
         userList.appendChild(li);
      });
   }

   function addNewUser(user) {
      const li = document.createElement('li');
      li.textContent = `${user.first_name} ${user.last_name} (${user.email}) - ${user.job}`;
      newUserList.appendChild(li);
   }

   prevButton.addEventListener('click', () => {
      if (currentPage > 1) {
         currentPage--;
         getUsers(currentPage);
      }
   });

   nextButton.addEventListener('click', () => {
      if (currentPage >= 2) {
         nextButton.classList.toggle('disabled');
      } else {
         currentPage++;
         getUsers(currentPage);
      }
   });

   userForm.addEventListener('submit', (e) => {
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

      xhr.open('POST', 'https://reqres.in/api/users', false);

      xhr.send(JSON.stringify(newUser));

      if (xhr.status === 201) {
         console.log(xhr.responseText);
      } else {
         console.log('Error: ' + xhr.status);
      }

      firstNameInput.value = '';
      lastNameInput.value = '';
      emailInput.value = '';
      jobInput.value = '';
   });

   getUsers(currentPage);
});
