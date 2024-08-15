import React from 'react';
import './ContextMenu.css'; // Import the CSS for styling

const ContextMenu = ({ items, position, visible, onClose }) => {
    React.useEffect(() => {
        const handleClick = (e) => {
            if (visible && !e.target.closest('.context-menu')) {
                onClose();
            }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [visible, onClose]);

    if (!visible) return null;

    return (
        <div className="context-menu" style={{ top: position.y, left: position.x }}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className="context-menu-item"
                    onClick={() => {
                        item.onClick();
                        onClose();
                    }}
                >
                    {item.label}
                </div>
            ))}
        </div>
    );
};

export default ContextMenu;
