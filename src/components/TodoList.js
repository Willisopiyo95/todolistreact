import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    index={index}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                />
            ))}
        </ul>
    );
};

export default TodoList;
