import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  ADD_PRODUCT_SUCCESS
} from "../actionTypes/product";

const initialState = { products: [], message: "", isLoading: false };
export function productReducer(prevState = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...prevState,
        isLoading: true
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...prevState,
        isLoading: false,
        products: action.products
      };
    case GET_PRODUCTS_FAILURE:
      return {
        ...prevState,
        isLoading: false,
        error: action.error
      };
    case ADD_PRODUCT:
      return { ...prevState, isLoading: true };
    case ADD_PRODUCT_SUCCESS:
      return { ...prevState, isLoading: false, product: action.product };
    default:
      return prevState;
  }
}
