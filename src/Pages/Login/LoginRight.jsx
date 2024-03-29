import React, { useEffect } from "react";
import styled from "styled-components";
import { FaStarOfLife } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { loginSuccess } from "../../Redux/Auth/actions";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { MdError, MdDoneAll } from "react-icons/md";

const LoginRight = () => {
  const store = useSelector((store) => store.authReducer);
  //
  const [disable, setDisable] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [credData, setCredData] = useState([]);
  // https://cute-gold-agouti-coat.cyclic.app/
  const [valid, setValid] = useState(true);
  let isvalidEmail=false;
  let isValidPass=false;

 
  //
  // validate email id
  const isError = email === ''

  if(email.includes("@gmail.com" || "@outlook.com" || "yaho.com" ))
  {
    isvalidEmail=true;
   
  }
  else{
    console.log("Not valid ")
  }
  if(password.length>=7)
  {
    isValidPass=true;
  }
  // // validatore user input
  useEffect(() => {
    setDisable(true);
    if (password.length >= 7 && email.includes("@gmail.com" || "@outlook.com" || "yahoo.com" )) {
      setDisable(false);
    }
  }, [password,email]);


  // //data validate from serverside
  const matchData = (data) => {
    if (password.length >= 8) {
      for (let key in data) {
        if (data[key].email === email && data[key].password === password) {
          dispatch(loginSuccess(data[key]));
          setDisable(false);
          toast("logged in");
          navigate("/");
          return;
        }
      }
      toast.error("Account not found !");
    } else {
      toast("Password must be almost 8 characters !");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //
    //
    axios
      .get(`https://63f874bc1dc21d5465bf9ff4.mockapi.io/vigor`)
      .then((res) => {
        setEmail("");
        setPassword("");
        setCredData(res.data);
        matchData(res.data);
      });
  };
  return (
    <LoginRightMain>
      <Form onSubmit={handleSubmit}>
        <FormHeading>Login</FormHeading>
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {!isvalidEmail?<Valid>
        <FaStarOfLife style={{ color: "#00b5b7" }} />
        <p>Valid mail Id required.</p>
      </Valid>:""}
        <Label>Password</Label>
        <InputPwd
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {isValidPass?
        <Valid>
          <FaStarOfLife style={{ color: "#00b5b7" }} />
          <p>Password should be more than 7 characters.</p>
        </Valid>:""}

        <Button disabled={disable}>LOGIN</Button>

        <Desc>
          <FaStarOfLife style={{ color: "red", marginRight: "5px" }} />
          {`You may receive SMS updates from Healthkart and can opt out at any
          time.`}
        </Desc>
        <NewUser>
          {`New User?`}
          <Terms to="/signup">Signup</Terms>
        </NewUser>
        <Desc2>
          By logging in you agree to our <Terms>Terms & Conditions.</Terms>
        </Desc2>
      </Form>
    </LoginRightMain>
  );
};

export default LoginRight;
//
const LoginRightMain = styled.div`
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
  margin-top: 6rem;
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
//
const Valid = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: small;
  color: #77777e;
`;
//
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
