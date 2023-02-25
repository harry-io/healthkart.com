import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Auth/authReducer";
import {reducer as prodReducer} from './Products/reducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers(authReducer,prodReducer);

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));
