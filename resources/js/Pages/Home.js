import { Fab, Typography } from '@mui/material'
import React from 'react'
import { Banner } from '../components/Banner'
import  { Carousels } from '../components/Carousel'
import { SelectSection } from '../components/SelectSection'
import { ServiceSection } from '../components/ServiceSection'
import messages from '../../../public/messages'
import Lang from 'lang.js' 
const lang = new Lang({ messages })
lang.get('messages.slogan')

import parse from 'html-react-parser';
import { usePage } from '@inertiajs/inertia-react'
import { Navigation } from '@mui/icons-material'

 const Home = () => {
  
   const {form,codes,device  } = usePage().props 
   console.log(form)
  return (
 
   
      <> <Carousels />  <SelectSection />
      
      </>

  )
}
export default Home
