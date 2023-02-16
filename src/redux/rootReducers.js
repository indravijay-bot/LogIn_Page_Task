import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./login/loginReducer";



const rootReducer = combineReducers({
  user: loginReducer
})

export default rootReducer;