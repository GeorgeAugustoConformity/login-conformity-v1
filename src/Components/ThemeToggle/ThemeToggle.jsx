import React from 'react';
import './ThemeToggle.css';
import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button title="Mudar tema"  className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
    );
}

export default ThemeToggle;
