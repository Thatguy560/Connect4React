import React, { Component } from "react";

class GridCell extends Component {
  handleClick() {
    console.log(`Clicked on column ${this.props.x}`);
  }

  render() {
    return (
      <div className="cell" onClick={() => this.handleClick()}>
        <p>
          {this.props.x}, {this.props.y}
        </p>
      </div>
    );
  }
}

export default GridCell;
