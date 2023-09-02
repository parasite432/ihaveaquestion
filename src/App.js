import logo from "./logo.svg";
import "./App.css";

import React, { Component, useState } from "react";

function randomNumberInRange(min, max) {
  // 👇️ get number between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  hoverNo = () => {
    this.setState({
      yoffset: randomNumberInRange(1, 500),
      xoffset: randomNumberInRange(1, 500),
    });
    this.state.counter++;
  };

  render() {
    var array = [
      "say yesssss",
      "that's quite sad",
      "noooo pleaseeeee",
      "awwwww, why????",
      "but i love you :(",
      "I understand your decision, but say yes.",
      "a great man once said, say yes",
      "but why????",
      "my head is under water",
    ];

    return (
      <div className="maindiv">
        {this.state.counter === 0 ? (
          <h3></h3>
        ) : (
          <h3 style={{ color: "red" }}>{array[randomNumberInRange(0, 3)]}</h3>
        )}

        <h1 className="center">Will you be my gf?</h1>
        <div className="buttondiv">
          <button>
            {" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://images.pexels.com/photos/850359/pexels-photo-850359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            >
              Yes
            </a>{" "}
          </button>
          <button
            onMouseEnter={this.hoverNo}
            style={{
              position: "absolute",
              left: `${this.state.xoffset}px`,
              top: `${this.state.yoffset}px`,
            }}
          >
            No
          </button>
        </div>
      </div>
    );
  }
}

export default App;
