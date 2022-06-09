import React from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Container,
    Grid,
    Pagination,
    Typography,
} from "@mui/material";
import { RibbonContainer, RightCornerLargeRibbon , RightCornerRibbon } from "react-ribbons";
import iso from "../assets/images/iso2.png";
import { usePage } from '@inertiajs/inertia-react'
import { PostAddSharp } from "@mui/icons-material";
import Lang from "lang.js";
const currentLang = new Lang();
const Posts = () => {
    const {posts  } = usePage().props 
   
    console.log(posts)
    return (
        <Box mb={20}>
            <Box>
                <Typography color="red" fontFamily="Inter">
                    Retrouvez notre selection de publications TI élaborées pqr
                    notre equipe
                </Typography>
            </Box>{" "}
            <Box justifyContent="center" width="100%">
              
            </Box>
           <Container>
           <Box
                    height="10vh"
                    justifyContent="center"
                    mx={20}
                    my={5}
                    sx={{  borderRadius: 5 }}
                    alignItems="center"
                    bgcolor="#ed8484"
                    display="flex"
                >
                    <Typography textAlign="left">Filtrer par</Typography>
                </Box>
           <Grid container spacing={5}>
               
               {posts.map((item,i)=>{
 return(
    <Grid item xs={12} sm={3} key={i}>
   

    <RibbonContainer className="custom-class">
  <RightCornerLargeRibbon backgroundColor="#cc0000" color="#f0f0f0" fontFamily="Arial">
   1SIMPLE1
  </RightCornerLargeRibbon>
  <Card sx={{ xs:{mx:2},maxWidth: 350, minHeight: 320 }} elevation={2} >
        <CardMedia component="img" height={100} image={`../img/posts/${item.image}`} />
       
        <CardContent>
           
            {currentLang.getLocale() === "en" ? 
            <Typography mb={1} fontFamily="Inter" color="red">  {item.title.en}    </Typography>
            :<Typography mb={1} fontFamily="Inter" color="red"> {item.title.fr} </Typography>

            }
          
    
        <Typography fontFamily="Inter-Regular" textAlign="left">
        {currentLang.getLocale() === "en" ? 
            <Typography mb={1} fontFamily="Inter-Regular"  sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
            }} >  {item.description.en}    </Typography>
            :<Typography mb={1} fontFamily="Inter-Regular"  sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
            }}> {item.description.fr} </Typography>

            }
            
        </Typography>
        <Button  variant="contained" sx={{bgcolor:"red",position:"relative"}}>Lire plus</Button>
        </CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{height:"40px",backgroundColor:"#f6f6f6"}}  >
        <Typography textAlign="left" variant="body2" fontSize={11} fontFamily="Inter-Regular">
            Juin 2022
            </Typography>
            <Typography fontSize={11}>Category:{item.category.title.fr}</Typography>

            <Typography   variant="body2" fontSize={11} fontFamily="Inter-Regular">
            publier par:1SIMPLE1
            </Typography>

            </Box>
    </Card>{" "}
</RibbonContainer>
</Grid>
 )

               })}


             
                      
                   
              
            </Grid>
            

           </Container>
           <Pagination justifyContent="center" alignItems="center" count={posts.lenght} color="error" />
        </Box>
    );
};

export default Posts;
