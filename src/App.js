import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext'; // Correct import path for ThemeProvider
import LoginForm from './Components/LoginForm/LoginForm';
import Dashboard from './Components/Dashboard/Dashboard';

const AppContent = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
    );
}

const App = () => {
    return (
        <AuthProvider>
            <ThemeProvider> {/* Make sure ThemeProvider is here */}
                <Router>
                    <AppContent />
                </Router>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;
