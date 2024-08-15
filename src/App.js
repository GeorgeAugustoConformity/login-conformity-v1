import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext'; // Correct import path for ThemeProvider
import { ContextMenuProvider, useContextMenu } from './Components/ContextMenu/ContextMenuProvider'; // Correct import path for ContextMenuProvider
import LoginForm from './Components/LoginForm/LoginForm';
import Dashboard from './Components/Dashboard/Dashboard';

const AppContent = () => {
    const { showMenu } = useContextMenu();

    const handleContextMenu = (e) => {
        e.preventDefault(); // Prevent the default browser context menu

        // You can customize the menu items here
        const menuItems = [
            { label: 'Atualizar', onClick: () => alert('Option 1 clicked') },
            { label: 'Menu 1', onClick: () => alert('Option 2 clicked') },
            { label: 'Menu 2', onClick: () => alert('Option 3 clicked') }
        ];

        showMenu(menuItems, e.clientX, e.clientY);
    };

    return (
        <div onContextMenu={handleContextMenu} style={{ height: '100vh', width: '100vw' }}>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/dashboard/*" element={<Dashboard />} />
            </Routes>
        </div>
    );
}

const App = () => {
    return (
        <AuthProvider>
            <ThemeProvider>
                <ContextMenuProvider> {/* Wrap with ContextMenuProvider */}
                    <Router>
                        <AppContent />
                    </Router>
                </ContextMenuProvider>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;
