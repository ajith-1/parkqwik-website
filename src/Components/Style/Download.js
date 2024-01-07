import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

function Download() {
  return (
    <Container>
      <Grid container spacing={1} mt={'98px'}>
        <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',mb:'50px' }}>
          <Box maxWidth={'550px'} width={'100%'} height={'auto'}>
            <Typography variant='h4' sx={{ mb: '10px', fontWeight: '500' }}>
              Download ParkQwik
            </Typography>
            <Typography variant='h6' sx={{ maxWidth: '480px', mb: '40px', p: 1 }}>
              By downloading ParkQwik, you gain access to a world of seamless parking experiences and car services right at your fingertips.
            </Typography>

            <Box maxWidth={'420px'} width={'100%'} height={'auto'}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={6}>
                  <Button disableElevation >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: '192px', height: '68px', borderRadius: '10px', bgcolor: '#292929', color: '#ffff' }}>
                    <img src='/images/playstore-logo.svg' alt='Product' />
                    <Stack direction={'column'}>
                      <Typography variant='body1' sx={{ fontSize: '12px' }}>Get it on</Typography>
                      <Typography variant='body1' sx={{ fontSize: '18px' }}>Google Play</Typography>
                    </Stack>
                  </Box>
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                <Button disableElevation >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: '192px', height: '68px', borderRadius: '10px', bgcolor: '#292929', color: '#ffff' }}>
                    <img src='/images/apple-logo.svg' alt='Product'/>
                    <Stack direction={'column'}>
                      <Typography variant='body1' sx={{ fontSize: '12px' }}>Download on the</Typography>
                      <Typography variant='body1' sx={{ fontSize: '18px' }}>App Store</Typography>
                    </Stack>
                  </Box>
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Stack direction={'row'}>
            <Box>
              <img src='/images/app-front1.png' alt='Product' width='100%' maxWidth='312px' height='auto' />
            </Box>
            <Box sx={{ mt: '-30px', ml: '-40px' }}>
              <img src='/images/app-front2.png' alt='Product' width='100%' maxWidth='317px' height='auto' />
            </Box>
          </Stack>
        </Grid>
      </Grid>

    </Container>
  )
}

export default Download