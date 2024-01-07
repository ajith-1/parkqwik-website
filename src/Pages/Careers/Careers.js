import React,{useEffect} from 'react';
import MailIcon from '@mui/icons-material/Mail';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, Stack } from '@mui/material';
import { BoxStyle } from '../../Components/Style/Style';
import Button from '@mui/material/Button';
import Expand from '../../Components/Style/Expand';
import { Question } from '../../Assests/Data';
import Download from '../../Components/Style/Download';

function Careers() {

  useEffect(()=>{
    window.scroll(0,0);
  },[])

  return (
    <>
      {/* --------------------hero banner------------- */}
      <BoxStyle
        sx={{
          backgroundImage: "url('/images/career-hero-banner.png')",
          height: '448px',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          mt:'63px',
        }}>
        <Box textAlign={'center'} sx={{ mt: '88px' }}>
          <Typography variant='h4'>Careers at ParkQwik</Typography>
          <Typography sx={{ fontSize: '24px', color: '#606060', fontWeight: 500 }}>CHENNAI | BANGALORE | MUMBAI | DELHI</Typography>
          <Typography variant='body1' sx={{ maxWidth: '838px', fontSize: '18px', fontWeight: 500 }}>Discover seamless services, from Parking, FASTag recharge, roadside assistance to
            vehicle insurance and simplify all bill payments in one convenient app.
            Empower your journey with ParkQwik, where every service you need is just a tap away!</Typography>
          <Typography fontWeight={500}>Send your resumes to <Button variant='text' startIcon={<MailIcon fontSize='38px' />} sx={{ color: '#1A9E75', '&:hover': { textDecoration: 'underline' } }} onClick={(e) => window.location.href = 'mailto:hr@parkqwik.com'}>hr@parkqwik.com</Button></Typography>
        </Box>
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

export default Careers;