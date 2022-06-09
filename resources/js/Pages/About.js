import { Card, CardMedia, Container, Grid, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import { Box } from '@mui/system'
import React from 'react'
import { LabelButton } from '../components/LabelButton'
import img from '../assets/images/about3.jpg'

const About = () => {
  return (
    <Box>
      <Box mt={-11} sx={{height:200,width:"100%",}}>
      

      </Box>
      <Box>
        <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} mt={3} px={5} >
            <Typography variant="h2"  textAlign="left" fontStyle="italic"  fontFamily="Inter" >Qui somme nous?</Typography>
            <Typography textAlign="left" variant='h3' fontWeight="300" fontSize={16} fontFamily="Inter-SemiBold" lineHeight={1.5} letterSpacing={1}>1SIMPLE1 est une compagnie en TI (Technologie de l’Information) qui opère en Technologies de l’Information (TI) depuis 2012. 1SIMPLE1 fait partie du groupe transcontinental – Groupe NYETA.</Typography>
            <Typography  textAlign="left" variant='h4'  fontWeight="500" fontFamily="Inter-Light" fontSize={14} lineHeight={2} letterSpacing={1}>
            Notre mission est d’aider les organisations à devenir plus performantes grâce aux TI et aux meilleures pratiques en termes de gouvernance et de gestion des TI (ITIL, CobIT, etc.).<br/>
            Notre vision est de devenir un partenaire stratégique pour les organisations et de leur offrir les meilleurs services disponibles au monde.<br/>
            Nos valeurs reposent sur la satisfaction du client,  l’unicité de chaque client,  la transparence envers le client, le plaisir à livrer un service de qualité au client et le partage et la redistribution à la communauté.<br/>
            </Typography>
           <Typography textAlign="left" mt={3} >
           <LabelButton bgcolor="red" vr="contained"  color="white"   label="Comment ça marche" />

           </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
         
              <CardMedia
              component="img"
              height={300}
              image={img}
              alt="about image"

              
              />

         
            
          </Grid>
        </Grid>
        </Container>
      </Box>
      <Box>
        <Typography variant='h4' align='center'>
        Save your time and money by choosing our professional team.
        </Typography>
      </Box>
    </Box>
  )
}
export default About