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
                        <Route path="home" element={<Home/>}/>
                        <Route path="profile" element={<Profile/>}/>
                        <Route path="settings" element={<Settings/>}/>
                        <Route path="reports" element={<Reports/>}/>
                        <Route path="inspections" element={<Inspections/>}/>
                        <Route path="/" element={<Home/>}/> {/* Default route */}
                    </Routes>
                </div>
            </div>
        </div>
    );
}


export default Dashboard;
