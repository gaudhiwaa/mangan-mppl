import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
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
import Transactions from "./Transactions";
import Profile from "./Profile";
import { AppContext } from "../App";
import axios from "axios";
import {
  addressModel,
  categoryModel,
  customerModel,
  foodModel,
} from "../components/API/GetAPI";
import Category from "../components/Category";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Home() {
  const navigate = useNavigate();
  const [index, setIndex] = React.useState(0);
  // const [APICustomer, setAPICustomer] = useContext(AppContext);
  // const [APIFoods, setAPIFoods] = useState([]);
  const {
    APICustomer,
    setAPICustomer,
    APIFoods,
    setAPIFoods,
    APICategory,
    setAPICategory,
    APIAddress,
    setAPIAddress,
    mainAddress,
    setMainAddress,
    findMainAddress,
    setFindMainAddress,
  } = useContext(AppContext);
  // const { } = useContext(AppContext)
  const [items, setItems] = useState([]);
  const [loc, setLoc] = useState([]);

  const handleClick = (num) => {
    // 👇️ take parameter passed from Child component
    setIndex(num);
  };

  useEffect(() => {
    const items = localStorage.getItem("items");
    const loc = localStorage.getItem("loc");
    if (items) setItems(items);
    if (loc) setLoc(loc);

    getAPI(items);
  }, []);

  const getAPI = async (items) => {
    const customers = await customerModel(items);
    setAPICustomer(customers);
    const foods = await foodModel();
    setAPIFoods(foods);
    const category = await categoryModel();
    setAPICategory(category);
    const address = await addressModel(items);
    setAPIAddress(address);

    try {
      for (let i = 0; i < address.length; i++) {
        if (address[i].addr_mainAddress) {
          const cek = await axios.get(
            `http://localhost:8080/addresses/${i + 1}`
          );
          if (cek.data.addr_mainAddress === true) {
            setMainAddress(address[i]);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      {index == 0 ? (
        <Box sx={{ width: PADDING, marginTop: "16px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box>
                <Typography
                  sx={{ color: THEME.GREY_PRIMARY, fontSize: "12px" }}
                >
                  {HOME.PesananDikirimKe}
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Box>
                  {mainAddress.addr_ward != undefined &&
                  mainAddress.addr_districts != undefined ? (
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: 16,
                        marginTop: "6px",
                      }}
                    >
                      {mainAddress.addr_ward +
                        ", " +
                        mainAddress.addr_districts}
                    </Typography>
                  ) : (
                    <MoreHorizIcon
                      sx={{ marginTop: "6px", marginBottom: "-6px" }}
                    />
                  )}
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
              onClick={() => navigate("/voucher/")}
            >
              {/* voucher icon*/}
              <Box>
                <VoucherIcon />
              </Box>
              {/* typo */}
              <Box
                sx={{
                  marginLeft: "8px",
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
                  3 Voucher
                  {/* {APICustomer.c_name} */}
                  {/* {APIFoods.f_name} */}
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
              onClick={() => navigate("/point")}
            >
              <PointIcon />
              <Box></Box>
              {/* typo */}
              <Box
                sx={{
                  marginLeft: "8px",
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
                  2.700 Poin
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: 447 - 20 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "28px",
              }}
            >
              <Box
                sx={{
                  overflow: "scroll",
                  width: "447px",
                  ml: "-20px",
                  // background: "green",
                }}
              >
                <Box sx={{ ml: "20px", display: "flex" }}>
                  {/* <Category/>
              <Category/>
              <Category/>
              <Category/> */}
                  {/* {typeof(APICategory) == 'object' ? 
      Object.keys(APICategory).map((index, i) =><>
      {console.log(i, index, Object.keys(APICategory), APICategory.cat_name[i])} */}
                  {/* <Category title={i} image={APICategory.cat_image[i]}/>  */}
                  {/* </>
    ): ""} */}

                  {Object.keys(APICategory).map((i) => (
                    <>
                      <Box sx={{ mr: "42px" }}>
                        <Category
                          title={APICategory[i].cat_name}
                          image={APICategory[i].cat_image}
                        />
                      </Box>
                    </>
                  ))}
                </Box>
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
                    "&:hover": {
                      cursor: "pointer",
                    },
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
            <Box
              sx={{
                marginTop: "13px",
                overflow: "scroll",
                width: "447px",
                ml: "-20px",
              }}
            >
              <Box sx={{ ml: "20px", display: "flex" }}>
                {/* {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )} */}
                {/* {APIFoods.foodList.f.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
        <Typography>HAlo</Typography>
      )} */}
                {typeof APIFoods == "object"
                  ? Object.keys(APIFoods).map((foods, i) => (
                      <>
                        <Box sx={{ marginRight: "8px" }}>
                          <SelectedMenu
                            title={APIFoods[i].f_name}
                            discount={APIFoods[i].f_discount}
                            price={APIFoods[i].f_price}
                            rating={APIFoods[i].f_rating}
                            sold={APIFoods[i].f_sold}
                            image={APIFoods[i].f_image}
                            index={i}
                            items={items}
                            onClick={() =>
                              navigate(`/product/${APIFoods[i].id}`)
                            }
                          />
                        </Box>
                      </>
                    ))
                  : ""}
              </Box>
            </Box>
          </Box>
          <SectionTitle
            title={HOME.PaketHemat}
            desc={HOME.WarungTerpercayaDi}
          />

          {/* <Box sx={{ marginTop: "13px", overflow: "scroll", width: "447px", ml: '-20px' }}>
            <Box sx={{ml: '20px', display: "flex",}}></Box> */}
          <Box
            sx={{
              marginTop: "13px",
              overflow: "scroll",
              width: "447px",
              ml: "-20px",
            }}
          >
            <Box sx={{ ml: "20px", display: "flex" }}>
              {typeof APIFoods == "object"
                ? Object.keys(APIFoods).map((index, i) => (
                    <>
                      <Box sx={{ marginRight: "8px" }}>
                        <EconomicalPacket
                          title={APIFoods[i].f_name}
                          rating={APIFoods[i].f_rating}
                          sold={APIFoods[i].f_sold}
                          image={APIFoods[i].f_image}
                        />
                      </Box>
                    </>
                  ))
                : ""}
              {/* <Box sx={{ marginRight: "8px" }}>
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
          </Box> */}
            </Box>
          </Box>
          <SectionTitle title={HOME.Terbaru} desc={HOME.ProdukPilihanPaling} />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {/* {typeof(APIFoods) == 'object' ? 
      Object.keys(APIFoods).map((index, i) =><>
      {APIFoods.f_name[i] ? 
      <Box sx={{ marginRight: "8px" }}>
              <SelectedMenu
                title={APIFoods.f_name[i]}
                discount={APIFoods.f_discount[i]}
                price={APIFoods.f_price[i]}
                rating={APIFoods.f_rating[i]}
                sold={APIFoods.f_sold[i]}
                image={APIFoods.f_image[i]}
                onClick={() => navigate("/product")}
              />
            </Box> :  ""}</>
    ): ""} */}
            {typeof APIFoods == "object"
              ? Object.keys(APIFoods).map((index, i) => (
                  <>
                    {i < 3 ? (
                      <>
                        <Box sx={{ marginTop: "32px" }}>
                          <Newest
                            title={APIFoods[i].f_name}
                            discount={APIFoods[i].f_discount}
                            image={APIFoods[i].f_image}
                            price={APIFoods[i].f_price}
                          />
                        </Box>{" "}
                      </>
                    ) : (
                      ""
                    )}
                  </>
                ))
              : ""}
          </Box>
          <SectionTitle title={HOME.Rekomendasi} />
          <Box sx={{ mb: "50px" }}>
            <StyledTabs />
          </Box>
        </Box>
      ) : (
        ""
      )}
      {index == 2 ? <Transactions /> : ""}
      {index == 3 ? <Profile /> : ""}
      <AppBarBot handleClick={handleClick} />
    </Box>
  );
}

export default Home;
