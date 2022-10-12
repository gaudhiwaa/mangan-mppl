import { Box, Typography } from "@mui/material";
import React, { Component } from "react";
import { THEME } from "../constants/Theme";

function setZeros(i) {
  if (i < 10) return "0" + i;
  return i;
}

class Counter extends Component {
  constructor() {
    super();

    let start = 0,
      intrvl;

    this.state = {
      s: "00",
      m: "15",
      h: "00"
    };

    //start timer
    this.startTimer = () => {
      // if startTimer is already running
      if (this.start == 1) return;

      this.start = 1; // set startTimer is running
      let ss = 0,
        mm = 15,
        hh = 0;
      intrvl = setInterval(() => {
        ss--;
        if (ss == -1) {
          ss = 59;
          mm--;
        }
        if (mm == -1) {
          return
        }
        this.setState({
          s: setZeros(ss),
          m: setZeros(mm),
          h: setZeros(hh)
        });
      }, 1000);
    }; // start timer ends

    //stop timer
    this.stopTimer = () => {
      // if (this.start == 0) return;
      // this.start = 15;
      this.setState({
        s: "00",
        m: "15",
        h: "00"
      });
      clearInterval(intrvl);
    }; // stop timer ends
  }

  render() {
    let { s, m, h } = this.state;
    return (
      <Box className="counter">
        {this.startTimer.length ? "" : this.startTimer()}
        <Box sx={{display: 'flex', justifyContent: 'space-between', }}>
          <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <Typography sx={{color: THEME.GREEN_PRIMARY, fontWeight: 'bold', fontSize: 24}}>{h}</Typography>
            <Typography sx={{color: THEME.GREY_PRIMARY, fontSize: '12px'}}>Jam</Typography>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <Typography sx={{color: THEME.GREEN_PRIMARY, fontWeight: 'bold', fontSize: 24}}>{m}</Typography>
            <Typography sx={{color: THEME.GREY_PRIMARY, fontSize: '12px'}}>Menit</Typography>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <Typography sx={{color: THEME.GREEN_PRIMARY, fontWeight: 'bold', fontSize: 24}}>{s}</Typography>
            <Typography sx={{color: THEME.GREY_PRIMARY, fontSize: '12px'}}>Detik</Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Counter;
