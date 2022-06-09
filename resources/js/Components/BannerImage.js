import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export const BannerImage = ({title,subtitle,img,color }) => {
  return (
    <Box height={250} width='100%' 
    sx={{backgroundImage:`url(${img})`,
    backgroundSize:'cover',
    backgroundRepeat:"no-repeat" }}>
       
    
        
      <Box pt="10vh">
      <Typography variant='h3' fontFamily='Inter' color={color}>
           {title}
            </Typography>
            <Typography fontFamily='Inter' color={color}>
           {subtitle}
            </Typography>
      </Box>
       
        
    </Box>
  )
}
