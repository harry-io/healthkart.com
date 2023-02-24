import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const InventoryProductCard = ({ data }) => {
  console.log(data);
  return (
    <MainDiv>
      <Div>
        <ImgDiv>
          <Image src={data.image} alt="img" />
        </ImgDiv>
        <DataDiv>
          <P>{data.Title}</P>
          <P>₹ {data.price}</P>
        </DataDiv>

        <Button>
          <NavLink to={`/admin/inventory/${data.id}`}>View Details</NavLink>
        </Button>
      </Div>
    </MainDiv>
  );
};

export default InventoryProductCard;
const MainDiv = styled.div`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 10px;
  width: 95%;
  margin: auto;
  padding: 1rem 0;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;
const Div = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;
const ImgDiv = styled.div`
  width: 15%;
`;
const Image = styled.img`
  width: 100%;
`;
const DataDiv = styled.div`
  width: 59%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 800px) {
    width: 90%;
  }
`;
const P = styled.p`
  text-align: left;
  width: 100%;
`;
const Button = styled.button`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  width: 20%;
  border: none;
  margin: auto;
  height: 35px;
  border-radius: 9px;
  background-color: #00b5b7;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  @media (max-width: 800px) {
    width: 90%;
  }
  &:hover {
    box-shadow: #00b4b738 0px 0px 0px 3px;
  }
`;
