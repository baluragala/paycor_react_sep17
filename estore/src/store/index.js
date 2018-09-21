import { createStore, applyMiddleware } from "redux";
import { productReducer } from "../reducers/product";

import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "../reducers";
import rootSaga from "../sagas";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(rootSaga);

export default store;
