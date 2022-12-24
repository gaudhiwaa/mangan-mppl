import { Box, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import AppBarTop from '../components/AppBarTop'
import Voucher1 from '../assets/voucher/Voucher1.png'
import Voucher2 from '../assets/voucher/Voucher2.png'
import Voucher3 from '../assets/voucher/Voucher2.png'
import { PADDING } from "../constants/Padding";
import StyledButton from '../components/StyledButton'
import { AppContext } from '../App'
import { voucherModel } from '../components/API/GetAPI'
import axios from 'axios'

function AppliedVoucher() {
  const [items, setItems] = useState([]);
  const {
    APIVoucher,
    setAPIVoucher
  } = useContext(AppContext);
  const [flag, setFlag] = useState(1)

  useEffect(() => {
    const items = localStorage.getItem("items");
    if (items) setItems(items);
    getAPI(items);
  }, []);

  const getAPI = async (items) => {
    const vouchers = await voucherModel(items);
    console.log(vouchers)
    setAPIVoucher(vouchers);

  }

  const handleVoucher = async (i) => {

    try {
      await axios.patch(`http://localhost:8080/vouchers/${APIVoucher[i].id}`, {
        v_use: APIVoucher[i].v_use == false? true :false
      });
    } catch (error) {
      console.log(error); 
    }

    getAPI(items)
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
    <AppBarTop text={"Voucher"} line/>
    {APIVoucher.map((foods, i) => (
                   
                   <Box
                   sx={{borderRadius: '8px', border: '1px solid #f2f2f2', width: PADDING, marginTop: '25px', overflow: 'hidden'}}
               >
                   <img src={APIVoucher[i].v_image} alt="voucher" width={"100%"} height={"140px"}/>
                   <Box sx={{marginLeft: '13px', marginTop: '10px', marginRight: '13px'}}>
                   <Typography sx={{fontSize: '14px', fontWeight: 600}}>{APIVoucher[i].v_title}</Typography>
                   <Box sx={{display: 'flex', justifyContent: 'space-between', mb: '5px'}}>
                   <Typography
                    sx={{color: '#808080', fontSize: '10px', fontWeight: 500, marginTop: '4px', marginBottom: '15px'}}
                   >
                    {APIVoucher[i].v_date}
                   </Typography>
                   <StyledButton width={"30px"} text={APIVoucher[i].v_use? "Dipakai" : "Pakai"} height={"20px"} borderRadius={"3px"} noShadow fontSize={"12px"} onClick={()=>handleVoucher(i)} style={APIVoucher[i].v_use?`outlined` : null}/>
                   </Box>
                   </Box>
               </Box>
               
              

                    ))
                  }

        
       
    

  </Box>
  )
}

export default AppliedVoucher