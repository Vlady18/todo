import React from 'react'
import classes from './Filter.module.css'

const Filter = ({quickSearch, quickSearchText, filterButtons, changeFilterButton, filterButton}) =>{
    return(
        <div className={classes.Filter}>
            <div className="form-group">
                <input type="text"
                       value={quickSearchText}
                       className="form-control"
                       onChange={(e) => quickSearch(e)}
                       placeholder="Type to search"/>
            </div>
        </div>
    )
}
export default Filter

