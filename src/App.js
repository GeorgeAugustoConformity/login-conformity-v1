// src/App.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { ContextMenuProvider } from './Components/ContextMenu/ContextMenuProvider';
import AppContent from './Components/Dashboard/AppContent'; // Ensure correct import path

const App = () => {
    return (
        <AuthProvider>
            <ThemeProvider>
                <ContextMenuProvider>
                    <Router>
                        <AppContent />
                    </Router>
                </ContextMenuProvider>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;
