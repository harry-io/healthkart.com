import React from "react";
import styled from "styled-components";
import { FaStarOfLife } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginRight = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  //

  const handleSubmit = () => {
    const userDetails = {
      email,
      password,
      imageUrl,
    };
    //
    // API FUNCTION TO CHECK THE EMAIL AND PASSWORD COMBINATION AND CASE SENSITIVE CHECK
  };
  return (
    <SignupRightMain>
      <Form onSubmit={handleSubmit}>
        <FormHeading>Signup</FormHeading>
        <Label>Email</Label>
        <Input />
        <Label>Password</Label>
        <Input />
        <LabelB>
          <InputImage type="file" />
          Choose Image for your profile picture
        </LabelB>
        <Button>SIGNUP</Button>
        <Desc>
          <FaStarOfLife style={{ color: "red", marginRight: "5px" }} />
          {`You may receive SMS updates from Healthkart and can opt out at any
          time.`}
        </Desc>
        <NewUser>
          {`Already have an account?`}
          <Terms to="/login">Login</Terms>
        </NewUser>
        <Desc2>
          By logging in you agree to our <Terms>Terms & Conditions.</Terms>
        </Desc2>
      </Form>
    </SignupRightMain>
  );
};

export default LoginRight;
//
const SignupRightMain = styled.div`
  width: 50%;
  min-height: 745px;
  display: flex;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const Form = styled.form`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const NewUser = styled.p`
  width: 100%;
  text-align: right;
  font-size: small;
`;
const FormHeading = styled.p`
  color: #000000;
  font-weight: 600;
  font-size: 1.6rem;
  letter-spacing: 1px;
`;
const Desc = styled.p`
  color: #000000;
  font-size: small;
  color: #77777e;
`;
const Desc2 = styled.p`
  color: #000000;
  font-size: small;
  color: #77777e;
  width: 100%;
  text-align: center;
  margin-top: 4rem;
`;
const Terms = styled(Link)`
  color: #000000;
  font-size: small;
  color: #0000ff;
  text-decoration: none;
`;
const Label = styled.label`
  color: #00b5b7;
  margin-bottom: -1.5rem;
`;
const Input = styled.input`
  border: 1px solid #dbdee9;
  border-radius: 0 8px 8px 0;
  height: 51px;
  border-radius: 10px;
  font-size: 16px;
`;
const Button = styled.button`
  height: 51px;
  border-radius: 10px;
  border: none;
  background-color: #00b5b7;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;
//
const InputImage = styled.input`
  width: 100%;
  color: transparent;
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
`;
const LabelB = styled.label`
  width: 100%;
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
