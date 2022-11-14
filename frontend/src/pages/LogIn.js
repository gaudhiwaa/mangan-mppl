import { Box } from "@mui/system";
import { PADDING } from "../constants/Padding";
import AppBarTop from "../components/AppBarTop";
import { Typography } from "@mui/material";
import LogoMangan from "../assets/LogoMangan";
import StyledTextField from "../components/StyledTextField";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import StyledButton from "../components/StyledButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { THEME } from '../constants/Theme';
import axios from "axios";

function LogIn() {
  const [emailInput, setEmailInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [buttonColor, setButtonColor] = useState("")
  const [comments,setComments]=useState([])
  const [flag, setFlag]= useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    auth()
  },);

  const auth = async () => {
    const response = await axios.get("http://localhost:8080/customers");
  
    if (response.data[0].password === passwordInput && response.data[0].email === emailInput) {
      setButtonColor(THEME.GREEN_PRIMARY);
      setFlag(true)
    } 
    
    if(flag === true && (response.data[0].password !== passwordInput || response.data[0].email !== emailInput))
    {
      setButtonColor("");
      setFlag(false)
    }
  };

  const login = () => {
    if(buttonColor) navigate("/home")
  }

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
              color: {buttonColor},
              marginBottom: "24px",
            }}
          >
            Masuk Melalui Email
          </Typography>
          <StyledTextField text="Email Address" icon={<MailOutlineIcon />}  onChange={event => {setEmailInput(event.target.value)}}/>
          <StyledTextField
            onChange={event => {setPasswordInput(event.target.value)}}
            text="Password"
            icon={<LockOutlinedIcon />}
            marginTop="16px"
            type="password"
          />
        </Box>
        <StyledButton text="Masuk" marginTop="32px" style="fill" 
        // onClick={() => navigate("/home")}
        btnColorChange={buttonColor}
        onClick={login}
        />
      </Box>
      
    </Box>
  );
}

export default LogIn;
