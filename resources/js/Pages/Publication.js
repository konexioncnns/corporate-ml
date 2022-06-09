import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import PostCard
    from '../components/PostCard'



import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img3.jpg'
import img5 from '../assets/images/img5.png'
import about from '../assets/images/about3.jpg'
import Wave from 'react-wavify'

const postsdata= [
    {id:1,image:img1,title:"Introduction Itil 4",description:"reprehenderit in voluptate velit cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non,7proident, sunt in culpa qui officia deserunt mollit anim id est laborum officia deserunt mollit mollitmollitmollitanim"},
    {id:2,image:img2,title:"Comment sa marche",description:"reprehenderit in voluptate velit cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non,7proident, sunt in culpa qui officia deserunt mollit anim id est laborum officia deserunt mollit mollitmollitmollitanim"},
    {id:3,image:img5,title:"Cobit 19",description:"reprehenderit in voluptate velit cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non,7proident, sunt in culpa qui officia deserunt mollit anim id est laborum officia deserunt mollit mollitmollitmollitanim"},
    {id:4,image:img4,title:"Introduction Itil 4",description:"reprehenderit in voluptate velit cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non,7proident, sunt in culpa qui officia deserunt mollit anim id est laborum officia deserunt mollit mollitmollitmollitanim"},
    /* {id:5,image:about,title:"Introduction Itil 4",description:"reprehenderit in voluptate velit cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non,7proident, sunt in culpa qui officia deserunt mollit anim id est laborum officia deserunt mollit mollitmollitmollitanim"},
    {id:6,image:img3,title:"Comment sa marche",description:"reprehenderit in voluptate velit cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non,7proident, sunt in culpa qui officia deserunt mollit anim id est laborum officia deserunt mollit mollitmollitmollitanim"},
   {id:7,image:img4,title:"Cobit 19",description:"reprehenderit in voluptate velit cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non,7proident, sunt in culpa qui officia deserunt mollit anim id est laborum officia deserunt mollit mollitmollitmollitanim"},
   {id:8,image:img2,title:"Introduction Itil 4",description:"reprehenderit in voluptate velit cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non,7proident, sunt in culpa qui officia deserunt mollit anim id est laborum officia deserunt mollit mollitmollitmollitanim"},
      */
]

import messages from '../../../public/messages'
import Lang from 'lang.js' 
const lang = new Lang({ messages })

const Publication = () => {

    return (
        <Box>
            <Box  >
                <Typography variant="h4" mt={3} fontFamily="Inter" >
                {lang.get('messages.header_posts')}
                    {/*  <Wave
       fill='red'
       aria-label='okkkkkkkkkkkk'
       paused={false}
       options={{
         height: 5,
         amplitude: 20,
         speed: 0.15,
         points: 3}}
       /> */}
                </Typography>
            </Box>
            <Container
                sx={{
                    display: "flex",

                    justifyContent: "space-between",
                }}
            >
                <Grid container spacing={2}>
                    {postsdata.map((post,index)=>{
                        return(
                            <PostCard key={post.id} image={post.image} title={post.title} description={post.description} click={()=>route(`post/${post.id}`)}/>

                        )
                    })}
                </Grid>
            </Container>
        </Box>

    )
}
export default Publication
