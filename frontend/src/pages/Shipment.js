import { Box, Typography } from "@mui/material";
import React from "react";
import EditIcon from "../assets/location/EditIcon";
import GreenLocationIcon from "../assets/location/GreenLocationIcon";
import VideoPersonStarIcon from "../assets/point/VideoPersonStarIcon";
import WritingIcon from "../assets/shipment/WritingIcon";
import AppBarTop from "../components/AppBarTop";
import StyledButton from "../components/StyledButton";
import StyledTextField from "../components/StyledTextField";
import { PADDING } from "../constants/Padding";
import { THEME } from "../constants/Theme";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Beras from "../assets/product/Beras.png";
import QuantityButton from "../components/QuantityButton";
import FastDeliveryIcon from "../assets/product/FastDeliveryIcon";
import CreditCardIcon from "../assets/shipment/CreditCardIcon";
import CouponIcon from "../assets/shipment/CouponIcon";

function Shipment() {
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
      <AppBarTop text={"Pengiriman"} line />
      <Box sx={{ width: PADDING }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: "21px",
            mb: "19px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <GreenLocationIcon
              width={"40x"}
              height={"40px"}
              marginLeft={"-40px"}
            />
            <Box sx={{ marginLeft: "-25px" }}>
              <Typography sx={{ fontSize: "10px", fontWeight: 500 }}>
                Alamat Pengiriman
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: 600, mt: "4px" }}>
                Arandra Residence
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              fontSize: "10px",
              fontWeight: 600,
              color: THEME.GREEN_PRIMARY,
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Ubah
          </Typography>
        </Box>
        <StyledTextField
          text={"Tower Chrysant  19/GH"}
          icon={<WritingIcon />}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "8px",
          background: "#FAFAFA",
          mt: "13px",
          mb: "15px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: PADDING,
        }}
      >
        <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
          Detail Pesanan
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <Typography sx={{ fontSize: "12px", mr: "8px" }}>Catering</Typography>
          <ArrowForwardIosIcon sx={{ color: "#4F4F4F", fontSize: "12px" }} />
        </Box>
      </Box>
      <Box
        sx={{
          width: PADDING,
          height: "1px",
          background: "#F5F5F5",
          mt: "15px",
        }}
      />
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
            <Box sx={{ display: "flex", alignItems: "flex-start" }}>
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
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: PADDING,
            border: "1px solid #F5F5F5",
            height: "48px",
            mt: "17px",
            mb: "20px",
            borderRadius: "8px",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              margin: "16px 0 16px 16px",
            }}
          >
            <FastDeliveryIcon />
            <Typography sx={{ fontWeight: 500, fontSize: "12px", ml: "12px",}}>
              Pilih Metode Pengiriman
            </Typography>
          </Box>
          <ArrowForwardIosIcon
            sx={{ color: "#4F4F4F", fontSize: "12px", mr: "16px" }}
          />
        </Box>

        <Box
          sx={{
            height: "1px",
            width: PADDING,
            background: "#F5F5F5",
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: PADDING,
            mt: "13px",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
            Total Pesanan
          </Typography>

          <Typography sx={{ fontSize: "12px", mr: "8px" }}>
            Rp 130.000
          </Typography>
        </Box>
      </>
      <Box
        sx={{
          height: "8px",
          width: "100%",
          background: "#FAFAFA",
          mt: "11px",
        }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: PADDING,
          border: "1px solid #F5F5F5",
          height: "48px",
          mt: "17px",
          mb: "20px",
          background: "linear-gradient(89.14deg, #2DBD78 0%, #73DEAB 100%)",
          borderRadius: "8px",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "16px 0 16px 16px",
          }}
        >
          <CouponIcon />
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "12px",
              ml: "12px",
              color: "white",
            }}
          >
            Kamu punya 10 voucher loh
          </Typography>
        </Box>
        <ArrowForwardIosIcon
          sx={{ color: "#4F4F4F", fontSize: "12px", mr: "16px" }}
        />
      </Box>

      <Box
        sx={{
          height: "8px",
          width: "100%",
          background: "#FAFAFA",
          mt: "0px",
        }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: PADDING,
          border: "1px solid #F5F5F5",
          height: "48px",
          mt: "17px",
          mb: "20px",
          borderRadius: "8px",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "16px 0 16px 16px",
          }}
        >
          <CreditCardIcon />
          <Typography sx={{ fontWeight: 500, fontSize: "12px", ml: "12px" }}>
            Pilih Metode Pembayaran
          </Typography>
        </Box>
        <ArrowForwardIosIcon
          sx={{ color: "#4F4F4F", fontSize: "12px", mr: "16px" }}
        />
      </Box>

      <Box
        sx={{
          height: "8px",
          width: "100%",
          background: "#FAFAFA",
          mt: "0px",
        }}
      />

      <Box sx={{ width: PADDING }}>
        <Typography sx={{ fontWeight: 600, fontSize: "12px", mt: "15px" }}>
          Rincian Pesanan
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontWeight: 400, fontSize: "12px" }}>
            Total Harga (4 produk)
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "12px" }}>
            Rp 180.000
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontWeight: 400, fontSize: "12px" }}>
            Total Ongkos Kirim
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "12px" }}>–</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontWeight: 400, fontSize: "12px" }}>
            Total Bayar
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "12px" }}>–</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          height: "1px",
          width: "100%",
          background: "#FAFAFA",
          mt: "16px",
        }}
      />

      <Box
        sx={{
          height: "1px",
          width: "100%",
          background: "#FAFAFA",
          mt: "0px",
        }}
      />

      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          paddingBottom: "16px",
          background: "white",
        }}
      >
        <Box sx={{ width: PADDING, mt: "11px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
              Total Bayar
            </Typography>
            <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
              Rp 0
            </Typography>
          </Box>
        </Box>

        <Box sx={{ width: PADDING, mt: "11px" }}>
          <StyledButton text={"Bayar"} />
        </Box>
      </Box>
    </Box>
  );
}

export default Shipment;
