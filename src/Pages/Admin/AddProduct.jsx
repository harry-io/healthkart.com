import React from "react";
import styled from "styled-components";
import { HiViewGridAdd } from "react-icons/hi";

const AddProduct = () => {
  return (
    <MainContainer>
      <Heading>
        <HiViewGridAdd style={{ fontSize: "2.1rem" }} />
        {"ADD A NEW PRODUCT"}
      </Heading>
      <Desc>Adding a new product is just a few steps away.</Desc>
      <Form>
        <LabelA>Title</LabelA>
        <Input type="text" placeholder="Product Title" />
        <LabelA>Description</LabelA>
        <Input type="text" placeholder="Product Description" />
        <LabelA>Price</LabelA>
        <Input type="number" placeholder="Product Price" />
        <LabelA>Category</LabelA>
        <Select>
          <option value="sports_nutrition">Sports Nutrition</option>
          <option value="vitamins_supplements">Vitamins & Supplements</option>
          <option value="ayurveda_herbs">Ayurveda & Herbs</option>
          <option value="health_drinks">Health Food & Drinks</option>
        </Select>
        <Label>
          <InputImage type="file" />
          Choose Image
        </Label>
      </Form>
    </MainContainer>
  );
};

export default AddProduct;
//
// STYLED CSS
const MainContainer = styled.div`
  width: 50%;
  margin: auto;
  padding: 2rem 0;
  margin-top: 6rem;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Heading = styled.h2`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  color: #00b5b7;
  gap: 1rem;
  padding: 1rem 0;
  border-radius: 10px;
`;
const Desc = styled.p`
  color: #6f6f6f;
  display: flex;
  width: 90%;
  margin: auto;
  margin-top: -1rem;
  margin-bottom: 3rem;
`;
const Input = styled.input`
  width: 80%;
  margin: auto;
  height: 35px;
  border-radius: 5px;
  font-size: large;
  outline: none;
  border: 1px solid #ccc;
  caret-color: #00b5b7;
  padding: 0 1.5rem;
  &:focus {
    border: 1px solid #00b5b7;
  }
`;
const Select = styled.select`
  border: 1px solid #00b5b7;
  height: 35px;
  width: 88%;
  margin: auto;
  border-radius: 6px;
  color: #00b5b7;
  padding: 0 1rem;
  cursor: pointer;
  outline: none;
  margin-bottom: 0.5rem;
`;
const InputImage = styled.input`
  width: 100%;
  color: transparent;
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
`;
const LabelA = styled.label`
  width: 87%;
  margin: auto;
  display: flex;
  align-items: center;
  color: #00b5b7;
  margin-bottom: -0.8rem;
`;
const Label = styled.label`
  width: 80%;
  margin: auto;
  height: 70px;
  border-radius: 5px;
  font-size: large;
  outline: none;
  border: 1px dashed #00b5b7;
  caret-color: #00b5b7;
  padding: 0 1.5rem;
  cursor: pointer;
  color: #00b5b7;
  display: flex;
  flex-direction: column;
`;