import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import NoMatch from "./components/NoMatch";
import ProductDetail from "./components/ProductDetail";

class App extends Component {
  _renderRoutes() {
    return (
      <Switch>
        <Route exact path="/products" component={ProductList} />
        <Route path="/products/new" component={AddProduct} />
        <Route path="/products/:pid" component={ProductDetail} />
        <Route component={NoMatch} />
      </Switch>
    );
  }

  render() {
    return (
      <div>
        <Header />
        <NavBar />
        {this._renderRoutes()}
        <Footer />
      </div>
    );
  }
}

export default App;
