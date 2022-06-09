import {PhoneCallback } from '@mui/icons-material'
import { Box, Grid,Container, CardMedia, Typography, TextField } from '@mui/material'

import React from 'react'
import logo from '../../assets/images/logo.png'

 const Footer=()=> {
  return (

           <Box height="400px" mt={20} bgcolor="#21262C" color="black">

           <Container maxWidth="lg">
               <Grid container spacing={5}>
               <Grid item xs={12} sm={3}>

                       <Box>
                       <CardMedia
                            component="img"
                            height="60"
                            width="50"

                            image={logo}
                            alt="Paella dish"
                            href="/" />
                           }

                        />
                      <Box display='flex' mt={5} >
                     <PhoneCallback color='white' />
                       <Typography variant='h7' color='white' fontFamily='Inter'>
                       +223 20 20 39 54
                       </Typography>
                      </Box>
                       </Box>

                   </Grid>
                   <Grid item xs={12} sm={3}>
                       <Typography borderBottom={1} variant='h5'  color='white'>Besoin d'aide</Typography>
                       <Box>
                           <Typography variant='h6'  color='white'>Acceuil</Typography>
                       </Box>
                       <Box>
                           <Typography variant='h6' color='white'>Contact</Typography>
                       </Box>
                       <Box>
                           <Typography variant='h6'  color='white'>Services</Typography>
                       </Box>
                       <Box>
                           <Typography variant='h6' color='white'>Solution</Typography>
                       </Box>
                       <Box>
                           <Typography variant='h6' color='white'>Privacy</Typography>
                       </Box>

                   </Grid>
                   <Grid item xs={12} sm={3}>
                       <Typography borderBottom={1} variant='h5'  color='white'>Besoin d'aide</Typography>
                       <Box>
                           <Typography variant='h6'  color='white'>Acceuil</Typography>
                       </Box>

                       <Box>
                           <Typography variant='h6'  color='white'>Services</Typography>
                       </Box>
                       <Box>
                           <Typography variant='h6' color='white'>Solution</Typography>
                       </Box>
                       <Box>
                           <Typography variant='h6' color='white'>Privacy</Typography>
                       </Box>

                   </Grid>
                   <Grid item xs={12} sm={3}>
                       <Typography borderBottom={1} variant='h5'  color='white'>Besoin d'aide</Typography>
                       <Box mt={5}>
                       <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{borderColor:'white'}} />
                       </Box>


                   </Grid>
                </Grid>
           </Container>

        <Box  mt={10} alignItems='left'>
            <Typography textAlign='left'>Test 123456789</Typography>
        </Box>

       </Box>


  )
}
export default Footer
