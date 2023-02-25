import React from "react";
import styled from "styled-components";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../Redux/Auth/actions";

const AdminDetails = ({ setIsOpen, isOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let userEmail = JSON.parse(localStorage.getItem("UserEmail")) || "Admin";
  const userImage =
    JSON.parse(localStorage.getItem("userImage")) ||
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/510px-Default_pfp.svg.png?20220226140232";
  const store = useSelector((store) => store.authReducer);
  const products = useSelector((store) => store.adminReducer.adminProducts);
  //
  //
  //
  const handleLogout = () => {
    dispatch(logoutUser);
    navigate("/");
  };
  return (
    <AdminPop>
      <Close onClick={() => setIsOpen(!isOpen)}>
        <MdOutlineClose />
      </Close>
      <ImageContainer>
        <Image
          src={
            store.isAuth
              ? userImage
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/510px-Default_pfp.svg.png?20220226140232"
          }
          alt="img"
        />
      </ImageContainer>
      <Name>{userEmail}</Name>
      <P>Total Products : {products.length}</P>
      <Buttons>
        <Button onClick={() => navigate("/")}>HOME</Button>
        <Button onClick={handleLogout}>LOGOUT</Button>
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
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 50%;
  border-radius: 50%;
`;
const Name = styled.h4`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
`;
const P = styled.p`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Buttons = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 2rem;
  margin-bottom: 2rem;
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
