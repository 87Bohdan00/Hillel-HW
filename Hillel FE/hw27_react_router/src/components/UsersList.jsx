import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UsersList = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error('Error fetching users:', error));
    }, []);

    const handleShowAlbums = (userId) => {
        navigate(`/albums/${userId}`);
    };

    return (
        <div>
            <h2>Users List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}
                        {/* <Link to={`/albums/${user.id}`}> Albums</Link> */}
                        <button onClick={() => handleShowAlbums(user.id)}>
                            Albums
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;
