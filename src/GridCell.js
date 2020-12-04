import React, { Component } from "react";
import { connect } from "react-redux";
import { dropCounter } from "./actions";

class GridCell extends Component {
  handleClick() {
    this.props.sendCounterDrop(this.props.x);
    console.log(this.props.board);
  }

  render() {
    const board = this.props.board;
    const x = this.props.x;
    const y = this.props.y;
    let classes = "cell";
    let str;
    if (board[x][y] !== undefined) {
      if (board[x][y] === "red") {
        classes += " p2";
        // str = <h1>Red's turn</h1>;
      } else {
        classes += " p1";
        // str = <h1>Yellow's turn</h1>;
      }
    }

    if (board[x][y] === "red") {
      console.log("RED");
    }

    return (
      <div className={classes} onClick={() => this.handleClick()}>
        <p>
          {this.props.x}, {this.props.y}
          {str}
        </p>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {
    board: state.board,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    sendCounterDrop: (col) => dispatch(dropCounter(col)),
  };
};

export default connect(stateToProps, dispatchToProps)(GridCell);
