import React, { Component } from "react";
import ProductListItem from "./ProductListItem";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

    setTimeout(() => {
      this.state.products.push({ id: 6, title: "iphone xs", price: 1999 });
      this.setState({ products: this.state.products });
    }, 5000);
  }

  render() {
    return (
      <div>
        <h1>Products</h1>
        <ul>
          {this.state.products.map(p => (
            <ProductListItem product={p} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductList;
