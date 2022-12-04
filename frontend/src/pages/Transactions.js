import {
  Box,
  createTheme,
  Tabs,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
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
            <CustomTab label="Dibatalkan" />
          </Tabs>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
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
                      Pesanan dalam Pengiriman
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
                <StyledButton
                  text={"Lacak"}
                  style="outlined"
                  noShadow
                  border="1px solid #2DBE78"
                  width={"54px"}
                  height="23px"
                  borderRadius={"4px"}
                  fontSize="10px"
                />
              </Box>
              
              </Box>
              
              <Box
                sx={{
                  height: "8px",
                  background: "#FAFAFA",
                  mt: "20px",
                  mb: "20px",
                }}
              />
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
                  <Box sx={{ background: "#FF722C", borderRadius: "4px" }}>
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
                      Menunggu Pembayaran
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
                <StyledButton
                  text={"Lacak"}
                  style="outlined"
                  noShadow
                  border="1px solid #2DBE78"
                  width={"54px"}
                  height="23px"
                  borderRadius={"4px"}
                  fontSize="10px"
                />
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
            <TabPanel value={value} index={1} dir={theme.direction}>
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
                  <Box sx={{ background: THEME.GREEN_PRIMARY, borderRadius: "4px" }}>
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
                      Pesanan Selesai
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
                <StyledButton
                  text={"Lacak"}
                  style="outlined"
                  noShadow
                  border="1px solid #2DBE78"
                  width={"54px"}
                  height="23px"
                  borderRadius={"4px"}
                  fontSize="10px"
                />
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
                <StyledButton
                  text={"Lacak"}
                  style="outlined"
                  noShadow
                  border="1px solid #2DBE78"
                  width={"54px"}
                  height="23px"
                  borderRadius={"4px"}
                  fontSize="10px"
                />
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
