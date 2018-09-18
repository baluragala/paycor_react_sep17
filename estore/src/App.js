import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    let message = "Hello React";
    let fruits = ["Apple", "Banana", "Chikoo"];
    return (
      <div>
        {/* this 
      is 
    only 
  commment syntax is JSX*/}
        <p
          title="this is jsx expression"
          className="info high"
          style={{
            backgroundColor: "orange",
            fontSize: 30
          }}
          myCustomAttribute="1"
        >
          {message}
        </p>
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
