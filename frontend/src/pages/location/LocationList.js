import { Box, Typography } from "@mui/material";
import React from "react";
import EditIcon from "../../assets/location/EditIcon";
import AppBarTop from "../../components/AppBarTop";
import { PADDING } from "../../constants/Padding";
import { THEME } from "../../constants/Theme";
import { useNavigate } from "react-router-dom";


function LocationList() {
  const [mainLoc, setMainLoc] = React.useState({1:true});
  const navigate = useNavigate()

  const handleBtn = btnId => e => {
    e.preventDefault();
    setMainLoc(false)
    setMainLoc(state => ({
      ...state,
      [btnId]: !setMainLoc[true]
    }));
    console.log(mainLoc)
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
      <AppBarTop text={"Daftar Alamat"} line extButtonTxt={"+ Tambah Alamat"}/>
      {/* 1 */}
      <Box sx={{border: "1px solid #F5F5F5", borderRadius: '8px', width: PADDING, height: '163px', overflow: 'hidden', marginTop: '21px',  display: 'flex'}}>
      {mainLoc[1] ? <Box sx={{height: '100%', width: '12px', background: THEME.GREEN_PRIMARY,}}/> : ""}
        
        <Box sx={{padding: mainLoc[1] ? "15px 17px 15px 17px":'15px 17px 15px 22px', }}>
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          {mainLoc[1]? 
            <Box sx={{background: THEME.GREEN_PRIMARY, width: '53px', height: '19px',  borderRadius: '4px', fontWeight: 600, color: 'white', fontSize: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', "&:hover": {
              cursor: "pointer",
            },}}>UTAMA</Box> : <Box sx={{color: THEME.GREEN_PRIMARY, width: '155px', height: '19px',  borderRadius: '4px', fontWeight: 600, border: "1px solid" + THEME.GREEN_PRIMARY, fontSize: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', "&:hover": {
              cursor: "pointer",
            },}} onClick={handleBtn(1)}>Jadikan Alamat Utama</Box>}
          
          <Box onClick={() => navigate("/changelocation")} sx={{ height: '24px', "&:hover": {
                    cursor: "pointer",
                  },}}>
          <EditIcon/>
          </Box>
          </Box>
          <Typography sx={{marginTop: '11px', fontWeight: 500, fontSize: '14px'}}>Adinda</Typography>
          <Typography sx={{marginTop: '6px', fontSize: '12px', fontWeight: 400, color: "#333333"}}>+6281903810</Typography>
          <Typography sx={{marginTop: '5px', fontWeight: 400, fontSize: '12px', color: '#333333'}}>
          Arandra Residence, Jl. Cempaka Putih Raya No.1, RT.1/RW.6, Cemp. Putih Tim., Kec. Cemp. Putih, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10510
          </Typography>
        </Box>
      </Box>
      <Box sx={{border: "1px solid #F5F5F5", borderRadius: '8px', width: PADDING, height: '163px', overflow: 'hidden', marginTop: '21px',  display: 'flex'}}>
        {mainLoc[2] ? <Box sx={{height: '100%', width: '12px', background: THEME.GREEN_PRIMARY,}}/> : ""}
        
        <Box sx={{padding: mainLoc[2] ? "15px 17px 15px 17px":'15px 17px 15px 23px', }}>
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          {mainLoc[2]? 
            <Box sx={{background: THEME.GREEN_PRIMARY, width: '53px', height: '19px',  borderRadius: '4px', fontWeight: 600, color: 'white', fontSize: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', "&:hover": {
              cursor: "pointer",
            },}}>UTAMA</Box> : <Box sx={{color: THEME.GREEN_PRIMARY, width: '155px', height: '19px',  borderRadius: '4px', fontWeight: 600, border: "1px solid" + THEME.GREEN_PRIMARY, fontSize: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', "&:hover": {
              cursor: "pointer",
            },}} onClick={handleBtn(2)}>Jadikan Alamat Utama</Box>}
          
          <Box onClick={() => navigate("/changelocation")} sx={{ height: '24px', "&:hover": {
                    cursor: "pointer",
                  },}}>
          <EditIcon/>
          </Box>
          </Box>
          <Typography sx={{marginTop: '11px', fontWeight: 500, fontSize: '14px'}}>Bayu</Typography>
          <Typography sx={{marginTop: '6px', fontSize: '12px', fontWeight: 400, color: "#333333"}}>+6281903810</Typography>
          <Typography sx={{marginTop: '5px', fontWeight: 400, fontSize: '12px', color: '#333333'}}>
          Jl. Pulo Mas Barat XI No.19, RT.3/RW.10, Kayu Putih, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13210
          </Typography>
        </Box>
      </Box>

    </Box>
  );
}

export default LocationList;
