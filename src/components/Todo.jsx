import React from 'react'
import { useState } from 'react';
import TodoForm from './TodoForm'
import {AiFillEdit ,AiFillDelete} from 'react-icons/ai'


function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
    
    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        });
    }

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate}></TodoForm>
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={todo.id + Math.floor(Math.random() * 100000)}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)} className="todo-text">
                {todo.text}
            </div>

            <div className='icons'>
                <AiFillDelete onClick={() => removeTodo(todo.id)} className="delete-icon"></AiFillDelete>
                <AiFillEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className="edit-icon"></AiFillEdit>
            </div>

        </div>
    ));
}

export default Todo;