import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { PADDING } from "../constants/Padding";
import GreenLocationIcon from "../assets/location/GreenLocationIcon";
import StyledButton from "./StyledButton";

const drawerBleeding = 200;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

function SwipeableEdgeDrawer(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => () => {
    if (open === false) {
      setOpen(true);
    } else setOpen(false);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            width: "445px",
            overflow: "visible",
            marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          },
        }}
      />
      <Button
        disableRipple
        onClick={toggleDrawer()}
        sx={{
          position: "absolute",
          bottom: 12,
          zIndex: 99999,
          width: PADDING,
          height: "45px",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          border: "none",
        }}
      ></Button>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <SwipeableDrawer
          container={container}
          anchor="bottom"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <StyledBox
            sx={{
              position: "absolute",
              top: -drawerBleeding,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              visibility: "visible",
              width: "445px",
              height: "100%",
              marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
              
              // right: "auto",
              // left: "500px",
              // padding:"0 auto"
            }}
          >
            <Puller />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box sx={{ width: PADDING }}>
                <Typography
                  sx={{ color: "#333333", marginTop: "40px", fontWeight: 600 }}
                >
                  Tentukan Titik Lokasi
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    marginTop: "10px",
                    marginBottom: "14px",
                  }}
                >
                  <GreenLocationIcon />
                  <Typography
                    sx={{
                      color: "#808080",
                      fontSize: "12px",
                      marginLeft: "16px",
                    }}
                  >
                    Arandra Residence, Jl. Cempaka Putih Raya No.1, RT.1/RW.6,
                    Cemp. Putih Tim., Kec. Cemp. Putih, Kota Jakarta Pusat,
                    Daerah Khusus Ibukota Jakarta 10510
                  </Typography>
                </Box>
                <StyledButton
                  text={"Set Titik Lokasi"}
                  onClick={toggleDrawer(false)}
                />
              </Box>
            </Box>
          </StyledBox>
        </SwipeableDrawer>
      </Box>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;
