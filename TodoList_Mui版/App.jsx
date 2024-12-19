import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue.trim()) {
            setTodos([...todos, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const clearCompleted = () => {
        const newTodos = todos.filter(todo => !todo.completed);
        setTodos(newTodos);
    };

    return (
        <div style={{ width: '80%', maxWidth: '800px', margin: '0 auto', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
            <TodoList 
                todos={todos} 
                onAddTodo={addTodo} 
                onToggleTodo={toggleTodo} 
                onDeleteTodo={deleteTodo} 
                onClearCompleted={clearCompleted} 
                inputValue={inputValue} 
                setInputValue={setInputValue} 
            />
        </div>
    );
}

export default App;
