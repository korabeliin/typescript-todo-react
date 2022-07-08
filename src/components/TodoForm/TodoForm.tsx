import React, {FC, useState} from 'react';
import styles from "../Todos/Todos.module.css";
import {ITodo} from "../../types/types";

interface TodoFormProps {
    todos: ITodo[],
    onAddTodo (title: string): void
}

const TodoForm: FC <TodoFormProps> = ({onAddTodo, todos}) => {

    const [title, setTitle] = useState<string>('')

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            onAddTodo(title)
            setTitle('')
        }
    }

    return (
        <header>
            {todos.length ?
                <i className="material-icons">expand_more</i>
                :
                <i className="material-icons">expand_less</i>
            }
            <input
                type="text"
                placeholder='What needs to be done ?'
                value={title}
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
                className={styles.todoApp_input}
            />
        </header>
    );
};

export default TodoForm;