import React, { useEffect } from 'react';
import './Style.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { BoxStyle } from '../../Components/Style/Style';
import { Heading } from '../../Components/Style/Style';
import Expand from '../../Components/Style/Expand'
import { Question } from '../../Assests/Data';
import { Products } from '../../Assests/Data';
import Carousel from '../../Components/Style/Carousel';
import { styled } from '@mui/system';
import Form from '../../Components/Style/Form';
import Download from '../../Components/Style/Download';
import Container from '@mui/material/Container';

const Box1 = styled('Box')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
})


function Product() {

  useEffect(() => {
    window.scroll(0, 0);
  }, [])

  return (
    <>
      {/* --------------------hero banner------------- */}
      <BoxStyle
        sx={{
          backgroundImage: "url('/images/product-hero-banner.png')",
          height: '448px',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        <Box textAlign={'center'} color={'#ffff'} sx={{ mt: '88px' }}>
          <Typography variant='h4'>Your All-in-One Vehicle Companion</Typography>
          <Typography variant='body1' sx={{ maxWidth: '838px', fontSize: '18px' }}>Discover seamless services, from Parking, FASTag recharge, roadside assistance to
            vehicle insurance and simplify all bill payments in one convenient app.
            Empower your journey with ParkQwik, where every service you need is just a tap away!</Typography>
        </Box>
      </BoxStyle>

      {/* --------------------our product------------------- */}
      <BoxStyle sx={{ mt: '87px', flexDirection: 'column' }}>
          <Heading sx={{mb:'40px'}}>Our Products</Heading>
          <Carousel item={Products} color={'#202020'}/>
        </BoxStyle>

      {/*--------------------Park easy------------------------  */}
      <Container>

        <Grid container spacing={3} my={'60px'}>
          <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box maxWidth={'550px'} width={'100%'} height={'auto'}>
              <Typography variant='h3'> Parking is easy with us</Typography>
              <Typography variant='h6' my={2}>ParkQwik helps you to find, reserve, and pay for parkin
                spaces in a few taps. Say goodbye to endless searching
                and wasted time.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Stack direction={'row'}>
              <Box>
                <img src='/images/phone-front.png' className='phoneImg' width='100%' maxWidth='281px' height='auto'></img>
              </Box>
              <Box sx={{ mt: '-30px', ml: '-40px' }}>
                <img src='/images/phone-side.png' className='phoneImg2' width='100%' maxWidth='234px' height='auto'></img>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>


      <BoxStyle
        sx={{
          backgroundImage: "url('/images/product-hero-banner2.png')",
          minHeight: '596px', 
          my: 4,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box>
                <img src='/images/fastag-car.png' width={'100%'} height={'auto'} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box maxWidth={'550px'} width={'100%'} height={'auto'}>
                <Typography variant='h3'>Quick and Efficient Fastag Solutions</Typography>
                <Typography variant='h6' my={2}>Unlocking hassle-free payments at tolls, parking spots, and fuel stations. With seamless integration, enjoy swift transactions that enhance your journey. Elevate your travel experience with our all-in-one Fastag solution.</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </BoxStyle>


      <Container>
        <Grid container spacing={3} sx={{ flexWrap: 'wrap-reverse', my: '60px' }}>
          <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box maxWidth={'550px'} width={'100%'} height={'auto'}>
              <Typography variant='h3'>24/7 Roadside Rescue</Typography>
              <Typography variant='h6' my={2}>24/7 roadside assistance is just a call or app away. From fuel drains to flat tires, our dedicated team responds swiftly, reaching your location in less than 90 minutes. Drive with confidence, knowing we're always by your side!</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box>
              <img src='/images/towing.png' width={'100%'} height={'auto'} />
            </Box>
          </Grid>
        </Grid>

        {/* -----------------form----------------------- */}

        <Box1>
          <Form />
        </Box1>

        {/* --------------------Download------------------------ */}

        <Download />

        {/* ---------------------FAQ--------------------- */}

        <BoxStyle sx={{ my: '100px', }}>
          <Stack direction={'column'}>
            <Typography variant='h3' sx={{ mb: '10px', textAlign: 'center' }}>
              Frequently Asked Questions
            </Typography>
            <Expand data={Question} />
          </Stack>
        </BoxStyle>
      </Container>

    </>
  )
}

export default Product