import React from 'react';
import { BoxStyle } from '../../Components/Style/BoxStyle';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Media } from '../../Assests/Data';
import { Question } from '../../Assests/Data';
import Expand from '../../Components/Style/Expand';


function About() {
  return (
    <>
      {/* --------------------hero banner------------- */}
      <BoxStyle sx={{backgroundImage: "url('/images/hero-image.png')", height: '448px' }}>
        <Box textAlign={'center'} color={'#ffff'} sx={{ mt: '88px' }}>
          <Typography variant='h4'>ParkQwik is India&apos;s No1 General & EV Parking Marketplace</Typography>
          <Typography variant='p'>We continuously strive to offer our customers the finest parking and car services solutions</Typography>
        </Box>
      </BoxStyle>

      {/* -------------------about----------------- */}
      <BoxStyle sx={{ mt: '69px', flexDirection: 'column' }}>
        <Typography variant='h3' >About ParkQwik</Typography>
        <Typography variant='h6' textAlign={'center'} sx={{ mt: '27px', maxWidth: '671px' }}>Parkqwik connects numerous Renters across India and Singapore who are seeking parking spaces with Hosts who have available driveways, garages, or parking spots to share.</Typography>
        <Typography variant='h6' textAlign={'center'} sx={{ mt: '29px', maxWidth: '731px' }}>Through our intuitive mobile app platform, we effortlessly facilitate connections between vehicle owners and parking lot operators, guaranteeing a smooth and hassle-free experience for everyone involved.</Typography>
      </BoxStyle>

      {/* -----------------customer----------------- */}
      <BoxStyle sx={{ mt: '75px', flexDirection: 'column' }} >
        <Typography variant='h3'>What Our Customers Say</Typography>
      </BoxStyle>

      {/* -----------------media----------------- */}
      <BoxStyle sx={{ mt: '87px', flexDirection: 'column' }} >
        <Typography variant='h3'>Media Mentions</Typography>
        <Box sx={{ alignSelf: 'flex-start', ml: '10%', mt: '23px' }}>
          <img src='/images/quotes.svg' width={'60px'} height={'60px'} />
        </Box>
        <BoxStyle sx={{ flexWrap: 'wrap', mt: 1 }}>
          {Media.map((item) => {
            return (
              <BoxStyle
                key={item.id}
                sx={{ m: 2, width: '324px', height: '340px', p: 1, borderRadius: '10px', flexDirection: 'column', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px', }}>
                <Box sx={{ ml: '70%' }}>
                  <img src={item.image} />
                </Box>
                <Typography variant='h6' sx={{ mt: '14px' }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: '16px', mt: '10px' }}>
                  {item.news}
                </Typography>
                <Typography sx={{ fontSize: '14px', mt: '10px', ml: '130px' }}>
                  {item.date}
                </Typography>
              </BoxStyle>
            )
          })}
        </BoxStyle>
      </BoxStyle>
      {/* -----------------------happy customer-------------- */}

      <BoxStyle sx={{ mt: '100px', flexDirection: 'column' }}>
        <Typography variant='h3'>Our Happy Customers</Typography>
        <BoxStyle sx={{ mt: '64px' }}>
          <Typography variant='h3'> SLIDER</Typography>
        </BoxStyle>

      </BoxStyle>
      {/* --------------------Download------------------------ */}
      <BoxStyle sx={{ flexWrap: 'wrap', mt: '150px', gap: '100px' }}>
        <Stack direction={'column'}>
          <Typography variant='h4' sx={{mb: '10px', fontWeight: '500' }}>
            Download ParkQwik
          </Typography>
          <Typography variant='h6' sx={{ maxWidth: '480px', mb: '40px',p:1}}>
            By downloading ParkQwik, you gain access to a world of seamless parking experiences and car services right at your fingertips.
          </Typography>

          <Stack direction={'row'} gap={'20px'} p={1}>
            <BoxStyle sx={{ maxWidth: '192px', height: '68px', borderRadius: '10px', bgcolor: '#292929', color: '#ffff' }}>
              <img src='/images/playstore-logo.svg' />
              <Stack direction={'column'}>
                <Typography variant='p' sx={{ fontSize: '12px' }}>Get it on</Typography>
                <Typography variant='p' sx={{ fontSize: '18px' }}>Google Play</Typography>
              </Stack>
            </BoxStyle>
            <BoxStyle sx={{ maxWidth: '192px', height: '68px', borderRadius: '10px', bgcolor: '#292929', color: '#ffff' }}>
              <img src='/images/apple-logo.svg' />
              <Stack direction={'column'}>
                <Typography variant='p' sx={{ fontSize: '12px' }}>Download on the</Typography>
                <Typography variant='p' sx={{ fontSize: '18px' }}>App Store</Typography>
              </Stack>
            </BoxStyle>
          </Stack>
        </Stack>
        <Stack direction={'row'} p={1} >
          <Box>
            <img src='/images/app-front1.png' width='100%' maxWidth='312px' height='auto' />
          </Box>
          <Box sx={{ mt: '-36px', ml: '-40px' }}>
            <img src='/images/app-front2.png' width='100%' maxWidth='317px' height='auto' />
          </Box>
        </Stack>
      </BoxStyle>

      {/* ---------------------FAQ--------------------- */}

      <BoxStyle sx={{ my: '100px', }}>
        <Stack direction={'column'}>
          <Typography variant='h3' sx={{ mb: '10px', textAlign: 'center' }}>
            Frequently Asked Questions
          </Typography>
          <Expand data={Question} />
        </Stack>
      </BoxStyle>
    </>
  )
}

export default About