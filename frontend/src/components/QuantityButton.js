import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import EditIcon from "../assets/checkout/EditIcon";
import { THEME } from "../constants/Theme";
import { checkoutModel } from "./API/GetAPI";

function QuantityButton({index, item}) {
  const [ItemQty, setItemQty] = React.useState(0);
  const {APICheckout, setAPICheckout} = useContext(AppContext);
  // const [foodID, setFoodID] = React.useState()

  const deleteFromCheckout = async (index) => {
    let foodID = 0

    for(let i=0; i<APICheckout.length; i++){
      console.log("MASUKK")
      if(APICheckout[i].f_id == index) {
        console.log("DAPETT")
        foodID = APICheckout[i].id}
      // setFoodID(i)
    }

    console.log(foodID)

    try {
        await axios.delete(`http://localhost:8080/checkout/${foodID}`)
    } catch (error) {
      console.log(error);
    }
    const checkout = await checkoutModel(item);
    setAPICheckout(checkout);
    console.log("DELL", index)
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
        onClick={ItemQty > 0 ? () => setItemQty(ItemQty - 1) : undefined}
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
        onClick={() => setItemQty(ItemQty + 1)}
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
