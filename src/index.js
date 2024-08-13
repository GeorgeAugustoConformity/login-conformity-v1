import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);