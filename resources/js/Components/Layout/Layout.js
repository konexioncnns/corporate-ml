import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { InertiaLink, Link } from '@inertiajs/inertia-react'

import ApplicationLogo from '../ApplicationLogo'
import Header from './Header'
import '../../App.css'
import MuiHeader from './MuiHeader' 
import Footer from './Footer'
import Footer2 from './Footer2'
import { CurrencyExchange } from '@mui/icons-material'
import MuiHeader2 from './MuiHeader2'

export default function Layout({children}) {  
   const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
 

    <Box bgcolor="#fff">
    <MuiHeader2 />


   <Box mt={20}  bgcolor="#F9FAFB"  className='App'>
  
   <Button
   id="catalogue"
   aria-controls={open ? 'catalogue' : undefined}
   aria-haspopup="true"
   aria-expanded={open ? 'true' : undefined}
   onClick={handleClick}
        sx={{
          position:"fixed",
          "&:hover": {
            handleClick
          },
      
      bottom:"58%",
      right:"-1px",
      backgroundColor:"purple",
      color:'#FFF',
      borderRadius:"10px",
      textAlign:'center',
      boxShadow: "2px 2px 3px #999",
      display:{xs:"none",sm:"flex"}
        }}
      >
        Catalogue
      </Button>
      <Menu
    
         id="demo-positioned-menu"
        aria-labelledby="catalogue"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 40,
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
         
         
         >
          <MenuItem onClick={handleClose}><InertiaLink href="catalogue">En ligne</InertiaLink></MenuItem>
          <MenuItem onClick={handleClose}><a href="/catalogue/download">Telecharger le catalogue</a></MenuItem>
         </Menu>



    
      <Button
        sx={{
          position:"fixed",
         
      
      bottom:"50%",
      right:"-5px",
      backgroundColor:"#0C9",
      color:'#FFF',
      borderRadius:"10px",
      textAlign:'center',
      boxShadow: "2px 2px 3px #999",
      display:{xs:"none",sm:"flex"}
        }}
      ><InertiaLink href="/demo">Demo</InertiaLink></Button>
       <Button
       variant='contained'
       color='error'
   
        sx={{
          position:"fixed",
          mt:2,
      bottom:"42%",
      right:"-5px",
    color:"white",
      borderRadius:"10px",
      textAlign:'center',
      boxShadow: "2px 2px 3px #999",
      display:{xs:"none",sm:"flex"}
        }}
      >
        <InertiaLink href='/contactus'>Contact</InertiaLink>
      </Button>

    
    {children}

   </Box>
      <Footer2/> 
</Box>



  )
}
