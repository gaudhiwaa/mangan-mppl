import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import { THEME } from '../constants/Theme';

export default function AppBarBot() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width:"100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
            "& .MuiBottomNavigationAction-root, svg": {
                color: THEME.GREY_PRIMARY
              },
              "& .Mui-selected, .Mui-selected > svg": {
                color: THEME.GREEN_PRIMARY
              }
        }}
      >
        <BottomNavigationAction label="Belanja" icon={<StorefrontIcon />} />
        <BottomNavigationAction label="Keranjang" icon={<ShoppingCartOutlinedIcon />} />
        <BottomNavigationAction label="Transaksi" icon={<ReceiptOutlinedIcon />} />
        <BottomNavigationAction label="Profil" icon={<AccountCircleOutlinedIcon />} />
      </BottomNavigation>
    </Box>
  );
}
