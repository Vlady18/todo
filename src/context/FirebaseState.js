import React, {useReducer}  from "react";
import {FirebaseContext} from "./firebaseContext";
import axios from 'axios'
import {
    ADD_NOTE, DONE_LENGTH,
    FETCH_NOTE,
    firebaseReducer, HIDE_LOADER,
    PROPERTY_NOTE,
    REMOVE_NOTE,
    SHOW_LOADER
} from "./firebaseReducer";

const databaseUrl = 'https://todobase-79e36.firebaseio.com/';

export const FirebaseState = ({children})=>{
    const initialState = {
        todoDate: [],
        loading: false,
    };
    const [state, dispatch] = useReducer(firebaseReducer, initialState);
    const showLoader = ()=>{
        dispatch({type: SHOW_LOADER})
    };
    const addNote = async (title)=>{
        showLoader();
        try{
            const note = {
                label: title,
                important: false,
                done: false
            };
            // throw new Error('123');
            const res = await axios.post(`${databaseUrl}/todoDate.json`, note).then((res)=>{
                note.key = res.data.name;
                dispatch({type: ADD_NOTE, payload: note});
            });

        } catch(e){
            throw new Error(e.message);
        }
    }

    const fetchNotes = async () =>{
        showLoader();
        try {
            const res = await axios.get(`${databaseUrl}/todoDate.json`);
            const arrPayload = Object.keys(res.data);
            // debugger
            const payload = arrPayload.map(key=>{
                return{
                    ...res.data[key],
                    key
                }
            });
            dispatch({type: FETCH_NOTE, payload});
        } catch (e) {
            dispatch({type: HIDE_LOADER});
            throw new Error(e.message)
        }
    };
    const changeProperty = async (id, prop)=>{
        showLoader();
        const idx = state.todoDate.findIndex(el => el.key === id);
        const oldItem = state.todoDate[idx];
        // debugger
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
        // debugger
        showLoader();
        try{
            await axios.delete(`${databaseUrl}/todoDate/${id}.json`);
            dispatch({
                type: REMOVE_NOTE,
                payload: id
            })
        } catch{
            dispatch({type: HIDE_LOADER})
        }
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