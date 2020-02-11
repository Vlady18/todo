import React from 'react';
import classes from './Header.module.css'
const Header=({toDoCount, toDoneCount = 100})=>{
    return(
        <div className={classes.header}>
            <h1>Todo List</h1>
            <p>{toDoCount} more to do, {toDoneCount} done</p>
        </div>
    )
}
export default Header