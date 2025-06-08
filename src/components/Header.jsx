import React from 'react';

export const Header = () => {
    const today = new Date();

    return (
        <div>
            오늘은🗓️
            {today.toDateString()}
        </div>
    )
}