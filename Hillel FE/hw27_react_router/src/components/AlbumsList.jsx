import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AlbumsList = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userId = location.pathname.split('/').pop();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then((response) => response.json())
            .then((data) => setAlbums(data))
            .catch((error) => console.error('Error fetching albums:', error));
    }, [userId]);

    const handleShowPhotos = (albumId) => {
        navigate(`/albums/${userId}/photos?albumId=${albumId}`);
    };

    return (
        <div className="albums-container">
            <h2>Albums List for User {userId}</h2>
            <ul className="albums-list">
                {albums.map((album) => (
                    <li key={album.id} className="album-item">
                        {album.title}
                        <button
                            className="photos-button"
                            onClick={() => handleShowPhotos(album.id)}
                        >
                            Photos
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlbumsList;
