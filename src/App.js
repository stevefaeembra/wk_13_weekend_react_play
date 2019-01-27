import React, { Component } from 'react';
import logo from './logo.svg';
import Greeting from './components/greeting';
import ToDoList from './containers/todolist';

// main
class App extends Component {
  render() {
    return (
      <div className="App">
        <Greeting salve="Hello" name="World!"/>
        <ToDoList />
      </div>
    );
  }
}

export default App;
