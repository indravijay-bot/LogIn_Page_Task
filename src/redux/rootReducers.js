import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./login/loginReducer";
import apiReducer from "./api/apiReducer";


const rootReducer = combineReducers({
  user: loginReducer,
  api:apiReducer
})

export default rootReducer;