import React from 'react';
import {NavLink} from 'react-router-dom';
import './SideMenu.css';
import {RiDashboardHorizontalFill} from "react-icons/ri";
import {CgProfile} from "react-icons/cg";
import {IoIosSettings} from "react-icons/io";
import {HiOutlineDocumentReport} from "react-icons/hi";
import {RiSurveyLine} from "react-icons/ri";

const SideMenu = () => {
     return (
        <nav className="side-menu">
            <ul>
                <li>
                    <NavLink
                        to="/dashboard/home"
                        className={({isActive}) => isActive ? 'active' : ''}
                    >
                        <RiDashboardHorizontalFill className="icon"/>Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/profile"
                        className={({isActive}) => isActive ? 'active' : ''}
                    >
                        <CgProfile className="icon"/>Perfil
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/settings"
                        className={({isActive}) => isActive ? 'active' : ''}
                    >
                        <IoIosSettings className="icon"/>Configurações
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/reports"
                        className={({isActive}) => isActive ? 'active' : ''}
                    >
                        <HiOutlineDocumentReport className="icon"/>Relatórios
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/inspections"
                        className={({isActive}) => isActive ? 'active' : ''}
                    >
                        <RiSurveyLine className="icon"/>Inspeções
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default SideMenu;
