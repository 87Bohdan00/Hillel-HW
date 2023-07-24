import React from 'react';
import { createRoot } from 'react-dom/client';

import { Voiting } from './components/Voiting.jsx';

import './styles/style.scss';

class App extends React.Component {
   constructor() {
      super();
   }

   render() {
      return (
         <main>
            <Voiting />
         </main>
      );
   }
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);
