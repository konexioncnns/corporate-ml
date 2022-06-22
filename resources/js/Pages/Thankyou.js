import PageHeader from '@/Components/PageHeader'
import { Box, CardHeader } from '@mui/material';
import React from 'react'
import img from '../assets/icons/succes.png'
 const Thankyou = () => {
  return (
    <Box>
      <Box justifyContent="center" ml="49%" width="100%">
      <img src={img} height={60} width={60}/>
      </Box>
        <CardHeader
        sx={{height:200}}
            title="Payement reussi avec succès"
            subheader=" Vous avez des questions concernant notre gamme de formations ou de services ?"
            />
    </Box>
  )
}
export default Thankyou;