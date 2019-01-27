const initialState = {
  toDoItems: [{
    id: 1,
    text: "Learn react.js and Redux",
    completed: false
  },
  {
    id: 2,
    text: "???",
    completed: false
  },
  {
    id: 3,
    text: "Profit!!",
    completed: false
  }
  ]
};

const todos = (state =  initialState, action) => {
  // currently just returns original state
  return state;
}

export default todos;
