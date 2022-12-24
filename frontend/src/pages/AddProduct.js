import { Box } from "@mui/system";
import { PADDING } from "../constants/Padding";
import AppBarTop from "../components/AppBarTop";
import { Typography } from "@mui/material";
import LogoMangan from "../assets/LogoMangan";
import { THEME } from "../constants/Theme";
import StyledTextField from "../components/StyledTextField";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StyledButton from "../components/StyledButton";
// import { useState } from "react";
import { REGISTER } from "../constants/Typography";
import { useNavigate, useParams } from "react-router-dom";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import axios from "axios";
import BasicSelect from "../components/BasicSelect";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';


function AddProduct() {
  const navigate = useNavigate()
  const [wards, setWards] = useState([])
  const [f_name, setF_name] = useState("")
  const [f_price, setF_price] = useState()
  const [f_discount, setF_discount] = useState()
  const [f_image, setF_image] = useState("")
  const [f_desciption, setF_description] = useState("")

  const addProd = async(f_name, f_price, f_discount, f_image,f_desciption) => {
    try {
      await axios.post("http://localhost:8080/foods", {
        f_name : f_name,
        f_price : f_price,
        f_discount : f_discount,
        f_image : f_image,
        f_desciption : f_desciption
      })}
      catch (error) {
        console.log(error);
      }
  }
  




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
      <AppBarTop text="Tambah Produk" />

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
            Masukkan Deskripsi Produk
          </Typography>
        
          <StyledTextField
            text={"Nama Produk"}
            onChange={(e) =>  setF_name(e.target.value) }
            value={f_name}
            height="53px"
            // icon={
            //   <LocalPhoneOutlinedIcon
            //     sx={{ width: "23px", height: "23px" }}
            //   />
            // }
          />
          <StyledTextField
            onChange={(e) => setF_price(e.target.value)}
            value={f_price}
            text="Harga"
            height="53px"
            marginTop="16px"
          />
          <StyledTextField
            onChange={(e) => setF_discount(e.target.value)}
            value={f_discount}
            text="Diskon"
            height="53px"
            marginTop="16px"
          />
          <StyledTextField
            onChange={(e) => setF_image(e.target.value)}
            value={f_image}
            text="URL gambar"
            height="53px"
            marginTop="16px"
          />
          <StyledTextField
            onChange={(e) => setF_description(e.target.value)}
            value={f_desciption}
            text="Deskripsi Produk"
            height="53px"
            marginTop="16px"
          />
        </Box>
 
      </Box>
      {/* {districtsInTulungagung.map((i)=>{
        <Typography>{i}</Typography>
      })} */}
      
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          paddingBottom: "16px",
          background: "white",
        }}
      >
        <Box
          sx={{
            width: PADDING,
            height: "1px",
            background: "#F5F5F5",
            display: "absolute",
            bottom: "0",
          }}
        />
   <Box sx={{ width: PADDING, mt: "12px" }}>
          <StyledButton
            text={"Simpan Produk "}
            onClick={() => addProd(f_name, f_price, f_discount, f_image, f_desciption)}
          />
        </Box>
       
      </Box>
      
      {console.log("UDAH DIRENDER", wards)}
    </Box>
  );
}

export default AddProduct;


{/* <Box
        sx={{
          position: "fixed",
          bottom: 0,
          paddingBottom: "16px",
          background: "white",
        }}
      >
        <Box
          sx={{
            width: PADDING,
            height: "1px",
            background: "#F5F5F5",
            display: "absolute",
            bottom: "0",
          }}
        />
   <Box sx={{ width: PADDING, mt: "12px" }}>
          <StyledButton
            text={"Simpan Produk "}
            onClick={() => addProd()}
          />
        </Box>
       
      </Box> */}