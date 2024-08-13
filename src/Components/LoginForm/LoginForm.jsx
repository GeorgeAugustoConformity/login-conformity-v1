import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import logo from '../../Components/Assets/logo-white.png'; // Correctly import the image

const LoginForm = () => {
    return (
        <div className="wrapper">
            <form action="">
                <img src={logo} alt="Logo" className="logo"/>
                <div className="input-box">
                    <input type="text" placeholder="Usuário" required/>
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Senha" required/>
                    <FaLock className="icon"/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/>Lembre-se de mim</label>
                    <a href="#">Esqueceu a senha?</a>
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default LoginForm;
