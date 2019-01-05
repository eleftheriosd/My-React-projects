import React from "react"

function TodoItem(props) {
    console.log(props.item.completed)
    const completedStyle={
        fontStyle:'Italic',
        color:'#cdcdcd',
        textDecoration: 'line-through'
    }
    return (
        <div className="todo-item">
            <input 
            //hi
            type="checkbox"
            onChange={()=>props.handleChange(props.item.id)}
            checked={props.item.completed}/>
            <p style={!props.item.completed ? completedStyle :null}>{props.item.text}</p>
        </div>
    )
}



export default TodoItem