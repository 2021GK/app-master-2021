import {useState, useContext} from 'react'
import {GlobalContext} from '../../../context/GlobalState';


const AddTodo = () => {
    const [text, setText] = useState('')
    const [important, setImportant] = useState(false)
    const [done, ] = useState(false)
    const currentEmail= localStorage.getItem("currentEmail");


    const {addTodo} =useContext(GlobalContext);



    const onSubmit = e => {
        e.preventDefault();

        const newTodo = {
            currentEmail: currentEmail,
            currentData: {
            _id: Math.floor(Math.random() * 1000),
            text,
            important,
            done
        }}

         addTodo(newTodo);
         setText('')
    }



 


    return ( 
        <form className='todo-add-form'  onSubmit={onSubmit}>
            <div className='todo-form-control1'>
            <input className="todo-form_input" type='text' placeholder=" " value={text} onChange={(e) => setText(e.target.value)}/>
            <label htmlFor="" className="todo-form_label">Zadatak</label>
            </div>

            <div className='todo-form-control-check'><br/>
                <label className="todo-form_label2">Istaknuto</label>
            <input type='checkbox' checked={important} value={important} onChange={(e) => setImportant(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Zapamti' className='todo-btn todo-btn-block' />
        </form>
     );
}
 
export default AddTodo;