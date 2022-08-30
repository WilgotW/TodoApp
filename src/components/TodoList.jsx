import React from 'react'
import { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){ return }

        //create new todo
        const newTodos = [todo, ...todos];
        setTodos(newTodos);

        console.log(todo, ...todos);
    }

    const completeTodo = id =>{
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }

            return todo;
        });

        setTodos(updatedTodos);
    }
    
    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){ return }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    }

  return (
    <div className='outer'>
        <div className='form'>
            <div className='title'>To-Do List</div>
            <TodoForm onSubmit={addTodo}></TodoForm>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}></Todo>
        </div>

    </div>
  )
}

export default TodoList