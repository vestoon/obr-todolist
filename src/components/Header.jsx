import React from 'react';
import './Header.css';

export const Header = () => {
    const today = new Date();

    return (
        <div className="Header">
            <h3>오늘은🗓️</h3>
            <h1>{today.toDateString()}</h1>
        </div>
    )
}