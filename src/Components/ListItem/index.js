import React from "react";
import classes from './ListItem.module.css'

const ListItem = ({label, important, done, doneToggle, importantToggle, removeItem}) => {
    return(
            <li
                className={`list-group-item ${classes.ListItem}`}
            >
                <span
                    onClick={doneToggle}
                    className={ done ? `${classes.done}` : '' || important ? `${classes.important}` : ''}
                    >
                    {label}
                </span>
                <div className='btn-group'>
                    <button
                        className={`btn ${important ? 'btn-success' : 'btn-outline-success'}`}
                        onClick={importantToggle}
                    ><i className="fa fa-exclamation" aria-hidden="true"></i></button>
                    <button className="btn btn-outline-danger"
                            onClick={removeItem}
                    ><i className="fa fa-times" aria-hidden="true"></i></button>
                </div>
            </li>
    )
}
export default ListItem