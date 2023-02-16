import { combineReducers } from "redux";

import loadingReducer from "./loadingReducer";
import imagesReducer from "./imagesReducer";
import errorReducer from "./errorReducer";
import pageReducer from "./pageReducer";

import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  user: loginReducer,
  isLoading: loadingReducer,
  images: imagesReducer,
  error: errorReducer,
  nextPage: pageReducer
});

export default rootReducer;
