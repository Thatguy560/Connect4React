import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

import GridCell from "./GridCell.js";

class App extends Component {
  render() {
    const cells = [];

    for (let y = 0; y < 6; y++) {
      const row = [];

      for (let x = 0; x < 7; x++) {
        row.push(<GridCell x={x} y={y} />);
      }

      cells.push(<div className="row">{row}</div>);
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Test</h1>
        </header>
        {cells}
      </div>
    );
  }
}

export default App;
