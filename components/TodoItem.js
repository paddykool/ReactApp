import React, {Component} from "react";

class TodoItem extends Component {

  render() {
    return (
      <div className="todo-item">
        <input 
          // onChange={()=> console.log("changed")}
          onChange={() => this.props.onChangeHandler(this.props.item.id)} 
          type="checkbox" 
          checked={this.props.item.ticked}/>
        <p>{this.props.item.description}</p>
      </div>
    );
  }
}

export default TodoItem;
