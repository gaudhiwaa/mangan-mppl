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
  color,
}) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        borderRadius: '8px',
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
        },
      }}
    >
      {text}
    </Button>
  );
}

export default StyledButton;
