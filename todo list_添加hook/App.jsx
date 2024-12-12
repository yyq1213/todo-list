import React from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import { useTodos } from './hooks/useTodos';
import { useTheme } from './hooks/useTheme';
import { useLoading } from './hooks/useLoading';//引入加载时间
import './App.css';

const initialTodos = [
	{id:'001',name:'1',done:true},
	{id:'002',name:'2',done:true},
	{id:'003',name:'3',done:false},
	{id:'004',name:'4',done:false}
];//初始数据

const App = () => {
	const {
		todos,
		addTodo,
		updateTodo,
		deleteTodo,
		checkAllTodo,
		clearAllDone
	} = useTodos(initialTodos);

	const { themeClass } = useTheme('blue');//更改主题颜色
	const loading = useLoading(2000);

	if (loading) {
		return <div className="loading">加载中...</div>;
	}

	return (
		<div className={`todo-container ${themeClass}`}>
			<div className="todo-wrap">
				<Header addTodo={addTodo} />
				<List 
					todos={todos}
					updateTodo={updateTodo}
					deleteTodo={deleteTodo}
				/>
				<Footer 
					todos={todos}
					checkAllTodo={checkAllTodo}
					clearAllDone={clearAllDone}
				/>
			</div>
		</div>
	);
};

export default App;
