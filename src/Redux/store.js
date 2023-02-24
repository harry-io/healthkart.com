import { legacy_createStore } from "redux";
import { authReducer } from "./Auth/authReducer";

export const store = legacy_createStore(authReducer);
