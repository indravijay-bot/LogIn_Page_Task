import { createStore, applyMiddleware } from "redux";
import loginReducer from "./login/loginReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducers";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./Sagas";
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
store.dispatch({type: "hello"});