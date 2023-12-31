import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function Form() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            text: data.get('text'),
            name: data.get('name'),
        });
    };

    return (
            <Container component="main" maxWidth="lg" >
                <Box bgcolor='#F0FFFA' py={6} px={2} borderRadius={'20px'}>
                <Box textAlign={'center'}>
                    <Typography variant='h3'>To Know More About Our Product</Typography>
                    <Typography sx={{ fontSize: '20px', fontWeight: 500 }}>Feel free to reach out with your questions or requests. We're here to assist you!</Typography>
                </Box>
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    color='success'
                                    autoComplete="given-name"
                                    name="Name"
                                    fullWidth
                                    id="Name"
                                    label=" Enter Your Name"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    color='success'
                                    id="email"
                                    label="Enter Your Email Address / Mobile Number"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    fullWidth
                                    color='success'
                                    name="text"
                                    label="Write something about your inquiry"
                                    id="text"
                                    autoComplete="off"
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color='success'
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
                </Box>
            </Container>
    );
}

export default Form;