import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import EditIcon from "../assets/checkout/EditIcon";
import { THEME } from "../constants/Theme";
import { checkoutModel, foodModel } from "./API/GetAPI";

function DeleteProduct({index, item, qty, initQty, onClick}) {
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
        await axios.delete(`http://localhost:8080/foods/${index}`)
    } catch (error) {
      console.log(error);
    }
    const checkout = await checkoutModel(item);
    setAPICheckout(checkout);
    console.log("DELL", index);
    getAPI()
  };

  const getAPI = async () => {  
    const food = await foodModel();
    setAPICheckout(food);
  };

  return (
    <Box sx={{ display: "flex", gap: "12px", alignItems: "center",}}>
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
     
      <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
        {ItemQty}
      </Typography>
    </Box>
  );
}

export default DeleteProduct;