import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from '../../Components/Assets/header-logo.png';
import logoBlue from '../../Components/Assets/logo-blue-new.png';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useTheme } from '../../context/ThemeContext';
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import FullscreenButton from "../../Components/FullscreenButton/FullscreenButton";
import DateTimeDisplay from "../DateTimeDisplay/DateTimeDisplay";

const Header = () => {
    const { theme } = useTheme(); // Access the current theme

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
                <DateTimeDisplay />
                <FullscreenButton/>
                <ProfileDropdown/> {/* Render the dropdown menu */}
            </div>
        </header>
    );
}

export default Header;
