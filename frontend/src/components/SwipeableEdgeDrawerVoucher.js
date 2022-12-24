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

const drawerBleeding = 400;

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

function SwipeableEdgeDrawerVoucher(props) {
  const { window } = props;
  const [handphoneNum, setHandphoneNum] = React.useState("")
  const [open, setOpen] = React.useState(false);
  const [selectedWard, setSelectedWard] = React.useState()
  const [wards, setWards] = React.useState([])
  const { districtsInTulungagung } = React.useContext(AppContext)
  const [selectedDistrict, setSelectedDistrict] = React.useState()
  const [name, setName] = React.useState("")
  const [addressDetail, setAddressDetail] = React.useState()
  const [items, setItems] = React.useState([]);
  const [flag, setFlag] = React.useState(false)
  const [buttonColor, setButtonColor] = React.useState("")
  const [warning, setWarning] = React.useState("")
  const navigate = useNavigate()

  React.useEffect(() => {
    btnColor()
  },);

  React.useEffect(() => {
    const items = localStorage.getItem('items');
    if (items) {
      setItems(items);
    }
  }, []);

  const btnColor = () => {

    if (handphoneNum.length >= 12 && selectedDistrict && selectedWard && addressDetail ? addressDetail.length >= 8 : null && !/\d/.test(name)) {
      setButtonColor(THEME.GREEN_PRIMARY);
      setFlag(true)
    }

    if (flag === true && (handphoneNum ? handphoneNum.length < 12 : null || !selectedDistrict || !selectedWard || addressDetail ? addressDetail.length < 8 : null)) {
      setButtonColor("");
      setFlag(false)
    }
  };

  const handleChange = async (id) => {
    // setValue(event.target.value);
    const district = await axios.get(`https://ibnux.github.io/data-indonesia/kelurahan/${id}.json`);
    // console.log(id, "VALL")
    setWards(district.data)
    // setSelectedDistrict(district.data.nama)
  };

  const updateUser = async (e) => {
    const customer = await axios.get(`http://localhost:8080/customers/${items}`);
    console.log(items)
    e.preventDefault();

    if (!buttonColor) {
      setWarning("Lengkapi semua data dengan benar")
    } else {
      try {
        await axios.post(`http://localhost:8080/addresses/`, {
          c_id: items,
          addr_name: name,
          addr_handphone_number: handphoneNum,
          addr_fullAddress: addressDetail,
          addr_ward: selectedWard,
          addr_districts: selectedDistrict,
          addr_mainAddress: false
        });
        navigate("/locationlist");
      } catch (error) {
        console.log(error);
      }
    }
  };

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
            height: open ? `calc(80% - ${drawerBleeding}px)` : "0px",
            width: open ? "445px" : "",
            overflow: "visible",
            marginLeft: "auto",
            marginRight: "auto",
            // left: 0,
            // right: 0,
            borderRadius: '10px'

          },
        }}
      />
      {open ? "" :
        // <Button
        //   disableRipple
        //   onClick={toggleDrawer()}
        //   sx={{
        //     // position: "absolute",
        //     bottom: 12,
        //     zIndex: 99999,
        //     width: PADDING,
        //     height: "45px",
        //     marginLeft: "auto",
        //     marginRight: "auto",
        //     // left: 0,
        //     // right: 0,
        //     border: "red solid 5px",
        //   }}
        // ></Button>
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
      }

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <SwipeableDrawer
          // container={container}
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

                  <Typography sx={{ fontSize: '12px', fontWeight: 600, marginBottom: '8px', marginTop: "15px" }}>Virtual Account</Typography>

                  <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <Box sx={{display:'flex', alignItems: 'center'}}>
                  <Checkbox
                    sx={{ ml: "-10px",}}
                    icon={<CircleIcon sx={{ color: "#F5F5F5", fontSize: "28px" }} />}
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
                  <Typography sx={{fontSize: '12px', fontWeight: 500  }}>BCA Virtual Account</Typography>
                  </Box>
                  <BCAIcon/>
                  </Box>
                  <Typography sx={{ fontSize: '12px', fontWeight: 600, marginBottom: '8px', marginTop: "15px" }}>Transfer bank</Typography>

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

SwipeableEdgeDrawerVoucher.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableEdgeDrawerVoucher;
