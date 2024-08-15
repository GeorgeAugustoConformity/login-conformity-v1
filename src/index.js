import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev";

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Event listener to prevent dragging and context menu
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

// To allow custom context menu, while preventing the default browser context menu
document.addEventListener('contextmenu', (e) => {
    // You can add your own logic here to determine if the context menu should be prevented
    // For instance, check if the click is in a specific area or component

    // Example: Prevent default context menu everywhere
    e.preventDefault();

    // Check if a specific condition or element should show the custom context menu
    // e.g., you could use a class or id on an element to determine where to show the custom menu
    // if (e.target.closest('.show-custom-menu')) {
    //     // Allow custom context menu to show
    //     e.stopPropagation(); // Stop propagation to prevent default context menu
    // }
});

root.render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
            <App />
        </DevSupport>
    </React.StrictMode>
);
