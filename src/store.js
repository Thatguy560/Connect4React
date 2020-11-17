import { createStore } from "redux";

// Initial state for my store.
const initial = {
  current: "red", // can also be 'yellow'
  board: [
    [], // col0
    [], // col1
    [], // col2
    [], // col3
    [], // col4
    [], // col5
    [], // col6
  ],
};

function reducer(state, action) {
  if (action.type === "DROP_TILE") {
    console.log("dropping onto col" + action.payload);
  }
  return state;
}

export default createStore(reducer, initial);
