import React, {useContext, useEffect, useState} from 'react';
import './App.css';
import Header from "../Header";
import Filter from "../Filter";
import TodoList from "../TodoList";
import AddItem from "../AddItem";
import {FirebaseContext} from "../../context/firebaseContext";
import Loader from "../Loader";

const App = () => {
    const { todoDate, fetchNotes, removedNote, changeProperty, loading } = useContext(FirebaseContext);
    useEffect(()=>{
        fetchNotes().then(()=>{
        }).catch((e)=>{
            alert('Нет доступных записей');
        })
        // eslint-disable-next-line
    }, []);
    const [quickSearchText, useQuickSearchText] = useState('');


    const QuickSearch = (e) =>{
        useQuickSearchText(e.target.value);
    };
    const quickSearchVisible = (arr, quickSearchText)=>{
        const newArr = arr.filter((el)=> el.label.toLowerCase().indexOf(quickSearchText.toLowerCase()) !== -1);
        if(quickSearchText === ''){
            return arr
        }
        return newArr
    };
    const propertyToggle = (id, prop) =>{
        changeProperty(id, prop)
    };
    // const doneToggle = (id)=>{
    //     propertyToggle(id, 'done')
    // };
    const importantToggle = (id) =>{
        propertyToggle(id, 'important')
    };
    const visibleItems = quickSearchVisible(todoDate, quickSearchText.trim());
    return (
        <div className='container'>
            <div className="App">
                <Header/>
                <Filter
                    quickSearchText={quickSearchText}
                    quickSearch={QuickSearch}
                />
                {
                    loading
                    ? <Loader />
                    : null
                }
                <TodoList
                    todoDate = {visibleItems}
                    importantToggle={importantToggle}
                    removeItem = {removedNote}
                />
                <AddItem/>
            </div>
        </div>
    );
}
export default App;
