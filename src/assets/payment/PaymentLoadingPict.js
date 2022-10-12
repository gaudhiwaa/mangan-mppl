import { Box } from '@mui/system';
import pict from './PaymentLoading.png'

const PaymentLoadingPict = ({ width, height }) => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
    <img src={pict} width={width}/>
    </Box>
  );
};
export default PaymentLoadingPict;
