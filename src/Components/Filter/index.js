import React from 'react'
import classes from './Filter.module.css'

const Filter = ({quickSearch, quickSearchText, filterButtons, changeFilterButton, filterButton}) =>{
    return(
        <div className={classes.Filter}>
            <div className="form-group">
                {
                    filterButtons.map(el => {
                        const className = filterButton === el.label;
                        return(
                            <button
                                type="button"
                                key={el.label}
                                // onClick={()=> changeFilterButton(el.label)}
                                className={`btn ${className ? 'btn-primary' : 'btn-light'}`}>
                                {el.label}
                            </button>
                        )
                    })
                }
            </div>
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

