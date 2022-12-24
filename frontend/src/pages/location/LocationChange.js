import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import Map from "../../assets/location/Map";
import AppBarTop from "../../components/AppBarTop";
import { PADDING } from "../../constants/Padding";
import { THEME } from "../../constants/Theme";
import LocationIcon from "../../assets/location/LocationIcon";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PinPoint from "../../assets/location/PinPointIcon";
import SwipeableEdgeDrawer from "../../components/SwipeableEdgeDrawer";
import TulungagungMap from "../../assets/location/TulungagungMap.png";

function Location() {
  const [searchLoc, setSearchLoc] = React.useState("");
  const [chooseMap, setChooseMap] = React.useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundImage: chooseMap? `url(${TulungagungMap})`: "",
        backgroundSize: chooseMap? "550px": "",
        // backgroundPosition: "50% 30%"
      }}
    >
      <AppBarTop text={"Tambah Lokasi"} />
      <Box sx={{background: 'white', width: '100%', display: 'flex', justifyContent: 'center'}}>
      <Box sx={{ width: PADDING, display: "flex", flexDirection: "column", mb: chooseMap? '10px': ""}}>
        <Box sx={{ width: "100%" }}>
          <TextField
            variant="standard"
            type="text"
            onChange={(e) => setSearchLoc(e.target.value)}
            value={searchLoc}
            placeholder="Cari Lokasi"
            InputProps={{
              startAdornment: (
                <LocationOnIcon
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
          ></TextField>
        </Box>
      </Box>
      </Box>
      {chooseMap? 
      <>
      <Box
        sx={{
          backgroundColor: 'red', display: 'flex', justifyContent: 'center'}}
      >
        <SwipeableEdgeDrawer/>
      </Box>
      </>
      : 
      <>
      <Box
        sx={{
          marginTop: "3px",
          width: "100%",
          height: "20px",
          backgroundColor: THEME.WHITE,
          boxShadow: "0px 2px 8px -2px rgba(0, 0, 0, 0.04)",
        }}
      />
      <Box
        onClick={(e) => setChooseMap(true)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: PADDING,
          mt: "20px",
          ml: "23px",
          '&:hover': {
            cursor: 'pointer'
          },
        }}
      >
        <Map />
        <Typography
          
          sx={{
            marginLeft: "9px",
            color: THEME.GREEN_PRIMARY,
            fontSize: "14px",
          }}
        >
          Pilih lewat peta
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "18px",
          width: PADDING,
          height: "1px",
          backgroundColor: "#F5F5F5",
        }}
      />
      {searchLoc ? (
        <>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: PADDING,
            ml: "23px",
            marginTop: "18px",
          }}
        >
          <PinPoint />
          <Box sx={{ marginLeft: "9px", color: THEME.GREY_PRIMARY, mt: '-2px'}}>
            <Typography
              sx={{
                color: THEME.GREY_PRIMARY,
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              Arandra Residence
            </Typography>
            <Typography sx={{ fontSize: "12px", mt: "10px" }}>
              Kec. Cemp. Putih, Kota Jakarta Pusat, Daerah Khusus Ibukota
              Jakarta
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: PADDING,
            ml: "23px",
            marginTop: "18px",
          }}
        >
          <PinPoint />
          <Box sx={{ marginLeft: "9px", color: THEME.GREY_PRIMARY, mt: '-2px'}}>
            <Typography
              sx={{
                color: THEME.GREY_PRIMARY,
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              Arandra Residence
            </Typography>
            <Typography sx={{ fontSize: "12px", mt: "10px" }}>
              Kec. Cemp. Putih, Kota Jakarta Pusat, Daerah Khusus Ibukota
              Jakarta
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: PADDING,
            ml: "23px",
            marginTop: "18px",
          }}
        >
          <PinPoint />
          <Box sx={{ marginLeft: "9px", color: THEME.GREY_PRIMARY, mt: '-2px'}}>
            <Typography
              sx={{
                color: THEME.GREY_PRIMARY,
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              Arandra Residence
            </Typography>
            <Typography sx={{ fontSize: "12px", mt: "10px" }}>
              Kec. Cemp. Putih, Kota Jakarta Pusat, Daerah Khusus Ibukota
              Jakarta
            </Typography>
          </Box>
        </Box>
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: PADDING,
            ml: "23px",
            mb: "13px",
            marginTop: "18px",
            '&:hover': {
              cursor: 'pointer'
            },
          }}
        >
          <LocationIcon />
          <Typography
            sx={{
              marginLeft: "9px",
              color: THEME.GREY_PRIMARY,
              fontSize: "14px",
              
            }}
          >
            Gunakan Lokasi Saat Ini
          </Typography>
        </Box>
      )}</>}
    </Box>
  );
}

export default Location;
