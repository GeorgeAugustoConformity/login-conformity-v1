import React, {useState, useEffect, useRef} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {FaUserCircle} from 'react-icons/fa';
import {IoIosSettings} from 'react-icons/io';
import {CgProfile} from 'react-icons/cg';
import {MdOutlineLogout} from 'react-icons/md';
import {useAuth} from '../../context/AuthContext';
import './DropdownIcon.css';

const DropdownIcon = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const {logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown-icon" ref={dropdownRef}>
            <FaUserCircle title="Minha Conta" onClick={toggleDropdown} className="icon"/>
            {isOpen && (
                <div className="dropdown-menu">
                    <ul>
                        <li>
                            <NavLink
                                to="/dashboard/profile"
                                className={({isActive}) => (isActive ? 'active' : '')}
                            >
                                <CgProfile title="Perfil" className="icon"/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/settings"
                                className={({isActive}) => (isActive ? 'active' : '')}
                            >
                                <IoIosSettings title="Configurações" className="icon"/>
                            </NavLink>
                        </li>
                        <li>
                            <button title="Sair" className="logout-button" onClick={handleLogout}>
                                <MdOutlineLogout/>
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownIcon;
