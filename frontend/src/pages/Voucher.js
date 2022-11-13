import { Box, Typography } from '@mui/material'
import React from 'react'
import AppBarTop from '../components/AppBarTop'
import Voucher1 from '../assets/voucher/Voucher1.png'
import Voucher2 from '../assets/voucher/Voucher2.png'
import Voucher3 from '../assets/voucher/Voucher2.png'

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
            sx={{borderRadius: '8px', border: '1px solid #f2f2f2', width: '343px', height: '207px', marginTop: '25px', overflow: 'hidden'}}
        >
            <img src={Voucher1} alt="voucher"/>
            <Box sx={{marginLeft: '13px', marginTop: '12px', marginRight: '13px'}}>
            <Typography sx={{fontSize: '14px', fontWeight: 600}}>Potongan Gratis Ongkir Senilai 20.000</Typography>
            <Typography
             sx={{color: '#808080', fontSize: '10px', fontWeight: 500, marginTop: '4px'}}
            >
            Berlaku sampai 11 Okt 2021
            </Typography>
            </Box>
        </Box>
        <Box
            sx={{borderRadius: '8px', border: '1px solid #f2f2f2', width: '343px', height: '207px', marginTop: '25px', overflow: 'hidden'}}
        >
            <img src={Voucher2} alt="voucher"/>
            <Box sx={{marginLeft: '13px', marginTop: '12px', marginRight: '13px'}}>
            <Typography sx={{fontSize: '14px', fontWeight: 600}}>Potongan Diskon 10.10 Senilai 50%</Typography>
            <Typography
             sx={{color: '#808080', fontSize: '10px', fontWeight: 500, marginTop: '4px'}}
            >
            Berlaku sampai 10 Okt 2021
            </Typography>
            </Box>
        </Box>
        <Box
            sx={{borderRadius: '8px', border: '1px solid #f2f2f2', width: '343px', height: '207px', marginTop: '25px', overflow: 'hidden'}}
        >
            <img src={Voucher3} alt="voucher"/>
            <Box sx={{marginLeft: '13px', marginTop: '12px', marginRight: '13px'}}>
            <Typography sx={{fontSize: '14px', fontWeight: 600}}>Potongan Diskon 10.10 Senilai 50%</Typography>
            <Typography
             sx={{color: '#808080', fontSize: '10px', fontWeight: 500, marginTop: '4px'}}
            >
            Berlaku sampai 10 Okt 2021
            </Typography>
            </Box>
        </Box>
    
    

  </Box>
  )
}

export default Voucher