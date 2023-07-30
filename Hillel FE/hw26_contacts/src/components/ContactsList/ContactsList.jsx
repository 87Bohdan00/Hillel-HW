import React, { useState, useEffect } from 'react';
import { ApiService } from '../../services/ApiService';
import ContactForm from '../ContactForm/ContactForm';
import { v4 as uuidv4 } from 'uuid';

const ContactsList = () => {
   const [contacts, setContacts] = useState([]);
   const [showAddForm, setShowAddForm] = useState(false);

   useEffect(() => {
      fetchContacts();
   }, []);

   const fetchContacts = async () => {
      try {
         const data = await ApiService.getContacts();
         setContacts(data);
      } catch (error) {
         console.error('Error fetching contacts:', error.message);
      }
   };

   const handleDelete = async (id) => {
      try {
         setContacts((prevContacts) =>
            prevContacts.filter((contact) => contact.id !== id)
         );
      } catch (error) {
         console.error('Error deleting contact:', error.message);
      }
   };

   const handleAddContact = (newContact) => {
      let newId = uuidv4();
      while (contacts.some((contact) => contact.id === newId)) {
         newId = uuidv4();
      }

      const contactWithId = { ...newContact, id: newId };
      setContacts((prevContacts) => [...prevContacts, contactWithId]);
      setShowAddForm(false);
   };

   const handleCancel = () => {
      setShowAddForm(false);
   };

   return (
      <div>
         <h2>Contacts</h2>
         <table>
            <thead>
               <tr>
                  <th>Full Name</th>
                  <th>Username</th>
                  <th>Phone Number</th>
                  <th></th>
               </tr>
            </thead>
            <tbody>
               {contacts.map((contact) => (
                  <tr key={contact.id}>
                     <td>{contact.name}</td>
                     <td>{contact.username}</td>
                     <td>{contact.phone}</td>
                     <td>
                        <button onClick={() => handleDelete(contact.id)}>
                           Delete
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
         <button onClick={() => setShowAddForm(!showAddForm)}>
            {showAddForm ? 'Hide Form' : 'Add New Contact'}
         </button>
         {showAddForm && (
            <ContactForm
               onAddContact={handleAddContact}
               onCancel={handleCancel}
            />
         )}
      </div>
   );
};

export default ContactsList;
