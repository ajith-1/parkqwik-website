import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import './Style.css';


const CardBox = styled('Box')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '24px',
  bgcolor: '#ffff',
  borderRadius: '20px',
  width: '160px',
  height: '162px',
  p: 1,
  boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
  '@media(max-width:768px)': {
    flexShrink: 0,
    width: '130px',
    height: '132px',
  }
})

function Cards2({ item, color }) {
  return (
    <>
      <CardBox className='card'>
        <img src={item.image} alt='Product' width={'96px'} height={'54px'} />
        <Typography textAlign={'center'} sx={{ color: { color }, fontWeight: 500 }}>{item.name}</Typography>
      </CardBox>
    </>
  )
}

export default Cards2;