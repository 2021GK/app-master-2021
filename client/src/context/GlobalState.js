import React, {useReducer, createContext} from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';



const initialState ={
    todolist: [],
    transactionlist: [],
    pinlist: [],
    filelist: []
    }


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] =useReducer(AppReducer, initialState);

    

    async function getTransactions() {
        const user=localStorage.getItem("currentEmail");
        try{
            const res=await axios.get(`http://localhost:5000/api/private/trans?user=${user}`);
             dispatch({
                 type: 'GET_TRANSACTIONS',
                 payload: res.data.data
             }) }catch (err) {
                 dispatch({
                     type: 'ERROR',
                     payload: err.response.data.error
                 })
             }
        }


    async function getTodos() {
    const user=localStorage.getItem("currentEmail");
    try{
        const res=await axios.get(`http://localhost:5000/api/private/todo?user=${user}`);
            dispatch({
                type: 'GET_TODOS',
                payload: res.data.data
            }) }catch (err) {
                dispatch({
                    type: 'ERROR',
                    payload: err.response.data.error
                })
            }
    }

    async function getFiles() {
        const user=localStorage.getItem("currentEmail");
        try{
            const res=await axios.get(`http://localhost:5000/api/private/files?user=${user}`);
                dispatch({
                    type: 'GET_FILES',
                    payload: res.data.data
                }) }catch (err) {
                    dispatch({
                        type: 'ERROR',
                        payload: err.response.data.error
                    })
                }
        }

    async function getPins() {
        const user=localStorage.getItem("currentEmail");
        try{
            const res=await axios.get(`http://localhost:5000/api/private/pins?user=${user}`);
             dispatch({
                 type: 'GET_PINS',
                 payload: res.data.data
             }) }catch (err) {
                 dispatch({
                     type: 'ERROR',
                     payload: err.response.data.error
                 })
             }
        }



        async function addPin(pinItem) {
            const config = {
                headers: {
                    'Content-Type' : 'application/json'
                }
            } 
            try {
                const res=await axios.post("http://localhost:5000/api/private/pins", pinItem, config);
                dispatch({
                    type: 'ADD_PIN',
                    payload: res.data.data
                });
            } catch (err){
                dispatch({
                    type: 'ERROR',
                    payload: err.response.data.error
                });
            }
        } 

        async function addTodo(todoItem) {
            const config = {
                headers: {
                    'Content-Type' : 'application/json'
                }
            } 
            try {
                const res=await axios.post("http://localhost:5000/api/private/todo", todoItem, config);
                                dispatch({
                    type: 'ADD_TODO',
                    payload: res.data.data
                });
            } catch (err){
                dispatch({
                    type: 'ERROR',
                    payload: err.response.data.error
                })
            }
        } 

        async function addFile(fileItem) {
            const config = {
                headers: {
                    'Content-Type' : 'application/json'
                }
            } 
            try {
                const res=await axios.post("http://localhost:5000/api/private/files", fileItem, config);
                dispatch({
                    type: 'ADD_FILE',
                    payload: res.data.data
                });
            } catch (err){
                dispatch({
                    type: 'ERROR',
                    payload: err.response.data.error
                })
            }
        } 

        async function addTransaction(transItem) {
            const config = {
                headers: {
                    'Content-Type' : 'application/json'
                }
            } 
            try {
                const res=await axios.post("http://localhost:5000/api/private/trans", transItem, config);
                
                dispatch({
                    type: 'ADD_TRANSACTION',
                    payload: res.data.data
                });
            } catch (err){
                dispatch({
                    type: 'ERROR',
                    payload: err.response.data.error
                })
            }
        } 

        async function updateTodo(id) {
            const user=localStorage.getItem("currentEmail");
            state.todolist.map(m=>m._id===id ? m.done=!m.done : m.done);
            state.todolist.map(m=> m._id===id && m.important===true ? m.important=false : m.important);
            
            try {
                await axios.put(`http://localhost:5000/api/private/todo/up/${id}`, {user: user});

                dispatch({
                    type: 'UPDATE_TODO',
                })          
            } catch (err) {
                dispatch({
                    type: 'ERROR',
                    payload: err.response.data.error
                })
            }
        }

        async function updateTodo1(id) {
            const user=localStorage.getItem("currentEmail");
            state.todolist.map(m=>m._id===id ? m.important=!m.important : m.important);
            
            try {
                await axios.put(`http://localhost:5000/api/private/todo/up1/${id}`, {user: user}); 
                
                dispatch({
                    type: 'UPDATE_TODO',
                })          
            } catch (err) {
                dispatch({
                    type: 'ERROR',
                    payload: err.response.data.error
                })
            }
        }

        async function deleteTodo(id) {
            const user=localStorage.getItem("currentEmail");

            try {
                await axios.delete(`http://localhost:5000/api/private/todo/${user}/${id}`);
                dispatch({
                    type: 'DELETE_TODO',
                    payload: id
                });
            } catch (err) {
                dispatch({
                    type: 'ERROR',
                    payload: err.response.data.error
                })
            }
        }

        async function deletePin(id) {
            const user=localStorage.getItem("currentEmail");

            try {
                await axios.delete(`http://localhost:5000/api/private/pins/${user}/${id}`);
                dispatch({
                    type: 'DELETE_PIN',
                    payload: id
                });
            } catch (err) {
                dispatch({
                    type: 'ERROR',
                    payload: err.response.data.error
                })
            }
        }


        async function deleteTransaction(id) {
            const user=localStorage.getItem("currentEmail");
            try {
                await axios.delete(`http://localhost:5000/api/private/trans/${user}/${id}`);
                dispatch({
                    type: 'DELETE_TRANSACTION',
                    payload: id
                });
            } catch (err) {
                dispatch({
                    type: 'ERROR',
                    payload: err.response.data.error
                })
            }
        }

        async function deleteFile(id) {
            const user=localStorage.getItem("currentEmail");
            try {
                await axios.delete(`http://localhost:5000/api/private/files/${user}/${id}`);
                dispatch({
                    type: 'DELETE_FILE',
                    payload: id
                });
            } catch (err) {
                dispatch({
                    type: 'ERROR',
                    payload: err.response.data.error
                })
            }
        }
    




    return (<GlobalContext.Provider value={{todolist: state.todolist, transactionlist: state.transactionlist, pinlist: state.pinlist, filelist: state.filelist, addTodo, updateTodo, updateTodo1, getTodos, deleteTodo, getTransactions,deleteTransaction,addTransaction, getPins, addPin, deletePin, addFile, getFiles, deleteFile}}>
        {children}
    </GlobalContext.Provider>);

}
