import Todo from './Todo'
import React, {useContext } from 'react'
import {GlobalContext} from '../../../context/GlobalState';



const Todos = () => {
    const {todolist } =useContext(GlobalContext);

   
    return (
        <>
        {todolist.length===0 ?
        <div className="todo-header">Nema stavki</div> 
        :
        todolist.map(todo => (<Todo key={todo._id} todo={todo}/>))}
        </>
    )
}

export default Todos
