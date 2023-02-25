import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { adminReducer } from "./Admin/adminReducer";
import { authReducer } from "./Auth/authReducer";
import {reducer as ProductReducer} from "./Products/reducer"
const rootReducer = {
  authReducer,
  adminReducer,
 ProductReducer
};

export const store = legacy_createStore(
  combineReducers(rootReducer),
  applyMiddleware(thunk)
);
