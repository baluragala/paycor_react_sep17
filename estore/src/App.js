import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    let message = "Hello React";
    let fruits = ["Apple", "Banana", "Chikoo"];
    return (
      <div>
        <p>{message}</p>
        <p>{message.toUpperCase()}</p>
        <p>{new Date().toDateString()}</p>
        <p>{2 + 2 == 4 ? "Yes" : "No"}</p>
        <ul>
          {fruits.map(f => (
            <li>{f}</li>
          ))}
        </ul>
        <p>{[1, 2, 3, 4, 5, 6]}</p>
      </div>
    );
  }
}

export default App;
