import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import todoData from "./Data/todoData"

class ToDoApp extends Component {
  constructor() {
    super()
    this.state = {
      todos: todoData
    }
  }
  
  render() {
    const todoItems = this.state.todos.map(    
      item => <TodoItem key={item.id} item={item}/>
    )

    return (
      <div className="todo-list">
        {todoItems}
      </div>
    );
  }
}

export default ToDoApp;
