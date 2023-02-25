import { ADMIN_REQUEST, GET_ADMIN_SUCCESS } from "./actionTypes";
const initialState = {
  isLoading: false,
  isError: false,
  adminProducts: [],
};
export const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADMIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_ADMIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        adminProducts: payload,
      };
    }
    default: {
      return state;
    }
  }
};
