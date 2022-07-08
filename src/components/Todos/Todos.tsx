import React, {FC, useEffect, useMemo, useState} from 'react';
import {ITodo} from "../../types/types";

import styles from './Todos.module.css';
import TodosList from "../TodosList/TodosList";
import TodoForm from "../TodoForm/TodoForm";

const Todos: FC = () => {

    const savedTodos = JSON.parse(localStorage.getItem('todosStorage') || '[]')

    const [todos, setTodos] = useState<ITodo[]>(savedTodos);
    const [filterType, setFilterType] = useState<string>('All');

    useEffect(() => {
        localStorage.setItem('todosStorage', JSON.stringify(todos))
    }, [todos])

    const handleFilterBtnClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const button = e.target as HTMLElement;
        setFilterType(button.innerText);
    }

    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if(todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        }))
    }

    const addTodoHandler = (title: string) => {
        const newTodo = {
            id: Date.now(),
            title,
            completed: false
        }
        setTodos(todos => [newTodo, ...todos])
    }

    const filteredTodos = useMemo(() => {
        switch (filterType) {
            case 'Active':
                return todos.filter(todo => !todo.completed)
            case 'Completed':
                return todos.filter(todo => todo.completed)
            default:
                return todos
        }
    }, [handleFilterBtnClick, addTodoHandler]);

    const handleClear = (e: React.MouseEvent) => {
        e.preventDefault();
        setTodos(todos => todos.filter(todo => !todo.completed))
    }

    return (
        <div className={styles.todosContainer}>
            <h1>todos</h1>
            <div className={styles.todoApp}>
                <TodoForm todos={filteredTodos} onAddTodo={addTodoHandler} />
                <TodosList todos={filteredTodos} onToggle={toggleHandler} />
                <footer>
                    <span>{filteredTodos.length} items left</span>
                    <div>
                        <button
                            className={filterType === 'All' ? styles.focus : ''}
                            onClick={handleFilterBtnClick}>All</button>
                        <button
                            className={filterType === 'Active' ? styles.focus : ''}
                            onClick={handleFilterBtnClick}>Active</button>
                        <button
                            className={filterType === 'Completed' ? styles.focus : ''}
                            onClick={handleFilterBtnClick}>Completed</button>
                    </div>
                    <button onClick={handleClear}>Clear completed</button>
                </footer>
            </div>
        </div>
    );
};

export default Todos;