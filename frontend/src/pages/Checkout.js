import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import EditIcon from "../assets/location/EditIcon";
import AppBarTop from "../components/AppBarTop";
import { PADDING } from "../constants/Padding";
import { THEME } from "../constants/Theme";
import { useNavigate } from "react-router-dom";
import Beras from "../assets/product/Beras.png";
import StyledButton from "../components/StyledButton";
import QuantityButton from "../components/QuantityButton";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CircleIcon from "@mui/icons-material/Circle";
import { AppContext } from "../App";
import { checkoutModel, foodModel } from "../components/API/GetAPI";
import axios from "axios";

function Checkout() {
  const [total, setTotal] = React.useState(0);
  const [item, setItems] = React.useState([]);
  let tot = [];
  const {
    APICheckout,
    setAPICheckout,
    APIFoods,
    setAPIFoods,
    APICek,
    setAPICek,
    totalPrice,
    setTotalPrice,
  } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    const items = localStorage.getItem("items");
    if (items) {
      setItems(items);
    }
    getAPI(items);
  }, []);

  const getAPI = async (items) => {
    // console.log(APICheckout[1].f_price, APICheckout[1].f_discount, APICheckout[1].f_quantity)
    const checkout = await checkoutModel(items);
    setAPICheckout(checkout);
    const foods = await foodModel();
    setAPIFoods(foods);
    let tot = [];
    for (let i = 0; i < checkout.length; i++) {
      tot.push(
        (checkout[i].f_price -
          (checkout[i].f_price * checkout[i].f_discount) / 100) *
        checkout[i].f_quantity
      );
    }
    const payTotal = tot.reduce((partialSum, a) => partialSum + a, 0);
    setTotalPrice(payTotal);
  };

  const deleteAllFromCheckout = async () => {
    console.log(APICheckout[0].id)
    try {
      for (let i = 0; i < APICheckout.length; i++) {
        await axios.delete(`http://localhost:8080/checkout/${APICheckout[i].id}`);
      }
    } catch (error) {
      console.log(error);
    }
    getAPI(item);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        minWidth: PADDING,
        overflow: "scroll",
      }}
    >
      <AppBarTop text={"Keranjang"} line />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: PADDING,
          mt: "16px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", height: "46px" }}>
          <Typography sx={{ fontSize: "12px", fontWeight: 600, ml: "10px" }}>
            Toko Catering Mangan
          </Typography>
        </Box>
        <Typography
          sx={{ fontSize: "10px", color: THEME.GREEN_PRIMARY }}
          onClick={() => deleteAllFromCheckout([])}
        >
          Hapus
        </Typography>
        {/* <StyledButton text="WAW" onClick={()=>setAPICheckout([])}></StyledButton> */}
      </Box>

      <Box
        sx={{
          height: "1px",
          width: PADDING,
          background: "#F5F5F5",
          mt: "11px",
        }}
      />

      {Object.keys(APICheckout).map((i) => (
        <>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              width: PADDING,
              mt: "16px",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "flex-start", ml: "5px" }}
              >
                <img
                  src={APICheckout[i].f_image}
                  width="53px"
                  height={"42px"}
                />
                <Box sx={{ ml: "10px" }}>
                  <Typography sx={{ fontSize: "12px", fontWeight: 500 }}>
                    {APICheckout[i].f_name}
                  </Typography>

                  <Typography sx={{ color: "#828282", fontSize: "10px" }}>
                    Catatan :{" "}
                    <span style={{ color: "#333333" }}>
                      Original
                    </span>
                  </Typography>
                  <Box sx={{ display: "flex", mt: "7px" }}>
                    <Box
                      sx={{
                        backgroundColor: "#f04454",
                        width: "30px",
                        height: "19px",
                        borderRadius: "4px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "10px",
                          fontWeight: 600,
                        }}
                      >
                        {APICheckout[i].f_discount} %
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "10px",
                        color: "#A6A6A6",
                        textDecoration: "line-through",
                        marginLeft: "8px",
                        marginTop: "2px",
                      }}
                    >
                      {APICheckout[i].f_price.toLocaleString()} / porsi
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "12px",
                      mt: "8px",
                    }}
                  >
                    Total :{" "}
                    <span style={{ fontWeight: "bold", fontSize: "12px" }}>
                      Rp{" "}
                      {(
                        (APICheckout[i].f_price -
                          (APICheckout[i].f_price * APICheckout[i].f_discount) /
                          100) *
                        APICheckout[i].f_quantity
                      ).toLocaleString()}
                      { }
                    </span>
                  </Typography>
                </Box>
              </Box>
              <QuantityButton
                index={APICheckout[i].f_id}
                item={item}
                initQty={APICheckout[i].f_quantity || 1}
                qty={async (value) => {
                  const findId = APICheckout.find(
                    (check) => check.id === parseInt(APICheckout[i].id)
                  );
                  console.log(findId, i);
                  try {
                    await axios.patch(
                      `http://localhost:8080/checkout/${findId.id}`,
                      {
                        f_quantity: value,
                      }
                    );
                  } catch (error) {
                    console.log(error);
                  }
                  const checkout = await checkoutModel(item);

                  for (let i = 0; i < checkout.length; i++) {
                    tot.push(
                      (checkout[i].f_price -
                        (checkout[i].f_price * checkout[i].f_discount) / 100) *
                      checkout[i].f_quantity
                    );
                  }
                  const payTotal = tot.reduce(
                    (partialSum, a) => partialSum + a,
                    0
                  );
                  setTotal(payTotal);
                  getAPI(item);
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              height: "1px",
              width: PADDING,
              background: "#F5F5F5",
              mt: "11px",
            }}
          />
        </>
      ))}

      <Box sx={{ marginBottom: "100px" }}></Box>

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
        <Box
          sx={{
            display: "flex",
            width: PADDING,
            justifyContent: "space-between",
            mt: "11px",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
            Total Harga
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
            Rp {totalPrice.toLocaleString()}
          </Typography>
        </Box>
        <Box sx={{ width: PADDING, mt: "12px" }}>
          <StyledButton
            text={"Checkout"}
            onClick={() => totalPrice == 0 ? alert("Mohon masukkan barang ke keranjang") : navigate("/shipment")}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Checkout;