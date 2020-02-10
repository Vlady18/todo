import React from 'react';
import classes from './Header.module.css'
const Header=({doneCount, toDoCount})=>{
    return(
        <div className={classes.header}>
            <h1>Todo List</h1>
            {/*<h6>{toDoCount} more to do, {doneCount} done</h6>*/}
        </div>
    )
}
export default Header