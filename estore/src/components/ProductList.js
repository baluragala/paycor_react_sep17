import React, { Component } from "react";
import ProductListItem from "./ProductListItem";
import { connect } from "react-redux";
import { getProductsActionCreator } from "../actionCreators/product";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.onProductClicked = this.onProductClicked.bind(this);
    this.loadProducts = this.loadProducts.bind(this);
  }

  onProductClicked(title) {}

  loadProducts(e) {
    this.props.getProducts();
  }

  render() {
    return (
      <div>
        <h1 onMouseEnter={() => console.log("enter")}>
          Products ({this.props.msg})
        </h1>
        <button onClick={this.loadProducts}>Load Products</button>
        {this.props.isLoading ? <p>Loading..</p> : null}
        <ul>
          {this.props.prds.map(p => (
            <ProductListItem
              key={p.id}
              product={p}
              productClicked={this.onProductClicked}
            />
          ))}
        </ul>
      </div>
    );
  }
}

//map state to props

function mapStateToProps(appState) {
  return {
    prds: appState.productState.products,
    msg: appState.productState.message,
    isLoading: appState.productState.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: function() {
      dispatch(getProductsActionCreator());
    }
  };
}

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connectedComponent(ProductList);
