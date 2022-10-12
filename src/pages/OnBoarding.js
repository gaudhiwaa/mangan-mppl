import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import LogoMangan from "../assets/LogoMangan";
import StyledButton from "../components/StyledButton";
import { THEME } from "../constants/Theme";
import { ONBOARDING } from "../constants/Typography";
import { useNavigate } from "react-router-dom";
import { PADDING } from "../constants/Padding";

function OnBoarding() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: PADDING,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "146px",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <LogoMangan />
        <Typography
          sx={{ fontSize: 14, color: THEME.BLACK_SECONDARY, marginTop: "32px" }}
        >
          {ONBOARDING.SelamatDatangDi}
        </Typography>
        <Typography
          sx={{ marginTop: "8px", fontSize: "24px", fontWeight: "bold" }}
        >
          {ONBOARDING.MANGAN}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          flexDirection: "column",
        }}
      >
        <StyledButton
          text={ONBOARDING.Masuk}
          onClick={() => navigate("/login")}
        />
        <StyledButton
          style={"outlined"}
          text={ONBOARDING.Daftar}
          marginTop="16px"
          onClick={() => navigate("/register-phase-1")}
        />
        <Typography
          sx={{
            color: THEME.GREY_PRIMARY,
            textAlign: "center",
            fontSize: "10px",
            marginTop: "24px",
            marginBottom: "15px",
          }}
        >
          {ONBOARDING.ByContinuingWith}
        </Typography>
      </Box>
    </Box>
  );
}

export default OnBoarding;
