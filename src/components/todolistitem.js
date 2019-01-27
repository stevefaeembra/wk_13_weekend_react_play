import React, { Component } from 'react';

class ToDoListItem extends Component {

  render() {
    return (
      <div class="todolist-item">
        <div class="todolist-item-id">
          {this.props.id}
        </div>
        <div class="todolist-item-text">
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default ToDoListItem;
