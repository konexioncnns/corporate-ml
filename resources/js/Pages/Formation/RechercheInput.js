import PageHeader from '@/Components/PageHeader';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Search } from '@mui/icons-material';
import { Box, Button, FormControl, FormControlLabel, Grid, List, ListItem, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material';
import { result } from 'lodash';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {search } from "../../redux/featured/formation/filterSlice"
const RechercheInput=({dataForm})=>{
    const dispatch = useDispatch();
    const [selected, setSelected] = useState()
    const [textSearch, setTextSearch] = useState('')
      const handleChange=(e)=>{
    e.preventDefault(); 
    setTextSearch(e.target.value); 
    dispatch(search(e.target.value));
console.log("Text to search: ",textSearch)  }

useEffect(() => {
    result=dataForm?.filter((form)=>form.title.fr.includes(textSearch) )
    setSelected(result)
 
}, [textSearch])

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
                      <FormControl  fullWidth mb={1} variant="outlined">
                          <TextField value={textSearch} onChange={handleChange} placeholder="Trouver une formation"   />
                         

                       
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
                          <a href="/search">
                              Recherhe
                          </a>
                      </Button>
                  </Box>
              </Box>
<Box>
    <List>
   {selected?.map((r,index)=>(
    <ListItem>{r.title.fr}</ListItem>
   
   ) )}</List>
</Box>
          </Grid>
          
        </Grid>
      </Box>
    )
}
export default RechercheInput