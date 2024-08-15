import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from '../Header/Header';
import SideMenu from '../Sidemenu/SideMenu';
import Home from '../Pages/Home/Home';
import Profile from '../Pages/Profile/Profile';
import Settings from '../Pages/Settings/Settings';
import Reports from '../Pages/Reports/Reports';
import './Dashboard.css'
import Inspections from "../Pages/Inspections/Inspections";
import Footer from "../Footer/Footer";
import ProtectedRoute from "./ProtectedRoute";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Header/>
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
                    </Routes>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}


export default Dashboard;
