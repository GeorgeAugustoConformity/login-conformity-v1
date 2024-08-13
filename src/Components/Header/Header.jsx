import React from 'react';
import './Header.css';
import { useAuth } from '../../context/AuthContext';
import logo from '../../Components/Assets/header-logo.png';
import logoBlue from '../../Components/Assets/logo-blue-alone.png';
import { MdOutlineLogout } from "react-icons/md";
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Header = () => {
    const { theme } = useTheme(); // Access the current theme
    const { logout } = useAuth();
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogout = () => {
        // console.log("Logout button clicked"); // Debugging
        logout(); // Perform logout
        navigate('/'); // Redirect to root path
    };

    return (
        <header className="header">
            {theme === "dark" ?
                <img src={logo} alt="Logo" className="logo" /> :
                <img src={logoBlue} alt="Logo" className="logo" />
            }
            <ThemeToggle className="icon"/>
            <button className="logout-button" onClick={handleLogout}>
                <MdOutlineLogout />
            </button>
        </header>
    );
}

export default Header;
