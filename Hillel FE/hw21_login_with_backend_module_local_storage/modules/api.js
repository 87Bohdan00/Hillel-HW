import { displayUsers } from './users.js';

async function getUsers() {
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

export { getUsers };
