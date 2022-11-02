import { Box } from "@mui/system";
import { PADDING } from "../constants/Padding";
import AppBarTop from "../components/AppBarTop";
import { Typography } from "@mui/material";
import LogoMangan from "../assets/LogoMangan";
import StyledTextField from "../components/StyledTextField";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import StyledButton from "../components/StyledButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [buttonColor, setButtonColor] = useState("")
  const navigate = useNavigate()

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
          <StyledTextField text="Email Address" icon={<MailOutlineIcon />} />
          <StyledTextField
            text="Password"
            icon={<LockOutlinedIcon />}
            marginTop="16px"
            type="password"
          />
        </Box>
        <StyledButton text="Masuk" marginTop="32px" style="fill" onClick={() => navigate("/home")}/>
      </Box>
      
    </Box>
  );
}

export default LogIn;
