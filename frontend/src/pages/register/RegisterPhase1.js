import { Box } from "@mui/system";
import { PADDING } from "../../constants/Padding";
import AppBarTop from "../../components/AppBarTop";
import { Typography } from "@mui/material";
import LogoMangan from "../../assets/LogoMangan";
import { THEME } from "../../constants/Theme";
import StyledTextField from "../../components/StyledTextField";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import StyledButton from "../../components/StyledButton";
// import {  useState } from "react";
import { REGISTER } from "../../constants/Typography";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function RegisterPhase1() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [buttonColor, setButtonColor] = useState("")
  const [response,setResponse] = useState([])
  const [flag, setFlag]= useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    btnColor()
  },);

  const btnColor = async () => {
    const response = await axios.get("http://localhost:8080/customers");
    setResponse(response.data)

    if (password.length >= 8 &&  email.includes("@gmail.com") && name) {
      setButtonColor(THEME.GREEN_PRIMARY);
      setFlag(true)
    } 
    
    if(flag === true && (password.length < 8  || !email.includes("@gmail.com") || !name))
    {
      setButtonColor("");
      setFlag(false)
    }
  };

  const saveUser = async (e) => {
    e.preventDefault();
    console.log("halo!")
    try {
      await axios.post("http://localhost:8080/customers", {
        name,
        email,
        password,
      });
      if(buttonColor) navigate("/home");
    } catch (error) {
      console.log(error);
    }
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
      <AppBarTop text="Daftar" />

      <Box sx={{ width: PADDING, display: "flex", flexDirection: "column" }}>
        <Box sx={{ mt: "32px" }}>
          <LogoMangan width="60px" height="60px" />
        </Box>
        <Box sx={{ mt: "32px" }}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              color: THEME.BLACK_PRIMARY,
              marginBottom: "24px",
            }}
          >
            {REGISTER.DaftarMelaluiEmai}
          </Typography>
          <StyledTextField
            text={REGISTER.NamaLengkap}
            onChange={(e) => setName(e.target.value)}
            icon={
              <AccountCircleOutlinedIcon
                sx={{ width: "23px", height: "23px" }}
              />
            }
          />
          <StyledTextField
            text={REGISTER.AlamatEmail}
            icon={<MailOutlineIcon sx={{ width: "21px", height: "21px" }} />}
            marginTop="16px"
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledTextField
            onChange={(e) => setPassword(e.target.value)}
            text={REGISTER.Password}
            icon={<LockOutlinedIcon sx={{ width: "21px", height: "21px" }} />}
            marginTop="16px"
            type="password"
          />
        </Box>
        <StyledButton
          text={REGISTER.Selanjutnya}
          marginTop="32px"
          style="fill"
          btnColorChange={buttonColor}
          // onClick={() => navigate("/home")}
          onClick={saveUser}
        />
      </Box>
    </Box>
  );
}

export default RegisterPhase1;
