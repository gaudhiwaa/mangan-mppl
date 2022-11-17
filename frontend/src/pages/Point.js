import { Box, Typography } from "@mui/material";
import React from "react";
import VideoPersonStarIcon from "../assets/point/VideoPersonStarIcon";
import AppBarTop from "../components/AppBarTop";
import StyledButton from "../components/StyledButton";
import { PADDING } from "../constants/Padding";

function Point() {
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
      <AppBarTop text={"Poin"} line />
      <Box sx={{ width: PADDING, mt: "15px", ml: "12px" }}>
        <Box>
          <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
            Total Poin
          </Typography>
        </Box>
        <Box sx={{ display: "flex", mt: "12px" }}>
          <VideoPersonStarIcon />
          <Typography
            sx={{ fontSize: "32px", fontWeight: 600, mt: "-9px", ml: "9px" }}
          >
            Rp2.700
          </Typography>
        </Box>
        <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
          270 Poin
        </Typography>
      </Box>
      <Box
        sx={{
          width: PADDING,
          height: "1px",
          background: "#F5F5F5",
          mt: "15px",
        }}
      />
      <Box
        sx={{
          width: PADDING,
          border: "1px solid #F5F5F5",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "15px",
        }}
      >
        <Box sx={{ width: "197px", margin: "16px 0 16px 16px" }}>
          <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
            Belanja Kebutuhanmu Dapatkan Cashback 10%
          </Typography>
          <Typography
            sx={{ color: "#808080", marginTop: "8px", fontSize: "10px" }}
          >
            Berlaku sampai 30 Okt 2021
          </Typography>
        </Box>
        <Box sx={{ mr: "13px" }}>
          <StyledButton
            width={"90px"}
            height="26px"
            borderRadius={"4px"}
            text="Dapatkan"
            noShadow
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: PADDING,
          border: "1px solid #F5F5F5",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "15px",
        }}
      >
        <Box sx={{ width: "197px", margin: "16px 0 16px 16px" }}>
          <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
            Belanja Kebutuhanmu Dapatkan Cashback 10%
          </Typography>
          <Typography
            sx={{ color: "#808080", marginTop: "8px", fontSize: "10px" }}
          >
            Berlaku sampai 30 Okt 2021
          </Typography>
        </Box>
        <Box sx={{ mr: "13px" }}>
          <StyledButton
            width={"90px"}
            height="26px"
            borderRadius={"4px"}
            text="Dapatkan"
            noShadow
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: PADDING,
          border: "1px solid #F5F5F5",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "15px",
        }}
      >
        <Box sx={{ width: "197px", margin: "16px 0 16px 16px" }}>
          <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
            Belanja Kebutuhanmu Dapatkan Cashback 10%
          </Typography>
          <Typography
            sx={{ color: "#808080", marginTop: "8px", fontSize: "10px" }}
          >
            Berlaku sampai 30 Okt 2021
          </Typography>
        </Box>
        <Box sx={{ mr: "13px" }}>
          <StyledButton
            width={"90px"}
            height="26px"
            borderRadius={"4px"}
            text="Dapatkan"
            noShadow
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: PADDING,
          border: "1px solid #F5F5F5",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "15px",
        }}
      >
        <Box sx={{ width: "197px", margin: "16px 0 16px 16px" }}>
          <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
            Belanja Kebutuhanmu Dapatkan Cashback 10%
          </Typography>
          <Typography
            sx={{ color: "#808080", marginTop: "8px", fontSize: "10px" }}
          >
            Berlaku sampai 30 Okt 2021
          </Typography>
        </Box>
        <Box sx={{ mr: "13px" }}>
          <StyledButton
            width={"90px"}
            height="26px"
            borderRadius={"4px"}
            text="Dapatkan"
            noShadow
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Point;
