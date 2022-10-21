import { Box, Button, createTheme, Typography } from "@mui/material";
import React from "react";
import { HOME } from "../constants/Typography";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import { THEME } from "../constants/Theme";
import { PADDING } from "../constants/Padding";
import styled from "@emotion/styled";
import StyledTextField from "../components/StyledTextField";
import SearchIcon from "@mui/icons-material/Search";
import Carousel from "../components/Carousel";
import SectionTitle from "../components/SectionTitle";
import SelectedMenu from "../components/SelectedMenu";
import AyamPangsit from "../assets/product/AyamPangsit.png";
import EconomicalPacket from "../components/EconomicalPacket";
import './home.css'; 
import Newest from "../components/Newest";
import StyledTabs from "../components/StyledTabs";
import AppBarBot from "../components/AppBarBot";

const theme = createTheme({
  palette: {
    primary: {
      main: THEME.GREEN_PRIMARY,
    },
  },
});

const CustomizedButton = styled(Button)({
  textTransform: "none",
  "&:hover": {
    backgroundColor: "transparent",
  },
  marginLeft: "-20px",
  
});

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        overflow: "scroll"
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
                <CustomizedButton disableRipple={true}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: THEME.GREEN_PRIMARY,
                      marginTop: "4px",
                    }}
                  >
                    {HOME.Ubah}
                  </Typography>
                </CustomizedButton>
              </Box>
            </Box>
          </Box>
          <Box>
            <NotificationsNoneOutlinedIcon
              sx={{ color: THEME.GREEN_PRIMARY, fontSize: "22px" }}
            />
            <CommentOutlinedIcon
              sx={{
                color: THEME.GREEN_PRIMARY,
                marginLeft: "15px",
                fontSize: "20px",
              }}
            />
          </Box>
        </Box>
        <StyledTextField
          icon={<SearchIcon />}
          text="Mau pesan apa?"
          marginTop="12px"
        ></StyledTextField>
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
          <Box sx={{ display: "flex", marginTop: "13px" }}>
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
        <Box sx={{ display: "flex", marginTop: "13px", overflow: 'scroll', position: 'relative'}}>
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
          <Box sx={{ }}>
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
          <Box sx={{ marginTop: "32px"  }}>
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
          <StyledTabs/>
        </Box>
      </Box>
      <AppBarBot/>
    </Box>
  );
}

export default Home;
