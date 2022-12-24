import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { THEME } from '../constants/Theme';
import { Typography } from '@mui/material';
import { useEffect } from 'react';
import axios from 'axios';
import { AppContext } from '../App';
import { useContext } from 'react';
import { useState } from 'react';



export default function BasicSelect({ data, marginTop, label, icon, type, wardId, onChange }) {
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [wards, setWards] = useState([])
    const [selectedWards, setSelectedWards] = useState([])
    const { districtsInTulungagung } = useContext(AppContext)


    const handleChangeDistricts = async (event) => {
        setSelectedDistrict(event.target.value);
        
        const district = await axios.get(`https://ibnux.github.io/data-indonesia/kecamatan/3504.json`);
        console.log(district.data)
        // console.log(typeof(district.data[1].id), event.target.value)
        for (let i=0; i<district.data.length; i++){
            console.log("RENDERR")
            if(district.data[i].id == event.target.value) {
            onChange(district.data[i].nama)
        }
        }
        // setWards(ward.data)
        wardId(event.target.value)
    };

    const handleChangeWards = async (event) => {
        setSelectedWards(event.target.value);
        onChange(event.target.value)
        // const ward = await axios.get(`https://ibnux.github.io/data-indonesia/kelurahan/${event.target.value}.json`);
        // setWards(ward.data)
        
    };

    return (
        <Box sx={{ minWidth: 120, marginTop: marginTop, backgroundColor: "#FAFAFA", borderRadius: "8px", }}>
            <FormControl fullWidth>

                <InputLabel id="demo-simple-select-label" sx={{
                    display: 'flex',

                    '&.Mui-focused': {
                        color: THEME.GREY_PRIMARY
                    }
                }}>

                    {icon}
                    <Typography sx={{ ml: '14px', fontSize: '14px', color: "#9c9c9c", }}>{label}</Typography>

                </InputLabel>
                {type == "districts" ?
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedDistrict}
                        label={label}
                        onChange={handleChangeDistricts}
                        sx={{
                            '.MuiOutlinedInput-notchedOutline': {
                                borderColor: "#FAFAFA",
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: "#FAFAFA",
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(228, 219, 233, 0.25)',
                            },
                            fontSize: "16px"
                        }}
                    >

                        {data.map((element, index) => (
                            <MenuItem value={data[index].id} key={index}>
                                {data[index].nama}
                            </MenuItem>
                        ))}





                        {console.log(wards, "dataaa")}



                    </Select>
                    : ""
                }
                {type == "wards" ?
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedWards}
                        label={label}
                        onChange={handleChangeWards}
                        sx={{
                            '.MuiOutlinedInput-notchedOutline': {
                                borderColor: "#FAFAFA",
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: "#FAFAFA",
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(228, 219, 233, 0.25)',
                            },
                            fontSize: "16px"
                        }}
                    >

                        {data.map((element, index) =>

                            <MenuItem value={data[index].nama} key={index}>
                                {data[index].nama}
                            </MenuItem>
                        )}
                        {console.log(wards, "dataaa")}

                    </Select>
                    : ""
                }

            </FormControl>
        </Box>
    );
}
