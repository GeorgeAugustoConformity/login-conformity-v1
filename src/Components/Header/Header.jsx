import React from 'react';
import './Header.css';
import { useAuth } from '../../context/AuthContext';
import logo from '../../Components/Assets/header-logo.png';
import { MdOutlineLogout } from "react-icons/md";

const Header = () => {
    const { logout } = useAuth();

    return (
        <header className="header">
            <img src={logo} alt="Logo" className="logo"/>
            {/*<h1>Header</h1>*/}
            <button className="logout-button" onClick={logout}><MdOutlineLogout /></button>
        </header>
    );
}

export default Header;
