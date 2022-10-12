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
import { useEffect, useState } from "react";
import { REGISTER } from "../../constants/Typography";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate } from "react-router-dom";

function RegisterPhase1() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          />
          <StyledTextField
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
          onClick={() => navigate("/register-phase-2")}
        />
      </Box>
    </Box>
  );
}

export default RegisterPhase1;
