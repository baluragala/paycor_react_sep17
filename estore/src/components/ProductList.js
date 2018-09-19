import React, { Component } from "react";
import ProductListItem from "./ProductListItem";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      products: [
        {
          id: 1,
          title: "iphone x",
          price: 2000
        },
        {
          id: 2,
          title: "pixel xl",
          price: 1200
        },
        {
          id: 3,
          title: "note 7",
          price: 1000
        },
        {
          id: 4,
          title: "MI note",
          price: 600
        },
        {
          title: "pixel 3",
          price: 1000,
          id: 5
        }
      ]
    };

    this.timerHandle = setTimeout(() => {
      this.state.products.push({ id: 6, title: "iphone xs", price: 1999 });
      this.state.products[0] = { ...this.state.products[0], price: 888 };
      this.setState({ products: this.state.products });
    }, 5000);

    this.onProductClicked = this.onProductClicked.bind(this);
  }

  onProductClicked(title) {
    this.setState({ message: `${title} was clicked` });
  }

  loadProducts(e) {
    console.log(e.target);
    alert("Load Products");
  }

  componentWillUnmount() {
    clearTimeout(this.timerHandle);
  }

  render() {
    return (
      <div>
        <h1 onMouseEnter={() => console.log("enter")}>
          Products ({this.state.message})
        </h1>
        <button onClick={this.loadProducts}>Load Products</button>
        <ul>
          {this.state.products.map(p => (
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

export default ProductList;
