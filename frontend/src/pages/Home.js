import { Box, Typography } from "@mui/material";
import React from "react";
import { HOME } from "../constants/Typography";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import { THEME } from "../constants/Theme";
import { PADDING } from "../constants/Padding";
import StyledTextField from "../components/StyledTextField";
import SearchIcon from "@mui/icons-material/Search";
import SectionTitle from "../components/SectionTitle";
import SelectedMenu from "../components/SelectedMenu";
import AyamPangsit from "../assets/product/AyamPangsit.png";
import EconomicalPacket from "../components/EconomicalPacket";
import "./home.css";
import Newest from "../components/Newest";
import StyledTabs from "../components/StyledTabs";
import AppBarBot from "../components/AppBarBot";
import { useNavigate } from "react-router-dom";
import VoucherIcon from "../assets/home/VoucherIcon";
import PointIcon from "../assets/home/PointIcon";

function Home() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        overflow: "scroll",
      }}
    >
      <Box sx={{ width: PADDING, marginTop: "16px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              // justifyContent: "fle",
              // backgroundColor: "blue",
              flexDirection: "column",
            }}
          >
            <Box>
              <Typography sx={{ color: THEME.GREY_PRIMARY, fontSize: "12px" }}>
                {HOME.PesananDikirimKe}
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: 16, marginTop: "6px" }}
                >
                  {HOME.KeputihKotaSurabaya}
                </Typography>
              </Box>
              <Box sx={{ marginLeft: "9px" }} variant="raised">
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "12px",
                    color: THEME.GREEN_PRIMARY,
                    marginTop: "10px",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => navigate("/locationlist")}
                >
                  {HOME.Ubah}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <NotificationsNoneOutlinedIcon
              sx={{
                color: THEME.GREEN_PRIMARY,
                fontSize: "22px",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            />
            <CommentOutlinedIcon
              sx={{
                color: THEME.GREEN_PRIMARY,
                marginLeft: "15px",
                fontSize: "20px",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            />
          </Box>
        </Box>
        <StyledTextField
          icon={<SearchIcon />}
          text="Mau belanja apa?"
          marginTop="12px"
        ></StyledTextField>
        <Box
          sx={{
            mt: "16px",
            width: PADDING,
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "8px",
            height: "63px",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              marginLeft: "10px",
              width: "50%",
              "&:hover": {
                cursor: "pointer",
              },
              
            }}
            onClick={() => navigate("/voucher")}
          >
            {/* voucher icon*/}
            <Box>
              <VoucherIcon />
            </Box>
            {/* typo */}
            <Box
              sx={{
                marginLeft: "5px",
              }}
            >
              <Typography
                sx={{
                  color: "#808080",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                Voucher Saya
              </Typography>
              <Typography
                sx={{
                  color: THEME.GREEN_PRIMARY,
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                10 Voucher
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{ width: "1px", height: "53px", backgroundColor: "#E7E7E7" }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              marginRight: "10px",
              width: PADDING / 2 - 20,
              marginLeft: "20px",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <PointIcon />
            <Box></Box>
            {/* typo */}
            <Box
              sx={{
                marginLeft: "5px",
              }}
            >
              <Typography
                sx={{
                  color: "#808080",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                Poin Saya
              </Typography>
              <Typography
                sx={{
                  color: THEME.GREEN_PRIMARY,
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                0 Poin
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "28px",
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
                {HOME.MenuPilihan}
              </Typography>
            </Box>
            <Box sx={{ marginTop: "4px" }}>
              <Typography
                sx={{
                  color: THEME.GREEN_PRIMARY,
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                {HOME.LihatSemua}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box sx={{ marginLeft: "1px", color: THEME.GREY }}>
              <Typography sx={{ fontSize: "12px" }}>
                {HOME.FavoritPelanggan}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", marginTop: "13px", overflow: "scroll" }}>
            <Box sx={{ marginRight: "8px" }}>
              <SelectedMenu
                title={"Ayam Pangsit"}
                discount={20}
                price={"25000"}
                rating="5.0"
                sold="809"
                image={AyamPangsit}
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
              />
            </Box>
          </Box>
        </Box>
        <SectionTitle title={HOME.PaketHemat} desc={HOME.WarungTerpercayaDi} />
        <Box
          sx={{
            display: "flex",
            marginTop: "13px",
            overflow: "scroll",
            position: "relative",
          }}
        >
          <Box sx={{ marginRight: "8px" }}>
            <EconomicalPacket
              title={"Ayam Pangsit"}
              rating="5.0"
              sold="101"
              image={AyamPangsit}
            />
          </Box>
          <Box sx={{ marginRight: "8px" }}>
            <EconomicalPacket
              title={"Ayam Pangsit"}
              rating="5.0"
              sold="101"
              image={AyamPangsit}
            />
          </Box>
          <Box sx={{ marginRight: "8px" }}>
            <EconomicalPacket
              title={"Ayam Pangsit"}
              rating="5.0"
              sold="101"
              image={AyamPangsit}
            />
          </Box>
          <Box sx={{ marginRight: "8px" }}>
            <EconomicalPacket
              title={"Ayam Pangsit"}
              rating="5.0"
              sold="101"
              image={AyamPangsit}
            />
          </Box>
        </Box>
        <SectionTitle title={HOME.Terbaru} desc={HOME.ProdukPilihanPaling} />
        <Box
          sx={{ display: "flex", flexDirection: "column", marginTop: "13px" }}
        >
          <Box sx={{}}>
            <Newest
              title={"Ayam Pangsit"}
              discount={40}
              image={AyamPangsit}
              price={"25000"}
            />
          </Box>
          <Box sx={{ marginTop: "32px" }}>
            <Newest
              title={"Ayam Pangsit"}
              discount={40}
              image={AyamPangsit}
              price={"25000"}
            />
          </Box>
          <Box sx={{ marginTop: "32px" }}>
            <Newest
              title={"Ayam Pangsit"}
              discount={40}
              image={AyamPangsit}
              price={"25000"}
            />
          </Box>
        </Box>
        <SectionTitle title={HOME.Rekomendasi} />
        <Box>
          <StyledTabs />
        </Box>
      </Box>
      <AppBarBot />
    </Box>
  );
}

export default Home;
