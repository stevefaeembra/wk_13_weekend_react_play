import React, { Component } from 'react';
import ToDoListItem from './todolistitem';

class ToDoList extends Component {

  constructor(props) {
    super(props);
    this.state =
    {
      toDoItems: [{
        id: 1,
        text: "Learn react.js"
      },
      {
        id: 2,
        text: "Buttscratcher! Buttscratcher!"
      }]
    }
  }

  render() {
    // can't do for loop inside JSX, need to build array outside
    // and inject the array
    let items = [];
    this.state.toDoItems.forEach((item) => {
      items.push(<ToDoListItem id={item.id} text={item.text} />)
    })
    return (
      <div class="todoitem">
        {items}
      </div>
    );
  }
}

export default ToDoList;
