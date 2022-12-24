import {
  Box,
  createTheme,
  Tabs,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Map from "../assets/location/Map";
import AppBarTop from "../components/AppBarTop";
import { PADDING } from "../constants/Padding";
import { THEME } from "../constants/Theme";

import SearchIcon from "@mui/icons-material/Search";
import StyledTabs from "../components/StyledTabs";
import styled from "@emotion/styled";
import Tab from "@mui/material/Tab";
import { useTheme } from "@emotion/react";
import SwipeableViews from "react-swipeable-views";
import PropTypes from "prop-types";
import Beras from "../assets/product/Beras.png";
import StyledButton from "../components/StyledButton";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../App";
import { checkoutModel, transactionModel } from "../components/API/GetAPI";
import axios from "axios";

const themeColor = createTheme({
  palette: {
    primary: {
      main: THEME.GREEN_PRIMARY,
    },
  },
});

const CustomTab = styled(Tab)({
  textTransform: "none",
  color: THEME.GREY_PRIMARY,
  fontWeight: 600,
  fontSize: "12px",
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function Transactions() {
  const [searchLoc, setSearchLoc] = React.useState("");
  const [chooseMap, setChooseMap] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const [alreadyPaid, setAlreadyPaid] = React.useState([]);
  const [flag, setFlag] = React.useState(0)
  let data = []

  const navigate = useNavigate()
  const {APITransactions, setAPITransactions, setAPICheckout, APICheckout} = useContext(AppContext)
  // const [midtransRes, setMidtransRes] = useState([])
  const midtransRes = []
  let productList = []
  const [VANumber, setVANumber] = useState([])

  useEffect(() => {
    const items = localStorage.getItem("items");
    
    getAPI(items);
  }, []);

  const getAPI = async (items) => {
    const transactions = await transactionModel(items)
    console.log("wwww",   transactions.length)
    setAPITransactions(transactions)
    console.log("EZZ", transactions[0].t_product)
    console.log("EZZ", transactions[0].response_midtrans)
    const checkout = await checkoutModel(items);
    setAPICheckout(checkout);
    // http://localhost:8080/status/WWWwe3wfq1
    if(flag == 0){
    for(let i=0; i<transactions.length; i++){
      const trans = await axios.get(`http://localhost:8080/status/MPPLCERIA${i}`);
      // alert(`http://localhost:8080/status/MPPLCERIA${i}`)
      setAlreadyPaid(oldArray => [...oldArray, trans.data.data]);
    }setFlag(1)
  }

  if(alreadyPaid){
  const halo = APITransactions.filter(
    checkorder => checkorder.order_id === alreadyPaid.order_id 
  )
  console.log(halo, "IHHHH")
}

    
    // setAlreadyPaid(trans.data.data)
    // console.log(trans.data)
    // console.log(transactions)

    if(transactions!=undefined){
      for(let i=0; i<transactions.length; i++){
        const midtrans = JSON.parse(transactions[i].response_midtrans);
        // console.log(midtrans)
        midtransRes.push(midtrans)

        // setMidtransRes(midtrans)
      }

      // const product = JSON.parse(transactions[.t_product);
      // productList.push(product)
  
      console.log("AHI", Object.keys(productList).map((prod, i)=>
      
      Object.keys(productList[i]).map((wah, index)=> 
      // Object.keys(productList[index]).map((adu, num)=>
      productList[index ].f_image
      // )
      )
      ))

      
    // const midtrans = JSON.parse(transactions.response_midtrans);
    // console.log("wwwwwwwww", midtrans)
    // setMidtransRes(midtrans)
    // setVANumber(midtrans.va_numbers[0].va_number)
    }
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
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
      <AppBarTop text={"Transaksi"} disableBackButton />
      <Box sx={{ width: PADDING, display: "flex", flexDirection: "column" }}>
        <Box sx={{ width: "100%" }}>
          <TextField
            variant="standard"
            type="text"
            onChange={(e) => setSearchLoc(e.target.value)}
            value={searchLoc}
            placeholder="Cari Pesanan"
            InputProps={{
              startAdornment: (
                <SearchIcon
                  sx={{
                    marginRight: "12px",
                    color: THEME.GREY_PRIMARY,
                    fontSize: "16px",
                  }}
                />
              ),
              disableUnderline: true,
            }}
            sx={{
              input: { fontWeight: 500, fontSize: "12px", marginTop: "2px" },
              backgroundColor: "#F5F5F5",
              height: "42px",
              display: "flex",
              justifyContent: "center",
              paddingLeft: "18px",
              paddingRight: "16px",
              borderRadius: "8px",
            }}
          />
        </Box>
      </Box>
      <Box sx={{ width: "100%", mt: "6px" }}>
        <ThemeProvider theme={themeColor}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            scrollButtons={false}
            aria-label="scrollable prevent tabs example"
            TabIndicatorProps={{ style: { background: THEME.GREEN_PRIMARY } }}
            textColor="primary"
            sx={{ fontSize: "20px",ml: '16px', mr: '16px' }}
            centered
          >
            <CustomTab label="Berlangsung" />
            <CustomTab label="Selesai" />
           
          </Tabs>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              
              {APITransactions != undefined? APITransactions.map((trans, i)=>
              APITransactions[i].t_status=="Menunggu Pembayaran" ||
              APITransactions[i].t_status=="Pesanan Dalam Pengiriman"
              ?
              <>
              <Box sx={{ width: PADDING, ml: "-16px" }} key={i}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: PADDING,
                  }}
                >
                  <Typography
                    sx={{ fontWeight: 500, fontSize: "12px", ml: "21px" }}
                  >
                    Simangan
                  </Typography>
                  <Box sx={{ background: "#2DBE78", borderRadius: "4px" }}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "10px",
                        width: "167px",
                        height: "23px",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        color: "white",
                      }}
                    >
                      Pesanan dalam proses
                      {/* {alreadyPaid!=undefined ? 
                      
                      alreadyPaid.find(
                      checkorder => checkorder.order_id === APITransactions.order_id 
                    )? "yeah"
                    
                    
                    : 'yes': ""}
                    {console.log("bismillah", APITransactions.find(
                      checkorder => checkorder.order_id === alreadyPaid.order_id 
                    ))} */}
                    {/* {APITransactions.filter(
                      checkorder => i < alreadyPaid.length? checkorder.order_id === alreadyPaid[i].order_id : ""
                    )? "Pesanan Dalam Pengiriman": "Menunggu pembayaran"} */}

{/* {console.log("bismillah", APITransactions.filter(
                      checkorder => i < alreadyPaid.length? checkorder.order_id === alreadyPaid[i].order_id : ""
                    ))}  */}
                    
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: PADDING,
                    height: "1px",
                    background: "#F5F5F5",
                    mt: "12px",
                  }}
                />
                <Box sx={{ display: "flex", ml: "9px", mt: "10px" }}>
                  <Box>
                    {/* <img src={APICheckout[0]!=undefined? APICheckout[0].f_image : ""} width="52px" height="42px" /> */}
                    {console.log(productList[0])}
                  </Box>
                  <Box>
                    <Box sx={{ display: "flex", alignItems: "center", marginLeft: '13px'}}>
                      <Typography sx={{ fontWeight: 500, fontSize: "12px" }}>
                      Order ID : {APITransactions[i].order_id}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: "10px",
                          ml: "7px",
                          color: "#2DBE78",
                        }}
                      >
                        {/* +1 Produk lainnya */}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "12px",
                        color: "#808080",
                      }}
                    >
                      {/* 27 Sep 2021 • 05:12 PM */}
                    </Typography>
                  </Box>
                </Box>
              
              <Box sx={{ml: "22px" }}>
                <Typography sx={{ fontWeight: 400, fontSize: "10px",  }}>
                  Total Harga:
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between",ml: '22px' }}>
                <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
                  {/* Rp. 79.000 */}
                  Rp {APITransactions[i].t_price.toLocaleString()}
                </Typography>
              </Box>
              </Box> 
              <Box
              sx={{
                width: "PADDING",
                height: "8px",
                background: "#FAFAFA",
                mt: "20px",
                mb: "20px",
              }}
            />
            {console.log(midtransRes, "EHH")}
            </>:""
              ): ""} 

              
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              {/* card */}
             
              
              {APITransactions != undefined? APITransactions.map((trans, i)=>
              APITransactions[i].t_status=="Pesanan selesai"
              ?
              <>
              <Box sx={{ width: PADDING, ml: "-16px" }} key={i}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: PADDING,
                  }}
                >
                  <Typography
                    sx={{ fontWeight: 500, fontSize: "12px", ml: "21px" }}
                  >
                    Simangan
                  </Typography>
                  <Box sx={{ background: "#2DBE78", borderRadius: "4px" }}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "10px",
                        width: "167px",
                        height: "23px",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        color: "white",
                      }}
                    >
                      Pesanan selesai
                      {/* {alreadyPaid!=undefined ? 
                      
                      alreadyPaid.find(
                      checkorder => checkorder.order_id === APITransactions.order_id 
                    )? "yeah"
                    
                    
                    : 'yes': ""}
                    {console.log("bismillah", APITransactions.find(
                      checkorder => checkorder.order_id === alreadyPaid.order_id 
                    ))} */}
                    {/* {APITransactions.filter(
                      checkorder => i < alreadyPaid.length? checkorder.order_id === alreadyPaid[i].order_id : ""
                    )? "Pesanan Dalam Pengiriman": "Menunggu pembayaran"} */}

{/* {console.log("bismillah", APITransactions.filter(
                      checkorder => i < alreadyPaid.length? checkorder.order_id === alreadyPaid[i].order_id : ""
                    ))}  */}
                    
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: PADDING,
                    height: "1px",
                    background: "#F5F5F5",
                    mt: "12px",
                  }}
                />
                <Box sx={{ display: "flex", ml: "9px", mt: "10px" }}>
                  <Box>
                    {/* <img src={APICheckout[0]!=undefined? APICheckout[0].f_image : ""} width="52px" height="42px" /> */}
                    {console.log(productList[0])}
                  </Box>
                  <Box>
                    <Box sx={{ display: "flex", alignItems: "center", marginLeft: '13px'}}>
                      <Typography sx={{ fontWeight: 500, fontSize: "12px" }}>
                      Order ID : {APITransactions[i].order_id}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: "10px",
                          ml: "7px",
                          color: "#2DBE78",
                        }}
                      >
                        {/* +1 Produk lainnya */}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "12px",
                        color: "#808080",
                      }}
                    >
                      {/* 27 Sep 2021 • 05:12 PM */}
                    </Typography>
                  </Box>
                </Box>
              
              <Box sx={{ml: "22px" }}>
                <Typography sx={{ fontWeight: 400, fontSize: "10px",  }}>
                  Total Harga:
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between",ml: '22px' }}>
                <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
                  {/* Rp. 79.000 */}
                  Rp {APITransactions[i].t_price.toLocaleString()}
                </Typography>
                      
              </Box>
              </Box> 
              <Box
              sx={{
                width: "PADDING",
                height: "8px",
                background: "#FAFAFA",
                mt: "20px",
                mb: "20px",
              }}
            />
            {console.log(midtransRes, "EHH")}
            </>:""
              ): ""} 
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              {/* card */}
              <Box sx={{ width: PADDING, ml: "-16px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: PADDING,
                  }}
                >
                  <Typography
                    sx={{ fontWeight: 500, fontSize: "12px", ml: "30px" }}
                  >
                    Simangan
                  </Typography>
                  <Box sx={{ background: "#ED2939", borderRadius: "4px" }}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "10px",
                        width: "167px",
                        height: "23px",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        color: "white",
                      }}
                    >
                      Pesanan Dibatalkan
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: PADDING,
                    height: "1px",
                    background: "#F5F5F5",
                    mt: "12px",
                  }}
                />
                <Box sx={{ display: "flex", ml: "9px", mt: "5px" }}>
                  <Box>
                    <img src={Beras} width="52px" height="42px" />
                  </Box>
                  <Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography sx={{ fontWeight: 500, fontSize: "12px" }}>
                        Beras Organik
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: "10px",
                          ml: "7px",
                          color: "#2DBE78",
                        }}
                      >
                        +1 Produk lainnya
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "12px",
                        color: "#808080",
                      }}
                    >
                      27 Sep 2021 • 05:12 PM
                    </Typography>
                  </Box>
                </Box>
              
              <Box sx={{ml: "22px" }}>
                <Typography sx={{ fontWeight: 400, fontSize: "10px",  }}>
                  Total Harga:
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between",ml: '22px' }}>
                <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
                  Rp. 79.000
                </Typography>
              </Box>
              
              </Box>
              <Box
                sx={{
                  width: "PADDING",
                  height: "8px",
                  background: "#FAFAFA",
                  mt: "20px",
                }}
              />
            </TabPanel>
          </SwipeableViews>
        </ThemeProvider>
      </Box>
    </Box>
  );
}

export default Transactions;
