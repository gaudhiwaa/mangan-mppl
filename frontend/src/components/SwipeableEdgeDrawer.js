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
import StyledTextField from "./StyledTextField";
import BasicSelect from "./BasicSelect";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import axios from "axios";
import { AppContext } from "../App";
import { THEME } from "../constants/Theme";
import { useNavigate } from "react-router-dom";

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

    if (flag === true && (handphoneNum? handphoneNum.length < 12 : null || !selectedDistrict || !selectedWard || addressDetail ? addressDetail.length < 8 : null)) {
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
            height: `calc(90% - ${drawerBleeding}px)`,
            width: "445px",
            overflow: "visible",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
          },
        }}
      />
      {open? "" :
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
      ></Button>}
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
                <Typography
                  sx={{ color: "#333333", marginTop: "40px", fontWeight: 600 }}
                >
                  Dikirim dari Alamat Simangan
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
                {open ? "" : <StyledButton
                  text={"Set Titik Lokasi"}
                  onClick={toggleDrawer(false)}
                />}
                {open ? <>


                  <Typography sx={{ fontSize: '12px', fontWeight: 600, marginBottom: '8px', marginTop: "15px" }}>Nama Penerima</Typography>
                  <StyledTextField value={name} padding="0px 14px 0 14px" text={"Masukkan nama penerima"} onChange={(e) => setName(e.target.value)} />
                  <Typography sx={{ fontSize: '12px', fontWeight: 600, marginBottom: '8px', marginTop: "15px" }}>Nomor Telepon</Typography>
                  <StyledTextField value={handphoneNum} padding="0px 14px 0 14px" text={"Masukkan nomor telepon"} onChange={(e) => (e.target.value.length < 14) ? setHandphoneNum(e.target.value) : null} />
                  <Typography sx={{ fontSize: '12px', fontWeight: 600, marginBottom: '8px', marginTop: "15px" }}>Kecamatan</Typography>

                  <BasicSelect data={districtsInTulungagung} wardId={handleChange} onChange={setSelectedDistrict} marginTop="16px" type={"districts"} label={"Kecamatan"} icon={<MailOutlineIcon sx={{ width: "21px", height: "21px" }} />} />
                  <Typography sx={{ fontSize: '12px', fontWeight: 600, marginBottom: '8px', marginTop: "15px" }}>Kelurahan</Typography>
                  <BasicSelect data={wards} onChange={setSelectedWard} marginTop="16px" type={"wards"} label={"Kelurahan"} icon={<MailOutlineIcon sx={{ width: "21px", height: "21px" }} />} />
                  <Typography sx={{ fontSize: '12px', fontWeight: 600, marginBottom: '8px', marginTop: "15px" }}>Detail Alamat</Typography>
                  <StyledTextField
                    onChange={(e) => setAddressDetail(e.target.value)}
                    text="Detail Alamat (Min 8 Huruf)"
                    value={addressDetail}
                    height="53px"
                    icon={<MailOutlineIcon sx={{ width: "21px", height: "21px" }} />}
                    marginTop="16px"
                  />
                  <StyledButton
                    btnColorChange={buttonColor}
                    text={"Tambah Alamat"}
                    marginTop="26px"
                    onClick={updateUser}
                    style="fill"
                  />
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

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;
