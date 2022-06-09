import { AppBar, Box, Container, Typography } from '@mui/material'
import React from 'react'

export const Banner = ({label}) => {
  return (
    <Box xs={12} my={2} >
        
    <Box position="static"
     style={{ backgroundColor:'red',borderBottomWidth: 1,height:60}}
    
    >
   <Container>
   <Typography variant='h5' fontFamily="Inter" color='white' >{label}</Typography>
   </Container>
    </Box>  
 
  </Box>
  )
}
