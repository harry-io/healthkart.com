import React from "react";
import styled from "styled-components";

const WhyHealthcart = () => {
  return (
    <MainDiv>
      <P>Why Vigor?</P>
      <Cards>
        <Card>
          <Img src="https://img9.hkrtcdn.com/20791/normal_2079088_o.png" />
          <P1>Wide Range of Nutritional products</P1>
          <P2>One-stop fitness and health destination</P2>
        </Card>
        <Card>
          <Img src="https://img3.hkrtcdn.com/20791/normal_2079092_o.png" />
          <P1>100% Original & Authentic</P1>
          <P2>Tight control on sourcing and distribution</P2>
        </Card>
        <Card>
          <Img src="https://img1.hkrtcdn.com/20791/normal_2079090_o.png" />
          <P1>Guide to Fit and Healthy Lifestyle</P1>
          <P2>Your true partner in health & wellness journey</P2>
        </Card>
      </Cards>
    </MainDiv>
  );
};

export default WhyHealthcart;
//
const MainDiv = styled.div`
  width: 90%;
  margin: auto;
  max-width: 1248px;
  margin-bottom: 3rem;
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Card = styled.div`
  padding: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 10px;
`;
const Img = styled.img`
  width: 25%;
`;
const P = styled.p`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;
const P1 = styled.p`
  font-size: larger;
  font-weight: 700;
  margin-top: 1rem;
`;
const P2 = styled.p`
  color: #797979;
`;
