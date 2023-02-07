import {createStore, applyMiddleware} from 'redux';
import loginReducer from "./login/loginReducer"
import logger from "redux-logger"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducers'

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)));


