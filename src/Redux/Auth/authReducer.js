import { LOGIN_SUCCESS, LOGOUT_USER } from "./actionTypes";
let isAuth = JSON.parse(localStorage.getItem("isAuth"));
const userType = JSON.parse(localStorage.getItem("userType"));
let initialState = {
  isAuth: isAuth || false,
  isLoading: false,
  isError: false,
  email: "",
  image: "",
  userType: userType || "",
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS: {
      console.log(payload);
      localStorage.setItem("isAuth", JSON.stringify(true));
      localStorage.setItem("userImage", JSON.stringify(payload.imageUrl));
      localStorage.setItem("UserEmail", JSON.stringify(payload.email));
      localStorage.setItem("userType", JSON.stringify(payload.userType));
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        email: payload.email,
        image: payload.image,
        userType: payload.userType,
      };
    }
    case LOGOUT_USER: {
      localStorage.setItem("isAuth", false);
      localStorage.removeItem("userImage");
      localStorage.removeItem("UserEmail");
      localStorage.setItem("userType", JSON.stringify("user"));
      return {
        ...state,
        email: "",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png",
        userType: "",
        isAuth: false,
      };
    }
    default: {
      return state;
    }
  }
};
