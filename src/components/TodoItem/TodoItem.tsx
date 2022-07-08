import React, {FC} from 'react';
import {ITodo} from "../../types/types";

import styles from './TodoItem.module.css';

interface TodoItemProps {
    todo: ITodo,
    onToggle (id: number): void,
}

const TodoItem: FC <TodoItemProps> = ({todo, onToggle}) => {

    const classes = [styles.todoItem];

    if (todo.completed) {
        classes.push(styles.completed)
    }

    return (
        <li className={classes.join(' ')} >
            <label className={styles.todoItemContainer}>
                <span className={styles.fakeCheckbox}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        className={styles.checkbox}
                        onChange={() => onToggle(todo.id)}
                    />
                </span>
                <span>{todo.title}</span>
            </label>

        </li>
    );
};

export default TodoItem;