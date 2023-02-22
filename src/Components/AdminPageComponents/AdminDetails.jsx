import React from "react";
import styled from "styled-components";
import { MdOutlineClose } from "react-icons/md";

const AdminDetails = ({ setIsOpen, isOpen }) => {
  return (
    <AdminPop>
      <Close onClick={() => setIsOpen(!isOpen)}>
        <MdOutlineClose />
      </Close>
      <ImageContainer>
        <Image
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="img"
        />
      </ImageContainer>
      <Name>Admin</Name>
      <p>Total Products</p>
      <p>Total worth</p>
      <Buttons>
        <Button>HOME</Button>
        <Button>LOGOUT</Button>
      </Buttons>
    </AdminPop>
  );
};

export default AdminDetails;
//
const Close = styled.button`
  border: 1px solid red;
  color: #00b5b7;
  width: 35px;
  height: 35px;
  display: flex;
  align-self: flex-start;
  align-items: center;
  font-size: larger;
  border: none;
  background-color: transparent;
  margin-left: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;
const AdminPop = styled.div``;
const ImageContainer = styled.div`
  width: 50%;
  margin: auto;
`;
const Image = styled.img`
  width: 50%;
  border-radius: 50%;
`;
const Name = styled.h4``;
const Buttons = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Button = styled.button`
  border: none;
  width: 30%;
  height: 35px;
  border-radius: 9px;
  background-color: #00b5b7;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
`;
