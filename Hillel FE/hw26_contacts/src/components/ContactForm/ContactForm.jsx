import React, { useState } from 'react';
import { ApiService } from '../../services/ApiService';
import { v4 as uuidv4 } from 'uuid';
import './ContactForm.module.css';

const ContactForm = ({ onAddContact, onCancel }) => {
   const [formData, setFormData] = useState({
      name: '',
      username: '',
      phone: '',
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const newContact = {
            id: uuidv4(),
            ...formData,
         };
         const addedContact = await ApiService.addContact(newContact);
         onAddContact(addedContact);
         setFormData({ name: '', username: '', phone: '' });
      } catch (error) {
         console.log('Error adding contact:', error.message);
      }
   };

   const handleCancel = () => {
      setFormData({ name: '', username: '', phone: '' });
      onCancel();
   };

   return (
      <div className='container'>
         <div className="contact-form-container">
            <h2>Add Contact</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
               <label>
                  Full Name:
                  <input
                     type="text"
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                  />
               </label>
               <label>
                  Username:
                  <input
                     type="text"
                     name="username"
                     value={formData.username}
                     onChange={handleChange}
                  />
               </label>
               <label>
                  Phone Number:
                  <input
                     type="text"
                     name="phone"
                     value={formData.phone}
                     onChange={handleChange}
                  />
               </label>
               <div className="buttons">
                  <button type="submit">Add</button>
                  <button type="button" onClick={handleCancel}>
                     Cancel
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default ContactForm;
