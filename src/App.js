import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    { name: 'Task 1', bookmark: false },
    { name: 'Task 2', bookmark: false },
    { name: 'Task 3', bookmark: false },
  ]);

  const handleBookmarkToggle = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].bookmark = !updatedTodos[index].bookmark;
    setTodos(updatedTodos);
    console.log(todos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} handleBookmarkToggle={handleBookmarkToggle} />
    </div>
  );
};

export default App;