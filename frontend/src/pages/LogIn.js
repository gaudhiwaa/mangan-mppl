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
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

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
  const [indexArr, setIndexArr] = useState()
  const [warning, setWarning] = useState("")
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
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(index));
  }, [index]);

  const enter = () => {
    if (response.length != 0) {
      if (
        passwordInput === response[indexArr - 1].c_password &&
        emailInput === response[indexArr - 1].c_email
      ) { navigate("/home") }
      if (
        passwordInput === "mpplceria" &&
        emailInput === "admin@gmail.com"
      ) { navigate("/admin") }
      
    }

    if (!emailInput && !passwordInput) {
      setWarning("Masukkan Email dan Password")
    } else if (!buttonColor) {
      setWarning("Masukkan Email dan Password dengan benar")
    } else if (btnColor) {
      setWarning("Email atau Password salah")
      setPasswordInput("")
    }
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
        setIndex(response[i].id)
        setIndexArr(i + 1)
        console.log("index nih", response[i].id)
        console.log("indexarr nih", i)
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
              marginBottom: warning? "12px" : "24px",
            }}
          >
             Masuk Melalui Email
          </Typography>
          {warning ? 
          <Box sx={{background: 'red', color: 'white',  borderRadius: '4px', mb: '12px', }}>
          <Typography sx={{fontSize: '13px', ml: '5px', display: 'flex', alignItems: 'center'}}>
          <ReportGmailerrorredIcon sx={{fontSize: "16px", mr: '5px', mt: '4px', mb: '4px'}}/>  {warning} 
          </Typography>
          </Box> : ""}
          <StyledTextField
            text="Email Address"
            value={emailInput}
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
            value={passwordInput}
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
