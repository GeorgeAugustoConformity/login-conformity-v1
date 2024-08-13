// src/Components/LoginForm/LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import logo from '../../Components/Assets/login-logo-white.png';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple authentication check (you should replace this with real authentication)
        if (username === 'nanda' && password === 'nanda') {
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/dashboard/home'); // Redirect to dashboard
            window.location.reload();
        } else {
            alert('Invalid credentials');
        }
    }

    return (
        <div className="main-wrapper">
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <img src={logo} alt="Logo" className="logo"/>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Usuário"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <FaUser className="icon"/>
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <FaLock className="icon"/>
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox"/>Lembre-se de mim</label>
                        <a href="#">Esqueceu a senha?</a>
                    </div>
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
