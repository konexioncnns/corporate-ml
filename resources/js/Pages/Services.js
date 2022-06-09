import { Box, Button, Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { BannerImage } from '../components/BannerImage'
import { ServiceSection } from '../components/ServiceSection'
import { WaveComponent } from '../components/Wave'
import img from '../assets/images/head2.jpg'
import imgService from "../assets/images/service1.png";
import { ArrowForward } from '@mui/icons-material'
import { SelectSection } from '../components/SelectSection'
export default function Services() {
  return (
   <Box mt={-5} >
     {/*  <WaveComponent />  */}
     <SelectSection />
      
     
        {/* <ServiceSection /> */}
   </Box>
  )
}
