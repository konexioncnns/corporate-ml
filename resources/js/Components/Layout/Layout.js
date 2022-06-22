import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { InertiaLink, Link } from '@inertiajs/inertia-react'

import ApplicationLogo from '../ApplicationLogo'
import Header from './Header'
import '../../App.css'
import MuiHeader from './MuiHeader' 
import Footer from './Footer'
import Footer2 from './Footer2'
import { CurrencyExchange } from '@mui/icons-material'

export default function Layout({children}) {
  return (


    <Box bgcolor="#fff">
    <MuiHeader/>


   <Box mt={20} bgcolor="#F9FAFB"  className='App'  >
   <Button
        sx={{
          position:"fixed",
      
      bottom:"58%",
      right:"-5px",
      backgroundColor:"purple",
      color:'#FFF',
      borderRadius:"50px",
      textAlign:'center',
      boxShadow: "2px 2px 3px #999",
        }}
      ><CurrencyExchange/></Button>
     
      <Button
        sx={{
          position:"fixed",
      
      bottom:"50%",
      right:"-5px",
      backgroundColor:"#0C9",
      color:'#FFF',
      borderRadius:"50px",
      textAlign:'center',
      boxShadow: "2px 2px 3px #999",
        }}
      >Demo{'     '}</Button>
       <Button
       variant='contained'
       color='error'
   
        sx={{
          position:"fixed",
          mt:2,
      bottom:"42%",
      right:"-5px",
    color:"white",
      borderRadius:"50px",
      textAlign:'center',
      boxShadow: "2px 2px 3px #999",
        }}
      >
        <InertiaLink href='/contactus'>Contact</InertiaLink>
      </Button>

    
    {children}

   </Box>

{/* <Footer2/> */}
</Box>



  )
}
