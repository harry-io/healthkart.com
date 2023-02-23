import React from "react";
import styled from "styled-components";
import CarouselComponent from "./Carousel";

const LoginLeft = () => {
  return (
    <SignupLeftMain>
      <CarouselComponent />
    </SignupLeftMain>
  );
};

export default LoginLeft;
//
const SignupLeftMain = styled.div`
  width: 50%;
  min-height: 745px;
  background-color: #f6f6f6;
  @media (max-width: 800px) {
    display: none;
  }
`;
