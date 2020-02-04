import React from "react";
import {FirebaseContext} from "./firebaseContext";
import axios from 'axios'


export const FirebaseState = ({children})=>{
    const addNote = async ()=>{
        const res = await axios.post();
    }
    const fetchNote = async ()=>{
        const res = await axios.get()
    }
    return(
        <FirebaseContext.Provider
            addNote={addNote}
            fetchNote={fetchNote}
        >
            {children}
        </FirebaseContext.Provider>
    )
}