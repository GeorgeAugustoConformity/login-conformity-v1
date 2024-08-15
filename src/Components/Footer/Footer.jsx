import React from 'react';
import NewsTicker from '../NewsTicker/NewsTicker'; // Adjust the path as needed
import './Footer.css'; // Your footer styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Other footer content */}
            </div>
            <NewsTicker/>
        </footer>
    );
};

export default Footer;
