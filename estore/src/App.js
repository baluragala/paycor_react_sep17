import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import NoMatch from "./components/NoMatch";
import ProductDetail from "./components/ProductDetail";
import OfferList from "./components/OfferList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: true };
  }
  _renderRoutes() {
    return (
      <Switch>
        <Route exact path="/products" component={ProductList} />
        <Route
          path="/products/new"
          render={props =>
            this.state.isLoggedIn ? (
              <AddProduct {...props} myProp="1" />
            ) : (
              <Redirect to="/products" />
            )
          }
        />
        <Route path="/products/:pid" component={ProductDetail} />
        <Route path="/offers" component={OfferList} />
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
