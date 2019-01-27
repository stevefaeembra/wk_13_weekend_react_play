import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/greeting';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greeting name="Stevie Boy!"/>
      </div>
    );
  }
}

export default App;
