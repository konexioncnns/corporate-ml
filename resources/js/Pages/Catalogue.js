import { CheckBox } from '@mui/icons-material'
import { AppBar, Avatar, Box, Checkbox, Chip, Container, List, ListItem, ListItemIcon, Stack, Toolbar, Typography } from '@mui/material'

import React from 'react'
import { Banner } from '../components/Banner'
import { BannerImage } from '../components/BannerImage'
import { Slider } from '../components/Slider'
import { WaveComponent } from '../components/Wave'

import img from '../assets/images/head2.jpg'
export default function Catalogue() {
  return (

      <Box mt={-11}>
        <BannerImage color="white" title="Catalogue de formation" subtitle="Técharger ou consulter en ligne notre catalogue de formation" img={img}/>




      </Box>
  )
}
