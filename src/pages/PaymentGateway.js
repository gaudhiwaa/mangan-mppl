import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import PaymentGatewayPict from "../assets/payment/PaymentGatewayPict";
import PaymentLoadingPict from "../assets/payment/PaymentLoadingPict";
import StyledButton from "../components/StyledButton";
import { PADDING } from "../constants/Padding";
import { THEME } from "../constants/Theme";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: THEME.GREEN_PRIMARY,
    },
  },
});

function PaymentGateway() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading ? (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <PaymentLoadingPict width="253px" />
            <Typography
              sx={{
                color: "#333333",
                fontWeight: 600,
                fontSize: "16px",
                marginTop: "27px",
              }}
            >
              Pesanan Sedang Diproses
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                color: THEME.GREY_PRIMARY,
                fontSize: "12px",
                marginTop: "16px",
                marginBottom: '32px'
              }}
            >
              Mohon tunggu sebentar ya! Pesanan kamu sedang kami proses.
            </Typography>
            <ThemeProvider theme={theme}>
              <CircularProgress thickness={5} />
            </ThemeProvider>
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <PaymentGatewayPict width="253px" />
            <Typography
              sx={{
                color: "#333333",
                fontWeight: 600,
                fontSize: "16px",
                marginTop: "27px",
              }}
            >
              Pembayaran Sukses!
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                color: THEME.GREY_PRIMARY,
                fontSize: "12px",
                marginTop: "16px",
              }}
            >
              Belanjaan yang kamu pesan akan segera <br /> diproses.
            </Typography>
          </Box>
          <Box
            sx={{
              width: PADDING,
              bottom: "0",
              position: "fixed",
              marginBottom: "16px",
            }}
          >
            <StyledButton text={"Belanja lagi"} />
            <StyledButton
              text={"Lihat Transaksi"}
              style={"outlined"}
              marginTop={"16px"}
            />
          </Box>
        </>
      )}
    </Box>
  );
}

export default PaymentGateway;
