import React from "react";
import styled from "styled-components";
import InventoryProductCard from "./InventoryProductCard";
const products = [
  {
    id: 1,
    image:
      "https://img1.hkrtcdn.com/20228/prd_2022740-MuscleBlaze-Plant-Protein-2.2-lb-Chocolate_c_t.jpg",
    title: "MuscleBlaze Plant Protein,  2.2 lb  Rich Chocolate",
    price: "2159",
  },
  {
    id: 2,
    image:
      "https://img1.hkrtcdn.com/20228/prd_2022740-MuscleBlaze-Plant-Protein-2.2-lb-Chocolate_c_t.jpg",
    title: "MuscleBlaze Plant Protein,  2.2 lb  Rich Chocolate",
    price: "2159",
  },
  {
    id: 3,
    image:
      "https://img1.hkrtcdn.com/20228/prd_2022740-MuscleBlaze-Plant-Protein-2.2-lb-Chocolate_c_t.jpg",
    title: "MuscleBlaze Plant Protein,  2.2 lb  Rich Chocolate",
    price: "2159",
  },
  {
    id: 4,
    image:
      "https://img1.hkrtcdn.com/20228/prd_2022740-MuscleBlaze-Plant-Protein-2.2-lb-Chocolate_c_t.jpg",
    title: "MuscleBlaze Plant Protein,  2.2 lb  Rich Chocolate",
    price: "2159",
  },
];

const Inventory = () => {
  return (
    <InventoryMain>
      <Left>
        {products.map((product) => (
          <InventoryProductCard key={product.id} data={product} />
        ))}
      </Left>
      <Right>
        <Div>
          <h2>Inventory Summary</h2>
        </Div>
        <Div>
          <p>Total Products</p>
          <p>Total Worth</p>
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
const Left = styled.div`
  width: 69%;
  padding: 1rem 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #ffffff;
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
  border-radius: 10px;
  background-color: #ffffff;
`;
