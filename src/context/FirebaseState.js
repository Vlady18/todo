import React from "react";
import {FirebaseContext} from "./firebaseContext";


export const FirebaseState = ({children})=>{
    const addNote = async ()=>{
        const res = await axios.post()
    }
    return(
        <FirebaseContext.Provider

        >
            {children}
        </FirebaseContext.Provider>
    )
}