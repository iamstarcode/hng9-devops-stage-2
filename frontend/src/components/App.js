import React, { Component } from "react";
import logo from "../img/hng9.png";
import "../css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">HNGi9 DevOps Stage2 Task</h1>
        </header>
        S
        <p className="App-intro">
          This task was submitted by <b>iamstarcode</b>
        </p>
      </div>
    );
  }
}

export default App;
