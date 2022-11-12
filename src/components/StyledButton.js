import { Button } from "@mui/material";
import { THEME } from "../constants/Theme";

function StyledButton({
  style,
  width,
  height,
  fontSize,
  text,
  marginTop,
  onClick,
  borderRadius,
  noShadow,
}) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        boxShadow: noShadow ? 0 : "",
        borderRadius: borderRadius || '8px',
        backgroundColor: THEME.GREEN_PRIMARY,
        ...(style === "outlined" && {
          backgroundColor: "transparent",
        }),
        ...(style === "contained" && {
          backgroundColor: THEME.GREEN_PRIMARY,
        }),
        ...(style === "fill" && {
          backgroundColor: THEME.GREY_SECONDARY,
        }),
        width: width || "100%",
        height: height || "45px",
        fontWeight: "bold",
        textTransform: "none",
        fontSize: fontSize || "14px",
        color: style === "outlined" ? THEME.GREEN_PRIMARY : "white",
        border:
          style === "outlined" ? "0.8px solid" + THEME.GREEN_PRIMARY : "none",
        marginTop: marginTop || "0",
        "&:hover": {
          backgroundColor: THEME.GREEN_PRIMARY,
        ...(style === "outlined" && {
          backgroundColor: "transparent",
        }),
        ...(style === "contained" && {
          backgroundColor: THEME.GREEN_PRIMARY,
        }),
        ...(style === "fill" && {
          backgroundColor: THEME.GREY_PRIMARY,
        }),
          borderColor: style === "outlined" ? THEME.GREEN_PRIMARY : "none",
          boxShadow: noShadow ? "rgba(0, 0, 0, 0.16) 0px 1px 4px;" + THEME.GREEN_PRIMARY : "",
        },
        
      }}
    >
      {text}
    </Button>
  );
}

export default StyledButton;
