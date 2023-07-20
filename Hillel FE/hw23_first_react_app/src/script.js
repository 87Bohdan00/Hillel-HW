import React from 'react';
import { createRoot } from 'react-dom/client';

import { Header } from './components/Header.jsx'
import { Content } from './components/Content.jsx';

import './styles/style.scss'

class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <main>
                <Header />
                <Content />
            </main>
        )
    }
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);
