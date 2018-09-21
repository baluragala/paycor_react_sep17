import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Index = () => {
  return (
    <div>
      Hello React 16.3!
      <Date />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
