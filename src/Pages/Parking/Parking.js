import React,{useEffect} from 'react';
import './Parking.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Phone } from '@mui/icons-material';
import { Container, Stack } from '@mui/material';
import { ProductPerks } from '../../Assests/Data';
import { ParkingService } from '../../Assests/Data';
import Carousel from '../../Components/Style/Carousel';
import OurProduct from '../../Components/Style/OurProduct';
import Download from '../../Components/Style/Download';
import { Question } from '../../Assests/Data';
import Expand from '../../Components/Style/Expand';
import { BoxStyle, Heading } from '../../Components/Style/Style';
import FeedCarousel from '../../Components/Style/FeedCarousel';



function Parking() {

  useEffect(()=>{
    window.scroll(0,0);
  },[])

  return (
    <>
      <Container>
        <Grid container spacing={3} mt='75px'>
          <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box maxWidth={'550px'} width={'100%'} height={'auto'}>
              <Typography variant='h3'>Revolutionize Your Parking Journey with Our Expertise</Typography>
              <Typography variant='h6' my={2}>Our team will assist you throughout the reservation process</Typography>
              <Button 
              disableElevation 
              variant="contained" 
              color='success'
              sx={{color: '#ffff', px: 2, py: 1, width: '200px', borderRadius: '15px' }} 
              startIcon={<Phone />}>
              +91 842 842 88 33
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box>
              <img src='/images/car-parking.svg' alt='image' width={'100%'} height={'auto'}/>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* -----------------------parking services----------------------- */}
      <BoxStyle sx={{ mt: '87px', flexDirection: 'column' }}>
          <Heading sx={{mb:'40px'}}>Our Products</Heading>
          <Carousel item={ParkingService} color={'#1A9E75'}/>
        </BoxStyle>



      <Box sx={{ mt: '94px',p:1}}>
        <Container>
          <Typography variant='h3' textAlign={'center'} mb={5}>Parking Solutions</Typography>


          <Grid container spacing={3} mt={4}>
            <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box maxWidth={'550px'} width={'100%'} height={'auto'}>

                <Box className='Box'></Box>
                <Typography variant='h4' sx={{ px: 2, py: 1, borderRadius: '8px', bgcolor: '#F0FFFA', width: '290px', border: '2px dotted #F0FFFA' }}>Nearby Parking</Typography>

                <Typography variant='h6' my={2}>Discover nearby parking options with our hourly, weekly, daily, and monthly plans. No matter where you're headed, our team is here to assist you in finding the perfect parking spot near your location, whether it's at apartments, shops, malls, events, and more.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box>
                <img src='/images/car-location.png' alt='image' width={'100%'} height={'auto'} />
              </Box>
            </Grid>
          </Grid>


          <Grid container spacing={3} sx={{ flexWrap: 'wrap-reverse',mt:4 }}>
            <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box>
                <img src='/images/car-ev-charge.png' alt='image' width={'100%'} height={'auto'} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box maxWidth={'550px'} width={'100%'} height={'auto'}>

                <Box className='Box'></Box>
                <Typography variant='h4' sx={{ px: 2, py: 1, borderRadius: '8px', bgcolor: '#F0FFFA', width: '290px', border: '2px dotted #F0FFFA' }}>EV Parking</Typography>

                <Typography variant='h6' my={2}>We provide dedicated spaces for EV parking where you can park, charge, and drive away, and repeat the
                  same until your subscription ends. We offer hourly, daily,weekly, and monthly plans with enhanced security</Typography>
              </Box>
            </Grid>
          </Grid>


          <Grid container spacing={3} mt={4}>
            <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box maxWidth={'550px'} width={'100%'} height={'auto'}>

                <Box className='Box'></Box>
                <Typography variant='h4' sx={{ px: 2, py: 1, borderRadius: '8px', bgcolor: '#F0FFFA', width: '290px' }}>Valet Parking</Typography>

                <Typography variant='h6' my={2}>Elevate your parking experience with our Valet service. Whether you require parking for a brief visit or an extended stay, reserve your spot in advance and savor a smooth, contactless parking experience</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box>
                <img src='/images/car-valet-parking.png' alt='image' width={'100%'} height={'auto'} />
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* ---------------------------------Product perks------------------------------------ */}
       <OurProduct data={ProductPerks}/>
       {/* -------------------happy customer------------------------------ */}
       <BoxStyle sx={{ mt: '100px', flexDirection: 'column' }}>
        <Heading>Our Happy Customers</Heading>
        <FeedCarousel />
      </BoxStyle>
       {/* --------------------------Download------------------------ */}

       <Download/>
        {/* ---------------------FAQ--------------------- */}

        <BoxStyle sx={{ my: '100px', }}>
          <Stack direction={'column'}>
            <Heading sx={{ mb: '10px', textAlign: 'center' }}>
              Frequently Asked Questions
            </Heading>
            <Expand data={Question} />
          </Stack>
        </BoxStyle>
      </Box>
    </>
  )
}

export default Parking;