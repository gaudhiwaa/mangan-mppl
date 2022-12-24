import { Box, Input, } from "@mui/material";
import React from "react";
import { THEME } from "../constants/Theme";

function StyledTextField({
  text,
  icon,
  height,
  width,
  marginTop,
  type,
  padding,
  onChange,
  value
}) {

  return (
    <Box
      sx={{
        backgroundColor: "#FAFAFA",
        width: width || "none",
        height: height || "45px",
        padding: "0 18px 0 18px" || padding,
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        marginTop: marginTop || "none",
      }}
    >
      {icon ? (
        <Box
          sx={{
            width: "16px",
            height: "16px",
            mr: "14px",
            color: THEME.GREY_PRIMARY,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </Box>
      ) : (
        ""
      )}

      <Input
        onChange={onChange}
        placeholder={text}
        value={value}
        sx={{ color: "black", fontSize: "14px", width: "100%" }}
        disableUnderline
        type={type === "password" ? "password" : "email"}
      />
    </Box>
  );
}

export default StyledTextField;
