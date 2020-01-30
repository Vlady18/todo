import React from 'react';
import classes from './Header.module.css'
class Header extends React.Component{
    render(){
        return(
            <div className={classes.header}>
                <h1>Todo List</h1>
                <h6>3 more to do, 0 done</h6>
            </div>
        )
    }
}

export default Header