import { Box, Typography } from '@mui/material'
import React from 'react'
import img from "../assets/images/isoB.png"

 const PageHeader = ({title,subtitle,color="#F1F5FD"}) => {
  return (
    <Box bgcolor={color} mt={-8}
        sx={{
         
            height:"50vh",
            backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment:'fixed',
            
           
        }}
    
    >
    <div className="max-w-7xl mx-auto px-4 py-40 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-30">
        <Typography color="error" fontSize={36} variant="h3" fontFamily="Inter">
           {title}
        </Typography>
        <p className="mt-2 text-lg font-medium text-black text-opacity-50">
       {subtitle} </p>
         </div>
</Box>
  )
}
export default PageHeader;