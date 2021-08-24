import {useState, useEffect, useContext} from 'react';
import TodoHeader from './todocomponents/TodoHeader';
import Todos from './todocomponents/Todos';
import  AddTodo from './todocomponents/AddTodo';
import Navigation from './Navigation';
import {GlobalContext} from '../../context/GlobalState';



function TodoPage() {
   const { getTodos } =useContext(GlobalContext);

    const [showAddTodo, setShowAddTodo] =useState(false);
    const modalText="Klikom na 'dodaj novo' se otvara forma pomoću koje se unose stavke. Stavke mogu biti naknadno označene kao važne duplim klikom na neku od njih sa spiska. Klikom na kvadratić pored stavke se ona označava kao urađena/precrtana.";
    const modalTitle="Na ovoj stranici napravi spisak svega što treba da uradiš pred put";

    useEffect(()=> {
      getTodos();
  }, []);


    return (
      <div>
        <Navigation modalText={modalText} modalTitle={modalTitle}/>

      <div className="todo-container">
      <TodoHeader showAdd={showAddTodo} onAdd={() => setShowAddTodo(!showAddTodo)}/>
      {showAddTodo && <AddTodo/>}
  <Todos/>
  </div>
  </div>
  );
}


export default TodoPage;
