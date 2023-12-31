import React from 'react';
import { BoxStyle } from './Style';
import { Box, Typography } from '@mui/material';
import StarRating from '../StartRating/StarRating';
import './Style.css';


function Cards({ item }) {
  return (
    <>
      <BoxStyle className='card' 
      sx={{ m: '50px', width: '256px',height:'384px',borderRadius:'8px',backgroundImage:`url('${item.image}')`,
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat'
      }}>
        <BoxStyle sx={{ bgcolor: '#ffff', width:'234px', height:'205px', borderRadius:'8px', mt:'160px' }}>
          <Box sx={{ width: '200px' }}>
            <Typography sx={{ fontSize: '14px', mt: '10px', fontWeight: 500 }}>
              {item.title}
            </Typography>
            <Typography sx={{ fontSize: '14px', mt: '10px' }}>
              {item.feeds}
            </Typography>
            <Box sx={{  ml: '65%' }}>
              <StarRating value={item.rating} />
            </Box>
            <Typography sx={{ fontSize: '12px', ml: '70%', fontWeight: 500 }}>
              {item.name}
            </Typography>
          </Box>
        </BoxStyle>
      </BoxStyle>
    </>
  )
}

export default Cards