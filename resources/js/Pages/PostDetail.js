import PageHeader from "@/Components/PageHeader";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import { Done, Facebook, LinkedIn, WhatsApp } from "@mui/icons-material";
import {
    Box,
    Card,
    CardHeader,
    CardMedia,
    Chip,
    Container,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import {
    FacebookIcon,
    FacebookShareButton,
    FacebookShareCount,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
 
} from "react-share";
import  * as moment from "moment";
import React from "react";
import img from "../assets/images/about3.jpg";
import img2 from "../assets/images/post1.jpg";

function PostDetail({data}) {
    const { postList} = usePage().props
    console.log(postList)
    return (
        
      <Box>
          {/*  <PageHeader
            title=" Nos offres de formation professionnelle"
            subtitle=" Nos offres de formation professionnelle et continue"
            /> */}
     
      <Container>
      <Grid container spacing={3} bgcolor="white">
    
            <Grid item xs={12} sm={9} sx={{ xs: { mx: 2 } }}>
                <Box my={3} xs={12} >
                    <Typography textAlign="left" variant="h3"  fontSize={30} fontFamily="Inter">
                        {data.title}
                    </Typography>
                </Box>
                <Box display="flex">
                    <Box mr={2} xs={12}>
                        <Typography
                            fontSize={12}
                            textAlign="left"
                            fontWeight="bold"
                            color="gray"
                            fontFamily="Inter"
                        >
                            Posted by
                        </Typography>
                        <Typography
                            fontSize={12}
                            textAlign="left"
                            fontWeight="bold"
                            fontFamily="Inter"
                        >
                            1SIMPLE1
                        </Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem />
                    <Box mx={2}>
                        <Typography fontSize={12} textAlign="left" color="gray" fontFamily="Inter">
                            Categorie
                        </Typography>
                        <Typography fontSize={12} textAlign="left" fontFamily="Inter">
                        {data.category.title.fr}
                        </Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem />
                    <Box mx={2}>
                        <Typography
                            fontSize={12}
                            fontWeight="bold"
                            fontFamily="Inter"
                            color="gray"
                        >
                            Date
                        </Typography>
                        <Typography fontSize={12} fontWeight="bold" fontFamily="Inter">
                        {moment(data.created_at,'DD-MM-YYYY').format('l')}
                        </Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem />
                   
                </Box>
                <Box my={2} >
               
                    <img src={`../img/posts/${data.image}`} style={{width:'100%',height:{xs:200,sm:400}}} />
                </Box>  
                <Box mt={2} xs={12} px={2}>
                    <Typography
                        textAlign="left"
                        fontSize={16}
                        lineHeight={2}
                        letterSpacing={1}
                        fontFamily="Inter-Regular"
                    >
                   
                            {" "}
                            {data.description}
                     
                        
                            It has survived not only five centuries, but also
                            the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the
                            1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum. It is a long established
                            fact that a reader will be distracted by the
                            readable content of a page when looking at its
                            layout. The point of using Lorem Ipsum is that it
                            has a more-or-less normal distribution of letters,
                            as opposed to using ‘Content here, content here’,
                            making it look like readable English.
                        
                        
                            Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model
                            text, and a search for ‘lorem ipsum’ will uncover
                            many web sites still in their infancy. Various
                            versions have evolved over the years, sometimes by
                            accident, sometimes on purpose (injected humour and
                            the like). There are many variations of passages of
                            Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected
                            humour, or randomised words which don’t look even
                            slightly believable.
                        
                    </Typography>
                </Box>
                <Box my={2} display="flex" justifyContent="space-between">
                    <Box>
                        <Typography textAlign="left" variant="subtitle1" fontSize={16} fontFamily="Inter">
                            Tag
                        </Typography>
                        <Box display="flex" justifyContent="space-around">
                            <Chip
                                sx={{ textAlign: "left",ml:2 }}
                                label="Courses"
                                color="error"
                                variant="outlined"
                            />
                            <Chip
                                sx={{ textAlign: "left",ml:2 }}
                                label="Education"
                                color="error"
                                variant="outlined" 
                            />
                            <Chip
                                sx={{ textAlign: "left",ml:2 }}
                                label="Courses"
                                color="error"
                                variant="outlined"
                                m={0.5}
                            />
                            <Chip
                                sx={{ textAlign: "left", ml:1 }}
                                label="Education"
                                color="error"
                                variant="outlined"
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Typography textAlign="left">Partagez avec</Typography>
                        <Box display="flex" justifyContent="space-around">
                        <FacebookShareButton
                                    url={`http://localhost:8000/formation/${data.id}`}
                                    quote={"1simple1 toujours plus loin!"}
                                    hashtag={"#1simple1"}
                                    description={"aiueo"}
                                    className="Demo__some-network__share-button"
                                >
                                    <FacebookIcon size={25} round  />
                                </FacebookShareButton>
                                <TwitterShareButton
                                    title={"test"}
                                    url={`http://localhost:8000/formation/${data.id}`}
                                    hashtags={["#1simple1", "hashtag2"]}
                                >
                                    <TwitterIcon size={25} round />
                                </TwitterShareButton>
                                <WhatsappShareButton
                                    title="1SIMPLE1"
                                    url={`http://localhost:8000/formation/${data.id}`}
                                >
                                    <WhatsappIcon size={25} round />
                                </WhatsappShareButton>
                        </Box>
                    </Box>
                </Box>
                {/*  <Box>
                <Card sx={{borderWidth:1}}>
                  <Box px={10}>
                  <Box mr={2}>
                  <Typography fontSize={12} textAlign="left" >1SIMPLE1</Typography>
                  <Typography fontSize={12} textAlign="left" color="gray">Author</Typography>
                </Box>
                    <Typography textAlign="left" fontSize={13} fontStyle="italic">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, It was popularised in the 1960s.</Typography>
                  </Box>

                </Card>
              </Box> */}
                <Box mt={5}>
                    <Box mb={3}>
                        <Typography my={2} variant="h6" textAlign="left"   fontFamily="Inter">
                            You may like
                        </Typography>
                    </Box>{" "}
                    <Grid container spacing={3}>

                    {postList.map((post,index)=>{

                    return(<Grid item xs={12} sm={4}>
                            <Box height={120}>
                            <InertiaLink href={`/article/${post.id}`}>   <img
                                    src={`../img/posts/${post.image}`}
                                    style={{ height: 150, width: "100%" }}
                                />
                                <Typography textAlign="left" my={1} fontFamily="Inter">
                                {post.title.fr}
                                </Typography>
                                 <Typography textAlign="left" my={1}  sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
            }}>
                                {post.description.fr}
                                </Typography></InertiaLink>
                                <Typography variant="body2" fontFamily="Inter" fontSize={10} textAlign="left" my={1}>
                                {moment(data.created_at,'DD-MM-YYYY').format('l')}
                                </Typography>
                            </Box>
                        </Grid>)
                      })}
                    </Grid>
                </Box>
            </Grid>
   


            <Grid item xs={12} sm={3} mt={20} sx={{ borderWidth:1 }} > 
                <Typography variant="h4" textAlign="left" fontSize={20} fontFamily="Inter">
                    Categories
                </Typography>
                <Box>
                  <List>
                    <ListItem>  Education </ListItem>
                    <ListItem>   Education </ListItem>
                    <ListItem>   Education </ListItem>
                    <ListItem>   Education </ListItem>
                    <ListItem>   Education </ListItem>
                  </List>
                </Box>

                <Typography variant="h4" textAlign="left" fontSize={20} fontFamily="Inter">
                    Articles recentes
                </Typography>
                {postList.map((post,index)=>(
                      <InertiaLink href={`/article/${post.id}`}>
                <Box display="flex" my={2}>
                    <img src={`../img/posts/${post.image}`} style={{height:60,width:80}} />
                    <Box ml={1}>
                        <Typography
                            fontFamily="Inter-Regular"
                            fontSize={16}
                            textAlign="left"
                            
                        >
                            {post.title.fr}
                        </Typography>
                    
                        <Typography
                         fontFamily="Inter-Regular"
                          alignItems="end"
                            textAlign="left"
                            color="gray"
                            mt={2}
                            fontSize={11}
                        >
                             {moment(post.created_at,'DD-MM-YYYY').format('l')}
                        </Typography>
                    </Box>
                    <Divider/>
                </Box></InertiaLink>
              
                
                ))}
              

                
            </Grid>
        </Grid>
      </Container>
         </Box>
    );
}

export default PostDetail;
