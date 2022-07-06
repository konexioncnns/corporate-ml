import { InertiaLink } from '@inertiajs/inertia-react';
import { Box, Button, FormControl, FormControlLabel, Grid, MenuItem, Radio, RadioGroup, Select, Typography } from '@mui/material';
import React, { useState } from 'react'

const Recherchex=({inputData,dataSelect})=>{
    const [selected, setSelected] = useState()
      const handleChange=(e)=>{
    e.preventDefault();
    setSelected(e.target.value);   }
    return(
        <Box my={4}>
        <Grid container spacing={2}>
        <Grid
              item
              xs={12}
              lg={6}
              sx={{
                  ml: { xs: 2, lg: "auto" },
                  mt: { xs: 6, lg: 0 },
              }}
          >
              <Box mr={15} mt={4} component="form">
                  <Box mb={2}>
                      <Box mb={1} textAlign="left">
                          <Typography
                              mb={1}
                              textAlign="left"
                              variant="h7"
                              fontFamily="Inter-Regular"
                          >
                              Domaine de formation
                          </Typography>
                      </Box>
                      <FormControl fullWidth mb={1} variant="outlined">
                          <Select variant="filled" onChange={handleChange}>
                              {dataSelect?.map((item,index)=>(
                              <MenuItem key={index} value={item.id}>
                                  {item.title.fr}
                              </MenuItem>))}
                          </Select>
                      </FormControl>
                  </Box>

                  <Box mb={2}></Box>
                  <Box textAlign="left">
                      <FormControl>
                          <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                          >
                              <FormControlLabel
                                  value="female"
                                  control={<Radio />}
                                  label="Presentièl"
                              />
                              <FormControlLabel
                                  value="male"
                                  control={<Radio />}
                                  label="Distentièl"
                              />
                          </RadioGroup>
                      </FormControl>
                  </Box>
                  <Box textAlign="left">
                      <Button
                          variant="contained"
                          textAlign="left"
                          color="error"
                          fontFamily="Inter"
                          size="large"
                          sx={{
                              width: 150,
                              borderRadius: 10,
                              backgroundColor: "red",
                              color: "white",
                              fontFamily: "Inter",
                          }}
                      >
                          <InertiaLink href={`/search/${selected}`}>
                              Recherhe
                          </InertiaLink>
                      </Button>
                  </Box>
              </Box>
          </Grid>
          
        </Grid>
      </Box>
    )
}
export default Recherchex