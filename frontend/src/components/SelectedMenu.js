import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { THEME } from "../constants/Theme";
import StyledButton from "./StyledButton";
import StarIcon from "@mui/icons-material/Star";

function SelectedMenu({
  title,
  discount,
  price,
  image,
  rating,
  sold,
  marginRight,
  tabs,
}) {
  return (
    <Box>
      {tabs ? (
        <>
          <Box
            sx={{
              width: "164px",
              padding: "22px 11px 22px 11px",
              border: "1px solid #F5F5F5",
              borderRadius: "8px",
            }}
          >
            <img src={image} width="164px" alt="menu"/>
            <Box>
              <Typography sx={{ fontSize: "12px", fontWeight: 500 }}>
                {title}
              </Typography>
            </Box>
            {discount ? (
              <Box sx={{ marginTop: "12px", display: "flex" }}>
                <Box
                  sx={{
                    backgroundColor: "red",
                    width: "30px",
                    color: "white",
                    borderRadius: "4px",
                    fontWeight: "600",
                    fontSize: "10px",
                    display: "flex",
                    justifyContent: "center",
                    marginRight: "8px",
                  }}
                >
                  {discount}%
                </Box>
                <Box>
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
              </Box>
            ) : (
              ""
            )}
            <Box>
              <Typography sx={{ fontSize: "14px", marginTop: "6px" }}>
                <span style={{ fontWeight: "bold" }}>
                  {price - (price * discount) / 100}
                </span>{" "}
                / porsi
              </Typography>
            </Box>
            <Box sx={{ display: "flex", marginTop: "4px" }}>
              <Box sx={{ display: "flex" }}>
                <StarIcon
                  sx={{ color: "#FFC431", fontSize: "9px", marginTop: "0.5px" }}
                />
                <Typography sx={{ fontSize: "8px", color: "#808386" }}>
                  {rating} |
                </Typography>
              </Box>
              <Box
                sx={{ fontSize: "8px", marginLeft: "2px", color: "#808386" }}
              >
                Terjual {sold}
              </Box>
            </Box>
            <Box sx={{ marginTop: "8px" }}>
              <StyledButton text={"Tambah"} style="outlined" height="26px" noShadow/>
            </Box>
          </Box>
        </>
      ) : (
        <Box
          sx={{
            width: "100px",
            padding: "22px 11px 22px 11px",
            border: "1px solid #F5F5F5",
            borderRadius: "8px",
          }}
        >
          <img src={image} alt="menu"/>
          <Box>
            <Typography sx={{ fontSize: "12px", fontWeight: 500 }}>
              {title}
            </Typography>
          </Box>
          {discount ? (
            <Box sx={{ marginTop: "12px", display: "flex" }}>
              <Box
                sx={{
                  backgroundColor: "red",
                  width: "30px",
                  color: "white",
                  borderRadius: "4px",
                  fontWeight: "600",
                  fontSize: "10px",
                  display: "flex",
                  justifyContent: "center",
                  marginRight: "8px",
                }}
              >
                {discount}%
              </Box>
              <Box>
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
            </Box>
          ) : (
            ""
          )}
          <Box>
            <Typography sx={{ fontSize: "14px", marginTop: "6px" }}>
              <span style={{ fontWeight: "bold" }}>
                {price - (price * discount) / 100}
              </span>{" "}
              / porsi
            </Typography>
          </Box>
          <Box sx={{ display: "flex", marginTop: "4px" }}>
            <Box sx={{ display: "flex" }}>
              <StarIcon
                sx={{ color: "#FFC431", fontSize: "9px", marginTop: "0.5px" }}
              />
              <Typography sx={{ fontSize: "8px", color: "#808386" }}>
                {rating} |
              </Typography>
            </Box>
            <Box sx={{ fontSize: "8px", marginLeft: "2px", color: "#808386" }}>
              Terjual {sold}
            </Box>
          </Box>
          <Box sx={{ marginTop: "8px" }}>
            <StyledButton text={"Tambah"} style="outlined" height="26px" noShadow/>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default SelectedMenu;
