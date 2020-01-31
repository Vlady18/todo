import React from "react";
import classes from './ListItem.module.css'
const ListItem = ({label, important, done, donetoggle}) => {
    return(
            <li className={'list-group-item'}
                onClick={donetoggle}
            >{label}</li>
    )
}
export default ListItem