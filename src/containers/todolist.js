import React, { Component } from 'react';
import ToDoListItem from '../components/todolistitem';
import {connect} from 'react-redux';

class ToDoList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    // can't do for loop inside JSX, need to build array outside
    // and inject the array
    let items = [];
    this.props.toDoItems.forEach((item) => {
      items.push(<ToDoListItem id={item.id} text={item.text} />)
    })
    return (

      <div class="todolist">
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
