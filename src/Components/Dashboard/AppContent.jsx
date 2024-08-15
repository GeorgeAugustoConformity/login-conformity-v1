// src/Components/AppContent/AppContent.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import Dashboard from '../Dashboard/Dashboard';
import ProtectedRoute from './ProtectedRoute'; // Adjust import path as needed

const AppContent = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/dashboard/*" element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
            } />
        </Routes>
    );
}

export default AppContent;
