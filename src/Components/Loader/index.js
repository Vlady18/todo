import React from "react";
import classes from './Loader.module.css'

const Loader = ()=>{
    return(
        <div className={classes.Loader}>
            <div className="spinner-grow text-info" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>

    )
}
export default Loader;