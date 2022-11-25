import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import { THEME } from "../constants/Theme";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AppBarBot() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          "& .MuiBottomNavigationAction-root, svg": {
            color: THEME.GREY_PRIMARY,
          },
          "& .Mui-selected, .Mui-selected > svg": {
            color: THEME.GREEN_PRIMARY,
          },
          position: "fixed",
          marginLeft: "auto",
          height: "67px",
          bottom: 0,
          marginRight: "auto",
          left: 0,
          right: 0,
          width: "445px",
          boxShadow: "0 -5px 12px -5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <BottomNavigationAction
          label={
            <Typography sx={{ fontSize: "10px", mt: "4px" }}>
              Belanja
            </Typography>
          }
          icon={<StorefrontIcon sx={{ mt: "4px" }} />}
        />
        <BottomNavigationAction
          label={
            <Typography sx={{ fontSize: "10px", mt: "4px" }}>
              Keranjang
            </Typography>
          }
          onClick={() => navigate("/checkout")}
          icon={<ShoppingCartOutlinedIcon sx={{ mt: "4px" }} />}
        />
        <BottomNavigationAction
          label={
            <Typography sx={{ fontSize: "10px", mt: "4px" }}>
              Transaksi
            </Typography>
          }
          onClick={() => navigate("/transactions")}
          icon={<ReceiptOutlinedIcon sx={{ mt: "4px" }} />}
        />
        <BottomNavigationAction
          label={
            <Typography sx={{ fontSize: "10px", mt: "4px" }}>Profil</Typography>
          }
          onClick={() => navigate("/profile")}
          icon={<AccountCircleOutlinedIcon sx={{ mt: "4px" }} />}
        />
      </BottomNavigation>
    </Box>
  );
}
