import { displayUsers } from './users.js';

async function getUsers(currentPage = 1) {
   try {
      const response = await fetch(`https://reqres.in/api/users?page=${currentPage}`);

      if (response.ok) {
         const data = await response.json();

         displayUsers(data.data, currentPage);
      } else {
         console.error('Error:', response.status);
      }
   } catch (error) {
      console.error('Error:', error);
   }
}

export { getUsers };
