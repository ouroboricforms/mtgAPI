import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PersonList from './Components/PersonList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        </header>
        <PersonList />
      </div>
    );
  }
}

export default App;
