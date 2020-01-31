import React from 'react'
import classes from './TodoList.module.css'
import ListItem from "../ListItem";
const TodoList = ({todoDate, donetoggle}) =>{
    return(
        <ul className={classes.ListItemWrap + ' list-group'}>

        {todoDate.map((el)=>{
                return(
                    <ListItem
                        key={el.id}
                        label={el.label}
                        important={el.important}
                        done={el.done}
                        donetoggle={donetoggle(el.id)}
                    />
                )
            })}
        </ul>
    )
}
export default TodoList