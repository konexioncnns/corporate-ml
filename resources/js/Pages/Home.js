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
 
   
      <>
     {/*

      <Posts />
      <Banner label="L'actualités des formations & des certifications" />

      <SelectSection /> */} <Carousels />  <SelectSection />
     <Typography>TITRE:{form.title}</Typography>
     <Typography>Price:
     {parse(`${codes}`)}</Typography>
    
     <Typography>DESCRIPTION:{parse(form.description)}</Typography>
     <Typography>Objectif:{parse(form.overview)}</Typography>
     <Typography>Prix:{device}</Typography>
     <Typography textAlign="left">Programme:<ul>{parse(`${form.programme}`)}</ul></Typography>

     { console.log("IIIIINERTIA:",{form})}
    
    

     
     <Typography> { lang.get('messages.slogan')} en { lang.getFallback}</Typography>
     <Fab sx={{ }} variant="extended" aria-label="Demo">
  <Navigation  sx={{ mr: 1 }} />
  Navigate
</Fab>

      </>

  )
}
export default Home
