import { Box, TextField } from "@mui/material";
import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { THEME } from "../constants/Theme";

function SearchBar() {
  return (
    <Box sx={{width: '100%'}}>
      <TextField
        variant="standard"
        type="text"
        placeholder="Cari Lokasi"
        InputProps={{
          startAdornment: <LocationOnIcon sx={{ marginRight: "12px", color: THEME.GREY_PRIMARY, fontSize: '16px' }} />, // <== adjusted this
          disableUnderline: true, // <== added this
        }}
        sx={{input: { fontWeight: 500, fontSize: '12px', marginTop: '2px',},  backgroundColor: "#F5F5F5", height: '42px', display: 'flex', justifyContent: 'center', paddingLeft: '18px', paddingRight: '16px', borderRadius: '8px',}}
      ></TextField>
    </Box>
  );
}

export default SearchBar;
