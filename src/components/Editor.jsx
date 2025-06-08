import React from 'react';
import './Editor.css';

export const Editor = () => {

    return (
        <div className="Editor">
            <input placeholder='새로운 Todo...'></input>
            <button>추가</button>
        </div>
    )
}