import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { THEME } from "../constants/Theme";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SwipeableViews from 'react-swipeable-views';
import { Typography } from "@mui/material";
import PropTypes from 'prop-types';
import { useTheme } from "@emotion/react";

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
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

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
  fontSize: '12px'
});

export default function StyledTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <ThemeProvider theme={themeColor}>
    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
        TabIndicatorProps={{style: {background:THEME.GREEN_PRIMARY, }}}
        textColor="primary"
      >
        <CustomTab label="Seafood" />
        <CustomTab label="Mie" />
        <CustomTab label="Western" />
        <CustomTab label="Sup" />
        <CustomTab label="Desert" />
        <CustomTab label="Minuman" />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </Box>
    </ThemeProvider>
  );
}
