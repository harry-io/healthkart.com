import React from "react";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { IoMdPricetag } from "react-icons/io";
import { MdTitle } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SingleAdminCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <SingleAdminCardMain>
      <Div>
        {
          <BiArrowBack
            style={{ cursor: "pointer" }}
            onClick={() => navigate(-1)}
          />
        }
      </Div>
      <DataDiv>
        <Img src={data.image} alt="img" />
        <DataDivDesc>
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
        </DataDivDesc>
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
  border-radius: 10px;
`;
const Div = styled.div`
  font-size: 2rem;
  padding-left: 1rem;
  color: #00b5b7;
  animation: 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 1rem 10px;
`;
const Img = styled.img`
  width: 30%;
  @media (max-width: 800px) {
    width: 40%;
  }
`;
const DataDiv = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 2rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const DataDivDesc = styled.div`
  width: 50%;
  padding: 1rem 0.5rem;
  @media (max-width: 800px) {
    width: 100%;
  }
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
