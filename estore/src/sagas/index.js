import { all } from "redux-saga/effects";
import { productWatcher } from "./product";
import { offerWatcher } from "./offer";

function* rootSaga() {
  yield all([productWatcher(), offerWatcher()]);
}

export default rootSaga;
