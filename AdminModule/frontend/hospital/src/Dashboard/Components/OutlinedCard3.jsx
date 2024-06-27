import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import WheelchairPickupIcon from '@mui/icons-material/WheelchairPickup';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        Revenue
      </Typography>
      <CurrencyRupeeIcon/> <text > 2L </text>     
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard3() {
  return (
    <Box sx={{ minWidth:100 }}>
      <Card sx={{ backgroundColor: '#f5f5f5' }} variant="outlined">{card}</Card>
    </Box>
  );
}
