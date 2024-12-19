import React from 'react';
import { TextField, Button, Checkbox, List, ListItem, ListItemText } from '@mui/material';

function TodoList({ todos, onAddTodo, onToggleTodo, onDeleteTodo, onClearCompleted, inputValue, setInputValue }) {
    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center' }}>待办事项列表</h1>
            <TextField 
                fullWidth
                value={inputValue} 
                onChange={e => setInputValue(e.target.value)} 
                onKeyDown={e => e.key === 'Enter' && onAddTodo()} 
                placeholder="请输入任务名称，按回车确认" 
                variant="outlined" 
                style={{ marginBottom: '15px' }} 
            />
            <List>
                {todos.map((todo, index) => (
                    <ListItem key={index}>
                        <Checkbox 
                            checked={todo.completed} 
                            onChange={() => onToggleTodo(index)} 
                        />
                        <ListItemText primary={todo.text} />
                        <Button variant="contained" color="primary" onClick={() => onDeleteTodo(index)} style={{ marginLeft: '10px' }}>
                            删除
                        </Button>{/* 可以直接设置为 'primary'、'secondary'、'default' 等预定义的颜色值 */}
                    </ListItem>
                ))}
            </List>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <Button variant="contained" color="primary" onClick={onClearCompleted}>
                    清除已完成任务
                </Button>
            </div>
            <p>已完成 {todos.filter(todo => todo.completed).length} / 全部 {todos.length}</p>
        </div>
    );
}

export default TodoList; 