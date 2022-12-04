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
            width: "100%",
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
    </Box>
  );
}

export default Profile;
