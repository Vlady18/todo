import React from 'react'
import classes from './Filter.module.css'

const Filter = () =>{
    return(
        <div className={classes.Filter}>
            <div className="form-group">
                <button type="button" className="btn btn-primary">All</button>
                <button type="button" className="btn btn-light">Active</button>
                <button type="button" className="btn btn-light">Done</button>
            </div>
            <div className="form-group">
                <input type="text"
                       className="form-control"
                       placeholder="Type to search"/>
            </div>

        </div>
    )
}
export default Filter

