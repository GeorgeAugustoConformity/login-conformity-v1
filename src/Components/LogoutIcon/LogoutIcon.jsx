// src/Components/LogoutIcon/LogoutIcon.js
import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa'; // Import the logout icon

const LogoutIcon = ({ onClick }) => {
    return (
        <button onClick={onClick} className="logout-icon">
            <FaSignOutAlt />
        </button>
    );
};

export default LogoutIcon;
