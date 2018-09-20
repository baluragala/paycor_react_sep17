import { put, all, takeLatest } from "redux-saga/effects";
import {
  getProductsSuccessActionCreator,
  getProductsFailureActionCreator
} from "../actionCreators/product";
import { GET_PRODUCTS } from "../actionTypes/product";

function* getProductsFromApi() {
  try {
    let products = yield fetch("http://localhost:4000/products").then(r =>
      r.json()
    );
    yield put(getProductsSuccessActionCreator(products));
  } catch (err) {
    yield put(getProductsFailureActionCreator(err));
  }
}

export function* productWatcher() {
  console.log("Starting product watcher");
  yield all([takeLatest(GET_PRODUCTS, getProductsFromApi)]);
}
