import { createStore, applyMiddleware } from "redux";
import { productReducer } from "../reducers/product";

import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "../reducers";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

export default store;
