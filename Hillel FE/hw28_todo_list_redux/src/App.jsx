import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState('');

    const todoToggle = (id) => {
        dispatch({ type: 'TOGGLE_TODO', payload: id });
    };

    const addTodo = () => {
        if (newTodo.trim() === '') return;
        const newTodoObj = {
            id: uuidv4(),
            text: newTodo,
            completed: false,
        };
        dispatch({ type: 'ADD_TODO', payload: newTodoObj });
        setNewTodo('');
    };

    const sortedTodos = [...todos].sort((a, b) => {
        if (a.completed && !b.completed) return -1;
        if (!a.completed && b.completed) return 1;
        return 0;
    });

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {sortedTodos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            textDecoration: todo.completed
                                ? 'line-through'
                                : 'none',
                        }}
                        onClick={() => todoToggle(todo.id)}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
            <div>
                <input
                    className="input"
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter a new task"
                />
                <button onClick={addTodo}>Add Todo</button>
            </div>
        </div>
    );
};

export default TodoList;
