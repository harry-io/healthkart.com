import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Auth/authReducer";
import {reducer as ProductReducer} from './Products/reducer';
import thunk from 'redux-thunk'
import { adminReducer } from "./Admin/adminReducer";


const rootReducer = {
  authReducer,
  adminReducer,
 ProductReducer
};

export const store = legacy_createStore(
  combineReducers(rootReducer),
  applyMiddleware(thunk)
);

