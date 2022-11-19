import { Box, Button, Typography } from "@mui/material";
import React from "react";
import EditIcon from "../assets/checkout/EditIcon";
import { THEME } from "../constants/Theme";

function QuantityButton({}) {
  const [ItemQty, setItemQty] = React.useState(0);

  return (
    <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <Box
        sx={{
          width: "24px",
          height: "24px",
          border: "1px solid" + THEME.GREEN_PRIMARY,
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <EditIcon />
      </Box>
      <Box
        onClick={ItemQty > 0 ? () => setItemQty(ItemQty - 1) : undefined}
        sx={{
          width: "24px",
          height: "24px",
          border: "1px solid" + THEME.GREEN_PRIMARY,
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          color: THEME.GREEN_PRIMARY,
        }}
      >
        <Typography>–</Typography>
      </Box>
      <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
        {ItemQty}
      </Typography>
      <Box
        onClick={() => setItemQty(ItemQty + 1)}
        sx={{
          width: "24px",
          height: "24px",
          border: "1px solid" + THEME.GREEN_PRIMARY,
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          background: THEME.GREEN_PRIMARY,
          color: "white",
        }}
      >
        <Typography>+</Typography>
      </Box>
    </Box>
  );
}

export default QuantityButton;
