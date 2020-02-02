import React, {Component} from 'react';
import './App.css';
import Header from "../Header";
import Filter from "../Filter";
import TodoList from "../TodoList";
import AddItem from "../AddItem";

class App extends Component {
    maxId = 100;
    state={
        todoDate: [
            {label: 'Drink Coffe', important: false, done: true, id: 1},
            {label: 'Make Awesome App', important: false, done: false, id: 2},
            {label: 'Learn React', important: true, done: false, id: 3},
        ],
        filterButtons: [
            {label: 'All'},
            {label: 'Done'},
            {label: 'Active'}
        ],
        quickSearchText: '',
        filterButton: 'All'
    };
    quickSearch = (e) =>{
        this.setState({
            quickSearchText: e.target.value
        })
    };
    quickSearchVisible = (arr, quickSearchText)=>{
        const newArr = arr.filter((el)=> el.label.toLowerCase().indexOf(quickSearchText.toLowerCase()) !== -1);
        if(quickSearchText === ''){
            return arr
        }
        return newArr
    };
    propertyToggle = (id, prop) =>{
        this.setState(({todoDate})=>{
            const idx = todoDate.findIndex(el => el.id === id);
            const oldItem = todoDate[idx];
            const newItem = {...oldItem, [prop]: !oldItem[prop]};
            return{
                todoDate: [
                    ...todoDate.slice(0, idx),
                    newItem,
                    ...todoDate.slice(idx + 1)
                ]
            }
        })
    };
    addItem = (e, label, important=false, done=false) =>{
        e.preventDefault();
        const newItem = {
            label, important, done, id: this.maxId++
        };
        this.setState(({todoDate})=>{
            return{
                todoDate: [...todoDate, newItem]
            }
        })
    };
    removeItem = (id) =>{
        this.setState(({todoDate})=>{
            const idx = todoDate.findIndex(el => el.id === id);
            return{
                todoDate: [
                    ...todoDate.slice(0, idx),
                    ...todoDate.slice(idx + 1)
                ]
            }
        })
    };
    doneToggle = (id)=>{
        this.propertyToggle(id, 'done')
    };
    importantToggle = (id) =>{
        this.propertyToggle(id, 'important')
    };
    filterToggle = (arr, filterBy) =>{
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
    changeFilterButton = (label) =>{
        const {filterButtons} = this.state;
        const idx = filterButtons.findIndex(el=> el.label === label);
        const oldItem = filterButtons[idx];
        this.setState(({filterButtons, filterButton})=>{
            const newItem = {...oldItem, active: !filterButtons.active};
            return {
                filterButtons: [
                    ...filterButtons.slice(0, idx),
                    newItem,
                    ...filterButtons.slice(idx + 1),
                ],
                filterButton: label
            }
        })
    };
  render(){
      const {todoDate, quickSearchText, filterButton} = this.state;
      const doneCount = todoDate.filter(el =>{
          return(el.done)
      }).length;
      const toDoCount = todoDate.length - doneCount;
      const visibleItems = this.filterToggle(this.quickSearchVisible(todoDate, quickSearchText.trim()), filterButton);
    return (
        <div className='container'>
            <div className="App">
                <Header
                    doneCount={doneCount}
                    toDoCount={toDoCount}
                />
                <Filter
                    quickSearchText={this.state.quickSearchText}
                    quickSearch={this.quickSearch}
                    filterButtons={this.state.filterButtons}
                    changeFilterButton={this.changeFilterButton}
                    filterButton={this.state.filterButton}
                />
                <TodoList
                    todoDate = {visibleItems}
                    doneToggle={this.doneToggle}
                    importantToggle={this.importantToggle}
                    removeItem = {this.removeItem}
                />
                <AddItem
                    addItem={this.addItem}
                />
            </div>
        </div>
    );
  }
}
export default App;
