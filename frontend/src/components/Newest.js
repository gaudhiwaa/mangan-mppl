import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { THEME } from "../constants/Theme";
import StyledButton from "./StyledButton";

function Newest({ title, discount, image, price }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        // border: "1px solid #F5F5F5",
        // borderRadius: "8px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img src={image} width="80px" height="70px" alt="menu" />
        <Box sx={{ marginLeft: "10px" }}>
          <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
            {title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "8px",
              marginBottom: "8px",
            }}
          >
            <Typography
              sx={{
                backgroundColor: "red",
                height: "19px",
                width: "30px",
                color: "white",
                borderRadius: "4px",
                fontWeight: 600,
                fontSize: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "8px",
              }}
            >
              {discount} %
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "10px",
                color: THEME.GREY_SECONDARY,
                textDecoration: "line-through",
              }}
            >
              {price} / porsi
            </Typography>
          </Box>
          <Typography sx={{ fontSize: "14px", marginTop: "6px" }}>
            <span style={{ fontWeight: "bold" }}>
              {price - (price * discount) / 100}
            </span>{" "}
            / porsi
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end", height: "75px" }}>
        <StyledButton
          style="outlined"
          text={"Tambah"}
          height="26px"
          fontSize="12px"
          borderRadius="4px"
          noShadow
        />
      </Box>
    </Box>
  );
}

export default Newest;
