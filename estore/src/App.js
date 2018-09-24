import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import NoMatch from "./components/NoMatch";
import Loadable from "react-loadable";

const LoadableProductList = Loadable({
  loader: () => import("./components/ProductList"),
  loading: () => <p>Loading...</p>
});

const LoadableAddProduct = Loadable({
  loader: () => import("./components/AddProduct"),
  loading: () => <p>Loading...</p>
});

const LoadableProductDetail = Loadable({
  loader: () => import("./components/ProductDetail"),
  loading: () => <p>Loading...</p>
});

const LoadableOfferList = Loadable({
  loader: () => import("./components/OfferList"),
  loading: () => <p>Loading...</p>
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: true };
  }
  _renderRoutes() {
    return (
      <Switch>
        <Route exact path="/products" component={LoadableProductList} />
        <Route
          path="/products/new"
          render={props =>
            this.state.isLoggedIn ? (
              <LoadableAddProduct {...props} myProp="1" />
            ) : (
              <Redirect to="/products" />
            )
          }
        />
        <Route path="/products/:pid" component={LoadableProductDetail} />
        <Route path="/offers" component={LoadableOfferList} />
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
