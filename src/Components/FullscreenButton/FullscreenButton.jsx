import React, { useState } from 'react';
import { FaExpandArrowsAlt, FaCompressArrowsAlt } from 'react-icons/fa'; // Import fullscreen icons
import styles from './FullscreenButton.module.css'; // Import the CSS Module

const FullscreenButton = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
            setIsFullscreen(true);
        } else {
            document.exitFullscreen().catch(err => {
                console.error(`Error attempting to exit full-screen mode: ${err.message} (${err.name})`);
            });
            setIsFullscreen(false);
        }
    };

    return (
        <button onClick={toggleFullScreen} className={styles.fullscreenButton}>
            {isFullscreen ? <FaCompressArrowsAlt /> : <FaExpandArrowsAlt />}
        </button>
    );
};

export default FullscreenButton;
