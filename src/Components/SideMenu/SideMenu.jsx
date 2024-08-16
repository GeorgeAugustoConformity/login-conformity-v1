import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './SideMenu.css';
import {RiArrowDownSLine, RiArrowUpSLine, RiCalendarScheduleLine} from "react-icons/ri";
import {BiShowAlt} from "react-icons/bi";
import {IoMdAddCircleOutline} from "react-icons/io";
import {GiSpy} from "react-icons/gi";
import {GrCertificate} from "react-icons/gr";
import {IoDocumentSharp} from "react-icons/io5";
import {FaMoneyCheckDollar} from "react-icons/fa6";
import {MdManageAccounts, MdOutlineSupportAgent} from "react-icons/md";
import {FaUserCircle} from "react-icons/fa";

const SideMenu = () => {
    const [expandedMenus, setExpandedMenus] = useState({userProfile: false,});
    const toggleMenu = (menuName) => {
        setExpandedMenus((prev) => ({
            ...prev, [menuName]: !prev[menuName]
        }));
    };

    return (<nav className="side-menu">

        <ul>
            <li>
                {/*Programação*/}
                <div className="expandable-menu">
                    <div onClick={() => toggleMenu('program')} className="expandable-menu-header">
                        <RiCalendarScheduleLine
                            className={`icon-expandable ${expandedMenus.program ? 'active' : ''}`}
                        />
                        <span className="span-title">Programação</span>
                        {expandedMenus.program ? (<RiArrowUpSLine className="arrow-icon"/>) : (
                            <RiArrowDownSLine className="arrow-icon"/>)}
                    </div>
                    {expandedMenus.program && (<ul className="expanded-menu">
                        <li>
                            <NavLink
                                to="/dashboard/home"
                                className={({isActive}) => (isActive ? 'active' : '')}
                            >
                                <BiShowAlt className="icon"/>
                                <span>Ver Programações</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/create-program"
                                className={({isActive}) => (isActive ? 'active' : '')}
                            >
                                <IoMdAddCircleOutline className="icon"/>
                                <span>Criar Programação</span>
                            </NavLink>
                        </li>
                    </ul>)}
                </div>

                {/*Inspeção*/}
                <div className="expandable-menu">
                    <div onClick={() => toggleMenu('inspection')} className="expandable-menu-header">
                        <GiSpy
                            className={`icon-expandable ${expandedMenus.inspection ? 'active' : ''}`}
                        />
                        <span className="span-title">Inspeção</span>
                        {expandedMenus.inspection ? (<RiArrowUpSLine className="arrow-icon"/>) : (
                            <RiArrowDownSLine className="arrow-icon"/>)}
                    </div>
                    {expandedMenus.inspection && (<ul className="expanded-menu">
                        <li>
                            <NavLink
                                to="/dashboard/see-inspection-data"
                                className={({isActive}) => (isActive ? 'active' : '')}
                            >
                                <BiShowAlt className="icon"/>
                                <span>Ver Inspeções</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/see-inspection-process"
                                className={({isActive}) => (isActive ? 'active' : '')}
                            >
                                <IoMdAddCircleOutline className="icon"/>
                                <span>Enviar Fotos</span>
                            </NavLink>
                        </li>
                    </ul>)}
                </div>

                {/*Certificação*/}
                <div className="expandable-menu">
                    <div onClick={() => toggleMenu('certification')} className="expandable-menu-header">
                        <GrCertificate
                            className={`icon-expandable ${expandedMenus.certification ? 'active' : ''}`}
                        />
                        <span className="span-title">Certificação</span>
                        {expandedMenus.certification ? (<RiArrowUpSLine className="arrow-icon"/>) : (
                            <RiArrowDownSLine className="arrow-icon"/>)}
                    </div>
                    {expandedMenus.certification && (<ul className="expanded-menu">
                        <li>
                            <NavLink
                                to="/dashboard/see-certification-data"
                                className={({isActive}) => (isActive ? 'active' : '')}
                            >
                                <BiShowAlt className="icon"/>
                                <span>Ver Certificados</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/see-certification-process"
                                className={({isActive}) => (isActive ? 'active' : '')}
                            >
                                <IoMdAddCircleOutline className="icon"/>
                                <span>Gerar Certificado</span>
                            </NavLink>
                        </li>
                    </ul>)}
                </div>

                {/*Documentação*/}
                <div className="expandable-menu">
                    <div onClick={() => toggleMenu('documentation')} className="expandable-menu-header">
                        <IoDocumentSharp
                            className={`icon-expandable ${expandedMenus.documentation ? 'active' : ''}`}
                        />
                        <span className="span-title">Documentação</span>
                        {expandedMenus.documentation ? (<RiArrowUpSLine className="arrow-icon"/>) : (
                            <RiArrowDownSLine className="arrow-icon"/>)}
                    </div>
                    {expandedMenus.documentation && (<ul className="expanded-menu">
                        <li>
                            <NavLink
                                to="/dashboard/see-documentation-data"
                                className={({isActive}) => (isActive ? 'active' : '')}
                            >
                                <BiShowAlt className="icon"/>
                                <span>Ver Documentação</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/see-documentation-process"
                                className={({isActive}) => (isActive ? 'active' : '')}
                            >
                                <IoMdAddCircleOutline className="icon"/>
                                <span>Gerar Documentação</span>
                            </NavLink>
                        </li>
                    </ul>)}
                </div>

                {/*Financeiro*/}
                <div className="expandable-menu">
                    <div onClick={() => toggleMenu('finance')} className="expandable-menu-header">
                        <FaMoneyCheckDollar
                            className={`icon-expandable ${expandedMenus.finance ? 'active' : ''}`}
                        />
                        <span className="span-title">Financeiro</span>
                        {expandedMenus.finance ? (<RiArrowUpSLine className="arrow-icon"/>) : (
                            <RiArrowDownSLine className="arrow-icon"/>)}
                    </div>
                    {expandedMenus.finance && (<ul className="expanded-menu">
                        <li>
                            <NavLink
                                to="/dashboard/see-finance-data"
                                className={({isActive}) => (isActive ? 'active' : '')}
                            >
                                <BiShowAlt className="icon"/>
                                <span>Ver Dados Financeiros</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/see-finance-process"
                                className={({isActive}) => (isActive ? 'active' : '')}
                            >
                                <IoMdAddCircleOutline className="icon"/>
                                <span>Gerar Relatório Financeiro</span>
                            </NavLink>
                        </li>
                    </ul>)}
                </div>

                {/*UserProfile*/}
                <div className="expandable-menu">
                    <div onClick={() => toggleMenu('support')} className="expandable-menu-header">
                        <MdOutlineSupportAgent
                            className={`icon-expandable ${expandedMenus.support ? 'active' : ''}`}
                        />
                        <span className="span-title">Suporte</span>
                        {expandedMenus.support ? (<RiArrowUpSLine className="arrow-icon"/>) : (
                            <RiArrowDownSLine className="arrow-icon"/>)}
                    </div>
                    {expandedMenus.support && (<ul className="expanded-menu">
                        <li>
                            <NavLink
                                to="/dashboard/see-support-data"
                                className={({isActive}) => (isActive ? 'active' : '')}
                            >
                                <BiShowAlt className="icon"/>
                                <span>Ver Dados de Suporte</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/see-support-process"
                                className={({isActive}) => (isActive ? 'active' : '')}
                            >
                                <IoMdAddCircleOutline className="icon"/>
                                <span>Gerar Relatório de Suporte</span>
                            </NavLink>
                        </li>
                    </ul>)}
                </div>
                <div className="expandable-menu">
                    <div
                        onClick={() => toggleMenu('userProfile')}
                        className="expandable-menu-header"
                    >
                        <FaUserCircle
                            className={`icon-expandable ${expandedMenus.userProfile ? 'active' : ''}`}
                        />
                        <span className="span-title">Perfil do Usuário</span>
                        {expandedMenus.userProfile ? (
                            <RiArrowUpSLine className="arrow-icon"/>
                        ) : (
                            <RiArrowDownSLine className="arrow-icon"/>
                        )}
                    </div>
                    {expandedMenus.userProfile && (
                        <ul className="expanded-menu">
                            <li>
                                <NavLink
                                    to="/dashboard/user-profile"
                                    className={({isActive}) => (isActive ? 'active' : '')}
                                >
                                    <MdManageAccounts className="icon"/>
                                    <span>Detalhes da Conta</span>
                                </NavLink>
                            </li>
                            {/* Add more user profile related links here if needed */}
                        </ul>
                    )}
                </div>
            </li>
        </ul>
    </nav>);
};

export default SideMenu;
