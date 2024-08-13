import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './SideMenu.css';
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoIosSettings } from "react-icons/io";
import { HiOutlineDocumentReport } from "react-icons/hi";

const SideMenu = () => {
    const [isActive, setIsActive] = useState(true); // Initially activate first item
    const location = useLocation(); // Access current location

    useEffect(() => {
        // Check if the current path is one of the dashboard routes
        setIsActive(location.pathname.startsWith("/dashboard"));
    }, [location]);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <div>
            {/* Overlay for better focus */}
            <div className={`overlay ${isActive ? 'active' : ''}`} onClick={handleToggle}></div>

            {/* Side Menu */}
            <nav className={`side-menu ${isActive ? 'active' : ''}`}>
                <ul>
                    <li>
                        <NavLink
                            to="/dashboard/home"
                            className={({ isActive }) => isActive ? 'active' : ''}
                        >
                            <RiDashboardHorizontalFill className="icon"/>Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/profile"
                            className={({ isActive }) => isActive ? 'active' : ''}
                        >
                            <CgProfile className="icon"/>Perfil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/settings"
                            className={({ isActive }) => isActive ? 'active' : ''}
                        >
                            <IoIosSettings className="icon"/>Configurações
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/reports"
                            className={({ isActive }) => isActive ? 'active' : ''}
                        >
                            <HiOutlineDocumentReport className="icon"/>Relatórios
                        </NavLink>
                    </li>
                </ul>
            </nav>

            {/* Toggle Button (Hamburger Menu) */}
            {/* <div className="menu-toggle" onClick={handleToggle}>
                <FaBars />
            </div> */}
        </div>
    );
}

export default SideMenu;
