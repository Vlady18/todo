import React, {useContext, useEffect} from 'react'
import classes from './TodoList.module.css'
import ListItem from "../ListItem";
import {FirebaseContext} from "../../context/firebaseContext";
const TodoList = ({todoDate, doneToggle, importantToggle, removeItem}) =>{

    return(
        <ul className={classes.TodoList + ' list-group'}>
        {todoDate ? todoDate.map((el)=>{
                return(
                    <ListItem
                        key={el.key}
                        label={el.label}
                        important={el.important}
                        done={el.done}
                        // doneToggle={() => doneToggle(el.key)}
                        importantToggle={()=> importantToggle(el.key)}
                        removeItem={() => removeItem(el.key)}
                    />
                )
            })
            : null}
        </ul>
    )
}
export default TodoList