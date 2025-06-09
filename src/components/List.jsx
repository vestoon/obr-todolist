import React from 'react';
import {TodoItem} from './TodoItem'

export const List = () => {

    return (
        <div className="List">
            <h3>Todo List🌱</h3>
            <input placeholder="검색어를 입력하세요"></input>
            <div className="ListWrapper">
                <TodoItem></TodoItem>
                <TodoItem></TodoItem>
                <TodoItem></TodoItem>
            </div>
        </div>
    )
}