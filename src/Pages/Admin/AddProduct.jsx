import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HiViewGridAdd } from "react-icons/hi";
import NavbarAdmin from "../../Components/AdminPageComponents/NavbarAdmin";
import axios from "axios";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [mrp, setMrp] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [disable, setDisable] = useState(true);
  //
  useEffect(() => {
    setDisable(true);
  }, []);
  //
  const handleDiscountChange = (e) => {
    setDiscount(+e.target.value);
    //
    setPrice(mrp - (mrp * discount) / 100);
  };
  //
  const handleImageChange = (e) => {
    let actualImage = e.target.files[0];

    //
    let form = new FormData();
    form.append("image", actualImage);
    //
    axios
      .post(
        `https://api.imgbb.com/1/upload?key=5e73f0dc624635d020cdfd9d1e493763`,
        form
      )
      .then((res) => {
        setImageUrl(res.data.data.display_url);
        console.log(res.data.data.display_url);
      })
      .then(() => setDisable(false));
  };
  //
  //
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    //
    let productObj = {
      image: imageUrl,
      Title: title,
      brand: brand,
      stars: 0,
      reviews: 0,
      mrp: +mrp,
      price: +price,
    };
    //
    //
    axios
      .post(`https://636bda08ad62451f9fbd8076.mockapi.io/rigo`, productObj)
      .then(() => {
        toast("Product added successfully !");
      });
    //
    setBrand("");
    setCategory("");
    setDiscount(0);
    setImageUrl("");
    setMrp(0);
    setPrice(0);
    setTitle("");
  };
  //
  return (
    <>
      <NavbarAdmin />
      <MainContainer>
        <Heading>
          <HiViewGridAdd style={{ fontSize: "2.1rem" }} />
          {"ADD A NEW PRODUCT"}
        </Heading>
        <Desc>Adding a new product is just a few steps away.</Desc>
        <Form onSubmit={handleSubmit}>
          <LabelA>Title</LabelA>
          <Input
            type="text"
            placeholder="Product Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <LabelA>Brand</LabelA>
          <Input
            type="text"
            placeholder="Product Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          <LabelA>MRP</LabelA>
          <Input
            type="number"
            placeholder="Product MRP"
            value={mrp}
            onChange={(e) => setMrp(+e.target.value)}
          />
          <LabelA>Discount in %</LabelA>
          <Input
            type="number"
            placeholder="Percent of discount"
            value={discount}
            onChange={handleDiscountChange}
          />
          <LabelA>Final Price</LabelA>
          <Input type="number" placeholder="Price" value={price} readOnly />
          <LabelA>Category</LabelA>
          <Select
            value={category}
            onChange={(e) => setDiscount(e.target.value)}
          >
            <option value="whey_proteins">Whey Proteins</option>
            <option value="sports_nutrition">Sports Nutrition</option>
            <option value="vitamins_supplements">Vitamins & Supplements</option>
            <option value="ayurveda_herbs">Ayurveda & Herbs</option>
            <option value="health_drinks">Health Food & Drinks</option>
          </Select>
          <Label>
            <InputImage type="file" onChange={handleImageChange} />
            Choose Image
          </Label>
          <Button disabled={disable}>ADD</Button>
        </Form>
      </MainContainer>
    </>
  );
};

export default AddProduct;
//
// STYLED CSS
const MainContainer = styled.div`
  width: 50%;
  max-width: 1248px;
  margin: auto;
  padding: 2rem 0;
  margin-top: 6rem;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
  border-radius: 10px;
  margin-bottom: 6rem;
  @media (max-width: 800px) {
    width: 90%;
  }
`;
const Form = styled.form`
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
  width: 80%;
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
  width: 80%;
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
  align-items: center;
`;
const Button = styled.button`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  width: 40%;
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
  &:disabled {
    background-color: #00b4b744;
    cursor: not-allowed;
  }
`;
