import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./actionTypes";

export const loginRequest = () => {
  return { type: LOGIN_REQUEST };
};
export const loginSuccess = (data) => {
  return { type: LOGIN_SUCCESS, payload: data };
};
export const LOGIN_FAILURE = () => {
  return { type: LOGIN_FAILURE };
};
export const logoutUser = () => {
  return { type: LOGOUT_USER };
};
//
export const signupRequest = () => {
  return { type: SIGNUP_REQUEST };
};
export const signupSuccess = (data) => {
  return { type: SIGNUP_SUCCESS, payload: data };
};
export const signupFailure = () => {
  return { type: SIGNUP_FAILURE };
};
