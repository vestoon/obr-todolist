import React from 'react';
import {TodoList} from './TodoItem'
import './List.css';

export const List = () => {

    return (
        <div className="List">
            <h3>Todo List🌱</h3>
            <input placeholder="검색어를 입력하세요"></input>
            <TodoList></TodoList>
            <TodoList></TodoList>
            <TodoList></TodoList>
        </div>
    )
}