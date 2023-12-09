import React from 'react';
import Grid from '@mui/material/Grid';
import { BoxStyle } from '../Style/BoxStyle';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { styled } from '@mui/system';
import { Container } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CopyrightIcon from '@mui/icons-material/Copyright';


const Box2 = styled('Box')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
})

const QuickLink = ['About Us', 'Blogs', 'Newsletters', 'Help & Support', 'Careers'];
const Products = ['Fastag Services', 'Nearby Parking', 'EV Parking', 'Rentout Helmet', 'Doorstep Car Wash', 'Road Assistance', 'Car Insurance', 'Shop'];


function Footer() {
  return (
    <BoxStyle sx={{ bgcolor: '#1A9E75', minHeight: '450px', height: 'auto', color: '#ffff', }}>
      <Container>
        <Grid container spacing={5} alignItems={'flex-start'} justifyContent={'center'} sx={{mt:2}}>
          <Grid item xs={12} sm={6} md={3} >
            <Stack direction={'column'}>
              <Stack direction={'row'}>
                <img src='/images/logo-2.svg' />
                <img src='/images/name-logo-2.svg' />
              </Stack>
              <Typography sx={{ fontSize: '16px', mt: '19px', width: '220px', fontWeight: 500 }}>The Complete Parking App and Car Services Solution</Typography>
              <Typography sx={{ fontSize: '20px', mt: '15px', fontWeight: 700 }}>Follow us</Typography>
              <Stack direction={'row'} gap={'10px'}>
                <FacebookIcon sx={{ fontSize: '28px', }} />
                <TwitterIcon sx={{ fontSize: '28px', }} />
                <InstagramIcon sx={{ fontSize: '28px', }} />
                <LinkedInIcon sx={{ fontSize: '28px', }} />
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            {/* ------------Quick link--------- */}
            <Stack direction={'column'}>
              <Typography sx={{ fontSize: '20px', fontWeight: 700, mb: '19px' }}>Quick Links</Typography>
              {QuickLink.map((item) => {
                return (
                  <Typography sx={{ fontSize: '16px', mb: '6px', fontWeight: 500 }}>{item}</Typography>
                )
              })}

            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            {/* ---------------Product----------- */}
            <Stack direction={'column'}>
              <Typography sx={{ fontSize: '20px', fontWeight: 700, mb: '19px' }}>Product</Typography>
              {Products.map((item) => {
                return (
                  <Typography sx={{ fontSize: '16px', mb: '6px', fontWeight: 500 }}>{item}</Typography>
                )
              })}

            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Stack direction={'column'}>
              <Typography sx={{ fontSize: '20px', fontWeight: 700, mb: '19px' }}>Reach Us</Typography>
              <Box2>
                <MailIcon sx={{ fontSize: '28px' }} />
                <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>info@parkqwik.com</Typography>
              </Box2>
              <Box2 sx={{ mt: '10px' }}>
                <PhoneIcon sx={{ fontSize: '28px' }} />
                <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>+91 842 842 88 33</Typography>
              </Box2>
              <Box2 sx={{ mt: '10px' }}>
                <FmdGoodIcon sx={{ fontSize: '28px' }} />
                <Typography sx={{ fontSize: '16px', width: '274px', fontWeight: 500 }}>Level 7, IIFL Towers, 143, MGR Main Road, Perungudi, Chennai - 96.</Typography>
              </Box2>
            </Stack>
          </Grid>
        </Grid>

        {/* ------------address-----------*/}
        <Box >

          <Typography sx={{ fontSize: '22px', fontWeight: 500, textAlign: 'center',my:3}}>Our Office Address</Typography>
          <Grid container spacing={3} justifyContent={'center'}>
            <Grid item lg={4}>
              <Accordion sx={{ width: '330px', color: '#1A9E75', bgcolor: '#ffff', borderRadius:'15px' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{fontWeight:500}}>Chennai Office</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    IIFL TOWERS, Level 7, 143, MGR Main Road, Kandhanchavadi, Chennai, Tamil Nadu - 600 096.
                  </Typography>
                  <Divider variant="middle" sx={{ my: 2 }} />
                  <Typography>
                    Rayala Towers, Mount Road, Anna Salai, Chennai, Tamil Nadu- 600 002.
                  </Typography>
                  <Divider variant="middle" sx={{ my: 2 }} />
                  <Typography>
                    Adityaram Nagar, 129, Sea Horse Inn, 8th cross, 12th street, Chennai, Tamil Nadu 600 119.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>

            <Grid item lg={4}>
              <Accordion sx={{ width: '330px', color: '#1A9E75', bgcolor: '#ffff', borderRadius:'15px' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{fontWeight:500}}>Bangalore Office</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    1537, 5th Main Road, Rajiv Gandhi Nagar, 7th Sector, HSR Layout, Bengaluru, Karnataka 560 102.
                  </Typography>
                  <Divider variant="middle" sx={{ my: 2 }} />
                  <Typography>
                    150, 1, Infantry Road, Opp. Commissioner office, Vasanth Nagar, Bengaluru, Karnataka 560 001.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>


            <Grid item lg={4}>
              <Accordion sx={{ width: '330px', color: '#1A9E75', bgcolor: '#ffff', borderRadius:'15px' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{fontWeight:500}}>Delhi Office</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    401, D-1 Building No 46/47, Fourth Floor, Guru Angad Nagar, Laxmi Nagar, Delhi - 110 092.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{mt:'46px',mb:'15px',display:'flex',alignItem:'center',justifyContent:'center'}}>
         <CopyrightIcon sx={{fontSize:'20px'}}/><Typography sx={{fontSize:'16px',fontWeight:500}}>2023 Parkqwik. All rights reserved</Typography>
        </Box>
      </Container>
    </BoxStyle>
  )
}

export default Footer;