import { GET_PRODUCTS, ADD_PRODUCT } from "../actionTypes/product";

const initialState = { products: [], message: "" };
export function productReducer(prevState = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...prevState,
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
    case ADD_PRODUCT:
      return prevState;
    default:
      return prevState;
  }
}
