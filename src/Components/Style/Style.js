import { styled } from '@mui/system';


export const BoxStyle = styled('Box')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin:0, 
    '@media(max-width:1000px)':{
      flexDirection:'column',
      padding:'20px',
    }
  })


  export const Heading = styled('Typography')({
      fontSize:'40px',
      fontWeight:600,
      '@media(max-width:600px)':{
        fontSize:'28px'
      }
  })

 