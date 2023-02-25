import React from "react";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { IoMdPricetag } from "react-icons/io";
import { MdTitle } from "react-icons/md";

const SingleAdminCard = ({ data }) => {
  return (
    <SingleAdminCardMain>
      <Div>{<BiArrowBack style={{ cursor: "pointer" }} />}</Div>
      <Img src={data.image} alt="img" />
      <DataDiv>
        <Title>
          <MdTitle />
          {data.Title}
        </Title>
        <Price>
          <IoMdPricetag />
          Maximum retail price : {data.mrp}
        </Price>
        <Price>
          <IoMdPricetag />
          Final price after discount : {data.price}
        </Price>
      </DataDiv>
    </SingleAdminCardMain>
  );
};

export default SingleAdminCard;
//
const SingleAdminCardMain = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 6rem;
  text-align: center;
`;
const Div = styled.div`
  font-size: 2rem;
  text-align: left;
  padding-left: 1rem;
  color: #00b5b7;
  animation: 0.3s ease-in-out;
`;
const Img = styled.img`
  border: 1px solid black;
  width: 40%;
`;
const DataDiv = styled.div`
  border: 1px solid red;
  width: 50%;
  margin: auto;
  text-align: left;
`;
const Title = styled.h1`
  color: #00b5b7;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Price = styled.p`
  color: #807e7e;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
