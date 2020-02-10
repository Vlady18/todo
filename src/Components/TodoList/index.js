import React from 'react'
import classes from './TodoList.module.css'
import ListItem from "../ListItem";
import {TransitionGroup, CSSTransition} from 'react-transition-group'
const TodoList = ({todoDate, doneToggle, importantToggle, removeItem}) =>{

    return(
        <TransitionGroup component="ul" className={classes.TodoList + ' list-group'}>
        {todoDate ? todoDate.map((el)=>{
                return(
                    <CSSTransition
                        key={el.key}
                        classNames='noteTransition'
                        timeout={800}
                    >
                        <ListItem
                            label={el.label}
                            important={el.important}
                            done={el.done}
                            // doneToggle={() => doneToggle(el.key)}
                            importantToggle={()=> importantToggle(el.key)}
                            removeItem={() => removeItem(el.key)}
                        />
                    </CSSTransition>
                )
            })
            : null}
        </TransitionGroup>
    )
}
export default TodoList