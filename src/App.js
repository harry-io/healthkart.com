import React from "react";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import AllRoutes from "./Routes/AllRoutes";

export const App = () => {
  return (
    <div>
      <AllRoutes />
      <StyledContainer />
    </div>
  );
};
//
const StyledContainer = styled(ToastContainer)`
  &&&.Toastify__toast-container {
  }
  .Toastify__toast {
    background-color: #00b5b7;
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
    border-bottom: 6px solid #fff;
  }
`;
