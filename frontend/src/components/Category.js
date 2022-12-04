import { Box, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import Seafood from "../assets/home/category/Seafood.png";
import { THEME } from "../constants/Theme";

function Category({ title, image }) {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        //   mr: '42px'
        }}
      >
        <img src={image} width="32px" height="32px"/>
        <Typography sx={{fontSize: '12px', color: THEME.GREEN_PRIMARY, mt: '12px'}}>{title}</Typography>
      </Box>
    </Box>
  );
}

export default Category;
