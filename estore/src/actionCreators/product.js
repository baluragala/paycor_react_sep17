import { GET_PRODUCTS, ADD_PRODUCT } from "../actionTypes/product";

export function getProductsActionCreator() {
  return {
    type: GET_PRODUCTS
  };
}

export function addProductActionCreator(product) {
  return {
    type: ADD_PRODUCT,
    product
  };
}
