import { Grid } from '@mui/material';
import React from 'react'

function PostDetail() {
  const {id} = useParams();
  console.log(id)
  return (
    <Grid container spacing={5} px={10}>
      <Grid item xs={12} sm={9} bgcolor="red" maxHeight={200}>

      article place
      </Grid>
      <Grid item xs={12} sm={3} bgcolor="gray" minHeight={500}>
        sidebar

      </Grid>
    </Grid>
  )
}

export default PostDetail