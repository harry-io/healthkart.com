import React, { useEffect } from "react";
import styled from "styled-components";
import { FaStarOfLife } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { MdError, MdDoneAll } from "react-icons/md";

const LoginRight = () => {
  const navigate = useNavigate();
  const store = useSelector((store) => store);
  console.log(store);
  //
  const [creds, setCreds] = useState([]);
  //
  const [valid, setValid] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [userType, setUserType] = useState("");
  const [disable, setDisable] = useState(false);
  //
  //
  const checkIfExists = (data, email) => {
    console.log(email);
    for (let i = 0; i < data.length; i++) {
      if (data[i].email === email) {
        return true;
      }
    }
    return false;
  };
  //
  //
  useEffect(() => {
    axios
      .get(`https://63f874bc1dc21d5465bf9ff4.mockapi.io/vigor`)
      .then((res) => setCreds(res.data));
  }, []);
  //

  const handleChange = (e) => {
    let actualImage = e.target.files[0];
    //
    //
    let form = new FormData();
    form.append("image", actualImage);
    //
    axios
      .post(
        `https://api.imgbb.com/1/upload?key=5e73f0dc624635d020cdfd9d1e493763`,
        form
      )
      .then((res) => setImageUrl(res.data.data.display_url))
      .then(() => setDisable(false));
  };
  //
  useEffect(() => {
    setDisable(true);
    setEmail("");
    setImageUrl("");
    setPassword("");
    setUserType("");
  }, []);
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    //
    const userDetails = {
      email,
      password,
      imageUrl,
      userType,
    };
    console.log(userDetails);
    //
    if (password.length >= 8) {
      if (!checkIfExists(creds, email)) {
        axios
          .post(
            `https://63f874bc1dc21d5465bf9ff4.mockapi.io/vigor`,
            userDetails
          )
          .then((res) => {
            toast("Account created successfully !");
            navigate("/login");
          })
          .catch((err) => console.log(err));
        setEmail("");
        setImageUrl("");
        setPassword("");
        setUserType("");
      } else {
        toast("Account already exists !");
      }
    } else {
      toast.error("Password must be of atleast 8 characters.");
    }
    //

    //

    //

    //
  };
  return (
    <SignupRightMain>
      <Form onSubmit={handleSubmit}>
        <FormHeading>Signup</FormHeading>
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label>Password</Label>
        <InputPwd
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Valid>
          <FaStarOfLife style={{ color: "#00b5b7" }} />
          <p>Password should be more than 7 characters.</p>
        </Valid>
        <Select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="user">User Type</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </Select>
        <LabelB>
          <InputImage type="file" onChange={handleChange} />
          Choose Image for your profile picture
        </LabelB>
        <Button disabled={disable}>SIGNUP</Button>
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
const Select = styled.select`
  border: 1px solid #00b5b7;
  height: 35px;
  width: 100%;
  margin: auto;
  border-radius: 6px;
  color: #00b5b7;
  padding: 0 1rem;
  cursor: pointer;
  outline: none;
  margin-bottom: 0.5rem;
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
  padding-left: 1rem;
  caret-color: #00b5b7;
  outline: none;
  &:focus {
    border: 1px solid #00b5b7;
  }
`;
const InputPwd = styled.input`
  border: 1px solid #dbdee9;
  border-radius: 0 8px 8px 0;
  height: 51px;
  border-radius: 10px;
  font-size: 16px;
  padding-left: 1rem;
  caret-color: #00b5b7;
  outline: none;
  color: #00b5b7;
  &:focus {
    border: 1px solid #00b5b7;
  }
`;
const Button = styled.button`
  height: 51px;
  border-radius: 10px;
  border: none;
  background-color: #00b5b7;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  &:disabled {
    background-color: #00b4b744;
    cursor: not-allowed;
  }
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
//
const Valid = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: small;
  color: #77777e;
`;
//
