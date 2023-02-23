import React from "react";
import styled from "styled-components";
import LoginLeft from "./LoginLeft";
import LoginRight from "./LoginRight";

const Login = () => {
  return (
    <LoginMain>
      <LoginLeft />
      <LoginRight />
    </LoginMain>
  );
};

export default Login;
//
const LoginMain = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
`;
