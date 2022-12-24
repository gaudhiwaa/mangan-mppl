import { alertTitleClasses, Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import EditIcon from "../../assets/location/EditIcon";
import AppBarTop from "../../components/AppBarTop";
import { PADDING } from "../../constants/Padding";
import { THEME } from "../../constants/Theme";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import { addressModel } from "../../components/API/GetAPI";
import axios from "axios";

function LocationList() {
  //loc for hook on this page only!
  const [mainLoc, setMainLoc] = useState({});
  const navigate = useNavigate();
  const { APIAddress, setAPIAddress, mainAddress, setMainAddress, findMainAddress, setFindMainAddress } =
    useContext(AppContext);
  const [items, setItems] = useState([]);
  // const [] = useState({});

  useEffect(() => {
    const items = localStorage.getItem("items");
    if (items) {
      setItems(items);
    }
    getAPI(items);
  }, []);

  useEffect(() => {
    localStorage.setItem('loc', JSON.stringify(findMainAddress));
  }, [findMainAddress]);

  const getAPI = async (items) => {
    const address = await addressModel(items);
    console.log(address)
    setAPIAddress(address);
    for (let i = 0; i < address.length; i++) {
      if (address[i].addr_mainAddress) {
        setMainLoc({ [i]: true });
        setFindMainAddress(i + 1);
        console.log(findMainAddress);
      }
    }
  };

  const handleBtn = (btnId, i) => async (e) => {
    e.preventDefault();
    // btnId++;

    const findAddr = APIAddress.find((prod) => prod.id === btnId);
    setMainAddress(findAddr);
    console.log("www", findAddr);
    setFindMainAddress(btnId);

    console.log(btnId, "btnID", findMainAddress);
    setMainLoc(false);
    setMainLoc((state) => ({
      ...state,
      [i]: !setMainLoc[true],
    }));
    console.log(mainLoc, "mainadd");

    try {
      for (let i = 0; i < APIAddress.length; i++) {
        if (APIAddress[i].addr_mainAddress) {
          await axios.patch(`http://localhost:8080/addresses/${APIAddress[i].id}`, {
            addr_mainAddress: false,
          });
        }

        await axios.patch(`http://localhost:8080/addresses/${btnId}`, {
          addr_mainAddress: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = async (btnID) => {
    console.log(findMainAddress, btnID)

    if(APIAddress.length!=1 && findMainAddress!=btnID){ 
    try {
      await axios.delete(`http://localhost:8080/addresses/${btnID}`)
      getAPI(items)
    } catch (error) {
      console.log(error);
    } 

    
  }
  else {
    alert("Lokasi utama tidak bisa dihapus")
  }
  }


  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        overflow: "scroll"
      }}
    >
      <AppBarTop text={"Daftar Alamat"} line extButtonTxt={"+ Tambah Alamat"} nav={"/home"}/>
      {/* 1 */}
      {/* <Box sx={{border: "1px solid #F5F5F5", borderRadius: '8px', width: PADDING, height: '163px', overflow: 'hidden', marginTop: '21px',  display: 'flex'}}>
      {mainLoc[1] ? <Box sx={{height: '100%', width: '12px', background: THEME.GREEN_PRIMARY,}}/> : ""}
        
        <Box sx={{padding: mainLoc[1] ? "15px 17px 15px 17px":'15px 17px 15px 22px', }}>
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          {mainLoc[1]? 
            <Box sx={{background: THEME.GREEN_PRIMARY, width: '53px', height: '19px',  borderRadius: '4px', fontWeight: 600, color: 'white', fontSize: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', "&:hover": {
              cursor: "pointer",
            },}}>UTAMA</Box> : <Box sx={{color: THEME.GREEN_PRIMARY, width: '155px', height: '19px',  borderRadius: '4px', fontWeight: 600, border: "1px solid" + THEME.GREEN_PRIMARY, fontSize: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', "&:hover": {
              cursor: "pointer",
            },}} onClick={handleBtn(1)}>Jadikan Alamat Utama</Box>}
          
          <Box onClick={() => navigate("/changelocation")} sx={{ height: '24px', "&:hover": {
                    cursor: "pointer",
                  },}}>
          <EditIcon/>
          </Box>
          </Box>
          <Typography sx={{marginTop: '11px', fontWeight: 500, fontSize: '14px'}}>Adinda</Typography>
          <Typography sx={{marginTop: '6px', fontSize: '12px', fontWeight: 400, color: "#333333"}}>+6281903810</Typography>
          <Typography sx={{marginTop: '5px', fontWeight: 400, fontSize: '12px', color: '#333333'}}>
          Arandra Residence, Jl. Cempaka Putih Raya No.1, RT.1/RW.6, Cemp. Putih Tim., Kec. Cemp. Putih, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10510
          </Typography>
        </Box>
      </Box>

      <Box sx={{border: "1px solid #F5F5F5", borderRadius: '8px', width: PADDING, height: '163px', overflow: 'hidden', marginTop: '21px',  display: 'flex'}}>
        {mainLoc[2] ? <Box sx={{height: '100%', width: '12px', background: THEME.GREEN_PRIMARY,}}/> : ""}
        
        <Box sx={{padding: mainLoc[2] ? "15px 17px 15px 17px":'15px 17px 15px 23px', }}>
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          {mainLoc[2]? 
            <Box sx={{background: THEME.GREEN_PRIMARY, width: '53px', height: '19px',  borderRadius: '4px', fontWeight: 600, color: 'white', fontSize: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', "&:hover": {
              cursor: "pointer",
            },}}>UTAMA</Box> : <Box sx={{color: THEME.GREEN_PRIMARY, width: '155px', height: '19px',  borderRadius: '4px', fontWeight: 600, border: "1px solid" + THEME.GREEN_PRIMARY, fontSize: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', "&:hover": {
              cursor: "pointer",
            },}} onClick={handleBtn(2)}>Jadikan Alamat Utama</Box>}
          
          <Box onClick={() => navigate("/changelocation")} sx={{ height: '24px', "&:hover": {
                    cursor: "pointer",
                  },}}>
          <EditIcon/>
          </Box>
          </Box>
          <Typography sx={{marginTop: '11px', fontWeight: 500, fontSize: '14px'}}>Bayu</Typography>
          <Typography sx={{marginTop: '6px', fontSize: '12px', fontWeight: 400, color: "#333333"}}>+6281903810</Typography>
          <Typography sx={{marginTop: '5px', fontWeight: 400, fontSize: '12px', color: '#333333'}}>
          Jl. Pulo Mas Barat XI No.19, RT.3/RW.10, Kayu Putih, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13210
          </Typography>
        </Box>
      </Box> */}

      {Object.keys(APIAddress).map((i) => (
        <Box key={i}>
          <Box
            sx={{
              border: "1px solid #F5F5F5",
              borderRadius: "8px",
              width: PADDING,
              height: "163px",
              overflow: "hidden",
              marginTop: "21px",
              display: "flex",
            }}
          >
            {mainLoc[i] ? (
              <Box
                sx={{
                  height: "100%",
                  width: "7px",
                  background: THEME.GREEN_PRIMARY,
                }}
              />
            ) : (
              ""
            )}

            <Box
              sx={{
                padding: mainLoc[i]
                  ? "15px 17px 15px 17px"
                  : "15px 17px 15px 23px",
                width: "100%",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                {mainLoc[i] ? (
                  <Box
                    sx={{
                      background: THEME.GREEN_PRIMARY,
                      width: "53px",
                      height: "19px",
                      borderRadius: "4px",
                      fontWeight: 600,
                      color: "white",
                      fontSize: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  >
                    UTAMA
                  </Box>
                ) : (
                  <Box
                    sx={{
                      color: THEME.GREEN_PRIMARY,
                      width: "155px",
                      height: "19px",
                      borderRadius: "4px",
                      fontWeight: 600,
                      border: "1px solid" + THEME.GREEN_PRIMARY,
                      fontSize: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                    onClick={handleBtn(APIAddress[i].id, i)}
                  >
                    Jadikan Alamat Utama
                  </Box>
                )}

                <Box
                  onClick={() => handleRemove(APIAddress[i].id)}
                  sx={{
                    height: "24px",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  <EditIcon />
                </Box>
              </Box>
              <Typography
                sx={{ marginTop: "11px", fontWeight: 500, fontSize: "14px" }}
              >
                {APIAddress[i].addr_name}
              </Typography>
              <Typography
                sx={{
                  marginTop: "6px",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#333333",
                }}
              >
                {APIAddress[i].addr_handphone_number}
              </Typography>
              <Typography
                sx={{
                  marginTop: "5px",
                  fontWeight: 400,
                  fontSize: "12px",
                  color: "#333333",
                }}
              >
                {mainLoc[i] ?
                  mainAddress.addr_ward + ", " + mainAddress.addr_districts + "," : APIAddress[i].addr_ward + ", " + APIAddress[i].addr_districts + ","} {APIAddress[i].addr_fullAddress}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default LocationList;
