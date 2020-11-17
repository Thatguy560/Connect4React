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
  if (action.type === "DROP_TILE") {
    const tile = state.current;
    const col = state.board[action.payload].concat(tile); // Our new Col
    console.log(state.board); // Checking if cells are being pushed into

    const board = state.board.slice(); // Slice gives us a copy of the board so we don't change immutability.
    board[action.payload] = col; // Need to update column with new tile

    return {
      current: state.current === "red" ? "yellow" : "red",
      board: board,
    };
  }
  return state;
}

export default createStore(reducer, initial);
