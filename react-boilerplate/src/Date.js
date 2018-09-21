import React, { Component } from "react";

class Date extends Component {
  render() {
    return <div>{new Date().toISOString()}</div>;
  }
}

export default Date;
