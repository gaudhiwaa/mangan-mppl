import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import { THEME } from "../constants/Theme";
import { useNavigate } from "react-router-dom";

export default function AppBarTop({ text, line}) {
  const navigate = useNavigate();
  return (
    <Box sx={{ width: "100%", }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: THEME.WHITE }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: "5px", ml: -2 }}
            onClick={() => navigate(-1)}
          >
            <ArrowBackIcon
              sx={{
                fontWeight: "bold",
                color: THEME.GREEN_PRIMARY,
                width: "24px",
                height: "24px",
              }}
            />
          </IconButton>
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: "16px",
              fontWeight: 600,
              color: THEME.BLACK_PRIMARY,
              mt: "3px",
            }}
          >
            {text}
          </Typography>
        </Toolbar>
      </AppBar>
      {line ? <Box sx={{marginTop: '-20px',width: '100%', height: '20px', backgroundColor: THEME.WHITE, boxShadow: "0px 2px 8px -2px rgba(0, 0, 0, 0.04)"}}></Box> : ''}
      
    </Box>
  );
}
