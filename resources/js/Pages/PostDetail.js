import PageHeader from "@/Components/PageHeader";
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
import React from "react";
import img from "../assets/images/about3.jpg";
import img2 from "../assets/images/post1.jpg";

function PostDetail() {
    return (
      <Box>
          {/*  <PageHeader
            title=" Nos offres de formation professionnelle"
            subtitle=" Nos offres de formation professionnelle et continue"
            /> */}
     
      <Container>
      <Grid container spacing={5} bgcolor="white">
            <Grid item xs={12} sm={9} sx={{ xs: { mx: 2 } }}>
                <Box my={3} xs={12} sx={{ xs: { fontSize: 14 } }}>
                    <Typography textAlign="left" variant="h3"  fontSize={30} fontFamily="Inter">
                        Relaxing after work
                    </Typography>
                </Box>
                <Box display="flex">
                    <Box mr={2}>
                        <Typography
                            fontSize={12}
                            textAlign="left"
                            fontWeight="bold"
                            color="gray"
                        >
                            Posted by
                        </Typography>
                        <Typography
                            fontSize={12}
                            textAlign="left"
                            fontWeight="bold"
                        >
                            1SIMPLE1
                        </Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem />
                    <Box mx={2}>
                        <Typography fontSize={12} textAlign="left" color="gray">
                            Categorie
                        </Typography>
                        <Typography fontSize={12} textAlign="left">
                            Education
                        </Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem />
                    <Box mx={2}>
                        <Typography
                            fontSize={12}
                            fontWeight="bold"
                            color="gray"
                        >
                            Date
                        </Typography>
                        <Typography fontSize={12} fontWeight="bold">
                            20/06/2022
                        </Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem />
                    <Box mx={2}>
                        <Typography
                            fontSize={12}
                            color="gray"
                            fontWeight="bold"
                        >
                            Date
                        </Typography>
                        <Typography fontSize={12} fontWeight="bold">
                            20/06/2022
                        </Typography>
                    </Box>
                </Box>
                <Box my={2}>
                    <img src={img2} />
                </Box>
                <Box mt={2}>
                    <Typography
                        textAlign="left"
                        fontSize={16}
                        lineHeight={2}
                        letterSpacing={1}
                        fontFamily="Inter-Regular"
                    >
                        <p>
                            {" "}
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry’s standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>
                        <p>
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
                        </p>
                        <p>
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
                        </p>
                    </Typography>
                </Box>
                <Box my={2} display="flex" justifyContent="space-between">
                    <Box>
                        <Typography textAlign="left" variant="subtitle1">
                            Tag
                        </Typography>
                        <Box display="flex" justifyContent="space-around">
                            <Chip
                                sx={{ textAlign: "left" }}
                                label="Courses"
                                color="success"
                                variant="contained"
                            />
                            <Chip
                                sx={{ textAlign: "left" }}
                                label="Education"
                                color="success"
                                variant="contained"
                            />
                            <Chip
                                sx={{ textAlign: "left" }}
                                label="Courses"
                                color="success"
                                variant="contained"
                            />
                            <Chip
                                sx={{ textAlign: "left" }}
                                label="Education"
                                color="success"
                                variant="contained"
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Typography textAlign="left">Partagez avec</Typography>
                        <Box display="flex">
                            <Facebook />
                            <LinkedIn />
                            <WhatsApp />
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
                <Box>
                    <Box>
                        <Typography variant="h4" textAlign="left" my="2">
                            You may like
                        </Typography>
                    </Box>{" "}
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <Box height={120}>
                                <img
                                    src={img}
                                    style={{ height: 150, width: "100%" }}
                                />
                                <Typography textAlign="left" my={1}>
                                    Why You Should Read Every Day
                                </Typography>
                                <Typography textAlign="left" my={1}>
                                    20/06/2022
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box>
                                <img
                                    src={img2}
                                    style={{ height: 150, width: "100%" }}
                                />
                                <Typography textAlign="left" my={1}>
                                    Why You Should Read Every Day
                                </Typography>
                                <Typography textAlign="left" my={1}>
                                    20/06/2022
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box>
                                <img
                                    src={img2}
                                    style={{ height: 150, width: "100%" }}
                                />
                                <Typography textAlign="left" my={1}>
                                    Why You Should Read Every Day
                                </Typography>
                                <Typography textAlign="left" my={1}>
                                    20/06/2022
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={12} sm={3} sx={{ borderWidth:1 }} > 
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
                
                <Box display="flex" my={2}>
                    <img src={img} style={{height:60,width:80}} />
                    <Box ml={1}>
                        <Typography
                            fontFamily="Inter-Regular"
                            fontSize={16}
                            textAlign="left"
                            
                        >
                            Comment sa marche
                        </Typography>
                    
                        <Typography
                         fontFamily="Inter-Regular"
                          alignItems="end"
                            textAlign="left"
                            color="gray"
                            mt={2}
                            fontSize={11}
                        >
                            25 juin 2022
                        </Typography>
                    </Box>
                    <Divider/>
                </Box>
                <Box display="flex" my={2}>
                    <img src={img} style={{height:60,width:80}} />
                    <Box ml={1}>
                        <Typography
                            fontFamily="Inter-Regular"
                            fontSize={16}
                            textAlign="left"
                            
                        >
                            Comment sa marche
                        </Typography>
                    
                        <Typography
                         fontFamily="Inter-Regular"
                          alignItems="end"
                            textAlign="left"
                            color="gray"
                            mt={2}
                            fontSize={11}
                        >
                            25 juin 2022
                        </Typography>
                    </Box>
                    <Divider/>
                </Box>
                <Box display="flex" my={2}>
                    <img src={img} style={{height:60,width:80}} />
                    <Box ml={1}>
                        <Typography
                            fontFamily="Inter-Regular"
                            fontSize={16}
                            textAlign="left"
                            
                        >
                            Comment sa marche
                        </Typography>
                    
                        <Typography
                         fontFamily="Inter-Regular"
                          alignItems="end"
                            textAlign="left"
                            color="gray"
                            mt={2}
                            fontSize={11}
                        >
                            25 juin 2022
                        </Typography>
                    </Box>
                    <Divider/>
                </Box>
                <Box display="flex" my={2}>
                    <img src={img} style={{height:60,width:80}} />
                    <Box ml={1}>
                        <Typography
                            fontFamily="Inter-Regular"
                            fontSize={16}
                            textAlign="left"
                            
                        >
                            Comment sa marche
                        </Typography>
                    
                        <Typography
                         fontFamily="Inter-Regular"
                          alignItems="end"
                            textAlign="left"
                            color="gray"
                            mt={2}
                            fontSize={11}
                        >
                            25 juin 2022
                        </Typography>
                    </Box>
                    <Divider/>
                </Box>

                
            </Grid>
        </Grid>
      </Container>
         </Box>
    );
}

export default PostDetail;
