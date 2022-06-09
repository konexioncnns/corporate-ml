import { TextField } from '@mui/material'
import React from 'react'


const initialValues={
    id:0,fullName:'',email:'',phone:'',adresse:''

}
export default function Forms() {
    const [value, setValue] = useState(initialValues)
  return (
   <form>
       <Grid>
           <Grid item xs={12} sm={6}>
               <TextField />

           </Grid>
           <Grid item xs={12} sm={6}>

           </Grid>
       </Grid>
   </form>
  )
}
