import React, {FC, useRef, useState} from 'react';

interface TodoFormProps {
    onAddTodo(title: string): void,
}

const TodoForm: FC<TodoFormProps> = ({onAddTodo}) => {

    // const inputRef = useRef<HTMLInputElement>(null)

    const [title, setTitle] = useState<string>('');

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const keyPressHandler = (e: React.KeyboardEvent) => {
        if(e.key === 'Enter') {
            onAddTodo(title)
            setTitle('')
        }
    }

    return (
        <div className='input-field'>
            <label className='active'>
                <span>Type the todo's name</span>
                <input
                    type="text"
                    placeholder='What needs to be done ?'
                    value={title}
                    onChange={changeHandler}
                    onKeyPress={keyPressHandler}
                    // ref={inputRef}
                />
            </label>
        </div>
    );
};

export default TodoForm;