import React,{useEffect} from 'react'
import './Fastag.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, Stack } from '@mui/material';
import { BoxStyle } from '../../Components/Style/Style';
import Expand from '../../Components/Style/Expand';
import { Question } from '../../Assests/Data';
import { FastagPerks } from '../../Assests/Data';
import OurProduct from '../../Components/Style/OurProduct';
import Download from '../../Components/Style/Download';



function Fastag() {

  useEffect(()=>{
    window.scroll(0,0);
  },[])

  return (
    <>

      {/* --------------------hero banner------------- */}
      <BoxStyle sx={{
        backgroundImage: "url('/images/fastag-hero-banner.png')",
        height: '448px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <Box textAlign={'center'} color={'#ffff'} sx={{ mt: '88px' }}>
          <Typography variant='h4'>A Smarter Way to Pay Tolls</Typography>
          <Typography variant='body1' sx={{ maxWidth: '838px', fontSize: '18px' }}>Our multifunctional RFID tag streamlines your car's windshield by serving various purposes. It facilitates smooth, interruption-free passage at NHAI Toll plazas, HPCL petrol pumps, society and corporate gates, as well as numerous parking facilities nationwide.</Typography>
        </Box>
      </BoxStyle>



      <Box sx={{ mt: '45px', p: 2 }}>
        <Container>
          <Typography variant='h3' textAlign={'center'} mb={3}>How to Use Parkqwik FASTag?</Typography>


          <Grid container spacing={3} mt={8}>
            <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box maxWidth={'550px'} width={'100%'} height={'auto'}>

                <Box className='Box'></Box>
                <Typography variant='h4' sx={{ px: 2, py: 1, borderRadius: '8px', bgcolor: '#F0FFFA', width: '290px', border: '2px dotted #F0FFFA' }}>Buy FASTag</Typography>

                <Typography variant='h6' my={2}>Simply download the ParkQwik app, navigate to the "Buy FASTag" option on the home page, provide your vehicle details and location, and complete the payment process. Your FASTag
                  will be on its way to your designated location.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box>
                <img src='/images/mobile.png' width={'100%'} height={'auto'} />
              </Box>
            </Grid>
          </Grid>


          <Grid container spacing={3} sx={{ flexWrap: 'wrap-reverse', mt: 8 }}>
            <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box>
                <img src='/images/fastag-card.png' width={'100%'} height={'auto'} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box maxWidth={'550px'} width={'100%'} height={'auto'}>
                <Box sx={{ me: 0 }}>
                  <Box className='Box'></Box>
                  <Typography sx={{ fontSize: '30px', fontWeight: 500, px: 2, py: 1, borderRadius: '8px', bgcolor: '#F0FFFA', width: '290px', border: '2px dotted #F0FFFA' }}>Activate FASTag</Typography>
                </Box>
                <Typography variant='h6' my={2}>The FASTag activation process is incredibly simple! Just scan the FASTag's barcode, enter your vehicle information, and upload your RC Document.
                  Your FASTag is verified successfully and good to go!</Typography>
              </Box>
            </Grid>
          </Grid>


          <Grid container spacing={3} mt={8}>
            <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box maxWidth={'550px'} width={'100%'} height={'auto'}>

                <Box className='Box'></Box>
                <Typography sx={{ fontSize: '28px', fontWeight: 500, px: 2, py: 1, borderRadius: '8px', bgcolor: '#F0FFFA', width: '290px' }}>Recharge FASTag</Typography>

                <Typography variant='h6' my={2}>Choose your FASTag bank, enter the amount you wish to recharge your FASTag with, and complete the payment. Now, you can affix it to your car's windshield for hassle-free toll payments!</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box>
                <img src='/images/toll.png' width={'100%'} height={'auto'} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* ---------------------------------Product perks------------------------------------ */}

      <OurProduct data={FastagPerks} />

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

export default Fastag;