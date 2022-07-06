import { usePage } from '@inertiajs/inertia-react'
import { Box, Button, List, ListItem } from '@mui/material'
import React from 'react'

 const FilterCategory = (domainesList,setFilteredPost,active,setActive) => {
     
    console.log("domainesList",domainesList);
  return (
    <Box >
        <List>
           {domainesList?.data.map((domaine,index)=>(<ListItem>
            <Button onClick={()=>setActive(0)}  mr={2}  variant={active===0? 'contained':'outlined'} color="error">
            {domaine.title.fr}
    </Button>
            </ListItem>))}
        </List>
        
    </Box>
  )
}
export default FilterCategory;
