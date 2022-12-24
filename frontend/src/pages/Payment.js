import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import AppBarTop from "../components/AppBarTop";
import { THEME } from "../constants/Theme";
import { PAYMENT } from "../constants/Typography";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Counter from "../components/Counter";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import StyledButton from "../components/StyledButton";
import { PADDING } from "../constants/Padding";
import { useNavigate, useParams } from "react-router-dom";
import BCAIcon from "../assets/payment/BCAIcon";
import { AppContext } from "../App";
import { transactionModel } from "../components/API/GetAPI";

function Payment() {
  const navigate = useNavigate()
  const { transactionId } = useParams()
  // const {APITransactions, setAPITransactions} = useState(AppContext)
  const [thisTransactions, setThisTransactions] = useState([])
  const [midtransRes, setMidtransRes] = useState([])
  const [VANumber, setVANumber] = useState([])

  useEffect(() => {
    const items = localStorage.getItem("items");
    getAPI(items);
  }, []);

  const getAPI = async (items) => {
    const transactions = await transactionModel(items)
    // setAPITransactions(transactions)

    const thistransaction = transactions.find(trans => (trans.id-1).toString() === transactionId)
    console.log(thistransaction)
    setThisTransactions(thistransaction)

    const va_index = 0

    if (thistransaction != undefined) {
      console.log("1", thistransaction)
      const midtrans = JSON.parse(thistransaction.response_midtrans);
      console.log("wwwwwwwww", midtrans)
      setMidtransRes(midtrans)

      if (thistransaction.t_paymentMethod == "Bank Permata") {
        setVANumber(midtrans.permata_va_number)
      } else
        setVANumber(midtrans.va_numbers[0].va_number)
    }
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
      <AppBarTop text={PAYMENT.Pembayaran} line />
      <Box
        sx={{
          width: "90%",
          border: "1px solid #f8f4f4",
          borderRadius: "8px",
          padding: "2px",
          marginTop: "21px",
        }}
      >
        <Box sx={{ margin: "20px 15px 10px 15px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
            <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
              {thisTransactions != undefined ?
                thisTransactions.t_paymentMethod
                : ""}
              {/* {APITransactions[transactionId].t_paymentMethod} */}
              {console.log("www", thisTransactions)}
            </Typography>
            {/* <img src={thisTransactions.t_image} width={"51px"}/> */}
            {/* <BCAIcon /> */}
          </Box>
          <Box
            sx={{
              backgroundColor: "#f8f4f4",
              width: "100%",
              height: "1px",
              margin: "15px 0 15px 0",
            }}
          ></Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 500,
                color: THEME.GREY_PRIMARY,
              }}
            >
              {PAYMENT.NoVirtual}
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                {VANumber}
                {/* {thisTransactions!=undefined?
                console.log(JSON.parse(thisTransactions.response_midtrans)): ""} */}
              </Typography>
              <ContentCopyIcon
                sx={{ fontSize: "13px", marginTop: "3px", marginLeft: "3px" }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 500,
                color: THEME.GREY_PRIMARY,
              }}
            >
              {PAYMENT.TotalPembayaran}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 500,
                color: THEME.GREEN_PRIMARY,
              }}
            >
              {thisTransactions.t_price != undefined ?
                "Rp " + thisTransactions.t_price.toLocaleString() : ""}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "21px",
          width: "100%",
          height: "8px",
          backgroundColor: "#FAFAFA",
          marginBottom: "21px",
        }}
      />
      <Box sx={{ width: "90%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            {PAYMENT.BatasWaktu}
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 500,
              color: THEME.GREEN_PRIMARY,
            }}
          >
            {PAYMENT.CaraPembayaran}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "2px",
          }}
        >
          <Typography sx={{ fontSize: "12px", color: "#828282" }}>
            {midtransRes.expire_time}
            {/* 06 September 2020, 11:34 */}
          </Typography>
        </Box>
        <Box sx={{ border: "1px dashed #FAFAFA", marginTop: "23px" }}></Box>
      </Box>
      <Box sx={{ width: "70%" }}>
        <Counter />
      </Box>
      <Box sx={{ width: "90%" }}>
        <Box sx={{ border: "1px dashed #FAFAFA", marginTop: "33px" }}></Box>
      </Box>
      <Box sx={{ width: "90%", marginLeft: "-10px" }}>
        <Box sx={{ display: "flex" }}>
          <FiberManualRecordIcon
            sx={{ fontSize: "4px", marginRight: "8px", marginTop: "5px", marginLeft: '4px' }}
          />
          <Typography
            sx={{ fontSize: "10px", marginBottom: "8px", color: "#4F4F4F" }}
          >
            Lakukan pembayaran maksimum <b>24 Jam</b> setelah order
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <FiberManualRecordIcon
            sx={{ fontSize: "4px", marginRight: "8px", marginTop: "5px", marginLeft: '4px' }}
          />
          <Typography sx={{ fontSize: "10px", color: "#4F4F4F" }}>
            Jika Pembayaran melebihi waktu yang ditentukan maka transaksi akan
            dinyatakan <b>Batal</b>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{ backgroundColor: "#FAFAFA", marginTop: "26px", height: "8px" }}
        ></Box>
      </Box>
      <Box>
        <Typography
          sx={{
            marginTop: "21px",
            fontSize: "12px",
            color: "#2DBE78",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          Detail Pesanan
        </Typography>
      </Box>
      <Box sx={{ width: PADDING, bottom: '0', position: 'fixed', marginBottom: '16px' }}>
        <StyledButton text={"Belanja lagi"} onClick={() => navigate("/home")} />
        <StyledButton text={"Cek Status Pesanan"} style={"outlined"} marginTop={"16px"} onClick={() => navigate("/paymentgateway")} />
      </Box>
    </Box>
  );
}

export default Payment;
