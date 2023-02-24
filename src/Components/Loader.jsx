import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderInner>
        <LoaderImg>
          {/* <Img src="https://i.ibb.co/3fQvBm0/vigor-loader.png" alt="img" /> */}
        </LoaderImg>
        <LoaderEl></LoaderEl>
      </LoaderInner>
    </LoaderContainer>
  );
};

export default Loader;
//
const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoaderInner = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  margin-top: 10%;
`;
const LoaderImg = styled.div`
  border-radius: 10px;
`;
// const Img = styled.img`
//   width: 100%;
// `;
const LoaderEl = styled.div`
  --size: 30px;
  --first-block-clr: #00b5b7;
  --second-block-clr: #184e68;
  --clr: #111;
  width: 50px;
  height: 50px;
  position: relative;
  &::after {
    box-sizing: border-box;
    position: absolute;
    content: "";
    width: var(--size);
    height: var(--size);
    top: 50%;
    animation: up 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
    left: 50%;
    background: var(--first-block-clr);
  }
  &::before {
    box-sizing: border-box;
    position: absolute;
    content: "";
    width: var(--size);
    height: var(--size);
    top: 50%;
    animation: up 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
    left: 50%;
    background: var(--first-block-clr);
  }
  &::after {
    background: var(--second-block-clr);
    top: calc(50% - var(--size));
    left: calc(50% - var(--size));
    animation: down 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
  }
  @keyframes down {
    0%,
    100% {
      transform: none;
    }

    25% {
      transform: translateX(100%);
    }

    50% {
      transform: translateX(100%) translateY(100%);
    }

    75% {
      transform: translateY(100%);
    }
  }
  @keyframes up {
    0%,
    100% {
      transform: none;
    }

    25% {
      transform: translateX(-100%);
    }

    50% {
      transform: translateX(-100%) translateY(-100%);
    }

    75% {
      transform: translateY(-100%);
    }
  }
`;
