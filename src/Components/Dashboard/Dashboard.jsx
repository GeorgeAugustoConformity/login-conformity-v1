// src/Components/Dashboard/Dashboard.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import SideMenu from '../SideMenu/SideMenu';
import Home from '../Pages/Home/Home';
import Profile from '../Pages/Profile/Profile';
import Settings from '../Pages/Settings/Settings';
import Reports from '../Pages/Reports/Reports';
import Inspections from '../Pages/Inspections/Inspections';
import Footer from '../Footer/Footer';
import ProtectedRoute from './ProtectedRoute';
import { useUser } from '../../context/UserContextProfile';
import { useContextMenu } from '../ContextMenu/ContextMenuProvider';
import './Dashboard.css';
import UserProfile from "../Pages/UserProfile/UserProfile";

const Dashboard = () => {
    const { user } = useUser(); // Get the user data from context
    const { showMenu } = useContextMenu();

    const handleRightClick = (e) => {
        e.preventDefault();
        showMenu(
            [
                { label: 'Atualizar', onClick: () => alert('Atualizar clicked') },
                { label: 'Opções', onClick: () => alert('Opções clicked') },
            ],
            e.clientX,
            e.clientY
        );
    };

    return (
        <div className="dashboard" onContextMenu={handleRightClick}>
            <Header user={user}/> {/* Pass user data to Header */}
            <div className="main-content">
                <nav className="side-menu">
                    <SideMenu/>
                </nav>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
                        <Route path="home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
                        <Route path="profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
                        <Route path="settings" element={<ProtectedRoute><Settings/></ProtectedRoute>}/>
                        <Route path="reports" element={<ProtectedRoute><Reports/></ProtectedRoute>}/>
                        <Route path="inspections" element={<ProtectedRoute><Inspections/></ProtectedRoute>}/>
                        <Route path="user-profile" element={<ProtectedRoute><UserProfile/></ProtectedRoute>}/>
                    </Routes>
                    {/*<Footer/>*/}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
