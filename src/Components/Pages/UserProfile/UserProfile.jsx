// src/Pages/Profile/Profile.js
import React from 'react';
import { useUser } from '../../../context/UserContextProfile';
import './UserProfile.css'; // Certifique-se de que este caminho está correto

const Profile = () => {
    const { user } = useUser();

    if (!user) return <p>Carregando...</p>;

    return (
        <>
            <div className="profile">
                <h2>Perfil</h2>
                <div className="profile-header">
                    {user.profileImage && (
                        <img src={user.profileImage} alt="Imagem de perfil do usuário" className="profile-image"/>
                    )}
                    <div className="profile-info">
                        <p><strong>Nome:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Funções:</strong> {user.roles.join(', ')}</p>
                        <p><strong>Pessoa Associada:</strong> {user.person.name}</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Profile;
