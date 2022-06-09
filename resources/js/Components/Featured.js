import { ArrowForward, SearchOff, SettingsOverscan, Token } from '@mui/icons-material'
import MediationIcon from '@mui/icons-material/Mediation';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

export const Featured = () => {
  return (
    
    
<Box  py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={5}>
            <Typography variant="h4" my={1}  color="text" pl={2} fontFamily="Inter">
              Read More About Us
            </Typography>
            <Typography variant="body2" color="text" mb={2} fontWeight='300' fontFamily="Inter" textAlign='left'>
            À 1SIMPLE1, nous vous offrons des accélérateurs de développement Web qui utilisent différents CMS éprouvés comme : WordPress, Joomla, Drupal, Wix, etc. Nos solutions, développées par des experts, ont l’avantage de vous donner des sites modernes, adaptables aux appareils mobiles, qui sont fiables et sécuritaires dans un temps record. Ces solutions permettent :

La simplicité et la robustesse;
L’évolution dans le temps sans un grand effort;
Profiter du Web 2.0 (avec les réseaux sociaux : Facebook, LinkedIn, Instangram, etc.).
            </Typography>
           <Box textAlign='Center'>
           <Button variant='contained'
            sx={{borderRadius: 10,}}
            >
              Ens savoir plus
             
              <ArrowForward />
            </Button>
           </Box>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <Stack>
              <Box display="flex" alignItems="center" p={2}>
           
                 <MediationIcon color="red" style={{width:60, height:60}} textAlign="left"/>
              
                <Typography variant="h7" color="text" pl={2} fontFamily="Inter" textAlign="left" >
                  It becomes harder for us to give others a hand.
                  <br />
                  We get our heart broken by people we love.
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" p={2}>
                
              
                  <Box>
                  <SettingsOverscan   color="primary" style={{width:60, height:60}} />
                  </Box>
       
                <Typography variant="h7" color="text" pl={2} fontFamily="Inter" textAlign="left">
                  As we live, our hearts turn colder.
                  <br />
                  Cause pain is what we go through as we become older.
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" p={2}>
               
                  <Token  color="red" style={{width:60, height:60}}  />
          
                <Typography variant="h7" color="text" pl={2} fontFamily="Inter" textAlign="left">
                  When we lose family over time.
                  <br />
                  What else could rust the heart more over time? Blackgold.
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>


  )
}
