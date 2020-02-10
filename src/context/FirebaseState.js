import React, {useReducer}  from "react";
import {FirebaseContext} from "./firebaseContext";
import axios from 'axios'
import {
    ADD_NOTE,
    FETCH_NOTE,
    firebaseReducer,
    PROPERTY_NOTE,
    REMOVE_NOTE,
    SHOW_LOADER
} from "./firebaseReducer";

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
        // showLoader();
        try{
            const note = {
                label: title,
                important: false,
                done: false
            };
            // throw new Error('123');
            const res = await axios.post(`${databaseUrl}/todoDate.json`, note);
            dispatch({type: ADD_NOTE, payload: note});
        } catch(e){
            throw new Error(e.message);
        }
    }
    const fetchNotes = async () =>{
        showLoader();
        const res = await axios.get(`${databaseUrl}/todoDate.json`);
        // if(!res.data){
        //     return
        // }
        const payload = Object.keys(res.data).map(key=>{
            return{
                ...res.data[key],
                key
            }
        });
        dispatch({type: FETCH_NOTE, payload});
    };
    const changeProperty = async (id, prop)=>{
        const idx = state.todoDate.findIndex(el => el.key === id);
        const oldItem = state.todoDate[idx];
        const newItem = {...oldItem, [prop]: !oldItem[prop]};
        const resp = await axios.put(`${databaseUrl}/todoDate/${id}.json`, newItem).then((res)=>{
            // debugger
            const payload = {
                todoDate: [
                    ...state.todoDate.slice(0, idx),
                    res.data,
                    ...state.todoDate.slice(idx + 1)
                ]
            };
            dispatch({type: PROPERTY_NOTE, payload: payload.todoDate});

        });
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
                todoDate: state.todoDate,
                changeProperty
            }}
        >
            {children}
        </FirebaseContext.Provider>
    )
}