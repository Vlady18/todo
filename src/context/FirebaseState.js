import React, {useReducer}  from "react";
import {FirebaseContext} from "./firebaseContext";
import axios from 'axios'
import {ADD_NOTE, FETCH_NOTE, firebaseReducer, REMOVE_NOTE, SHOW_LOADER} from "./firebaseReducer";

const databaseUrl = 'https://todobase-79e36.firebaseio.com/';

export const FirebaseState = ({children})=>{
    const initialState = {
        todoDate: [],
        loading: false
    };
    const [state, dispatch] = useReducer(firebaseReducer, initialState);
    const showLoader = ()=>{
        dispatch({type: SHOW_LOADER})
    };
    const addNote = async (title)=>{
        const note = {
            label: title,
            important: false,
            done: false
        };
        const res = await axios.post(`${databaseUrl}/todoDate.json`, note);
        dispatch({type: ADD_NOTE, payload: note});
        console.log('addote',  res.data)
    }
    const fetchNotes = async () =>{
        // showLoader();
        const res = await axios.get(`${databaseUrl}/todoDate.json`);
        const payload = Object.keys(res.data).map(key=>{
            return{
                ...res.data[key],
                key
            }
        });
        dispatch({type: FETCH_NOTE, payload});
    };
    const removedNote = async (id)=>{
        const res = await axios.delete(`${databaseUrl}/todoDate/${id}.json`);
        dispatch({
            type: REMOVE_NOTE,
            payload: id
        })
    };
    return(
        <FirebaseContext.Provider
            value={{
                removedNote,
                fetchNotes,
                addNote,
                showLoader,
                loading: state.loading,
                todoDate: state.todoDate
            }}
        >
            {children}
        </FirebaseContext.Provider>
    )
}