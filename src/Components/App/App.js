import React, {Component} from 'react';
import './App.css';
import Header from "../Header";
import Filter from "../Filter";
import TodoList from "../TodoList";

class App extends Component {
    state={
        todoDate: [
            {label: 'Drink Coffe', important: false, done: false, id: 1},
            {label: 'Make Awesome App', important: false, done: false, id: 2},
            {label: 'Learn React', important: true, done: false, id: 3},
        ]
    }
    donetoggle = (id)=>{
        console.log(id);
    }
  render(){
    return (
        <div className='container'>
            <div className="App">
                <Header />
                <Filter />
                <TodoList
                    todoDate = {this.state.todoDate}
                    donetoggle={this.donetoggle}
                />
            </div>
        </div>
    );
  }
}

export default App;
