import React, { Component } from "react";
import "./AddProduct.css";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", price: "", category: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.assignStockEleRef = this.assignStockEleRef.bind(this);
  }

  handleChange(e) {
    switch (e.target.name) {
      case "title":
        this.setState({ title: e.target.value });
        break;
      case "price":
        this.setState({ price: e.target.value });
        break;
      case "category":
        this.setState({ category: e.target.value });
        break;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state, this.stockEleRef.value);
  }

  assignStockEleRef(ele) {
    console.dir(ele);
    this.stockEleRef = ele;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Product Title</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <label htmlFor="price">Product Price</label>
          <input
            name="price"
            type="number"
            value={this.state.price}
            onChange={this.handleChange}
          />
          <label htmlFor="stock">Product Stock</label>
          <input name="price" type="number" ref={this.assignStockEleRef} />
          <label htmlFor="category">Product Category</label>
          <select
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
          >
            <option value="">Select Category</option>
            <option value="ELECTRONICS">ELECTRONICS</option>
            <option value="GROCERY">GROCERY</option>
            <option value="CLOTHING">CLOTHING</option>
          </select>

          <input type="submit" value="Add Product" />
        </form>
      </div>
    );
  }
}

export default AddProduct;
