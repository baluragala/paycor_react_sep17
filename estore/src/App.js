import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <Route exact path="/products" component={ProductList} />
        <Route path="/products/new" component={AddProduct} />
        <Footer />
      </div>
    );
  }
}

export default App;
