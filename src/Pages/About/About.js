import React, { useEffect } from 'react';
import { BoxStyle, Heading } from '../../Components/Style/Style';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Media } from '../../Assests/Data';
import { Question } from '../../Assests/Data';
import Expand from '../../Components/Style/Expand';
import Download from '../../Components/Style/Download';
import FeedCarousel from '../../Components/Style/FeedCarousel';
import Video from '../../Components/Video/Video';
import './About.css';


function About() {

  useEffect(()=>{
    window.scroll(0,0);
  },[])

  return (
    <>
      {/* --------------------hero banner------------- */}
      <BoxStyle
        sx={{
          backgroundImage: "url('/images/hero-image.png')",
          height: '448px',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        <Box textAlign={'center'} color={'#ffff'} sx={{ mt: '-98px' }}>
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
        <Typography variant='h3' textAlign={'center'}>What Our Customers Say</Typography>
        <BoxStyle sx={{
          backgroundImage: "url('/images/parkqwik.png')",
          p: 2,
          height: '323px',
          width: '95%',
          // witdh:'100%', 
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          mt: 6,
        }}>
          <Video className='position' />
        </BoxStyle>
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
        <Heading>Our Happy Customers</Heading>
        <FeedCarousel />
      </BoxStyle>
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
    </>
  )
}

export default About