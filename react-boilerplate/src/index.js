import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

setTimeout(function() {
  ReactDOM.render(<App />, document.getElementById("root"));
}, 10000);
