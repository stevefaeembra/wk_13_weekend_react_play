import React, { Component } from 'react';
import ToDoListItem from '../components/todolistitem';
import {connect} from 'react-redux';

class ToDoList extends Component {

  render() {
    // can't do for loop inside JSX, need to build array outside
    // and inject the array
    let items = [];
    this.props.toDoItems.forEach((item) => {
      items.push(<ToDoListItem key={item.id} id={item.id} text={item.text} completed={item.completed}/>)
    })
    return (
      <div className="todolist">
        <h2>To-Do List</h2>
        {items}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  //maps state onto props...
  return {toDoItems: state.toDoItems}
}

export default connect(mapStateToProps)(ToDoList);
