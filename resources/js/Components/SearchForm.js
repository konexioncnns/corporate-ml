import { Box, FormControl, Input, MenuItem, Select, Stack } from '@mui/material'
import React from 'react'

export const SearchForm = () => {
  return (
    <Box display='flex'>
             <Select sx={{height:35}} variant="filled">
                <MenuItem value="1"> <em>All</em></MenuItem>
                <MenuItem>Securite</MenuItem>
                <MenuItem>All</MenuItem>
            </Select>
            <Input placeholder='search a session of training'/> 
    </Box>
  )
}
