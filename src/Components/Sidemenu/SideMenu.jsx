import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SideMenu.css';
import { RiDashboardHorizontalFill, RiSurveyLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { BiShowAlt } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { GiSpy } from "react-icons/gi";

const SideMenu = () => {
    const [expandedMenus, setExpandedMenus] = useState({});

    const toggleMenu = (menuName) => {
        setExpandedMenus((prev) => ({
            ...prev,
            [menuName]: !prev[menuName]
        }));
    };

    return (
        <nav className="side-menu">
            <ul>
                <li>
                    <div className="expandable-menu">
                        <div onClick={() => toggleMenu('program')} className="expandable-menu-header">
                            <RiCalendarScheduleLine/>Programação
                            {expandedMenus.program ? <RiArrowUpSLine className="arrow-icon"/> :
                                <RiArrowDownSLine className="arrow-icon"/>}
                        </div>
                        {expandedMenus.program && (
                            <ul className="expanded-menu">
                                <li>
                                    <NavLink
                                        to="/dashboard/see-program"
                                        className={({ isActive }) => (isActive ? 'active' : '')}
                                    >
                                        <BiShowAlt className="icon"/>Ver Programações
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/create-program"
                                        className={({ isActive }) => (isActive ? 'active' : '')}
                                    >
                                        <IoMdAddCircleOutline className="icon"/>Criar Programação
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </div>
                    <div className="expandable-menu">
                        <div onClick={() => toggleMenu('inspection')} className="expandable-menu-header">
                            <GiSpy/>Inspeção
                            {expandedMenus.inspection ? <RiArrowUpSLine className="arrow-icon"/> :
                                <RiArrowDownSLine className="arrow-icon"/>}
                        </div>
                        {expandedMenus.inspection && (
                            <ul className="expanded-menu">
                                <li>
                                    <NavLink
                                        to="/dashboard/see-inspection-data"
                                        className={({ isActive }) => (isActive ? 'active' : '')}
                                    >
                                        <BiShowAlt className="icon"/>Ver Inspeções
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/see-inspection-process"
                                        className={({ isActive }) => (isActive ? 'active' : '')}
                                    >
                                        <IoMdAddCircleOutline className="icon"/>Enviar Fotos
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default SideMenu;
