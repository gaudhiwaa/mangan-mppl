import { Box } from "@mui/system";
import { PADDING } from "../../constants/Padding";
import AppBarTop from "../../components/AppBarTop";
import { Typography } from "@mui/material";
import LogoMangan from "../../assets/LogoMangan";
import { THEME } from "../../constants/Theme";
import StyledTextField from "../../components/StyledTextField";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StyledButton from "../../components/StyledButton";
// import { useState } from "react";
import { REGISTER } from "../../constants/Typography";
import { useNavigate, useParams } from "react-router-dom";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import axios from "axios";


function RegisterPhase2() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const { id } = useParams();
  const navigate = useNavigate()

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8080/users/${id}`, {
        
      });
      navigate("/");
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
            {REGISTER.MasukkanNomorDan}
          </Typography>
          <StyledTextField
            text={REGISTER.NamaLengkap}
            icon={
              <LocalPhoneOutlinedIcon
                sx={{ width: "23px", height: "23px" }}
              />
            }
          />
          <StyledTextField
            text={REGISTER.NomorTelepon}
            icon={<FmdGoodOutlinedIcon sx={{ width: "21px", height: "21px" }} />}
            marginTop="16px"
          />
          <StyledTextField
            text={REGISTER.AlamatRumah}
            icon={<MailOutlineIcon sx={{ width: "21px", height: "21px" }} />}
            marginTop="16px"
          />
        </Box>
        <StyledButton
          text={REGISTER.Daftar}
          marginTop="32px"
          style="fill"
          onClick={() => navigate("/home")}
        />
      </Box>
    </Box>
  );
}

export default RegisterPhase2;
