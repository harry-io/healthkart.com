import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InventoryProductCard from "../../Components/AdminPageComponents/InventoryProductCard";

const Inventory = () => {
  const [productData, setProductData] = useState([]);
  //
  useEffect(() => {
    //
    axios
      .get(`https://636bda08ad62451f9fbd8076.mockapi.io/rigo`)
      .then((res) => {
        setProductData(res.data.items);
      });
    //
  }, []);
  return (
    <InventoryMain>
      {productData.length <= 0 ? (
        <Nothing>
          <Img
            src="https://static1.hkrtcdn.com/hknext/static/media/cart/empty-cart-new.svg"
            alt="img"
          />
        </Nothing>
      ) : (
        <Left>
          {productData.length > 0 &&
            productData.map((product) => (
              <InventoryProductCard key={product.id} data={product} />
            ))}
        </Left>
      )}

      <Right>
        <Div>
          <h2>Inventory Summary</h2>
        </Div>
        <Div>
          <p>Total Products : {productData.length}</p>
        </Div>
      </Right>
    </InventoryMain>
  );
};

export default Inventory;
const InventoryMain = styled.div`
  width: 90%;
  max-width: 1248px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 6rem;
`;
const Nothing = styled.div`
  width: 69%;
  padding: 1.2rem 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  @media (max-width: 1024px) {
    width: 90%;
    margin: auto;
  }
`;
const Img = styled.img`
  width: 50%;
`;
const Left = styled.div`
  width: 69%;
  padding: 1.2rem 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  @media (max-width: 1024px) {
    width: 90%;
    margin: auto;
  }
`;

const Right = styled.div`
  width: 29%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const Div = styled.div`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 0;
  padding-left: 1rem;
  background-color: #ffffff;
`;
