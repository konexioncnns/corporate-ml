import { Grid3x3 } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function Section() {
  return (
    <Box>
        <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
                
                <Typography variant='h4'>1SIMPLE1</Typography>
               
            </Grid>
            <Grid item xs={12} sm={6}>
               
                <Typography variant='h4'>1SIMPLE1</Typography>
                
            </Grid>
        </Grid>
    </Box>
  )
}

export default Section