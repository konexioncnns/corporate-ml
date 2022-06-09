import { ArrowCircleRight, ArrowRight, ArrowRightTwoTone } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

export const LabelButton = ({label,color,vr,bgcolor,click}) => {
  return (
    <Button variant={vr} sx={{hover:'red',borderRadius:20,height:50, fontFamily:"OpenSans",fontSize:15, color:color,backgroundColor:bgcolor}} onClick={click} >
        {label}
        <ArrowCircleRight ml={2}/>
    </Button>
  )
}
