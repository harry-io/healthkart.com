import axios from "axios";
import {
  ADMIN_FAILURE,
  ADMIN_REQUEST,
  GET_ADMIN_SUCCESS,
  PATCH_ADMIN_SUCCESS,
  POST_ADMIN_SUCCESS,
} from "./actionTypes";

export const adminRequest = () => {
  return { type: ADMIN_REQUEST };
};
export const getAdminSuccess = (data) => {
  return { type: GET_ADMIN_SUCCESS, payload: data };
};
export const postAdminSuccess = (data) => {
  return { type: POST_ADMIN_SUCCESS, payload: data };
};
export const patchAdminSuccess = (data) => {
  return { type: PATCH_ADMIN_SUCCESS, payload: data };
};
export const adminFailure = () => {
  return { type: ADMIN_FAILURE };
};
//
//
export const getAdminData = (dispatch) => {
  dispatch(adminRequest());
  //
  axios
    .get(`https://636bda08ad62451f9fbd8076.mockapi.io/rigo`)
    .then((res) => dispatch(getAdminSuccess(res.data.items)))
    .catch(() => dispatch(adminFailure()));
};
//
export const deleteAdminData = (id) => (dispatch) => {
  dispatch(adminRequest());
  //
  return axios.delete(`https://636bda08ad62451f9fbd8076.mockapi.io/rigo/${id}`);
};
//
export const patchAdminData = (id, patchObj) => (dispatch) => {
  dispatch(adminRequest());
  //
  return axios.patch(
    `https://636bda08ad62451f9fbd8076.mockapi.io/rigo/${id}`,
    patchObj
  );
};
