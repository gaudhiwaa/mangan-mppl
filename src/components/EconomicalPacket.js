import { Box, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

function EconomicalPacket({ title, rating, sold, image }) {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100px",
          padding: "22px 11px 8.61px 11px",
          border: "1px solid #F5F5F5",
          borderRadius: "8px",
        }}
      >
        <img src={image} />

        <Typography
          sx={{ fontSize: "12px", fontWeight: 500, marginTop: "8px" }}
        >
          {title}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <StarIcon
            sx={{ color: "#FFC431", fontSize: "9px", marginTop: "0.5px" }}
          />
          <Typography
            sx={{ fontSize: "8px", marginLeft: "2px", color: "#808386" }}
          >
            {rating} |{" "}
          </Typography>
          <Typography
            sx={{ fontSize: "8px", marginLeft: "2px", color: "#808386" }}
          >
            {sold} Pembeli
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default EconomicalPacket;
