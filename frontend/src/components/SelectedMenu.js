import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { THEME } from "../constants/Theme";
import StyledButton from "./StyledButton";
import StarIcon from "@mui/icons-material/Star";
import { ItemCheckout } from "../pages/Checkout";
import { AppContext } from "../App";
import axios from "axios";
import { useEffect } from "react";
import { checkoutModel } from "./API/GetAPI";

function SelectedMenu({
  title,
  discount,
  price,
  image,
  rating,
  sold,
  marginRight,
  onClick,
  navigate,
  index,
  items,
}) {
  const {
    APICheckout,
    setAPICheckout,
    APICek,
    setAPICek,
    APIFoods,
    setAPIFoods,
  } = useContext(AppContext);
  // const [foodCheckout, setFoodCheckout] = useState([])

  useEffect(() => {
    getAPI();
  }, []);

  const getAPI = async () => {
    const checkout = await checkoutModel(items);
    setAPICek(checkout);
    setAPICheckout(checkout);
  };

  const bringToCheckout = async (e) => {
    const food = APIFoods.find((food) => food.id === index + 1);
    let repeatCheckout = false
    let largestID = 0;

    if (APICheckout.length != 0)
      largestID = APICheckout[APICheckout.length - 1].id;

    setAPICheckout((APICheckout) => [...APICheckout, food]);

    console.log(APICheckout)

    
    for(let i=0; i<APICheckout.length; i++){
      if(food.id === APICheckout[i].f_id) repeatCheckout = true
    }

    console.log(items)

    if(!repeatCheckout){
    try {
      await axios.post("http://localhost:8080/checkout", {
        // id: largestID + 1,
        f_quantity: 1,
        f_name: food.f_name,
        f_price: food.f_price,
        f_description: food.f_description,
        f_status: food.f_status,
        f_image: food.f_image,
        f_rating: food.f_rating,
        f_discount: food.f_discount,
        f_sold: food.f_sold,
        f_id: food.id,
        c_id: items,
      });
    } catch (error) {
      console.log(error);
    }
    APICheckout.length += 1;
   }
  };

  return (
    <Box>
      <Box
        sx={{
          width: "100px",
          padding: "22px 11px 22px 11px",
          border: "1px solid #F5F5F5",
          borderRadius: "8px",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <Box onClick={onClick}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={image} width="110px" height="88px" alt="menu" />
          </Box>
          <Box>
            <Typography sx={{ fontSize: "12px", fontWeight: 500, mt: "5px" }}>
              {title}
            </Typography>
          </Box>
          {discount ? (
            <Box sx={{ marginTop: "12px", display: "flex" }}>
              <Box
                sx={{
                  backgroundColor: "red",
                  width: "30px",
                  color: "white",
                  borderRadius: "4px",
                  fontWeight: "600",
                  fontSize: "10px",
                  display: "flex",
                  justifyContent: "center",
                  marginRight: "8px",
                }}
              >
                {discount}%
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "10px",
                    color: THEME.GREY_SECONDARY,
                    textDecoration: "line-through",
                  }}
                >
                  {price.toLocaleString()} / porsi
                </Typography>
              </Box>
            </Box>
          ) : (
            ""
          )}
          <Box>
            <Typography sx={{ fontSize: "13px", marginTop: "6px" }}>
              Rp{" "}
              <span style={{ fontWeight: "bold", fontSize: "14px" }}>
                {(price - (price * discount) / 100).toLocaleString()}
              </span>{" "}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", marginTop: "4px" }}>
            <Box sx={{ display: "flex" }}>
              <StarIcon
                sx={{ color: "#FFC431", fontSize: "9px", marginTop: "0.5px" }}
              />
              <Typography sx={{ fontSize: "8px", color: "#808386" }}>
                {rating} |
              </Typography>
            </Box>
            <Box sx={{ fontSize: "8px", marginLeft: "2px", color: "#808386" }}>
              Terjual {sold}
            </Box>
          </Box>
        </Box>
        <Box sx={{ marginTop: "8px" }}>
          <StyledButton
            text={"Tambah"}
            style="outlined"
            height="26px"
            borderRadius={"4px"}
            noShadow
            // onClick={setAPICheckout(APICheckout => [...APICheckout, ItemCheckout(index, foodCheckout)])}
            onClick={bringToCheckout}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default SelectedMenu;

// onClick={setAPICheckout(APICheckout => [...APICheckout, ItemCheckout(i)])}