import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import Dashboard from '../Dashboard/Dashboard';
import ProtectedRoute from '../Dashboard/ProtectedRoute';

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
};

export default AppContent;
