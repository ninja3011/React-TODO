import React from "react"
function TodoItem(props) {
    console.log('checked'+ props.checked + props.text)

    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.completed}/>
            <p>{props.text}</p>
        </div>
    )
}

export default TodoItem