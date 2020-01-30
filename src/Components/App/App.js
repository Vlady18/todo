import React, {Component} from 'react';
import './App.css';
import Header from "../Header";
import Filter from "../Filter";

class App extends Component {
  render(){
    return (
        <div className='container'>
            <div className="App">
                <Header />
                <Filter />
            </div>
        </div>
    );
  }
}

export default App;
