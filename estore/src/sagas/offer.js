import {
  all,
  put,
  takeLatest,
  take,
  fork,
  cancel,
  throttle
} from "redux-saga/effects";
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

function* processLatest() {
  let taskId;
  while (1) {
    yield take(GET_OFFERS);
    if (taskId) {
      yield cancel(taskId);
      console.log("cancelling");
    }
    taskId = yield fork(getOffersFromApi);
  }
}

function* processEvery() {
  //let taskId;
  while (1) {
    yield take(GET_OFFERS);
    // if (taskId) {
    //   yield cancel(taskId);
    //   console.log("cancelling");
    // }
    yield fork(getOffersFromApi);
  }
}

function* process3() {
  //let taskId;
  for (let i = 1; i <= 3; i++) {
    yield take(GET_OFFERS);
    console.log("Accepting ", i);
    // if (taskId) {
    //   yield cancel(taskId);
    //   console.log("cancelling");
    // }
    yield fork(getOffersFromApi);
  }
}

export function* offerWatcher() {
  yield all([throttle(2000, GET_OFFERS, getOffersFromApi)]);
}
