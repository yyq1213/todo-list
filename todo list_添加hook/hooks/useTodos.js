import { useState } from 'react';

export const useTodos = (initialTodos = []) => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (todoObj) => {
    setTodos(prevTodos => [todoObj, ...prevTodos]);
  };

  const updateTodo = (id, done) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === id ? { ...todo, done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(prevTodos => 
      prevTodos.filter(todo => todo.id !== id)
    );
  };

  const checkAllTodo = (done) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => ({ ...todo, done }))
    );
  };

  const clearAllDone = () => {
    setTodos(prevTodos => 
      prevTodos.filter(todo => !todo.done)
    );
  };

  return {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    checkAllTodo,
    clearAllDone
  };
}; 