import React from 'react';
import './Parking.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Phone } from '@mui/icons-material';
import { Container, Stack } from '@mui/material';
import { styled } from '@mui/system';



const StackStyle = styled('Box')({
  display:'flex',
  flexDirection: 'row',
  gap: '46px',
  '@media(max-width:1000px)': {
    flexDirection: 'column',
    gap: '10px',
  }
})

const Box1=styled('Box')({
  display:'flex',
  alignItems:'flex-start',
  justifyContent:'flex-start',
})

function Parking() {
  return (
    <>
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box maxWidth={'550px'} width={'100%'} height={'auto'}>
            <Typography variant='h3'>Revolutionize Your Parking Journey with Our Expertise</Typography>
            <Typography variant='h6' my={2}>Our team will assist you throughout the reservation process</Typography>
            <Button sx={{ bgcolor: '#1A9E75', color: '#ffff', px: 2, py: 1, width: '200px', borderRadius: '15px' }} startIcon={<Phone />}>+91 842 842 88 33</Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box>
            <img src='/images/wavy-bus.png' width={'350px'} height={'350px'} />
          </Box>
        </Grid>
      </Grid>

      </Container>
      
      <Box sx={{ mt: '117px' }}>
        <Typography variant='h3' textAlign={'center'}>We Offer Parking Services At</Typography>
      </Box>


      <Box sx={{ mt: '94px' }}>
      <Container>
        <Typography variant='h3' textAlign={'center'}>Parking Solutions</Typography>


        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box maxWidth={'550px'} width={'100%'} height={'auto'}>

              <Box className='Box'></Box>
              <Typography variant='h4' sx={{ px: 2, py: 1, borderRadius: '8px', bgcolor: '#F0FFFA', width: '290px', border: '2px dotted #F0FFFA' }}>Nearby Parking</Typography>

              <Typography variant='h6' my={2}>Discover nearby parking options with our hourly, weekly, daily, and monthly plans. No matter where you're headed, our team is here to assist you in finding the perfect parking spot near your location, whether it's at apartments, shops, malls, events, and more.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box>
              <img src='/images/wavy-bus.png' width={'350px'} height={'350px'} />
            </Box>
          </Grid>
        </Grid>


        <Grid container spacing={3} sx={{ flexWrap: 'wrap-reverse' }}>
          <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box>
              <img src='/images/wavy-bus.png' width={'350px'} height={'350px'} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box maxWidth={'550px'} width={'100%'} height={'auto'}>

              <Box className='Box'></Box>
              <Typography variant='h4' sx={{ px: 2, py: 1, borderRadius: '8px', bgcolor: '#F0FFFA', width: '290px', border: '2px dotted #F0FFFA' }}>Nearby Parking</Typography>

              <Typography variant='h6' my={2}>Discover nearby parking options with our hourly, weekly, daily, and monthly plans. No matter where you're headed, our team is here to assist you in finding the perfect parking spot near your location, whether it's at apartments, shops, malls, events, and more.</Typography>
            </Box>
          </Grid>
        </Grid>


        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box maxWidth={'550px'} width={'100%'} height={'auto'}>

              <Box className='Box'></Box>
              <Typography variant='h4' sx={{ px: 2, py: 1, borderRadius: '8px', bgcolor: '#F0FFFA', width: '290px' }}>Nearby Parking</Typography>

              <Typography variant='h6' my={2}>Discover nearby parking options with our hourly, weekly, daily, and monthly plans. No matter where you're headed, our team is here to assist you in finding the perfect parking spot near your location, whether it's at apartments, shops, malls, events, and more.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box>
              <img src='/images/wavy-bus.png' width={'350px'} height={'350px'} />
            </Box>
          </Grid>
        </Grid>
        </Container>
        {/* ---------------------------------------------------------------------------------- */}

        <Box sx={{ width: '100%', minHeight: '596px', height: 'auto', bgcolor: '#F0FFFA', mt: 2, py:4 }}>
          <Container>
            <Typography variant='h3' mt='3' textAlign={'center'}>Our Product Perks</Typography>

            <Grid container spacing={4} mt={'36px'}>
              <Grid item sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
               <StackStyle>
                  <Box1 >
                    <Typography variant='h4' sx={{ color: '#1B9E76', }}>01</Typography>
                  </Box1>
                  <Stack direction='row' gap='10px' mt={'47px'} >
                    <img src='/images/reservation.svg' />
                    <Stack direction='column'>
                      <Typography sx={{ fontSize: '30px', color: '#1B9E76' }}>Faster Booking</Typography>
                      <Typography variant='h6' width={'236px'}>You can book parking space in just a few steps</Typography>
                    </Stack>
                  </Stack>
                </StackStyle>
              </Grid>



              <Grid item sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
               <StackStyle>
                  <Box1 >
                    <Typography variant='h4' sx={{ color: '#1B9E76', }}>02</Typography>
                  </Box1>
                  <Stack direction='row' gap='10px' mt={'47px'}>
                    <img src='/images/reservation.svg' />
                    <Stack direction='column'>
                      <Typography sx={{ fontSize: '30px', color: '#1B9E76' }}>Faster Booking</Typography>
                      <Typography variant='h6' width={'236px'}>You can book parking space in just a few steps</Typography>
                    </Stack>
                  </Stack>
                </StackStyle>
              </Grid>




              <Grid item sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
               <StackStyle>
                  <Box1 >
                    <Typography variant='h4' sx={{ color: '#1B9E76', }}>03</Typography>
                  </Box1>
                  <Stack direction='row' gap='10px' mt={'47px'}>
                    <img src='/images/reservation.svg' />
                    <Stack direction='column'>
                      <Typography sx={{ fontSize: '30px', color: '#1B9E76' }}>Faster Booking</Typography>
                      <Typography variant='h6' width={'236px'}>You can book parking space in just a few steps</Typography>
                    </Stack>
                  </Stack>
                </StackStyle>
              </Grid>



              <Grid item sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
               <StackStyle>
                  <Box1 >
                    <Typography variant='h4' sx={{ color: '#1B9E76', }}>04</Typography>
                  </Box1>
                  <Stack direction='row' gap='10px' mt={'47px'}>
                    <img src='/images/reservation.svg' />
                    <Stack direction='column'>
                      <Typography sx={{ fontSize: '30px', color: '#1B9E76' }}>Faster Booking</Typography>
                      <Typography variant='h6' width={'236px'}>You can book parking space in just a few steps</Typography>
                    </Stack>
                  </Stack>
                </StackStyle>
              </Grid>


              

             

            </Grid>
          </Container>

        </Box>


      </Box>
    </>
  )
}

export default Parking;