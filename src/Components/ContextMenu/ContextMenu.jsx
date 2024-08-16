// src/components/ContextMenu/ContextMenu.js

import React from 'react';
import './ContextMenu.css';

const ContextMenu = ({ items, position, visible, onClose }) => {
    if (!visible) return null;

    const handleClick = (e) => {
        e.stopPropagation(); // Prevent the click event from bubbling up
    };

    return (
        <>
            <div
                className="context-menu-overlay"
                onClick={onClose}
            />
            <div
                className="context-menu"
                style={{ top: position.y, left: position.x, position: 'absolute' }}
                onClick={handleClick}
            >
                {items.map((item, index) => (
                    <div key={index} className="context-menu-item" onClick={() => {
                        item.onClick();
                        onClose(); // Hide menu after item click
                    }}>
                        {item.icon}
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ContextMenu;
