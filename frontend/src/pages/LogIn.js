import { Box } from "@mui/system";
import { PADDING } from "../constants/Padding";
import AppBarTop from "../components/AppBarTop";
import { Typography } from "@mui/material";
import LogoMangan from "../assets/LogoMangan";
import StyledTextField from "../components/StyledTextField";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import StyledButton from "../components/StyledButton";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { THEME } from "../constants/Theme";
import axios from "axios";
import { UserContext } from "../UserContext";
import {  AppContext } from "../App";

function LogIn() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [buttonColor, setButtonColor] = useState("");
  const [response, setResponse] = useState([]);
  const [flag, setFlag] = useState(false);
  // const [c_id, setC_id] = useState();
  const navigate = useNavigate();
  // const [APICustomer, setAPICustomer] = useContext(AppContext);
  const [customer_id, setCustomer_id] = useState("");
  const [index, setIndex] = useState()
  const [items, setItems] = useState([]);
  // const value = useContext(AppContext); 
  // const [value] = React.useContext(AppContext); 

  useEffect(() => {
    btnColor();

  });

  // useEffect(() => {
  //   // setAPICustomer(APICustomer[0])
  //   // setAPICustomer(APICustomer[1])
  //   console.log(APICustomer[index])
  // },[index]);

  useEffect(() => {
    const items = localStorage.getItem('items');
    if (items) {
      setItems(items);
    }
  },[]);

useEffect(() => {
  localStorage.setItem('items', JSON.stringify(index));
},[index]);

 const enter = () => {
  if (
    passwordInput === response[index-1].c_password &&
    emailInput === response[index-1].c_email
  )  navigate("/home")
 }



  const btnColor = async () => {
    const response = await axios.get("http://localhost:8080/customers");
    setResponse(response.data);

    if (passwordInput.length >= 8 && emailInput.includes("@gmail.com")) {
      setButtonColor(THEME.GREEN_PRIMARY);
      setFlag(true);
      auth();
    }

    if (
      flag === true &&
      (passwordInput.length < 8 || !emailInput.includes("@gmail.com"))
    ) {
      setButtonColor("");
      setFlag(false);
    }
    
  };
  

  const auth = async () => {
    // const items = JSON.parse(localStorage.getItem('items'));
    
  
    // console.log(passwordInput, emailInput)
    for (let i = 0; i < response.length; i++) {
      if (
        passwordInput === response[i].c_password &&
        emailInput === response[i].c_email
      ) {
        // setAPICustomer(APICustomer[0])
        setIndex(i+1)
        // setItems(i);
        console.log("index nih", i)
        // if(items){
        // navigate("/home")
        // }
        // setIndex(i)
        // value = 1
        // setValue(value[0])
        // setUser({
        //   c_id: response[i].c_id,
        //   c_name: response[i].c_name,
        //   c_email: response[i].c_email,
        //   c_voucher: response[i].c_voucher,
        //   c_address: response[i].c_address,
        //   c_post_code: response[i].c_post_code,
        //   c_handphone_number: response[i].c_handphone_number,
        //   c_password: response[i].c_password,
        //   transaction_t_id: response[i].c_password,
        // });
        
        
        // console.log("ini cidnya 3 :", items)
      }
   
    }
    
    // console.log(user);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <AppBarTop text="Masuk" />

      <Box sx={{ width: PADDING, display: "flex", flexDirection: "column" }}>
        <Box sx={{ mt: "32px" }}>
          <LogoMangan width="60px" height="60px" />
        </Box>
        <Box sx={{ mt: "32px" }}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              color: { buttonColor },
              marginBottom: "24px",
            }}
          >
            Masuk Melalui Email
          </Typography>
          <StyledTextField
            text="Email Address"
            icon={<MailOutlineIcon />}
            onChange={(event) => {
              setEmailInput(event.target.value);
            }}
          />
          <StyledTextField
            onChange={(event) => {
              setPasswordInput(event.target.value);
            }}
            text="Password"
            icon={<LockOutlinedIcon />}
            marginTop="16px"
            type="password"
          />
        </Box>
        <StyledButton
          text="Masuk"
          marginTop="32px"
          style="fill"
          // onClick={() => navigate("/home")}
          btnColorChange={buttonColor}
          onClick={enter}
        />
      </Box>
    </Box>
  );
}

export default LogIn;
