import { Box } from "@mui/system";
import { PADDING } from "../../constants/Padding";
import AppBarTop from "../../components/AppBarTop";
import { Typography } from "@mui/material";
import LogoMangan from "../../assets/LogoMangan";
import { THEME } from "../../constants/Theme";
import StyledTextField from "../../components/StyledTextField";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import StyledButton from "../../components/StyledButton";
// import {  useState } from "react";
import { REGISTER } from "../../constants/Typography";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

function RegisterPhase1() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [buttonColor, setButtonColor] = useState("")
  const [response,setResponse] = useState([])
  const [flag, setFlag]= useState(false)
  const navigate = useNavigate()
  const [index, setIndex] = useState()
  const [items, setItems] = useState([]);
  const [warning, setWarning] = useState("")

  useEffect(() => {
    btnColor()
  },);

  useEffect(() => {
    const items = localStorage.getItem('items');
    if (items) {
      setItems(items);
    }
  },[]);

useEffect(() => {
  localStorage.setItem('items', JSON.stringify(index));
},[index]);


  const btnColor = async () => {
    const response = await axios.get("http://localhost:8080/customers");
    setResponse(response.data)

    //cari jika email dah dipakai 

    if (password.length >= 8 &&  email.includes("@gmail.com") && name && !/\d/.test(name)) {
      setButtonColor(THEME.GREEN_PRIMARY);
      setFlag(true)
    } 
    
    if(flag === true && (password.length < 8  || !email.includes("@gmail.com") || !name))
    {
      setButtonColor("");
      setFlag(false)
    }
  };

  const saveUser = async (e) => {
    e.preventDefault();
    // let c_id = 0

    if (!buttonColor) {
      setWarning("Lengkapi semua data dengan benar")
    } 

    for(let i=0; i<response.length; i++){
      // console.log("MASUKK")
      if(response[i].c_email == email) {  
        // console.log("DAPETT")
        // c_id = i++
        setWarning("Email telah terdaftar")
        setEmail("")
        setPassword("")
      }
    }
    
    let c_id = 0
    // setIndex(response[response.length].id+1)
    console.log(response.length)
    if(response.length!=0){
    setIndex(response[response.length-1].id+1)
    c_id = response[response.length-1].id+1
    } else {
      setIndex(1)
      c_id = 1
    }
  
    

    

    if(buttonColor){
    try {
      await axios.post("http://localhost:8080/customers", {
        id : c_id,
        c_name : name,
        c_email : email,
        c_password : password,
      });
      
      if(buttonColor) navigate("/register-phase-2");
    } catch (error) {
      console.log(error);
    }
  }
    
    // else if (btnColor) {
    //   setWarning("Email atau Password salah")
    //   setPasswordInput("")
    // }
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
              marginBottom: warning? "12px" : "24px",
            }}
          >
            {REGISTER.DaftarMelaluiEmai}
          </Typography>
          {warning ? 
          <Box sx={{background: 'red', color: 'white',  borderRadius: '4px', mb: '12px', }}>
          <Typography sx={{fontSize: '13px', ml: '5px', display: 'flex', alignItems: 'center'}}>
          <ReportGmailerrorredIcon sx={{fontSize: "16px", mr: '5px', mt: '4px', mb: '4px'}}/>  {warning} 
          </Typography>
          </Box> : ""}
          <StyledTextField
            text={REGISTER.NamaLengkap}
            onChange={(e) => setName(e.target.value)}
            icon={
              <AccountCircleOutlinedIcon
                sx={{ width: "23px", height: "23px" }}
              />
            }
          />
          <StyledTextField
            text={REGISTER.AlamatEmail}
            value={email}
            icon={<MailOutlineIcon sx={{ width: "21px", height: "21px" }} />}
            marginTop="16px"
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledTextField
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            text={REGISTER.Password}
            icon={<LockOutlinedIcon sx={{ width: "21px", height: "21px" }} />}
            marginTop="16px"
            type="password"
          />
        </Box>
        <StyledButton
          text={REGISTER.Selanjutnya}
          marginTop="32px"
          style="fill"
          btnColorChange={buttonColor}
          // onClick={() => navigate("/home")}
          onClick={saveUser}
        />
      </Box>
    </Box>
  );
}

export default RegisterPhase1;
