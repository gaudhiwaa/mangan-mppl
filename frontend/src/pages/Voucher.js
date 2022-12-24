import { Box, Typography } from '@mui/material'
import React from 'react'
import AppBarTop from '../components/AppBarTop'
import Voucher1 from '../assets/voucher/Voucher1.png'
import Voucher2 from '../assets/voucher/Voucher2.png'
import Voucher3 from '../assets/voucher/Voucher2.png'
import { PADDING } from "../constants/Padding";

function Voucher() {
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
    <AppBarTop text={"Voucher"} line/>
        <Box
            sx={{borderRadius: '8px', border: '1px solid #f2f2f2', width: PADDING, marginTop: '25px', overflow: 'hidden'}}
        >
            <img src={Voucher1} alt="voucher" width={"100%"} height={"140px"}/>
            <Box sx={{marginLeft: '13px', marginTop: '10px', marginRight: '13px'}}>
            <Typography sx={{fontSize: '14px', fontWeight: 600}}>Potongan Gratis Ongkir Senilai 20.000</Typography>
            <Typography
             sx={{color: '#808080', fontSize: '10px', fontWeight: 500, marginTop: '4px', marginBottom: '15px'}}
            >
            Berlaku sampai 11 Okt 2021
            </Typography>
            </Box>
        </Box>
       
    
    

  </Box>
  )
}

export default Voucher