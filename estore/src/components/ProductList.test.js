import Enyzme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ProductList } from "./ProductList";
import { shallowToJson } from "enzyme-to-json";

import React from "react";
import ProductListItem from "./ProductListItem";
Enyzme.configure({
  adapter: new Adapter()
});

describe("ProductList", () => {
  it("should render correctly", () => {
    const props = {
      prds: [
        {
          id: 1,
          title: "mac book",
          price: 2000
        }
      ],
      msg: "",
      isLoading: false,
      getProducts: jest.fn()
    };
    const wrapper = shallow(<ProductList {...props} />);
    expect(wrapper.find(ProductListItem).length).toEqual(1);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
