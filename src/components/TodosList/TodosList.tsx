import React, {FC, useState} from 'react';
import TodoItem from "../TodoItem/TodoItem";
import {ITodo} from "../../types/types";
import {CSSTransition, TransitionGroup} from "react-transition-group";

interface TodosListProps {
    todos: ITodo[],
    onToggle (id: number): void,
}

const TodosList:FC <TodosListProps> = ({todos,onToggle}) => {

    return (
        <ul>
            <TransitionGroup>
                {todos.map(todo =>
                    <CSSTransition
                        key={todo.id}
                        timeout={500}
                        classNames="todo"
                    >
                        <TodoItem todo={todo} onToggle={onToggle} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </ul>
    );
};

export default TodosList;