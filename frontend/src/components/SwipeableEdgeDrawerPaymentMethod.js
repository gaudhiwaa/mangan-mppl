import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { PADDING } from "../constants/Padding";
import CircleIcon from "@mui/icons-material/Circle";
import axios from "axios";
import { AppContext } from "../App";
import { THEME } from "../constants/Theme";
import { useNavigate } from "react-router-dom";
import CreditCardIcon from "../assets/shipment/CreditCardIcon";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Checkbox } from "@mui/material";
import BCAIcon from "../assets/payment/BCAIcon";
import { paymentMethodModel } from "./API/GetAPI";

const drawerBleeding = 0;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? "white"
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

function SwipeableEdgeDrawerPaymentMethod(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState();
  const { APIpaymentMethods, setAPIPaymentMethods } = React.useContext(AppContext)

  React.useEffect(() => {
    const items = localStorage.getItem('items');
    if (items) {
      setItems(items);
    }
    getAPI(items)
  }, []);

  const getAPI = async (items) => {
    const payment_methods = await paymentMethodModel()
    setAPIPaymentMethods(payment_methods);
  }

  const toggleDrawer = () => () => {
    if (open === false) {
      setOpen(true);
    } else setOpen(false);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleChange = async (index) => {
    // console.log(APIpaymentMethods[index].id, index)

    try {
      for (let i = 0; i < APIpaymentMethods.length; i++) {
        if (APIpaymentMethods[i].id == index + 1) {
          await axios.patch(`http://localhost:8080/paymentmethods/${APIpaymentMethods[i].id}`, {
            pm_use: true
          })
        } else
          await axios.patch(`http://localhost:8080/paymentmethods/${APIpaymentMethods[i].id}`, {
            pm_use: false
          })
      }
    } catch (error) {
      console.log(error);
    }

    getAPI(items)

    // for(let i=0; i<APIpaymentMethods.length; i++){
    //   if()
    //   try {
    //     await axios.patch(`http://localhost:8080/vouchers/${APIpaymentMethods[i].id}`, {
    //       pm_use: false
    //     })
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

  };

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: open ? `calc(80% - ${drawerBleeding}px)` : "0px",
            width: open ? "445px" : "",
            overflow: "visible",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            borderRadius: '10px'

          },
        }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: PADDING,
          border: "1px solid #F5F5F5",
          height: "48px",
          mt: "0px",
          mb: "20px",
          borderRadius: "8px",
          "&:hover": {
            cursor: "pointer",
          },
          zIndex: 99999,
        }}
        onClick={toggleDrawer()}
      >

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "16px 0 16px 16px",
            background: "white"
          }}

        >
          <CreditCardIcon />
          <Typography sx={{ fontWeight: 500, fontSize: "12px", ml: "12px", }}>
            Pilih Metode Pembayaran
          </Typography>
        </Box>
        <ArrowForwardIosIcon
          sx={{ color: "#4F4F4F", fontSize: "12px", mr: "16px" }}
        />
      </Box>


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
            }}
          >
            <Puller />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box sx={{ width: PADDING }}>

                {open ? <>


                  <Typography sx={{ fontSize: '12px', fontWeight: 600, marginBottom: '8px', marginTop: "15px" }}>Metode Pembayaran</Typography>

                  <Typography sx={{ fontSize: '12px', fontWeight: 600, marginBottom: '8px', marginTop: "15px" }}>Bank Transfer</Typography>

                  {APIpaymentMethods.map((foods, i) => (

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} key={i}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Checkbox
                          sx={{ ml: "-10px", }}
                          icon={<CircleIcon sx={{ color: "#F5F5F5", fontSize: "28px" }} />}
                          checked={APIpaymentMethods[i].pm_use}
                          onChange={() => handleChange(i)}
                          checkedIcon={
                            <Box
                              sx={{
                                background: "#F5F5F5",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "50%",
                                width: "28px",
                                height: "28px",
                              }}
                            >
                              <CircleIcon
                                sx={{ color: THEME.GREEN_PRIMARY, fontSize: "22px" }}
                              />
                            </Box>
                          }
                        />
                        <Typography sx={{ fontSize: '12px', fontWeight: 500 }}>{APIpaymentMethods[i].pm_title}</Typography>
                      </Box>
                      {/* <BCAIcon/> */}
                      <img src={APIpaymentMethods[i].pm_image} width={"70px"} />
                    </Box>

                  ))}


                </>

                  : ""}

              </Box>
            </Box>
          </StyledBox>
        </SwipeableDrawer>
      </Box>
    </Root>
  );
}

SwipeableEdgeDrawerPaymentMethod.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableEdgeDrawerPaymentMethod;
