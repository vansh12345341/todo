import React from 'react';
import './TodoList.css';


const TodoList = ({ todos, handleBookmarkToggle }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index}>
          {todo.name}
          <button onClick={() => handleBookmarkToggle(index)}>
            {todo.bookmark ? 'Completed' : 'Incomplete'}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
