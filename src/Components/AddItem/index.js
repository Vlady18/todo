import React, {useContext, useState} from 'react'
import classes from './AddItem.module.css'
import {FirebaseContext} from "../../context/firebaseContext";

const AddItem = ({fetchNotes}) =>{
    const firebase = useContext(FirebaseContext);
    const [count, setCount] = useState('');
    const changeInput = (e) =>{
        setCount(e.target.value)
    };
    const addItemSet = (e) =>{
        e.preventDefault();
        if(count !== '' && count.trim() !== ''){
            firebase.addNote(count).then(()=>{
                // fetchNotes()
            // addItem(e, count);
            }).catch((e)=>{
                alert('Что-то пошло не так!');
            });
            setCount('');
        }
    };
    return(
        <form className={classes.AddItem}
              onSubmit={(e) => addItemSet(e)}>
            <input className="form-control"
                   value={count}
                   placeholder='Enter task'
                   onChange={(e) => changeInput(e)}/>
            <button
                className='btn btn-info'
            >Add</button>
        </form>
    )
}

export default AddItem