import { all, put, takeLatest } from "redux-saga/effects";
import {
  getOffersSuccessActionCreator,
  getOffersFailureActionCreator
} from "../actionCreators/offer";

import { GET_OFFERS } from "../actionTypes/offer";

function* getOffersFromApi() {
  try {
    let offers = yield fetch("http://localhost:4000/offers").then(r =>
      r.json()
    );
    yield put(getOffersSuccessActionCreator(offers));
  } catch (error) {
    yield put(getOffersFailureActionCreator(error));
  }
}

export function* offerWatcher() {
  yield all([takeLatest(GET_OFFERS, getOffersFromApi)]);
}
