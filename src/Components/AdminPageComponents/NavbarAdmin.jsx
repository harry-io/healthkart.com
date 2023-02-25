import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdInventory2 } from "react-icons/md";
import { HiViewGridAdd } from "react-icons/hi";
import { FaEdit, FaUserAlt } from "react-icons/fa";
import AdminDetails from "./AdminDetails";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useSelector } from "react-redux";

const NavbarAdmin = () => {
  //
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  //
  return (
    <MainDiv>
      <Div>
        <Left>
          <img
            style={{ width: "100%" }}
            src="https://i.ibb.co/pR8crjx/New-Project-13-59-FE560.png"
            alt="img"
          />
        </Left>
        <Right>
          <NavLink to="/admin/inventory">
            <MdInventory2 />
            Inventory
          </NavLink>
          <NavLink to="/admin/add_product">
            <HiViewGridAdd />
            Add Product
          </NavLink>
          <NavLink to="/admin/edit_product">
            <FaEdit />
            Edit Product
          </NavLink>
          <NavLink onClick={() => setIsOpen(!isOpen)}>
            <FaUserAlt />
            {`Admin`}
          </NavLink>
          {isOpen && (
            <AdminDetailsMain>
              <AdminDetails setIsOpen={setIsOpen} isOpen={isOpen} />
            </AdminDetailsMain>
          )}
        </Right>
        <RightB>
          {menu ? (
            <GrClose
              onClick={() => setMenu(!menu)}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => setMenu(!menu)}
              style={{ cursor: "pointer" }}
            />
          )}

          {menu && (
            <RightBDrop>
              {" "}
              <NavLinkB to="/admin">
                <MdInventory2 />
                Inventory
              </NavLinkB>
              <NavLinkB to="/admin/add_product">
                <HiViewGridAdd />
                Add Product
              </NavLinkB>
              <NavLinkB to="/admin/edit_product">
                <FaEdit />
                Edit Product
              </NavLinkB>
              <AdminPicContainer>
                <Img
                  src="https://scontent.fpat2-3.fna.fbcdn.net/v/t1.6435-9/145073791_3827725533951090_2181163793631770113_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=W4FB-MHuVHIAX_4V-36&_nc_ht=scontent.fpat2-3.fna&oh=00_AfDSY8JU1SBfJIN1IXRjWM6tlN5V8AaWZSh3qZFRVKBpBg&oe=641D660B"
                  alt="img"
                />
              </AdminPicContainer>
              <AdminName>Admin</AdminName>
              <Buttons>
                <Button>HOME</Button>
                <Button>LOGOUT</Button>
              </Buttons>
            </RightBDrop>
          )}
        </RightB>
      </Div>
    </MainDiv>
  );
};

export default NavbarAdmin;
const MainDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  position: fixed;
  top: 0;
  background-color: white;
`;
const Div = styled.div`
  width: 90%;
  max-width: 1248px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  width: 14%;
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const RightB = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #00b5b7;
  @media (min-width: 1024px) {
    display: none;
  }
`;
const RightBDrop = styled.div`
  width: 200px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 8%);
  position: absolute;
  background-color: #fff;
  top: 55px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
`;
const Img = styled.img`
  width: 30%;
`;
const NavLink = styled(Link)`
  color: #7c7b7b;
  text-decoration: none;
  padding: 3px 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    color: #00b5b7;
  }
`;
const NavLinkB = styled(Link)`
  color: #7c7b7b;
  text-decoration: none;
  padding: 3px 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 1rem;
  &:hover {
    color: #1d1d1d;
  }
`;
const AdminPicContainer = styled.div`
  margin-top: 2rem;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;
const AdminName = styled.h4`
  margin-top: -1rem;
  text-align: center;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Button = styled.button`
  border: none;
  width: 85%;
  margin: auto;
  height: 35px;
  border-radius: 9px;
  background-color: #00b5b7;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
`;
const AdminDetailsMain = styled.div`
  width: 350px;
  position: absolute;
  top: 40px;
  right: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 1rem 0;
`;
