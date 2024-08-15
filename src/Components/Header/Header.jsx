import React, {useEffect, useState} from 'react';
import './Header.css';
import {useAuth} from '../../context/AuthContext';
import logo from '../../Components/Assets/header-logo.png';
import logoBlue from '../../Components/Assets/logo-blue-new.png';
import {MdOutlineLogout} from "react-icons/md";
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import {useTheme} from '../../context/ThemeContext';
import {useNavigate} from 'react-router-dom';
import DropdownIcon from "../DropdownIcon/DropdownIcon"; // Import useNavigate

const Header = () => {
    const {theme} = useTheme(); // Access the current theme
    const {logout} = useAuth();
    const navigate = useNavigate(); // Initialize useNavigate

    const [dateTime, setDateTime] = useState({
        date: new Date().toLocaleDateString('en-GB'), // Date format DD-MM-YYYY
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) // Time without seconds
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setDateTime({
                date: now.toLocaleDateString('en-GB'),
                time: now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) // Time without seconds
            });
        }, 1000);

        // Clear the interval on component unmount
        return () => clearInterval(timer);
    }, []);

    const handleLogout = () => {
        logout(); // Perform logout
        navigate('/'); // Redirect to root path
    };

    return (
        <header className="header">
            <div className="logo-wrapper">
                {theme === "dark" ?
                    <img src={logo} alt="Logo" className="logo"/> :
                    <img src={logoBlue} alt="Logo" className="logo"/>
                }
            </div>
            <div className="right-icons">
                <ThemeToggle className="icon"/>
                <div className="date-time">
                    <span className="date">{dateTime.date}</span>
                    <span className="time">{dateTime.time}</span>
                </div>
                {/*<button title="Sair" className="logout-button" onClick={handleLogout}>*/}
                {/*    <MdOutlineLogout/>*/}
                {/*</button>*/}
                <DropdownIcon/>
            </div>
        </header>
    );
}

export default Header;
