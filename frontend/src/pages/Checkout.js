import { Box, Typography } from "@mui/material";
import React from "react";
import EditIcon from "../assets/location/EditIcon";
import AppBarTop from "../components/AppBarTop";
import { PADDING } from "../constants/Padding";
import { THEME } from "../constants/Theme";
import { useNavigate } from "react-router-dom";
import Beras from "../assets/product/Beras.png";
import StyledButton from "../components/StyledButton";

function Checkout() {
  const [mainLoc, setMainLoc] = React.useState({ 1: true });
  const[ItemQty, setItemQty] = React.useState(0)
  const navigate = useNavigate();

  const handleBtn = (btnId) => (e) => {
    e.preventDefault();
    setMainLoc(false);
    setMainLoc((state) => ({
      ...state,
      [btnId]: !setMainLoc[true],
    }));
    console.log(mainLoc);
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
      <AppBarTop text={"Keranjang"} line />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: PADDING,
          mt: "16px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              borderRadius: "50%",
              width: "24px",
              height: "24px",
              background: "#F5F5F5",
            }}
          />
          <Typography sx={{ fontSize: "12px", fontWeight: 600, ml: "16px" }}>
            Pilih semua produk
          </Typography>
        </Box>
        <Typography sx={{ fontSize: "10px", color: THEME.GREEN_PRIMARY }}>
          Hapus
        </Typography>
      </Box>

      <Box
        sx={{
          height: "1px",
          width: PADDING,
          background: "#F5F5F5",
          mt: "11px",
        }}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          width: PADDING,
          mt: "16px",
        }}
      >
        <Box
          sx={{
            borderRadius: "50%",
            width: "24px",
            height: "24px",
            background: "#F5F5F5",
          }}
        />
        <Box sx={{ display: "flex" }}>
          <img src={Beras} width="53px" height={"42px"} />
          <Box>
            <Typography sx={{ fontSize: "12px", fontWeight: 500 }}>
              Beras Organik
            </Typography>
            <Typography sx={{ color: "#828282", fontSize: "10px" }}>
              Pilihan : <span style={{ color: "#333333" }}>Merah</span>
            </Typography>
            <Typography sx={{ color: "#828282", fontSize: "10px" }}>
              Catatan :{" "}
              <span style={{ color: "#333333" }}>
                Yang masih lama expirednya
              </span>
            </Typography>
            <Box sx={{ display: "flex", mt: "7px" }}>
              <Box
                sx={{
                  backgroundColor: "#f04454",
                  width: "30px",
                  height: "19px",
                  borderRadius: "4px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ color: "white", fontSize: "10px", fontWeight: 600 }}
                >
                  20%
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "10px",
                  color: "#A6A6A6",
                  textDecoration: "line-through",
                  marginLeft: "8px",
                  marginTop: "2px",
                }}
              >
                55.000 / 5kg
              </Typography>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between', width: '300px'}}>
              <Typography
                sx={{
                  fontSize: "12px",
                  mt: "8px",
                }}
              >
                <span style={{ fontWeight: "bold", fontSize: "12px" }}>
                  45.000{" "}
                </span>
                / 5 kg
              </Typography>
              <Box sx={{display: 'flex'}}>
                <StyledButton text={""} style="outlined" noShadow width={"24px"} height={"24px"} borderRadius="4px"/>
                <StyledButton text={"–"} style="outlined" noShadow width={"24px"} height={"24px"} borderRadius="4px"/>
                <Typography sx={{fontSize: '12px', fontWeight: 600}}>{ItemQty}</Typography>
                <StyledButton text={"+"} style="outlined" noShadow width={"24px"} height={"24px"} borderRadius="4px"/>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Checkout;
