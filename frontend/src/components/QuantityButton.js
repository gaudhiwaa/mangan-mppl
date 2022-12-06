import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import EditIcon from "../assets/checkout/EditIcon";
import { THEME } from "../constants/Theme";
import { checkoutModel } from "./API/GetAPI";

function QuantityButton({index, item, qty, initQty, onClick}) {
  const [ItemQty, setItemQty] = React.useState(initQty);
  const {APICheckout, setAPICheckout} = useContext(AppContext);
  const {totalPrice, 
    setTotalPrice
  } = useContext(AppContext);
  // const [foodID, setFoodID] = React.useState()

  const deleteFromCheckout = async (index) => {
    let foodID = 0

    for(let i=0; i<APICheckout.length; i++){
      console.log("MASUKK")
      if(APICheckout[i].f_id == index) {
        console.log("DAPETT")
        foodID = APICheckout[i].id}
    }

    try {
        await axios.delete(`http://localhost:8080/checkout/${foodID}`)
    } catch (error) {
      console.log(error);
    }
    const checkout = await checkoutModel(item);
    setAPICheckout(checkout);
    console.log("DELL", index);
    getAPI(item)
  };

  const getAPI = async (item) => {
    const checkout = await checkoutModel(item);
    setAPICheckout(checkout);
    let tot = []
    for(let i=0; i<checkout.length; i++){
      tot.push((checkout[i].f_price -
        (checkout[i].f_price *
          checkout[i].f_discount) /
          100) *
      (checkout[i].f_quantity))
    }
    const payTotal = tot.reduce((partialSum, a) => partialSum + a, 0);
    // if(payTotal!=total ) {
      // getAPI(item) 
    setTotalPrice(payTotal)
    // }
    // setTotal(payTotal)
    // console.log(total!=total) 
  };

  return (
    <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <Box
        sx={{
          width: "24px",
          height: "24px",
          border: "1px solid" + THEME.GREEN_PRIMARY,
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&:hover": {
            cursor: "pointer",
          },
        }}
        onClick={()=>deleteFromCheckout(index)}
      >
        <EditIcon />
      </Box>
      <Box
        onClick={ItemQty > 1 ? () => {
          setItemQty(ItemQty - 1) 
          qty(ItemQty - 1)}: undefined
          
        }
        sx={{
          width: "24px",
          height: "24px",
          border: "1px solid" + THEME.GREEN_PRIMARY,
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          color: THEME.GREEN_PRIMARY,
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <Typography>–</Typography>
      </Box>
      <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
        {ItemQty}
      </Typography>
      <Box
        onClick={() => {
          setItemQty(ItemQty + 1) 
          qty(ItemQty + 1)}}
        sx={{
          width: "24px",
          height: "24px",
          border: "1px solid" + THEME.GREEN_PRIMARY,
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          background: THEME.GREEN_PRIMARY,
          color: "white",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <Typography>+</Typography>
      </Box>
    </Box>
  );
}

export default QuantityButton;
