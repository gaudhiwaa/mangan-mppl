import {
  Box,
  createTheme,
  Tabs,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import AppBarTop from "../components/AppBarTop";
import { PADDING } from "../constants/Padding";
import { THEME } from "../constants/Theme";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import Tab from "@mui/material/Tab";
import { useTheme } from "@emotion/react";
import MyProfile from "../assets/profile/MyProfile.png";
import PropTypes from "prop-types";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import EditIcon from "../assets/location/EditIcon";
import axios from "axios";
import { UserContext } from "../UserContext";
import { AppContext } from "../App";
import VoucherIcon from "../assets/home/VoucherIcon";
import PointIcon from "../assets/home/PointIcon";
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import KeamananAkunIcon from "../assets/profile/KeamananAkunIcon";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

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

function Profile() {
  // const [items, setItems] = useState([]);
  const {APICustomer, setAPICustomer} = useContext(AppContext); 

  // useEffect(() => {
  //   const items = localStorage.getItem('items');
  //   if (items) {
  //     setItems(items);
  //   }
  // },[]);

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
      <Box sx={{ width: PADDING, mb: "-15px" }}>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", mt: "16px" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
                Profil
              </Typography>
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
      </Box>
      <Box sx={{ width: PADDING }}>
        <Box
          sx={{
            width: PADDING,
            boxShadow: "0px 2px 8px -2px rgba(0, 0, 0, 0.04)",
            color: "transparent",
            "&:hover": {
              cursor: "default",
            },
            mt: '16px'
          }}
        >
          Shadow Bar
        </Box>
        <Box sx={{ display: "flex", mt: "16px", alignItems: 'center'}}>
          <Box>
            <img src={MyProfile} width="48px" height="48px" style={{borderRadius: "50%",}}/>
          </Box>
          <Box sx={{ml: '9px',display: 'flex', justifyContent: 'space-between', width: '100%'}}>
            <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontWeight: 600, fontSize: "12px", mt: '-5px' }}>
               {APICustomer.c_name}
              </Typography>
            
            </Box>
            <Typography
              sx={{
                fontWeight: 400, fontSize: "10px"
              }}
            >
              {APICustomer.c_handphone_number}
            </Typography>
            <Typography
              sx={{
                fontWeight: 400, fontSize: "10px"
              }}
            >
              {APICustomer.c_email}
            </Typography>
          </Box>
          <EditIcon/>
          </Box>
        </Box>
        </Box>
        
        {/* pembatas profile dan voucher points */}
        <Box
          sx={{
            width: "100%",
            height: "8px",
            background: "#FAFAFA",
            mt: '16px'
            }}
        ></Box>
        <Box sx={{ width: PADDING }}>
        {/* box voucher dan point */}
        <Box
            sx={{
              mt: "15px",
              width: PADDING,
              display: "flex",
              justifyContent: "space-between",
              boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.25)",
              borderRadius: "8px",
              height: "63px",
              alignItems: "center"
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
              // onClick={() => navigate("/voucher/")}
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
              // onClick={() => navigate("/point")}
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

          {/* pengaturan akun */}
          <Box
            sx={{
              mt: "20px",
              width: PADDING,
              height: "346px",
              }}
          >
            <Typography
              sx={{
                color: "#333333",
                fontSize: "14px",
                fontWeight: 600,
              }}> Pengaturan Akun
            </Typography>
            
            {/* PESANANKU */}
            <Box 
              sx={{
                mt: "16px",
                width: PADDING,
                height: "24px",
                display: "flex",
                justifyContent: "space-between"
              }}>
                <Box
                  sx={{
                    width: PADDING,
                    height: "24px",
                    display: "flex",
                  }}>
                <Box>
                  <ReceiptOutlinedIcon 
                    sx={{
                      fontSize: "24px", color: "#828282"
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    marginLeft: "12px"
                  }}>
                    <Typography
                      sx={{
                        mt: "3px",
                        fontSize: "12px",
                        color: "#333333",
                        fontWeight: 500
                      }}> Pesananku
                    </Typography>
                </Box>
                </Box>
                <Box>
                  <NavigateNextOutlinedIcon 
                    sx={{
                      color: "#828282",
                      fontSize: "24px"
                    }}
                  />
                </Box>
            </Box>

            <Box
              sx={{
                width: PADDING,
                mt: "16px",
                background: "#F5F5F5",
                height: "1px"
              }}>     
            </Box>

            {/* DAFTAR ALAMAT */}
            <Box 
              sx={{
                mt: "16px",
                width: PADDING,
                height: "24px",
                display: "flex",
                justifyContent: "space-between"
              }}>
                <Box
                  sx={{
                    width: PADDING,
                    height: "24px",
                    display: "flex",
                  }}>
                <Box>
                  <HomeOutlinedIcon
                    sx={{
                      fontSize: "24px", color: "#828282"
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    marginLeft: "12px"
                  }}>
                    <Typography
                      sx={{
                        mt: "3px",
                        fontSize: "12px",
                        color: "#333333",
                        fontWeight: 500
                      }}> Daftar Alamat
                    </Typography>
                </Box>
                </Box>
                <Box>
                  <NavigateNextOutlinedIcon 
                    sx={{
                      color: "#828282",
                      fontSize: "24px"
                    }}
                  />
                </Box>
            </Box>

            <Box
              sx={{
                width: PADDING,
                mt: "16px",
                background: "#F5F5F5",
                height: "1px"
              }}>     
            </Box>

            {/* METODE PEMBAYARAN */}
            <Box 
              sx={{
                mt: "16px",
                width: PADDING,
                height: "24px",
                display: "flex",
                justifyContent: "space-between"
              }}>
                <Box
                  sx={{
                    width: PADDING,
                    height: "24px",
                    display: "flex",
                  }}>
                <Box>
                  <AddCardOutlinedIcon
                    sx={{
                      fontSize: "23px", color: "#828282"
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    marginLeft: "12px"
                  }}>
                    <Typography
                      sx={{
                        mt: "3px",
                        fontSize: "12px",
                        color: "#333333",
                        fontWeight: 500
                      }}> Metode Pembayaran
                    </Typography>
                </Box>
                </Box>
                <Box>
                  <NavigateNextOutlinedIcon 
                    sx={{
                      color: "#828282",
                      fontSize: "24px"
                    }}
                  />
                </Box>
            </Box>

            <Box
              sx={{
                width: PADDING,
                mt: "16px",
                background: "#F5F5F5",
                height: "1px"
              }}>     
            </Box>

            {/* KEAMANAN AKUN */}
            <Box 
              sx={{
                mt: "16px",
                width: PADDING,
                height: "24px",
                display: "flex",
                justifyContent: "space-between"
              }}>
                <Box
                  sx={{
                    width: PADDING,
                    height: "24px",
                    display: "flex",
                  }}>
                <Box>
                  <KeamananAkunIcon 
                      width= "25px"
                      height= "25px"
                    sx={{
                      color: "#828282"
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    marginLeft: "12px"
                  }}>
                    <Typography
                      sx={{
                        mt: "3px",
                        fontSize: "12px",
                        color: "#333333",
                        fontWeight: 500
                      }}> Keamanan Akun
                    </Typography>
                </Box>
                </Box>
                <Box>
                  <NavigateNextOutlinedIcon 
                    sx={{
                      color: "#828282",
                      fontSize: "24px"
                    }}
                  />
                </Box>
            </Box>

            <Box
              sx={{
                width: PADDING,
                mt: "16px",
                background: "#F5F5F5",
                height: "1px"
              }}>     
            </Box>
            {/* ULASAN */}
            <Box 
              sx={{
                mt: "16px",
                width: PADDING,
                height: "24px",
                display: "flex",
                justifyContent: "space-between"
              }}>
                <Box
                  sx={{
                    width: PADDING,
                    height: "24px",
                    display: "flex",
                  }}>
                <Box>
                  <StarBorderOutlinedIcon
                    sx={{
                      fontSize: "24px", color: "#828282"
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    marginLeft: "12px"
                  }}>
                    <Typography
                      sx={{
                        mt: "3px",
                        fontSize: "12px",
                        color: "#333333",
                        fontWeight: 500
                      }}> Ulasan
                    </Typography>
                </Box>
                </Box>
                <Box>
                  <NavigateNextOutlinedIcon 
                    sx={{
                      color: "#828282",
                      fontSize: "24px"
                    }}
                  />
                </Box>
            </Box>

            <Box
              sx={{
                width: PADDING,
                mt: "16px",
                background: "#F5F5F5",
                height: "1px"
              }}>     
            </Box>
            {/* NOTIFIKASI */}
            <Box 
              sx={{
                mt: "16px",
                width: PADDING,
                height: "24px",
                display: "flex",
                justifyContent: "space-between"
              }}>
                <Box
                  sx={{
                    width: PADDING,
                    height: "24px",
                    display: "flex",
                  }}>
                <Box>
                  <NotificationsNoneOutlinedIcon
                    sx={{
                      fontSize: "24px", color: "#828282"
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    marginLeft: "12px"
                  }}>
                    <Typography
                      sx={{
                        mt: "3px",
                        fontSize: "12px",
                        color: "#333333",
                        fontWeight: 500
                      }}> Notifikasi
                    </Typography>
                </Box>
                </Box>
                <Box>
                  <NavigateNextOutlinedIcon 
                    sx={{
                      color: "#828282",
                      fontSize: "24px"
                    }}
                  />
                </Box>
            </Box>
          </Box>
      </Box>
    </Box>
  );
}

export default Profile;
