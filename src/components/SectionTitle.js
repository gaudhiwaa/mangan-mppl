import { Box, Typography } from "@mui/material";
import React from "react";
import { THEME } from "../constants/Theme";
import { HOME } from "../constants/Typography";

function SectionTitle({title, desc}) {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "28px",
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
            {title}
          </Typography>
        </Box>
        <Box sx={{ marginTop: "4px" }}>
          <Typography
            sx={{
              color: THEME.GREEN_PRIMARY,
              fontWeight: "bold",
              fontSize: "12px",
            }}
          >
            {HOME.LihatSemua}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box sx={{ marginLeft: "1px", color: THEME.GREY }}>
          <Typography sx={{ fontSize: "12px" }}>
            {desc}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SectionTitle;
