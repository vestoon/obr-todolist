import React from "react";
import './TodoItem.css'


export const TodoItem = () => {

    return (
        <div className="TodoItem">
            <input type="checkbox"></input>
            <div id="content">content</div>
            <div id="date">date</div>
            <button>삭제</button>
        </div>
    )
}