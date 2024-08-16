import React, { useState, useEffect } from 'react';
import './DateTimeDisplay.css';

const DateTimeDisplay = () => {
    const [dateTime, setDateTime] = useState({
        date: new Date().toLocaleDateString('en-GB'),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setDateTime({
                date: now.toLocaleDateString('en-GB'),
                time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="datetime-display">
            <div className="date">{dateTime.date}</div>
            <div className="time">{dateTime.time}</div>
        </div>
    );
};

export default DateTimeDisplay;
