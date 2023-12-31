import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, Stack } from '@mui/material';
import { styled } from '@mui/system';



const StackStyle = styled('Box')({
  display: 'flex',
  flexDirection: 'row',
  gap: '46px',

  '@media(max-width:1000px)': {
    flexDirection: 'column',
    gap: '10px',
  }
})

const Text = styled('Box')({
  fontSize: '30px',
  color: '#1B9E76',
  fontWeight: 600,
  width: '100%',
  '@media(max-width:768px)': {
    fontSize: '27px',
  }
})

const Text2 = styled('Box')({
  fontSize: '18px',
  fontWeight: 500,
  width: '100%',
})

const Box1 = styled('Box')({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
})


function OurProduct({data}){
    return(
        <Box sx={{ width: '100%', minHeight: '596px', height: 'auto', bgcolor: '#F0FFFA', mt: 2, py: 4 }}>
        <Container>
          <Typography variant='h3' mt='3' textAlign={'center'}>Our Product Perks</Typography>
          <Grid container spacing={4} mt={'36px'}>
            {data.map((item) =>{
              return (
                <Grid item sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} key={item.id}>
                  <StackStyle>
                    <Box1 >
                      <Typography variant='h4' sx={{ bgcolor: '#1B9E76', color: '#ffff', p: 1, borderRadius: '50%' }}>0{item.id}</Typography>
                    </Box1>
                    <Stack direction='row' gap='15px' mt={'47px'} >
                      <img src={item.image} />
                      <Stack direction='column'>
                        <Text>{item.title}</Text>
                        <Text2>{item.info}</Text2>
                      </Stack>
                    </Stack>
                  </StackStyle>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </Box>
    )
}

export default OurProduct;