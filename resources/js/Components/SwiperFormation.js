import { ArrowForward, SearchOff, SettingsOverscan, Token } from '@mui/icons-material'
import MediationIcon from '@mui/icons-material/Mediation';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { Slider } from './Slider';

export const SwiperFormation = () => {
  return (
    
    
<Box bgcolor="#4A9D3C" >
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={5}>
           <Typography variant='h5' color='white' fontSize={14} fontFamily="Inter" >Nos prochaines programme de Formation</Typography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
          <Typography variant='h7' color='white'  fontFamily='Inter-Light'>Nos prochaines programme de Formation</Typography>
            <Slider />
          </Grid>
        </Grid>
      </Container>
    </Box>


  )
}
