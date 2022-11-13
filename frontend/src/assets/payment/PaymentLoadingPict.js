import { Box } from '@mui/system';
import pict from './PaymentLoading.png'

const PaymentLoadingPict = ({ width, height }) => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
    <img src={pict} width={width} alt="loading"/>
    </Box>
  );
};
export default PaymentLoadingPict;
