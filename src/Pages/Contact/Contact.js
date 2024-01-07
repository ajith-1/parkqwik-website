import React,{useEffect} from 'react';
import MailIcon from '@mui/icons-material/Mail';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { BoxStyle } from '../../Components/Style/Style';
import Button from '@mui/material/Button';
import Expand from '../../Components/Style/Expand';
import { Question } from '../../Assests/Data';
import Download from '../../Components/Style/Download';
import { Phone } from '@mui/icons-material';


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
          height: '370px',
          mt:'63px',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        <Box textAlign={'center'} sx={{ mt: '88px' }}>
          <Typography variant='h4'>Get In Touch</Typography>
          <Typography sx={{ fontSize: '24px', color: '#606060', fontWeight: 500 }}>CHENNAI | BANGALORE | MUMBAI | DELHI</Typography>

          <Typography sx={{ fontSize: '18px', color: '#606060', fontWeight: 500, mt: '45px' }} >Need to get in touch with us?</Typography>
          <Button variant='text' startIcon={<MailIcon fontSize='38px' />} sx={{ color: '#1A9E75' }} onClick={(e) => window.location.href = 'mailto:hr@parkqwik.com'}>hr@parkqwik.com</Button> | <Button variant='text' startIcon={<Phone />} sx={{ color: '#1A9E75' }} >+91 842 842 88 33</Button>
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