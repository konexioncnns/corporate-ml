import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Link } from '@inertiajs/inertia-react'

import ApplicationLogo from '../ApplicationLogo'
import Header from './Header'
import '../../App.css'
import MuiHeader from './MuiHeader'

export default function Layout({children}) {
  return (


    <Box bgcolor="#fff">
    <MuiHeader/>


   <Box mt={20}  className='App'  >
    {children}

   </Box>


</Box>



  )
}
