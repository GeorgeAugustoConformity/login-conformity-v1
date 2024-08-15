import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

const root = ReactDOM.createRoot(document.getElementById('root'));

document.addEventListener('DOMContentLoaded', () => {
    // Function to prevent dragging
    const preventDrag = (event) => {
        event.preventDefault();
    };

    // Add event listeners to the entire document
    document.addEventListener('dragstart', preventDrag, true);
    document.addEventListener('drag', preventDrag, true);
    document.addEventListener('dragend', preventDrag, true);

    // Optionally, you can also lock text selection and image dragging
    document.body.style.userSelect = 'none'; // Prevent text selection
    document.body.style.webkitUserDrag = 'none'; // Prevent image dragging in WebKit browsers
});

// Prevent context menu of opening
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

root.render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <App/>
        </DevSupport>
    </React.StrictMode>
);