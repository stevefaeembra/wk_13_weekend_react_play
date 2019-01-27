import React, { Component } from 'react';
import logo from './logo.svg';
import Greeting from './components/greeting';
import ToDoList from './containers/todolist';

// main
class App extends Component {
  render() {
    return (
      <div className="App">
        <Greeting salve="Hola" name="Stevie Boy!"/>
        <ToDoList />
      </div>
    );
  }
}

export default App;
