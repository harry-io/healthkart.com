import React from "react";
import styled from "styled-components";
import Carousel from "nuka-carousel";

const CarouselComponent = () => {
  return (
    <CarouselMain>
      <Carousel
        autoplay={true}
        pauseOnHover={true}
        wrapAround={true}
        width="100%"
        height="100%"
        withoutControls={true}
        dragging={true}
      >
        <Div>
          <Img
            src="https://static1.hkrtcdn.com/hknext/static/media/login/slider/3.svg"
            alt="img"
          />
          <DivB>
            <P1>Great offers on Top Brands</P1>
            <P2>14 days hassle-free return policy</P2>
          </DivB>
        </Div>
        <Div>
          <Img
            src="https://static1.hkrtcdn.com/hknext/static/media/login/slider/1.svg"
            alt="img"
          />
          <DivB>
            <P1>Get Personalized Diet Plans and Fitness Advice</P1>
            <P2>Start your journey towards a healthy lifestyle</P2>
          </DivB>
        </Div>
        <Div>
          <DivA>
            <Img
              src="https://static1.hkrtcdn.com/hknext/static/media/login/slider/2.svg"
              alt="img"
            />
          </DivA>
          <DivB>
            <P1>Wide range of Original & Authntic Nutritional Products</P1>
            <P2>
              We strive to provide 100% authentic products to our customers
            </P2>
          </DivB>
        </Div>
      </Carousel>
    </CarouselMain>
  );
};

export default CarouselComponent;
//
const CarouselMain = styled.div`
  padding: 2rem 0;
`;
const Div = styled.div`
  width: 90%;
  height: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
`;
const DivA = styled.div`
  width: 70%;
`;
const Img = styled.img`
  width: 80%;
`;
const DivB = styled.div``;
const P1 = styled.p`
  width: 100%;
  margin: auto;
  text-align: center;
  font-weight: 600;
  color: #00b5b7;
  font-size: 1.5rem;
`;
const P2 = styled.p`
  width: 100%;
  text-align: center;
  margin: auto;
  font-size: small;
  color: #77777e;
`;
