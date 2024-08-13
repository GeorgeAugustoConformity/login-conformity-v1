import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SideMenu.css';
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { IoIosSettings } from "react-icons/io";
import { HiOutlineDocumentReport } from "react-icons/hi";

const SideMenu = () => {
    const [isActive, setIsActive] = useState(false);

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
                        <NavLink to="/dashboard/home" activeClassName="active"><RiDashboardHorizontalFill className="icon"/>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/profile" activeClassName="active"><CgProfile className="icon"/>Perfil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/settings" activeClassName="active"><IoIosSettings className="icon"/>Configurações</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reports" activeClassName="active"><HiOutlineDocumentReport className="icon"/>Relatórios</NavLink>
                    </li>
                </ul>
            </nav>

            {/*/!* Toggle Button (Hamburger Menu) *!/*/}
            {/*<div className="menu-toggle" onClick={handleToggle}>*/}
            {/*    <FaBars />*/}
            {/*</div>*/}
        </div>
    );
}

export default SideMenu;
