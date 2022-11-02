import { Box, Typography } from "@mui/material";
import React from "react";
import Map from "../assets/location/Map";
import AppBarTop from "../components/AppBarTop";
import SearchBar from "../components/SearchBar";
import { PADDING } from "../constants/Padding";
import { THEME } from "../constants/Theme";
import LocationIcon from "../assets/location/LocationIcon";

function Location() {
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
      <AppBarTop text={"Ubah Lokasi"} />
      <Box sx={{ width: PADDING, display: "flex", flexDirection: "column" }}>
        <SearchBar />
      </Box>
      <Box
        sx={{
          marginTop: "3px",
          width: "100%",
          height: "20px",
          backgroundColor: THEME.WHITE,
          boxShadow: "0px 2px 8px -2px rgba(0, 0, 0, 0.04)",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: PADDING,
          mt: '20px',
          ml: '23px'
        }}
      >
        <Map/>
        <Typography sx={{ marginLeft: "9px", color: THEME.GREEN_PRIMARY, fontSize: '14px', }}>
          Pilih lewat peta
        </Typography>
        
      </Box>
      <Box
        sx={{
          marginTop: "18px",
          width: PADDING,
          height: "1px",
          backgroundColor: "#F5F5F5",
          marginBottom: "18px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: PADDING,
          ml: '23px'
        }}
      >
        <LocationIcon/>
        <Typography sx={{ marginLeft: "9px", color: THEME.GREY_PRIMARY, fontSize: '14px', }}>
          Gunakan Lokasi Saat Ini
        </Typography>
        
      </Box>
    </Box>
  );
}

export default Location;
