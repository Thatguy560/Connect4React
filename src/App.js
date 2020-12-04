import React, { Component } from "react";
import "./App.css";
import GridCell from "./GridCell.js";

class App extends Component {
  render() {
    const cells = [];

    for (let y = 5; y >= 0; y--) {
      const row = [];

      for (let x = 0; x < 7; x++) {
        row.push(<GridCell key={x} x={x} y={y} />);
      }

      cells.push(
        <div key={y} className="row">
          {row}
        </div>
      );
    }

    function refreshPage() {
      window.location.reload(false);
    }

    return (
      <div className="App">
        {cells} {/* Contains Grid */}
        <div>
          {/* <div>
            <h1>test</h1>
          </div> */}
          <h1>
            <button type="button" className="reset" onClick={refreshPage}>
              <span>Reset board</span>
            </button>
          </h1>
        </div>
      </div>
    );
  }
}

export default App;
