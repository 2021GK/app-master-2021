import Button from './TodoButton';
const TodoHeader = ({onAdd, showAdd}) => {

    
    return (
        <header className='todo-header'>
            <h1>Uraditi:</h1>
           <Button color={showAdd ? '#C01F9E' : '#00CED1'} text={showAdd ? 'Zatvori' :'Dodaj novo'} onClick={onAdd}/>
        </header>
    )
}

export default TodoHeader
