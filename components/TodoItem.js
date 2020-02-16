import React from "react";

function TodoItem(props) {
  
    return (
    <div className="todo-item">
      <input type="checkbox" checked={props.item.ticked}/>
      <p>{props.item.description}</p>
    </div>
  );
}
export default TodoItem;
