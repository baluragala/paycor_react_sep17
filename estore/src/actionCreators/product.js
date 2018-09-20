import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE
} from "../actionTypes/product";

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

export function addProductSuccessActionCreator(product) {
  return {
    type: ADD_PRODUCT_SUCCESS,
    product
  };
}

export function addProductFailureActionCreator(product) {
  return {
    type: ADD_PRODUCT_FAILURE,
    product
  };
}

export function getProductsSuccessActionCreator(products) {
  return { type: GET_PRODUCTS_SUCCESS, products };
}

export function getProductsFailureActionCreator(error) {
  return { type: GET_PRODUCTS_FAILURE, error };
}
