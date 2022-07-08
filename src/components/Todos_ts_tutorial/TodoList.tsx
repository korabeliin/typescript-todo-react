import React, {FC} from 'react';
import {ITodo} from "../../types/types";
import {TransitionGroup, CSSTransition} from "react-transition-group";

type TodoListProps = {
    todos: ITodo[],
    onToggle(id: number): void,
    onRemove(id: number): void,
}

const TodoList: FC<TodoListProps> = ({todos, onToggle, onRemove}) => {

    if(!todos.length) return <p className='center'>Nothing to do today !</p>

    return (
        <ul>
            <TransitionGroup>
            {todos.map(todo => {
                const classes = ['todo'];

                if (todo.completed) {
                    classes.push('completed')
                }

                return (
                    <CSSTransition
                        key={todo.id}
                        timeout={500}
                        classNames="todo"
                    >
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => onToggle(todo.id)}
                            />
                            <span>{todo.title}</span>
                            <i onClick={() => onRemove(todo.id)} className="material-icons red-text">delete</i>
                        </label>
                    </li>
                    </CSSTransition>
                )
            })}
            </TransitionGroup>
        </ul>
    );
};

export default TodoList;