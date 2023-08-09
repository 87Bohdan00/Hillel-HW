import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersList from './UsersList';
import AlbumsList from './AlbumsList';
import PhotosList from './PhotosList';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UsersList />} />
                <Route path="/albums/:userId" element={<AlbumsList />} />
                <Route path="/albums/:userId/photos" element={<PhotosList />} />
            </Routes>
        </Router>
    );
};

export default App;
