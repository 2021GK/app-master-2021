import React, {useContext} from 'react';
import {BiTrash} from 'react-icons/bi'
import {GlobalContext} from '../../../context/GlobalState';



const Todo = ({todo}) => {
    const {deleteTodo, updateTodo, updateTodo1} =useContext(GlobalContext);

    return (
        <div className={`todo-task ${todo.important ? 'important' : ''}`} onDoubleClick={() => updateTodo1(todo._id)}>
        <div className='todo-div1'>
             <input type='checkbox' checked={todo.done} value={todo.done} onChange={() => updateTodo(todo._id)}/> 
            <h3 className={todo.done ? 'todo-group1a' : 'todo-group1'}>{todo.text}</h3>
            </div>
        <BiTrash className='todo-del' onClick={() => deleteTodo(todo._id)}/>
        </div>
    )
}

export default Todo
