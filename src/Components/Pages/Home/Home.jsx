import React, { useRef } from 'react';
import './Home.css';
import CopyTextComponent from './CopyTextComponent.jsx';

const Home = () => {
    const textRef = useRef(null);

    return (
        <div className="home">
            <h2>Dashboard</h2>
            <p ref={textRef}>Welcome to the jungle!</p>
            {/*<CopyTextComponent textRef={textRef} />*/}
        </div>
    );
}

export default Home;
