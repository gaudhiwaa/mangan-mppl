import { Box, TextField } from "@mui/material";
import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { THEME } from "../constants/Theme";
import StarIcon from "@mui/icons-material/Star";

function Rating({rating}) {
  const star = [];
  

  {for(let i=0; i<rating; i++) {
    star.push(<StarIcon sx={{ color: "#FFC431", fontSize: "11px" }}/>)
    console.log("star" + star)
}}

  

  return (
    <Box sx={{display: 'flex', }}>
      {star}
    </Box>
  );
}

export default Rating;
