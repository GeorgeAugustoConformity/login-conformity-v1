// src/Components/Dashboard/ProtectedRoute/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth(); // Check authentication status

    return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
