let initialState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  email: "",
  image: "",
  userType: "",
};

export const authReducer = (state = initialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    default: {
      return state;
    }
  }
};
