import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PhotosList = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const albumId = queryParams.get('albumId');
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then((response) => response.json())
            .then((data) => setPhotos(data))
            .catch((error) => console.error('Error fetching photos:', error));
    }, [albumId]);

    return (
        <div>
            <h2>Photos List for Album {albumId}</h2>
            <ul>
                {photos.map((photo) => (
                    <li key={photo.id}>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PhotosList;
