import React from 'react'
import { useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    })

    const [thisId, setThisId] = useState(1);
    const [input, setInput] = useState('');
    const handleInput = ev => {
        setInput(ev.target.value);
    }

    const handleSubmit = ev =>{
        ev.preventDefault();

        setThisId(prevId => prevId + 1);
        
        props.onSubmit({
            text: input,
            id: thisId
        });

        setInput('');
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input placeholder='to do' onChange={handleInput} ref={inputRef} value={input}></input>
            <button>Add Todo</button>
        </form>
    )
}

export default TodoForm