import React from 'react';

const TodoItem = ({ todo, index, deleteTodo, toggleComplete }) => {
    return (
        <li>
            <span 
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                onClick={() => toggleComplete(index)}
            >
                {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
        </li>
    );
};

export default TodoItem;
