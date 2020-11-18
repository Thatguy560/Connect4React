import { createStore } from "redux";

// Initial state for my store.
const initial = {
  current: "red", // can also be 'yellow'
  board: [
    [], // column at index 0
    [], // column at index 1
    [], // column at index 2
    [], // column at index 3
    [], // column at index 4
    [], // column at index 5
    [], // column at index 6
  ],
};
// action.payload can be used as an index.
function reducer(state, action) {
  if (
    action.type === "DROP_COUNTER" &&
    state.board[action.payload].length <= 5
  ) {
    // let len = state.board;
    let arr = state.board[action.payload]; // iterate through this
    const counter = state.current;
    const col = state.board[action.payload].concat(counter); // Our new Col
    // console.log(state.board[action.payload]);

    if (arr.length === 3) {
      console.log("you win");
    }

    // if (len[0].length + len[1].length + len[2].length === 15) {
    //   console.log("No one wins");
    // }

    // if (state.board[action.payload].length === 3) {
    //   console.log("you win");
    // }

    const board = state.board.slice(); // Slice gives us a copy of the board so we don't change immutability.
    board[action.payload] = col; // Need to update column with new counter

    return {
      current: state.current === "red" ? "yellow" : "red",
      board: board,
    };
  }
  return state;
}

export default createStore(reducer, initial);
