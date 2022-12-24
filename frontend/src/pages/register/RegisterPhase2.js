import { Box } from "@mui/system";
import { PADDING } from "../../constants/Padding";
import AppBarTop from "../../components/AppBarTop";
import { Typography } from "@mui/material";
import LogoMangan from "../../assets/LogoMangan";
import { THEME } from "../../constants/Theme";
import StyledTextField from "../../components/StyledTextField";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StyledButton from "../../components/StyledButton";
// import { useState } from "react";
import { REGISTER } from "../../constants/Typography";
import { useNavigate, useParams } from "react-router-dom";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import axios from "axios";
import BasicSelect from "../../components/BasicSelect";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';


function RegisterPhase2() {
  const navigate = useNavigate()
  const { districtsInTulungagung } = useContext(AppContext)
  const [wards, setWards] = useState([])
  const [handphoneNum, setHandphoneNum] = useState("")
  const [selectedDistrict, setSelectedDistrict] = useState()
  const [selectedWard, setSelectedWard] = useState()
  const [addressDetail, setAddressDetail] = useState()
  const [flag, setFlag] = useState(false)
  const [items, setItems] = useState([]);
  const [buttonColor, setButtonColor] = useState("")
  const [warning, setWarning] = useState("")

  useEffect(() => {
    btnColor()
  },);

  useEffect(() => {
    const items = localStorage.getItem('items');
    if (items) {
      setItems(items);
    }
  }, []);


  const btnColor = () => {

    if (handphoneNum.length >= 12 && selectedDistrict && selectedWard && addressDetail ? addressDetail.length >= 8 : null) {
      setButtonColor(THEME.GREEN_PRIMARY);
      setFlag(true)
    }

    if (flag === true && (handphoneNum? handphoneNum.length < 12 : null || !selectedDistrict || !selectedWard || addressDetail ? addressDetail.length < 8 : null)) {
      setButtonColor("");
      setFlag(false)
    }
  };

  const updateUser = async (e) => {
    const customer = await axios.get(`http://localhost:8080/customers/${items}`);
    console.log(items)
    e.preventDefault();

    if (!buttonColor) {
      setWarning("Lengkapi semua data dengan benar")
    } else {
      try {
        await axios.patch(`http://localhost:8080/customers/${items}`, {
          c_handphone_number: handphoneNum,
        });
        // navigate("/home");
      } catch (error) {
        console.log(error);
      }
      try {
        await axios.post(`http://localhost:8080/addresses/`, {
          c_id: items,
          addr_name: customer.data.c_name,
          addr_handphone_number: handphoneNum,
          addr_fullAddress: addressDetail,
          addr_ward: selectedWard,
          addr_districts: selectedDistrict,
          addr_mainAddress: true
        });
        navigate("/home");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleChange = async (id) => {
    // setValue(event.target.value);
    const district = await axios.get(`https://ibnux.github.io/data-indonesia/kelurahan/${id}.json`);
    // console.log(id, "VALL")
    setWards(district.data)
    // setSelectedDistrict(district.data.nama)
  };





  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <AppBarTop text="Daftar" />

      <Box sx={{ width: PADDING, display: "flex", flexDirection: "column" }}>
        <Box sx={{ mt: "32px" }}>
          <LogoMangan width="60px" height="60px" />
        </Box>
        <Box sx={{ mt: "32px" }}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              color: THEME.BLACK_PRIMARY,
              marginBottom: "24px",
            }}
          >
            {REGISTER.MasukkanNomorDan}
          </Typography>
          {warning ?
            <Box sx={{ background: 'red', color: 'white', borderRadius: '4px', mb: '12px', }}>
              <Typography sx={{ fontSize: '13px', ml: '5px', display: 'flex', alignItems: 'center' }}>
                <ReportGmailerrorredIcon sx={{ fontSize: "16px", mr: '5px', mt: '4px', mb: '4px' }} />  {warning}
              </Typography>
            </Box> : ""}
          <StyledTextField
            text={"Nomor Telepon (08123456789)"}
            onChange={(e) => (e.target.value.length < 14) ? setHandphoneNum(e.target.value) : null}
            value={handphoneNum}
            height="53px"
            icon={
              <LocalPhoneOutlinedIcon
                sx={{ width: "23px", height: "23px" }}
              />
            }
          />
          <BasicSelect data={districtsInTulungagung} wardId={handleChange} onChange={setSelectedDistrict} marginTop="16px" type={"districts"} label={"Kecamatan"} icon={<MailOutlineIcon sx={{ width: "21px", height: "21px" }} />} />
          <BasicSelect data={wards} onChange={setSelectedWard} marginTop="16px" type={"wards"} label={"Kelurahan"} icon={<MailOutlineIcon sx={{ width: "21px", height: "21px" }} />} />
          <StyledTextField
            onChange={(e) => setAddressDetail(e.target.value)}
            value={addressDetail}
            text="Detail Alamat (Min 8 Huruf)"
            height="53px"
            icon={<MailOutlineIcon sx={{ width: "21px", height: "21px" }} />}
            marginTop="16px"
          />
        </Box>
        <StyledButton
          btnColorChange={buttonColor}
          text={REGISTER.Daftar}
          marginTop="32px"
          style="fill"
          onClick={updateUser}
        />
      </Box>
      {/* {districtsInTulungagung.map((i)=>{
        <Typography>{i}</Typography>
      })} */}
      {console.log("UDAH DIRENDER", wards)}
    </Box>
  );
}

export default RegisterPhase2;
