import React, { Component } from 'react'
import Header from './componets/Header'
import List from './componets/List'
import Footer from './componets/Footer'
import './App.css'

export default class App extends Component {
    //初始化状态
  state={todos:[
    {id:'001',name:'a',done:true},
    {id:'002',name:'b',done:true},
    {id:'003',name:'c',done:false},
  ]}
  //用于添加一个todo
  addTodo=(todoObj)=>{
    //获取原todos
    const{todos}=this.state
    //追加一个todo
    const newTodos=[todoObj,...todos]
    this.setState({todos:newTodos})
  }

  render() {
    const {todos}=this.state
    return (
        <div className="todo-container">
            <div className="todo-wrap"> 
            <Header addTodo={this.addTodo}/>
            <List todos={todos}/>
            <Footer/>
            </div>
      </div>
    
    )
  }
}
