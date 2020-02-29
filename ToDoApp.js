import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import todoData from "./Data/todoData"

class ToDoApp extends Component {
  constructor() {
    super()
    this.state = {
      todos: todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    console.log("The id is: " + id)
    this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
          if (todo.id === id){
            todo.ticked = !todo.ticked
          }
          return todo
        })
        return{
          todos: updatedTodos
        }
    })
  }
  
  render() {
    const todoItems = this.state.todos.map(    
      item => <TodoItem key={item.id} item={item} onChangeHandler={this.handleChange}/>
    )

    return (
      <div className="todo-list">
        {todoItems}
      </div>
    );
  }
}

export default ToDoApp;
