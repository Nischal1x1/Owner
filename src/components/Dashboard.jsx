import { Box, Typography, Paper } from '@mui/material';
// import avatar from '../utlis/avatar_1.png';
import orderPlaced from '../utlis/oplaced.png';
import orderInDelivery from '../utlis/oondelivery.png';
import orderDelivered from '../utlis/odelivered.png';
import earning from '../utlis/earning.png';

const dailyOrderInfo = [
  { title: 'Total order palced', img: orderPlaced, value: 0 },
  { title: 'Total order in delivery', img: orderInDelivery, value: 1 },
  { title: 'Total order delivered', img: orderDelivered, value: 2 },
  { title: 'Total earning', img: earning, value: 3 }

];

const Dashboard = () => {
  return (
    <>
      <Box display='flex' sx={{ gap: 2 }}>
        <Typography variant="h3" sx={{ mt: 5 }}>
          WELCOME <span style={{ color: '#F7C12C' }}>OWNER,</span>
        </Typography>

      </Box>
      <Paper elevation={4} sx={{ mt: 5, height: '39vh', width: '70vw', display: "flex", flexDirection: 'column', pt: 3.5, alignItems: 'center' }}>

        <Typography variant='h4'>
          THE STATUS OF <span style={{ color: '#F7C12C' }}>THE DAY</span>
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, pt: 8 }}>
          {dailyOrderInfo.map((item) => (
            <Box sx={{ textAlign: 'center' }}>
              <img src={item.img} alt='ditem' width="90px" />
              <Typography variant="h6">
                {item.title}
              </Typography>
              <Typography variant='h6'>
                {item.value}
              </Typography>
            </Box>
          ))}
        </Box>

      </Paper>

    </>



  );
}

export default Dashboard;