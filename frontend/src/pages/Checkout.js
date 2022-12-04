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

export function ItemCheckout(f_id, APIFoods) {

  // const food = APIFoods.find((food) => food.id === f_id)

  // const handleBtn = (btnId) => async (e) => {
  //   e.preventDefault();
  //   btnId++;
  //   const findAddr = APIAddress.find((prod) => prod.id === btnId);
  //   setMainAddress(findAddr);
  // }


  return(
    <>
    <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          width: PADDING,
          mt: "16px",
          // justifyContent: 'space-between'
        }}
      >
        <Checkbox
          sx={{ ml: "-10px", mt: "-10px" }}
          icon={<CircleIcon sx={{ color: "#F5F5F5", fontSize: "28px" }} />}
          checkedIcon={
            <Box
              sx={{
                background: "#F5F5F5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                width: "28px",
                height: "28px",
              }}
            >
              <CircleIcon
                sx={{ color: THEME.GREEN_PRIMARY, fontSize: "22px" }}
              />
            </Box>
          }
        />
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-start",}}>
            <img src={""} width="53px" height={"42px"} />
            <Box sx={{ ml: "10px" }}>
              <Typography sx={{ fontSize: "12px", fontWeight: 500 }}>
                {/* {console.log(APIFoods)} */}
                {/* {console.log(name)} */}
                {/* Ayam Bakar */}
              </Typography>
              <Typography sx={{ color: "#828282", fontSize: "10px" }}>
                Pilihan : <span style={{ color: "#333333" }}>Merah</span>
              </Typography>
              <Typography sx={{ color: "#828282", fontSize: "10px" }}>
                Catatan :{" "}
                <span style={{ color: "#333333" }}>
                  Yang masih lama expirednya
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
                    sx={{ color: "white", fontSize: "10px", fontWeight: 600 }}
                  >
                    {/* {discount}% */}
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
                  {/* Rp {price} / porsi */}
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: "12px",
                  mt: "8px",
                }}
              >
                <span style={{ fontWeight: "bold", fontSize: "12px" }}>
                  {/* Rp {price - price* discount/100}  */}
                </span>
            
              </Typography>
            </Box>
          </Box>
          <QuantityButton />
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
  )
} 

function Checkout() {
  const [mainLoc, setMainLoc] = React.useState({ 1: true });
  const [total, setTotal] = React.useState(0);
  const [item, setItems] = React.useState([]);
  const {APICheckout, setAPICheckout, APIFoods, setAPIFoods, APICek, setAPICek} = useContext(AppContext);
  const [keranjang, setKeranjang]= useState([])
  const navigate = useNavigate();


  useEffect(() => {
    console.log("www")
    const items = localStorage.getItem("items");
    if (items) {
      setItems(items);
    }
    getAPI(items);
  }, []);

  const getAPI = async (items) => {
    const checkout = await checkoutModel(items);
    setAPICheckout(checkout);
    console.log("www")
    const foods = await foodModel();
    setAPIFoods(foods)
  };


  const deleteAllFromCheckout = async () => {
    try {
      for(let i=0; i<APICheckout.length; i++){
        await axios.delete(`http://localhost:8080/checkout/${i+1}`)
      }
    } catch (error) {
      console.log(error);
    }
    getAPI(item)
    console.log(APICheckout.length)
  };

  const handleCheck = (i) => {
    console.log(i)
  }

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        minWidth: PADDING,
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
        <Box sx={{ display: "flex", alignItems: "center", height: '46px'}}>
          {/* <Checkbox
            sx={{ ml: "-10px" }}
            icon={<CircleIcon sx={{ color: "#F5F5F5", fontSize: "28px" }} />}
            checkedIcon={
              <Box
                sx={{
                  background: "#F5F5F5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  width: "28px",
                  height: "28px",
                }}
              >
                <CircleIcon
                  sx={{ color: THEME.GREEN_PRIMARY, fontSize: "22px" }}
                />
              </Box>
            }
          /> */}
          <Typography sx={{ fontSize: "12px", fontWeight: 600, ml: "10px" }} >
            Mangan
          </Typography>
        </Box>
        <Typography sx={{ fontSize: "10px", color: THEME.GREEN_PRIMARY }} onClick={()=>deleteAllFromCheckout([])}>
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

      {/* 1 */}
      {/* <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          width: PADDING,
          mt: "16px",
          // justifyContent: 'space-between'
        }}
      >
        <Checkbox
          sx={{ ml: "-10px", mt: "-10px" }}
          icon={<CircleIcon sx={{ color: "#F5F5F5", fontSize: "28px" }} />}
          checkedIcon={
            <Box
              sx={{
                background: "#F5F5F5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                width: "28px",
                height: "28px",
              }}
            >
              <CircleIcon
                sx={{ color: THEME.GREEN_PRIMARY, fontSize: "22px" }}
              />
            </Box>
          }
        />
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "flex-end",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-start", }} onClick={() => navigate("/product")}>
            <img src={Beras} width="53px" height={"42px"} />
            <Box sx={{ ml: "10px" }}>
              <Typography sx={{ fontSize: "12px", fontWeight: 500 }}>
                Beras Organik
              </Typography>
              <Typography sx={{ color: "#828282", fontSize: "10px" }}>
                Pilihan : <span style={{ color: "#333333" }}>Merah</span>
              </Typography>
              <Typography sx={{ color: "#828282", fontSize: "10px" }}>
                Catatan :{" "}
                <span style={{ color: "#333333" }}>
                  Yang masih lama expirednya
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
                    sx={{ color: "white", fontSize: "10px", fontWeight: 600 }}
                  >
                    20%
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
                  55.000 / 5kg
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: "12px",
                  mt: "8px",
                }}
              >
                <span style={{ fontWeight: "bold", fontSize: "12px" }}>
                  45.000{" "}
                </span>
                / 5 kg
              </Typography>
            </Box>
          </Box>
          <QuantityButton />
        </Box>
      </Box>

      <Box
        sx={{
          height: "1px",
          width: PADDING,
          background: "#F5F5F5",
          mt: "11px",
        }}
      /> */}

      {/* 2 */}
      {/* <Box
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
        <Checkbox
          sx={{ ml: "-10px", mt: "-10px" }}
          icon={<CircleIcon sx={{ color: "#F5F5F5", fontSize: "28px" }} />}
          checkedIcon={
            <Box
              sx={{
                background: "#F5F5F5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                width: "28px",
                height: "28px",
              }}
            >
              <CircleIcon
                sx={{ color: THEME.GREEN_PRIMARY, fontSize: "22px" }}
              />
            </Box>
          }
        />
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-start", }} onClick={() => navigate("/product")}>
            <img src={Beras} width="53px" height={"42px"} />
            <Box sx={{ ml: "10px" }}>
              <Typography sx={{ fontSize: "12px", fontWeight: 500 }}>
                Beras Organik
              </Typography>
              <Typography sx={{ color: "#828282", fontSize: "10px" }}>
                Pilihan : <span style={{ color: "#333333" }}>Merah</span>
              </Typography>
              <Typography sx={{ color: "#828282", fontSize: "10px" }}>
                Catatan :{" "}
                <span style={{ color: "#333333" }}>
                  Yang masih lama expirednya
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
                    sx={{ color: "white", fontSize: "10px", fontWeight: 600 }}
                  >
                    20%
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
                  55.000 / 5kg
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: "12px",
                  mt: "8px",
                }}
              >
                <span style={{ fontWeight: "bold", fontSize: "12px" }}>
                  45.000{" "}
                </span>
                / 5 kg
              </Typography>
            </Box>
          </Box>
          <QuantityButton />
        </Box>
      </Box> 

      <Box
        sx={{
          height: "1px",
          width: PADDING,
          background: "#F5F5F5",
          mt: "11px",
        }}
      />*/}

      {console.log(APICheckout, Object.keys(APICheckout))}
      {Object.keys(APICheckout).map((i) => 
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
        <Checkbox
          sx={{ ml: "-10px", mt: "-10px" }}
          icon={<CircleIcon sx={{ color: "#F5F5F5", fontSize: "28px" }} />}
          // checked={handleCheck(i)}
          onClick={()=>handleCheck(i)}
          checkedIcon={
            <Box
              sx={{
                background: "#F5F5F5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                width: "28px",
                height: "28px",
              }}
              
            >
              <CircleIcon
                sx={{ color: THEME.GREEN_PRIMARY, fontSize: "22px" }}
              />
            </Box>
          }
        />
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-start", }} >
            <img src={APICheckout[i].f_image} width="53px" height={"42px"} />
            <Box sx={{ ml: "10px" }}>
              <Typography sx={{ fontSize: "12px", fontWeight: 500 }} >
                {APICheckout[i].f_name}
              </Typography>
              <Typography sx={{ color: "#828282", fontSize: "10px" }}>
                Pilihan : <span style={{ color: "#333333" }}>Merah</span>
              </Typography>
              <Typography sx={{ color: "#828282", fontSize: "10px" }}>
                Catatan :{" "}
                <span style={{ color: "#333333" }}>
                  Yang masih lama expirednya
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
                    sx={{ color: "white", fontSize: "10px", fontWeight: 600 }}
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
                  {APICheckout[i].f_price} / porsi
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: "12px",
                  mt: "8px",
                }}
              >
                <span style={{ fontWeight: "bold", fontSize: "12px" }}>
                  45.000{" "}
                </span>
                / 5 kg
              </Typography>
            </Box>
          </Box>
          <QuantityButton index={APICheckout[i].f_id} item={item}/>
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
        
      )}


      <Box sx={{ position: "fixed", bottom: 0, paddingBottom: "16px", background: 'white' }}>
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
            Rp {total}
          </Typography>
        </Box>
        <Box sx={{ width: PADDING, mt: "12px" }}>
          <StyledButton text={"Checkout"} onClick={() => navigate("/shipment")}/>
        </Box>
      </Box>
    </Box>
  );
}

export default Checkout;
