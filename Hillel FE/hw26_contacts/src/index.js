import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css'
import ContactsList from './components/ContactsList/ContactsList';
import ContactForm from './components/ContactForm/ContactForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <ContactsList />
   </React.StrictMode>
);
