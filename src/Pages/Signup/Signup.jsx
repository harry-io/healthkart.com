import React from "react";
import styled from "styled-components";
import SignupLeft from "./SignupLeft";
import SignupRight from "./SignupRight";

const Signup = () => {
  return (
    <SignupMain>
      <SignupLeft />
      <SignupRight />
    </SignupMain>
  );
};

export default Signup;
//
const SignupMain = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
`;
