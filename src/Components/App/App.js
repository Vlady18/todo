import React, {useContext, useEffect, useState} from 'react';
import './App.css';
import Header from "../Header";
import Filter from "../Filter";
import TodoList from "../TodoList";
import AddItem from "../AddItem";
import {FirebaseContext} from "../../context/firebaseContext";
const App = () => {
    const { todoDate, fetchNotes, removedNote, changeProperty } = useContext(FirebaseContext);
    useEffect(()=>{
        fetchNotes();
        // eslint-disable-next-line
    }, []);
    const [filterButton, usefilterButton] = useState('All');
    const [quickSearchText, useQuickSearchText] = useState('');
    const [filterButtons, usefilterButtons] = useState([
        {label: 'All'},
        {label: 'Done'},
        {label: 'Active'}
    ]);
    // maxId = 100;
    // state={
    //     todoDate: [
    //         {label: 'Drink Coffe', important: false, done: true, id: 1},
    //         {label: 'Make Awesome App', important: false, done: false, id: 2},
    //         {label: 'Learn React', important: true, done: false, id: 3},
    //     ],
    //     filterButtons: [
    //         {label: 'All'},
    //         {label: 'Done'},
    //         {label: 'Active'}
    //     ],
    //     quickSearchText: '',
    //     filterButton: 'All'
    // };
    const QuickSearch = (e) =>{
        useQuickSearchText(e.target.value);
    };
    const quickSearchVisible = (arr, quickSearchText)=>{
        // debugger
        const newArr = arr.filter((el)=> el.label.toLowerCase().indexOf(quickSearchText.toLowerCase()) !== -1);
        if(quickSearchText === ''){
            return arr
        }
        return newArr
    };

    // const addItem = (e, label, important=false, done=false) =>{
    //     e.preventDefault();
    //     const newItem = {
    //         label, important, done
    //     };
    //     this.setState(({todoDate})=>{
    //         return{
    //             todoDate: [...todoDate, newItem]
    //         }
    //     })
    // };
    const removeItem = (id) =>{
        // this.setState(({todoDate})=>{
        //     const idx = todoDate.findIndex(el => el.id === id);
        //     return{
        //         todoDate: [
        //             ...todoDate.slice(0, idx),
        //             ...todoDate.slice(idx + 1)
        //         ]
        //     }
        // })

    };
    const propertyToggle = (id, prop) =>{
        changeProperty(id, prop)
        // this.setState(({todoDate})=>{
        //     const idx = todoDate.findIndex(el => el.id === id);
        //     const oldItem = todoDate[idx];
        //     const newItem = {...oldItem, [prop]: !oldItem[prop]};
        //     return{
        //         todoDate: [
        //             ...todoDate.slice(0, idx),
        //             newItem,
        //             ...todoDate.slice(idx + 1)
        //         ]
        //     }
        // });
    };
    const doneToggle = (id)=>{
        propertyToggle(id, 'done')
    };
    const importantToggle = (id) =>{
        propertyToggle(id, 'important')
    };
    const filterToggle = (arr, filterBy) =>{
        switch (filterBy) {
            case 'All':
                return arr;
            case 'Active':
                return arr.filter((el)=> !el.done);
            case 'Done':
                return arr.filter((el)=> el.done);
            default:
                return arr;
        }
    };
    // const changeFilterButton = (label) =>{
    //     // const {filterButtons} = this.state;
    //     const idx = filterButtons.findIndex(el=> el.label === label);
    //     const oldItem = filterButtons[idx];
    //     this.setState(({filterButtons, filterButton})=>{
    //         const newItem = {...oldItem, active: !filterButtons.active};
    //         return {
    //             filterButtons: [
    //                 ...filterButtons.slice(0, idx),
    //                 newItem,
    //                 ...filterButtons.slice(idx + 1),
    //             ],
    //             filterButton: label
    //         }
    //     })
    // };
  // const doneCount = todoDate.filter(el =>{
  //     return (el.done)
  // }).length;
  // const toDoCount = todoDate.length - doneCount;
  const visibleItems = filterToggle(quickSearchVisible(todoDate, quickSearchText.trim()), filterButton);
    return (
        <div className='container'>
            <div className="App">
                {/*<Header*/}
                {/*    // doneCount={doneCount}*/}
                {/*    // toDoCount={toDoCount}*/}
                {/*/>*/}
                {/*<Filter*/}
                {/*    quickSearchText={quickSearchText}*/}
                {/*    quickSearch={QuickSearch}*/}
                {/*    filterButtons={filterButtons}*/}
                {/*    // changeFilterButton={changeFilterButton}*/}
                {/*    filterButton={filterButton}*/}
                {/*/>*/}
                <TodoList
                    todoDate = {visibleItems}
                    doneToggle={doneToggle}
                    importantToggle={importantToggle}
                    removeItem = {removedNote}
                />
                <AddItem/>
            </div>
        </div>
    );
}
export default App;
