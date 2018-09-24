import Enyzme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ProductListItem from "./ProductListItem";
import { Link } from "react-router-dom";
import React from "react";
Enyzme.configure({
  adapter: new Adapter()
});

let product;
beforeEach(() => {
  product = {
    id: 1,
    title: "mac book",
    price: 2000
  };
});

afterEach(() => {
  product = null;
});

describe("ProductListItem", () => {
  it("should render product title", () => {
    const product = {
      id: 1,
      title: "mac book",
      price: 2000
    };
    const wrapper = shallow(
      <ProductListItem product={product} productClicked={() => {}} />
    );

    const wrapperLink = wrapper.find(Link);
    console.log(wrapperLink.debug());
    expect(wrapperLink.contains(product.title)).toBeTruthy();
  });

  it("should render product price", () => {
    const wrapper = shallow(
      <ProductListItem product={product} productClicked={() => {}} />
    );

    const wrapperH3 = wrapper.find("h3");
    console.log(wrapperH3.debug());
    expect(wrapperH3.contains(product.price)).toBeTruthy();
  });

  it("should handle click", () => {
    let handleProductClick = jest.fn();
    const wrapper = shallow(
      <ProductListItem product={product} productClicked={handleProductClick} />
    );
    wrapper.simulate("click");
    expect(handleProductClick).toHaveBeenCalledTimes(1);
    expect(handleProductClick).toHaveBeenCalledWith(product.title);
  });

  it("should have right navigation link", () => {
    const wrapper = shallow(
      <ProductListItem product={product} productClicked={() => {}} />
    );
    const wrapperLink = wrapper.find(Link);
    expect(wrapperLink.prop("to")).toEqual("/products/1");
  });
});
