import React, { Component } from 'react';

class ToDoListItem extends Component {

  render() {
    const done = this.props.completed;
    let completedText = done ? "Done!" : "To Do";
    return (
      <div className="todolist-item">
        <div className="todolist-item-id">
          {this.props.id}
        </div>
        <div className="todolist-item-text">
          {this.props.text}
        </div>
        <div className="todolist-item-status">
          {done}
        </div>
      </div>
    );
  }
}

export default ToDoListItem;
