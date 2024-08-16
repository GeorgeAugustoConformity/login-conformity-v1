// src/Components/ProfileDropdown/ProfileDropdown.js
import React, { useState, useEffect, useRef } from 'react';
import { FaUser } from 'react-icons/fa'; // Profile icon from react-icons
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate and Link
import './ProfileDropdown.css'; // Import the CSS file
import Modal from '../Modals/Modal'; // Import the Modal component
import LogoutIcon from '../LogoutIcon/LogoutIcon'; // Import the LogoutIcon component

const ProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dropdownRef = useRef(null); // Ref for dropdown container
    const dropdownMenuRef = useRef(null); // Ref for dropdown menu
    const navigate = useNavigate(); // Initialize useNavigate

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLogout = () => {
        setIsModalOpen(true); // Open the modal
        setIsOpen(false); // Close the dropdown menu
    };

    const handleConfirmLogout = () => {
        setIsModalOpen(false); // Close the modal
        // Handle logout logic here, e.g., clearing tokens and redirecting
        console.log('Logging out...');
        // Redirect to the home page
        navigate('/');
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    // Close the menu if the mouse leaves the dropdown menu
    useEffect(() => {
        const handleMouseLeave = (event) => {
            if (
                dropdownMenuRef.current &&
                !dropdownMenuRef.current.contains(event.target) &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleMouseLeave);
        return () => document.removeEventListener('mousedown', handleMouseLeave);
    }, []);

    // Close the dropdown when the modal is opened
    useEffect(() => {
        if (isModalOpen) {
            setIsOpen(false);
        }
    }, [isModalOpen]);

    return (
        <div className="dropdown" ref={dropdownRef}>
            <button onClick={toggleMenu} className="dropdown-btn">
                <FaUser />
            </button>
            {isOpen && (
                <div className="dropdown-menu" ref={dropdownMenuRef}>
                    <Link to="/dashboard/user-profile" className="dropdown-item">Perfil</Link>
                    <Link to="/dashboard/settings" className="dropdown-item">Configurações</Link>
                    <LogoutIcon onClick={handleLogout} /> {/* Use the LogoutIcon component */}
                </div>
            )}
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onConfirm={handleConfirmLogout}
            />
        </div>
    );
};

export default ProfileDropdown;
