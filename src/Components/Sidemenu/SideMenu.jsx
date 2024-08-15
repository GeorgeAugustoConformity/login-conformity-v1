import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './SideMenu.css';
import {RiArrowDownSLine, RiArrowUpSLine} from "react-icons/ri";
// import {RiDashboardHorizontalFill, RiSurveyLine, RiArrowDownSLine, RiArrowUpSLine} from "react-icons/ri";
import {BiShowAlt} from "react-icons/bi";
import {IoMdAddCircleOutline} from "react-icons/io";
// import {HiOutlineDocumentReport} from "react-icons/hi";
import {RiCalendarScheduleLine} from "react-icons/ri";
import {GiSpy} from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";
import { IoDocumentSharp } from "react-icons/io5";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";

const SideMenu = () => {
    const [expandedMenus, setExpandedMenus] = useState({});

    const toggleMenu = (menuName) => {
        setExpandedMenus((prev) => ({
            ...prev, [menuName]: !prev[menuName]
        }));
    };

    return (<nav className="side-menu">
        <ul>
            <li>
                <div className="expandable-menu">
                    <div onClick={() => toggleMenu('program')} className="expandable-menu-header">
                        <RiCalendarScheduleLine className="icon-expandable"/><span className="span-title">Programação</span>
                        {expandedMenus.program ? <RiArrowUpSLine className="arrow-icon"/> :
                            <RiArrowDownSLine className="arrow-icon"/>}
                    </div>
                    {expandedMenus.program && (<ul className="expanded-menu">
                        <li>
                            <NavLink
                                to="/dashboard/see-program"
                                className={({isActive}) => (isActive ? 'active' : '')}
                            >
                                <BiShowAlt className="icon"/><span>Ver Programações</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/create-program"
                                className={({isActive}) => (isActive ? 'active' : '')}
                            >
                                <IoMdAddCircleOutline className="icon"/><span>Criar Programação</span>
                            </NavLink>
                        </li>
                    </ul>)}
                </div>
                <div className="expandable-menu">
                    <div onClick={() => toggleMenu('inspection')} className="expandable-menu-header">
                        <GiSpy className="icon-expandable"/><span className="span-title">Inspeção</span>
                        {expandedMenus.inspection ? <RiArrowUpSLine className="arrow-icon"/> :
                            <RiArrowDownSLine className="arrow-icon"/>}
                    </div>
                    {expandedMenus.inspection && (<ul className="expanded-menu">
                        <li>
                            <NavLink
                                to="/dashboard/see-inspection-data"
                                className={({isActive}) => (isActive ? 'active' : '')}
                            >
                                <BiShowAlt className="icon"/><span>Ver Inspeções</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/see-inspection-process"
                                className={({isActive}) => (isActive ? 'active' : '')}
                            >
                                <IoMdAddCircleOutline className="icon"/><span>Enviar Fotos</span>
                            </NavLink>
                        </li>
                    </ul>)}
                </div>
                <div className="expandable-menu">
                    <div onClick={() => toggleMenu('certification')} className="expandable-menu-header">
                        <GrCertificate className="icon-expandable"/><span className="span-title">Certificação</span>
                        {expandedMenus.certification ? <RiArrowUpSLine className="arrow-icon"/> :
                            <RiArrowDownSLine className="arrow-icon"/>}
                    </div>
                    {expandedMenus.certification && (<ul className="expanded-menu">
                        <li>
                            <NavLink
                                to="/dashboard/see-certification-data"
                                className={({isActive}) => (isActive ? 'active' : '')}
                            >
                                <BiShowAlt className="icon"/><span>Ver Certificados</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/see-certification-process"
                                className={({isActive}) => (isActive ? 'active' : '')}
                            >
                                <IoMdAddCircleOutline className="icon"/><span>Gerar Certificado</span>
                            </NavLink>
                        </li>
                    </ul>)}
                </div>
                <div className="expandable-menu">
                    <div onClick={() => toggleMenu('documentation')} className="expandable-menu-header">
                        <IoDocumentSharp className="icon-expandable"/><span className="span-title">Documentação</span>
                        {expandedMenus.documentation ? <RiArrowUpSLine className="arrow-icon"/> :
                            <RiArrowDownSLine className="arrow-icon"/>}
                    </div>
                    {expandedMenus.documentation && (<ul className="expanded-menu">
                        <li>
                            <NavLink
                                to="/dashboard/see-documentation-data"
                                className={({isActive}) => (isActive ? 'active' : '')}
                            >
                                <BiShowAlt className="icon"/><span>Ver Certificados</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/see-documentation-process"
                                className={({isActive}) => (isActive ? 'active' : '')}
                            >
                                <IoMdAddCircleOutline className="icon"/><span>Gerar Certificado</span>
                            </NavLink>
                        </li>
                    </ul>)}
                </div>
                <div className="expandable-menu">
                    <div onClick={() => toggleMenu('finance')} className="expandable-menu-header">
                        <FaMoneyCheckDollar className="icon-expandable"/><span className="span-title">Financeiro</span>
                        {expandedMenus.finance ? <RiArrowUpSLine className="arrow-icon"/> :
                            <RiArrowDownSLine className="arrow-icon"/>}
                    </div>
                    {expandedMenus.finance && (<ul className="expanded-menu">
                        <li>
                            <NavLink
                                to="/dashboard/see-finance-data"
                                className={({isActive}) => (isActive ? 'active' : '')}
                            >
                                <BiShowAlt className="icon"/><span>Ver Certificados</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/see-finance-process"
                                className={({isActive}) => (isActive ? 'active' : '')}
                            >
                                <IoMdAddCircleOutline className="icon"/><span>Gerar Certificado</span>
                            </NavLink>
                        </li>
                    </ul>)}
                </div>
                <div className="expandable-menu">
                    <div onClick={() => toggleMenu('support')} className="expandable-menu-header">
                        <MdOutlineSupportAgent className="icon-expandable"/><span className="span-title">Suporte</span>
                        {expandedMenus.support ? <RiArrowUpSLine className="arrow-icon"/> :
                            <RiArrowDownSLine className="arrow-icon"/>}
                    </div>
                    {expandedMenus.support && (<ul className="expanded-menu">
                        <li>
                            <NavLink
                                to="/dashboard/see-support-data"
                                className={({isActive}) => (isActive ? 'active' : '')}
                            >
                                <BiShowAlt className="icon"/><span>Ver Certificados</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/see-support-process"
                                className={({isActive}) => (isActive ? 'active' : '')}
                            >
                                <IoMdAddCircleOutline className="icon"/><span>Gerar </span>
                            </NavLink>
                        </li>
                    </ul>)}
                </div>
            </li>
        </ul>
    </nav>);
};

export default SideMenu;
