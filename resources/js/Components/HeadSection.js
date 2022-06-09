import { Box, CardMedia, Grid, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import img from "../assets/images/img5.png"

export const HeadSection = ({img,label}) => {
  return (
    <Box height={300}>
    <Box  bgcolor='#0099ff' mt={5} > 
              <Grid container spacing={2}>
              <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
              <Box>
                  <Typography variant="h3" fontFamily='Inter' color='white'  textAlign='left'>Nos formations</Typography>
                  <Typography variant="h6" fontFamily='Inter-Regular' color='white' textAlign='left'>
                  CHEZ 1SIMPLE1, NOUS OFFRONS UNE GAMME DE SOLUTIONS ET DE SERVICES QUI PEUVENT ÊTRE ADAPTÉS À VOS BESOINS.
                  </Typography>
              </Box>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
                  <Box>
                      <CardMedia 
                      image={img}
                       component="img"
                
                   
                       alt="post image"
                       sx={{ backgroundSize:'cover'}}
                      />
                  </Box>
          </Grid>
      </Grid>
  </Box>         

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
<path fill="#0099ff" fill-opacity="1" d="M0,256L40,234.7C80,213,160,171,240,154.7C320,139,400,149,480,165.3C560,181,640,203,720,186.7C800,171,880,117,960,122.7C1040,128,1120,192,1200,181.3C1280,171,1360,85,1400,42.7L1440,0L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
</svg>
          </Box>
  
  )
}
