const url = 'https://jsonplaceholder.typicode.com/users';

export const ApiService = {
   getContacts: async () => {
      try {
         const response = await fetch(url);

         if (!response.ok) {
            throw new Error('Failed to fetch contacts');
         }

         const data = await response.json();

         return data;
      } catch (error) {
         throw error;
      }
   },
   addContact: async (newContact) => {
      try {
         const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newContact),
         });

         if (!response.ok) {
            throw new Error('Failed to fetch contacts');
         }

         const data = await response.json();

         return data;
      } catch (error) {
         throw error;
      }
   },
   deleteContact: async (id) => {
      try {
         const response = await fetch(url, {
            method: 'DELETE',
         });

         if (!response.ok) {
            throw new Error('Failed to fetch contacts');
         }
      } catch (error) {
         throw error;
      }
   },
};
