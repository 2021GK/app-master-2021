export default (state, action) => {
    switch(action.type) {
        case 'GET_TODOS':
            return {
                ...state,
                todolist: action.payload
            }
        case 'GET_FILES':
            return {
                ...state,
                filelist: action.payload
            }
        case 'ADD_TODO':
            return {
                 ...state,
                 todolist: [...state.todolist,action.payload]
                }
        case 'ADD_FILE':
                return {
                    ...state,
                    filelist: [...state.filelist,action.payload]
                }
        case 'ERROR':
                return {
                    ...state,
                    error:action.payload
                    }
        case 'UPDATE_TODO':
                return {
                    ...state
                    }
        case 'DELETE_TODO':
                return {
                    ...state,
                    todolist: state.todolist.filter(todo => todo._id!==action.payload)
                    }
        case 'GET_TRANSACTIONS':
                return {
                ...state,
                transactionlist: action.payload
            }
        case 'DELETE_TRANSACTION':
                return {
                ...state,
                transactionlist: state.transactionlist.filter(trans => trans._id!==action.payload)
            }
        case 'DELETE_FILE':
                return {
                ...state,
                filelist: state.filelist.filter(file => file._id!==action.payload)
            }
        case 'DELETE_PIN':
                return {
                ...state,
                pinlist: state.pinlist.filter(pin => pin._id!==action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactionlist: [...state.transactionlist,action.payload]
            }
        case 'ADD_PIN':
            return {
                ...state,
                pinlist: [...state.pinlist,action.payload]
                }
        case 'GET_PINS':
            return {
                ...state,
                pinlist: action.payload
            }
        default:
            return state;
    }
}