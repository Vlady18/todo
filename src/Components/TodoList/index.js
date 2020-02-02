import React from 'react'
import classes from './TodoList.module.css'
import ListItem from "../ListItem";
const TodoList = ({todoDate, doneToggle, importantToggle, removeItem}) =>{
    return(
        <ul className={classes.TodoList + ' list-group'}>
        {todoDate.map((el)=>{
                return(
                    <ListItem
                        key={el.id}
                        label={el.label}
                        important={el.important}
                        done={el.done}
                        doneToggle={() => doneToggle(el.id)}
                        importantToggle={()=> importantToggle(el.id)}
                        removeItem={() => removeItem(el.id)}
                    />
                )
            })}
        </ul>
    )
}
export default TodoList