import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
   const [todos, setTodos] = useState([]);
   const [newTodo, setNewTodo] = useState('');

   const todoToggle = (id) => {
      const updatedTodos = todos.map((todo) => {
         if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
         }
         return todo;
      });
      setTodos(updatedTodos);
   };

   const addTodo = () => {
      if (newTodo.trim() === '') return;
      const newTodoObj = {
         id: uuidv4(),
         text: newTodo,
         completed: false,
      };
      setTodos([...todos, newTodoObj]);
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
                     textDecoration: todo.completed ? 'line-through' : 'none',
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
