import React from 'react';
import { BoxStyle } from '../../Components/Style/BoxStyle';
import { Heading } from '../../Components/Style/BoxStyle';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Expand from '../../Components/Style/Expand'
import { Question } from '../../Assests/Data';
import './Home.css';
import { Container } from '@mui/material';


function Home() {


  return (
    <>
    <Container>
      {/* hero section */} 
      <BoxStyle sx={{ mt: '130px', gap: '72px' }}>
        <BoxStyle>
          <Stack direction={'column'}>
            <Typography variant='h3' component={'div'} sx={{ mb:'10px',p:1,maxWidth:'550px',width:'100%'}}>
              Simplify Your Car Experience with ParkQwik
            </Typography>
            <Typography variant='h6' component={'div'} p={2}>The Complete Parking App and Car Services Solution</Typography>
          </Stack>
        </BoxStyle>
        <BoxStyle>
          <img src='/images/wavy-bus.png' width='100%' maxWidth='382px' height='auto'></img>
        </BoxStyle>
      </BoxStyle>
      {/* our products */}
      <BoxStyle sx={{ mt: '87px' }}>
        <Heading >Our Products</Heading>

      </BoxStyle>

      {/*--------------------Park easy------------------------  */}

      <BoxStyle sx={{ mt: '114px', gap: '70px' }}>
        <Stack direction={'column'}>
          <Heading sx={{ mb: '10px',}}>
            Parking is easy with us
          </Heading>

          <Typography variant='h6' sx={{ maxWidth: '480px' }}>
            ParkQwik helps you to find, reserve, and pay for parkin
            spaces in a few taps. Say goodbye to endless searching
            and wasted time.
          </Typography>
        </Stack>
        <Stack direction={'row'}>
          <Box>
            <img src='/images/phone-front.png' className='phoneImg' width='100%' maxWidth='281px' height='auto'></img>
          </Box>
          <Box sx={{ mt:'-30px',ml:'-40px'}}>
            <img src='/images/phone-side.png' className='phoneImg2' width='100%' maxWidth='234px' height='auto'></img>
          </Box>
        </Stack>
      </BoxStyle>
      {/* ---------------------------How it works----------------------------------- */}


      <BoxStyle sx={{ mt: '93px', flexDirection: 'column' }}>
        <Heading>How it works</Heading>
        <Stack direction={'colomn'} sx={{ mt: '59px', gap: '36px', alignItem: 'center', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
          <BoxStyle sx={{ flexDirection: 'column' }}>
            <img src='/images/location.svg' />
            <Typography variant='h6' maxWidth={'296px'} sx={{ mt: 3, textAlign: 'center',width:'100%' }}>You’ll receive directions to the space and information on how to access</Typography>
          </BoxStyle>
          <BoxStyle>
          <svg xmlns="http://www.w3.org/2000/svg" maxWidth="60" height="24" viewBox="0 0 60 24" fill="none" >
              <path id="Line 34" d="M59.0607 13.0607C59.6465 12.4749 59.6465 11.5251 59.0607 10.9393L49.5147 1.3934C48.9289 0.807611 47.9792 0.807611 47.3934 1.3934C46.8076 1.97919 46.8076 2.92893 47.3934 3.51472L55.8787 12L47.3934 20.4853C46.8076 21.0711 46.8076 22.0208 47.3934 22.6066C47.9792 23.1924 48.9289 23.1924 49.5147 22.6066L59.0607 13.0607ZM2.14815 13.5C2.97658 13.5 3.64815 12.8284 3.64815 12C3.64815 11.1716 2.97658 10.5 2.14815 10.5V13.5ZM7.51852 10.5C6.69009 10.5 6.01852 11.1716 6.01852 12C6.01852 12.8284 6.69009 13.5 7.51852 13.5V10.5ZM11.8148 13.5C12.6432 13.5 13.3148 12.8284 13.3148 12C13.3148 11.1716 12.6432 10.5 11.8148 10.5V13.5ZM17.1852 10.5C16.3568 10.5 15.6852 11.1716 15.6852 12C15.6852 12.8284 16.3568 13.5 17.1852 13.5V10.5ZM21.4815 13.5C22.3099 13.5 22.9815 12.8284 22.9815 12C22.9815 11.1716 22.3099 10.5 21.4815 10.5V13.5ZM26.8519 10.5C26.0234 10.5 25.3519 11.1716 25.3519 12C25.3519 12.8284 26.0234 13.5 26.8519 13.5V10.5ZM31.1482 13.5C31.9766 13.5 32.6482 12.8284 32.6482 12C32.6482 11.1716 31.9766 10.5 31.1482 10.5V13.5ZM36.5185 10.5C35.6901 10.5 35.0185 11.1716 35.0185 12C35.0185 12.8284 35.6901 13.5 36.5185 13.5V10.5ZM40.8148 13.5C41.6432 13.5 42.3148 12.8284 42.3148 12C42.3148 11.1716 41.6432 10.5 40.8148 10.5V13.5ZM46.1852 10.5C45.3568 10.5 44.6852 11.1716 44.6852 12C44.6852 12.8284 45.3568 13.5 46.1852 13.5V10.5ZM50.4815 13.5C51.3099 13.5 51.9815 12.8284 51.9815 12C51.9815 11.1716 51.3099 10.5 50.4815 10.5V13.5ZM55.8519 10.5C55.0234 10.5 54.3519 11.1716 54.3519 12C54.3519 12.8284 55.0234 13.5 55.8519 13.5V10.5ZM0 13.5H2.14815V10.5H0L0 13.5ZM7.51852 13.5H11.8148V10.5H7.51852V13.5ZM17.1852 13.5H21.4815V10.5H17.1852V13.5ZM26.8519 13.5H31.1482V10.5H26.8519V13.5ZM36.5185 13.5H40.8148V10.5H36.5185V13.5ZM46.1852 13.5H50.4815V10.5H46.1852V13.5ZM55.8519 13.5H58V10.5H55.8519V13.5Z" fill="#8A8A8A" />
            </svg>
          </BoxStyle>
          <BoxStyle sx={{ flexDirection: 'column' }}>
            <img src='/images/notification.svg' />
            <Typography variant='h6' maxWidth={'296px'} sx={{ mt: 3, textAlign: 'center' }}>The space owner/car park is notified of your booking</Typography>
          </BoxStyle>
          <BoxStyle>
            <svg xmlns="http://www.w3.org/2000/svg" maxWidth="60" height="24" viewBox="0 0 60 24" fill="none" >
              <path id="Line 34" d="M59.0607 13.0607C59.6465 12.4749 59.6465 11.5251 59.0607 10.9393L49.5147 1.3934C48.9289 0.807611 47.9792 0.807611 47.3934 1.3934C46.8076 1.97919 46.8076 2.92893 47.3934 3.51472L55.8787 12L47.3934 20.4853C46.8076 21.0711 46.8076 22.0208 47.3934 22.6066C47.9792 23.1924 48.9289 23.1924 49.5147 22.6066L59.0607 13.0607ZM2.14815 13.5C2.97658 13.5 3.64815 12.8284 3.64815 12C3.64815 11.1716 2.97658 10.5 2.14815 10.5V13.5ZM7.51852 10.5C6.69009 10.5 6.01852 11.1716 6.01852 12C6.01852 12.8284 6.69009 13.5 7.51852 13.5V10.5ZM11.8148 13.5C12.6432 13.5 13.3148 12.8284 13.3148 12C13.3148 11.1716 12.6432 10.5 11.8148 10.5V13.5ZM17.1852 10.5C16.3568 10.5 15.6852 11.1716 15.6852 12C15.6852 12.8284 16.3568 13.5 17.1852 13.5V10.5ZM21.4815 13.5C22.3099 13.5 22.9815 12.8284 22.9815 12C22.9815 11.1716 22.3099 10.5 21.4815 10.5V13.5ZM26.8519 10.5C26.0234 10.5 25.3519 11.1716 25.3519 12C25.3519 12.8284 26.0234 13.5 26.8519 13.5V10.5ZM31.1482 13.5C31.9766 13.5 32.6482 12.8284 32.6482 12C32.6482 11.1716 31.9766 10.5 31.1482 10.5V13.5ZM36.5185 10.5C35.6901 10.5 35.0185 11.1716 35.0185 12C35.0185 12.8284 35.6901 13.5 36.5185 13.5V10.5ZM40.8148 13.5C41.6432 13.5 42.3148 12.8284 42.3148 12C42.3148 11.1716 41.6432 10.5 40.8148 10.5V13.5ZM46.1852 10.5C45.3568 10.5 44.6852 11.1716 44.6852 12C44.6852 12.8284 45.3568 13.5 46.1852 13.5V10.5ZM50.4815 13.5C51.3099 13.5 51.9815 12.8284 51.9815 12C51.9815 11.1716 51.3099 10.5 50.4815 10.5V13.5ZM55.8519 10.5C55.0234 10.5 54.3519 11.1716 54.3519 12C54.3519 12.8284 55.0234 13.5 55.8519 13.5V10.5ZM0 13.5H2.14815V10.5H0L0 13.5ZM7.51852 13.5H11.8148V10.5H7.51852V13.5ZM17.1852 13.5H21.4815V10.5H17.1852V13.5ZM26.8519 13.5H31.1482V10.5H26.8519V13.5ZM36.5185 13.5H40.8148V10.5H36.5185V13.5ZM46.1852 13.5H50.4815V10.5H46.1852V13.5ZM55.8519 13.5H58V10.5H55.8519V13.5Z" fill="#8A8A8A" />
            </svg>
          </BoxStyle>
          <BoxStyle sx={{ flexDirection: 'column' }}>
            <img src='/images/car-garage.svg' />
            <Typography variant='h6' maxWidth={'296px'} sx={{ mt: 3, textAlign: 'center',width:'100%' }}>Just turn up, park your vehicle and get on with your day!</Typography>
          </BoxStyle>
        </Stack>
      </BoxStyle>

      {/*------------------------search-----------------------------  */}

      <BoxStyle sx={{ mt: '94px', gap: '100px' }}>
        <Stack direction={'column'} >
          <Heading sx={{ mb: '10px', maxWidth: '448px',width:'100%'}}>
            Find and Reserve Parking Anywhere
          </Heading>
          <Typography variant='h6' sx={{ maxWidth: '414px', mb: '10px',width:'100%' }}>Easily find nearby parking spaces by entering your address or selecting your location</Typography>
          <Stack direction={'row'} sx={{ mt: 3 }} gap={'20px'}>
            <TextField sx={{ maxWidth: '384px', height: '75px' }} id="outlined-search" label="Enter your location" type="search" />
            {/* <Button variant="contained" sx={{ bgcolor: '#1A9E75', maxWidth: '142px', height: '55px' }} startIcon={<SearchIcon fontSize='38px' />}>
              <Typography variant='p' sx={{ fontSize: '20px' }}>Search</Typography>
            </Button> */}
          </Stack>
        </Stack>
        <BoxStyle sx={{ justifyContent: 'flex-end' }}>
          <img src='/images/map.svg' width='100%' maxWidth='500' height='auto'></img>
        </BoxStyle>
      </BoxStyle>
      {/* -----------------------happy customer-------------- */}

      <BoxStyle sx={{ mt: '100px', flexDirection: 'column' }}>
        <Heading>Our Happy Customers</Heading>
        <BoxStyle sx={{ mt: '64px' }}>
          <Heading> SLIDER</Heading>
        </BoxStyle>
      </BoxStyle>

      {/* --------------------Download------------------------ */}
      <BoxStyle sx={{ mt: '150px', gap: '100px' }}>
        <Stack direction={'column'}>
          <Typography sx={{ fontSize: '28px', mb: '10px', fontWeight: '500' }}>
            Download ParkQwik
          </Typography>
          <Typography variant='p' sx={{ maxWidth: '480px', mb: '40px',width:'100%' }}>
            By downloading ParkQwik, you gain access to a world of seamless parking experiences and car services right at your fingertips.
          </Typography>

          <Stack direction={'row'} gap={'20px'}>
            <Box  sx={{ maxWidth: '192px', height: '68px',display:'flex', borderRadius: '10px', bgcolor: '#292929', color: '#ffff' }}>
              <img src='/images/playstore-logo.svg'/>
              <Stack direction={'column'}>
                <Typography variant='p' sx={{ fontSize: '12px' }}>Get it on</Typography>
                <Typography variant='p' sx={{ fontSize: '18px' }}>Google Play</Typography>
              </Stack>
            </Box>
            <Box sx={{ maxWidth: '192px', height: '68px',display:'flex', borderRadius: '10px', bgcolor: '#292929', color: '#ffff' }}>
              <img src='/images/apple-logo.svg' />
              <Stack direction={'column'}>
                <Typography variant='p' sx={{ fontSize: '12px' }}>Download on the</Typography>
                <Typography variant='p' sx={{ fontSize: '18px' }}>App Store</Typography>
              </Stack>
            </Box>
          </Stack>
        </Stack>
        <Stack direction={'row'}>
          <Box>
            <img src='/images/app-front1.png' width='100%' maxWidth='312px' height='auto' />
          </Box>
          <Box sx={{ mt: '-36px', ml: '-50px' }}>
            <img src='/images/app-front2.png' width='100%' maxWidth='317px' height='auto' />
          </Box>
        </Stack>
      </BoxStyle>

      {/* ---------------------FAQ--------------------- */}

      <BoxStyle sx={{ my: '100px', }}>
        <Stack direction={'column'}>
        <Heading sx={{ mb: '10px',textAlign:'center'}}>
            Frequently Asked Questions
          </Heading>
          <Expand data={Question} />
        </Stack>
      </BoxStyle>
      </Container>
    </>
  )
}

export default Home