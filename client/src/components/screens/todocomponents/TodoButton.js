import PropTypes from 'prop-types'

const TodoButton = ({color, text, onClick}) => {
    return ( 
        <div>
            <button onClick={onClick} style={{backgroundColor : color}} className='todo-btn todo-btn-move'>{text}</button>
        </div>
     );
}

TodoButton.defaultProps = {
    color: 'steelblue'
}
 
TodoButton.propTypes = {
text: PropTypes.string,
color: PropTypes.string,
onClick: PropTypes.func
}
export default TodoButton;