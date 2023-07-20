import React from 'react';

import { Sidebar } from './Sidebar.jsx';
import { MainContent } from './MainContent.jsx';

export class Content extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="content">
                <Sidebar />
                <MainContent />
            </div>
          );
    }
}