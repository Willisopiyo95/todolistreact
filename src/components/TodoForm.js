import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            addTodo({
                text: input,
                completed: false
            });
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new task"
                required
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TodoForm;
