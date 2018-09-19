import React, { Component } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <ul>
        <li>
          <NavLink exact to="/products" activeClassName="active">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/products/new" activeClassName="active">
            New Product
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default NavBar;
