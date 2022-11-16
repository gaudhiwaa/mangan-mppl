import { Box, Typography } from "@mui/material";
import React from "react";
import EditIcon from "../assets/location/EditIcon";
import AppBarTop from "../components/AppBarTop";
import { PADDING } from "../constants/Padding";
import { THEME } from "../constants/Theme";
import { useNavigate } from "react-router-dom";
import BerasReview from "../assets/product/BerasReview.png";
import Beras from "../assets/product/Beras.png";
import StarIcon from "@mui/icons-material/Star";
import FastDeliveryIcon from "../assets/product/FastDeliveryIcon";
import ArrowRightIcon from "../assets/product/FastDeliveryIcon copy";
import ShopProfile from "../assets/product/ShopProfile.png";
import StyledButton from "../components/StyledButton";
import AyamPangsit from "../assets/product/AyamPangsit.png";
import LocationOutlinedIcon from "../assets/product/LocationOutlinedIcon";
import Rating from "../components/Rating";
import SelectedMenu from "../components/SelectedMenu";

function Product() {
  const [location, setLocation] = React.useState("Arandra Residence");
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        overflow: "scroll",
      }}
    >
      <AppBarTop text={"Daftar Alamat"} line addBasket />
      <Box sx={{ width: PADDING - 10 }}>
        <Box sx={{ marginTop: "18px", alignItems: "center" }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img src={Beras} alt="product" width={"340px"} height={"247px"} />
          </Box>
          <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
            Beras Organik
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
              fontSize: "14px",
              mt: "8px",
            }}
          >
            <span style={{ fontWeight: "bold" }}>45.000 </span>/ 5 kg
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mt: "6px" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <StarIcon sx={{ color: "#FFC431", fontSize: "9px" }} />
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "10px",
                  color: "#808386",
                  marginLeft: "3px",
                }}
              >
                4.5
              </Typography>
            </Box>
            <Box
              sx={{
                height: "9px",
                width: "1px",
                background: "#E8E8E8",
                mr: "5px",
                ml: "5px",
              }}
            />
            <Typography
              sx={{ fontWeight: 400, fontSize: "10px", color: "#808386" }}
            >
              Terjual 117
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "8px",
          background: "#FAFAFA",
          mt: "9px",
          mb: "13px",
          color: "transparent",
        }}
      >
        GAP
      </Box>
      <Box sx={{ width: PADDING, display: "flex", flexDirection: "column" }}>
        <Box sx={{ width: "136px" }}>
          <Typography sx={{ fontSize: "16px", fontWeight: 600, mb: "4px" }}>
            Deskripsi Produk
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ color: "#4F4F4F", fontSize: "12px" }}>
              Stok
            </Typography>
            <Typography sx={{ color: "#4F4F4F", fontSize: "12px" }}>
              Tersedia
            </Typography>
          </Box>
        </Box>
        <Typography sx={{ fontSize: "12px", color: "#4F4F4F", mt: "4px" }}>
          Beras putih Long Grain Low IG Organik bebas dari unsur pestisida
          kimia. Memiliki kandungan nutrisi dan mineral yang tinggi, kandungan
          glukosa, karbohidrat dan proteinnya mudah terurai, sehingga aman dan
          sangat baik dikonsumsi untuk segala usia, khususnya Ibu hamil dan
          menyusui serta anak2 dan remaja yang sedang bertumbuh.
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "8px",
          background: "#FAFAFA",
          mt: "9px",
          mb: "13px",
          color: "transparent",
        }}
      >
        GAP
      </Box>
      <Box
        sx={{
          width: PADDING,
          border: "1px solid #F5F5F5",
          borderRadius: "8px",
          height: "97px",
        }}
      >
        <Box sx={{ margin: "15px 15px 15px 15px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FastDeliveryIcon />
            <Typography sx={{ fontWeight: 600, fontSize: "12px", ml: "9px" }}>
              Dikirim ke {location}
            </Typography>
          </Box>
          <Box sx={{ border: "0.5px solid #F5F5F5", mt: "15px", mb: "12px" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "136px",
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
                GoSend
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#219653",
                  ml: "28px",
                }}
              >
                Rp 20.000
              </Typography>
            </Box>
            <Box>
              <ArrowRightIcon />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "8px",
          background: "#FAFAFA",
          mt: "15px",
          mb: "24px",
          color: "transparent",
        }}
      >
        GAP
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: PADDING,
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <img
            src={ShopProfile}
            style={{
              borderRadius: "50%",
              width: "52px",
              height: "52px",
              marginLeft: "16px",
            }}
          />
          <Box
            sx={{
              ml: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: "12px" }}>
              Sinar Jati
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                alignItems: "center",
              }}
            >
              <LocationOutlinedIcon />
              <Typography sx={{ fontSize: "10px" }}>Tulungagung</Typography>
            </Box>
          </Box>
        </Box>
        <StyledButton
          text={"Chat"}
          width={"54px"}
          height={"26px"}
          style={"outlined"}
          borderRadius={"4px"}
          noShadow
          border={"1px solid" + THEME.GREEN_PRIMARY}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "8px",
          background: "#FAFAFA",
          mt: "15px",
          mb: "15px",
          color: "transparent",
        }}
      >
        GAP
      </Box>
      <Box>
        <Box sx={{ display: "flex", width: PADDING }}>
          <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
            Ulasan Pembeli
          </Typography>
          <Box sx={{ display: "flex", ml: "8px", alignItems: "center" }}>
            <StarIcon
              sx={{ color: "#FFC431", fontSize: "16px", mr: "4px", mt: "-1px" }}
            />
            <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>
              4.5
            </Typography>
          </Box>
        </Box>
        <Typography sx={{ fontSize: "10px", color: "#808386" }}>
          15 Ulasan
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "1px",
            background: "#FAFAFA",
            mt: "9px",
            mb: "9px",
            color: "transparent",
          }}
        >
          GAP
        </Box>
        <Box sx={{ width: PADDING }}>
          <Typography sx={{ fontWeight: 600, fontSize: "12px", mb: "5px" }}>
            Rusni Widiasih
          </Typography>
          <Rating rating={5} />
          <Typography
            sx={{ mt: "6px", fontSize: "12px", color: "#4F4F4F", mb: "7px" }}
          >
            Kualitas beras sangat bagus, pengiriman juga cepat dan pengemasan
            rapi.
          </Typography>
          <img src={BerasReview} width="53px" height="42px" />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "8px",
          background: "#FAFAFA",
          mt: "15px",
          mb: "16px",
          color: "transparent",
        }}
      >
        GAP
      </Box>
      <Box sx={{ width: PADDING }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
              Produk lainnya
            </Typography>
          </Box>
          <Box sx={{ marginTop: "4px" }}>
            <Typography
              sx={{
                color: THEME.GREEN_PRIMARY,
                fontWeight: "bold",
                fontSize: "12px",
                "&:hover": {
                    cursor: "pointer",
                  },
              }}
            >
              Lihat Semua
            </Typography>
          </Box>
        </Box>
        <Box sx={{  marginTop: "13px", overflowX: "scroll", width: "447px", ml: '-20px'}}>
          <Box sx={{ml: '20px', display: "flex",}}>
          <Box sx={{ marginRight: "8px",}}>
            <SelectedMenu
              title={"Ayam Pangsit"}
              discount={20}
              price={"25000"}
              rating="5.0"
              sold="809"
              image={AyamPangsit}
              onClick={() => navigate("/product")}
            />
          </Box>
          <Box sx={{ marginRight: "8px" }}>
            <SelectedMenu
              title={"Ayam Pangsit"}
              discount={20}
              price={"25000"}
              rating="5.0"
              sold="809"
              image={AyamPangsit}
              onClick={() => navigate("/product")}
            />
          </Box>
          <Box sx={{ marginRight: "8px" }}>
            <SelectedMenu
              title={"Ayam Pangsit"}
              discount={20}
              price={"25000"}
              rating="5.0"
              sold="809"
              image={AyamPangsit}
              onClick={() => navigate("/product")}
            />
          </Box>
          <Box sx={{ marginRight: "8px" }}>
            <SelectedMenu
              title={"Ayam Pangsit"}
              discount={20}
              price={"25000"}
              rating="5.0"
              sold="809"
              image={AyamPangsit}
              onClick={() => navigate("/product")}
            />
          </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "8px",
          background: "#FAFAFA",
          mt: "15px",
          mb: "16px",
          color: "transparent",
        }}
      >
        GAP
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: PADDING,
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
            Harga
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              mt: "8px",
            }}
          >
            <span style={{ fontWeight: "bold" }}>45.000 </span>/ 5 kg
          </Typography>
        </Box>
        <Box sx={{ width: PADDING, mt: "14px", mb: "14px" }}>
          <StyledButton text={"Tambah - 45.000"} />
        </Box>
      </Box>
    </Box>
  );
}

export default Product;
