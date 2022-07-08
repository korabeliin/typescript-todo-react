import React, {FC, useEffect, useState} from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {ITodo} from "../../types/types";

const TodosMain: FC = () => {

    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]')

    const [todos, setTodos] = useState<ITodo[]>(savedTodos);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTodoHandler = (title: string) => {
        const newTodo = {
            id: Date.now(),
            title,
            completed: false
        }
        setTodos(todos => [newTodo, ...todos])
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

    const removeHandler = (id: number) => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }

    return (
        <div className='container'>
            <TodoForm onAddTodo={addTodoHandler} />
            <TodoList onToggle={toggleHandler} onRemove={removeHandler} todos={todos} />
        </div>
    );
};

export default TodosMain;