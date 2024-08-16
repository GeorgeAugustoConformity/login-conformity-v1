import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { ContextMenuProvider } from './Components/ContextMenu/ContextMenuProvider';
import { UserProvider } from './context/UserContextProfile'; // Import the UserProvider
import AppContent from './Components/Dashboard/AppContent'; // Ensure correct import path

const App = () => {
    return (
        <AuthProvider>
            <ThemeProvider>
                <ContextMenuProvider>
                    <UserProvider> {/* Wrap with UserProvider */}
                        <Router>
                            <AppContent />
                        </Router>
                    </UserProvider>
                </ContextMenuProvider>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;
