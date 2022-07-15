import {
    Avatar,
    Box,
    Button,
    Card,
    CardHeader,
    CardMedia,
    Container,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemText,
    Paper,
    Typography,
} from "@mui/material";
import React from "react";
import { BannerImage } from "../components/BannerImage";
import { ServiceSection } from "../components/ServiceSection";
import { WaveComponent } from "../components/Wave";
import img from "../assets/images/head2.jpg";
import archico from "../assets/icons/archive.png";
import collab from "../assets/icons/collab.png";
import crm from "../assets/icons/crm.png";
import imgService from "../assets/images/service1.png";
import {
    ArchiveRounded,
    ArchiveSharp,
    ArrowForward,
    Done,
    MoreVert,
} from "@mui/icons-material";
import { SelectSection } from "../components/SelectSection";
import archivage from "../assets/images/archivage.png";
import archive1 from "../assets/images/archive1.png";
import ebiosmanager from "../assets/images/ebiosmanager.png"
import BarSide from "@/Components/BarSide";
import PageHeader from "@/Components/PageHeader";
import { indigo, purple, red } from "@mui/material/colors";
import { useState } from "react";

import img1 from '../../../public/img/services/image11657065011.png'
import { InertiaLink } from "@inertiajs/inertia-react";
export default function Services({services}) {
    const  [data, setdata] = useState(services);
    console.log("les services sont:",data)
    return (
        <Box>
            <PageHeader
                title="Our services"
                subtitle="The service we offer is specifically designed to meet your needs."
            />

            <Container>
                <Box mt={-5} mb={20}>
                    <Box mt={5} mx="25%" justifyContent="center">
                        <Typography
                        fontSize={32}
                         fontFamily="Inter-Roman"
                            textAlign="center"
                          
                            mt={8}
                        >
                            The service we offer is specifically designed to
                            meet your needs.
                        </Typography>
                    </Box>
                    <Box mt={5}>
                        <Container>
                            <Grid container spacing={1}>
                                {/*  <Grid item xs={12} sm={4}>
                            <Typography variant="h4">Archico</Typography>
                            <CardMedia
                                component="img"
                                height="194"
                                image={archico}
                            />
                            <Box display="flex">
                                <ArchiveSharp
                                    sx={{ flex: 0.5 }}
                                    fontFamily={40}
                                />

                                <p className="mt-2 text-lg font-medium text-black text-opacity-60">
                                    Lorem ipsum dolor sit amet ipsum dolor sit
                                    amet ipsum dolor sit amet ipsum dolor sit
                                    amet, Lorem ipsum dolor sit amet ipsum dolor sit
                                    amet ipsum dolor sit amet ipsum dolor sit
                                    amet, Lorem ipsum dolor sit amet ipsum dolor sit
                                    amet ipsum dolor sit amet ipsum dolor sit
                                    amet, Lorem ipsum dolor sit amet ipsum dolor sit
                                    amet ipsum dolor sit amet ipsum dolor sit
                                    amet, Lorem ipsum dolor sit amet ipsum dolor sit
                                    amet ipsum dolor sit amet ipsum dolor sit
                                    amet,
                                </p>
                            </Box>
                        </Grid>  */}
                                {data.map((service,index)=>(

                              
                                <Grid item xs={12} sm={4} mb={5}>
                                    <Box mx="5%" sx={{
                                        width:{xs:250,sm:380},
                                        display:{xs:'block',sm:'flex'}
                                    }}>
                                        <Box sx={{ px:{xs:1,sm:1},mb:{xs:3} }}>
                                           <InertiaLink href={`/service/${service.id}`}> <img src={`../img/services/${service.image1}`}  style={{maxHeight:100,maxWidth:150,borderRadius:10}} alt={service.title.fr} /></InertiaLink>
                                        </Box>
                                        <Box sx={{px:{xs:1}}}>
                                            <Typography
                                                textAlign="left"
                                                variant="h5"
                                                color="error"
                                                fontFamily="Inter-Medium"
                                                
                                            >
                                               {service.title.fr}
                                            </Typography>
                                            <Typography
                                            
                                                variant="h4"
                                                lineHeight={1.5}
                                                textAlign="left"
                                                fontFamily="Inter-Medium"
                                                fontSize={16}
                                                sx={{
                                                    display: "-webkit-box",
                                                    overflow: "hidden",
                                                    WebkitBoxOrient: "vertical",
                                                    WebkitLineClamp: 3,
                                                }}
                                            >
                                                {service.extrait.fr}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
  ))}

                               {/*  <Grid item xs={12} sm={4}>
                                    <Box display="flex">
                                        <Box>
                                            <img src={collab} height="50" />
                                        </Box>
                                        <Box ml={1}>
                                            <Typography
                                                textAlign="left"
                                                variant="h5"
                                            >
                                                COLLAB
                                            </Typography>
                                            <Typography
                                                variant="h4"
                                                lineHeight={1.5}
                                                textAlign="left"
                                                fontFamily="Inter-Regular"
                                                fontSize={14}
                                                sx={{
                                                    display: "-webkit-box",
                                                    overflow: "hidden",
                                                    WebkitBoxOrient: "vertical",
                                                    WebkitLineClamp: 3,
                                                }}
                                            >
                                                Le lorem ipsum (également appelé
                                                faux-texte, lipsum, ou bolo
                                                bolo) est, en imprimerie, une
                                                suite de mots sans signification
                                                utilisée à .
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} sm={4}>
                                    <Box display="flex">
                                        <Box>
                                            <img src={crm} height="50" />
                                        </Box>
                                        <Box ml={1}>
                                            <Typography
                                                textAlign="left"
                                                variant="h5"
                                            >
                                                CRM
                                            </Typography>
                                            <Typography
                                                variant="h4"
                                                lineHeight={1.5}
                                                textAlign="left"
                                                fontFamily="Inter-Regular"
                                                fontSize={14}
                                                sx={{
                                                    display: "-webkit-box",
                                                    overflow: "hidden",
                                                    WebkitBoxOrient: "vertical",
                                                    WebkitLineClamp: 3,
                                                }}
                                            >
                                                Le lorem ipsum (également appelé
                                                faux-texte, lipsum, ou bolo
                                                bolo) est, en imprimerie, une
                                                suite de mots sans signification
                                                utilisée à .
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid> */}
                            </Grid>
                            <Grid container spacing={5} my={5}>
                                <Grid item xs={12} sm={6}>
                                    <Box flex={1} mx="10%">
                                        <CardMedia
                                            component="img"
                                            image={ebiosmanager}
                                            sx={{borderRadius:5
                                                
                                            
                                            }}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box mx="10%">
                                        <Typography
                                            variant="h4"
                                            textAlign="left"
                                        >
                                            We bring solutions to make life
                                            easier for our customers.
                                        </Typography>
                                        <Typography
                                            lineHeight={2}
                                            textAlign="left"
                                            variant="body1"
                                            fontFamily="Inter-Regular"
                                        >
                                            Les organisations modernes savent
                                            que la gestion du risque et
                                            conformité (lorsqu’applicable) font
                                            partie de la gouvernance de l'organisation.</Typography>

                                            <Box display="flex">
                                            <Box xs={12} mx>
                                                <List>
                                                <ListItem>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="w-8 h-8 text-blue-500"
                                                        viewBox="0 0 20 20"
                                                        fill="red"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>

                                                    <Typography textAlign="left" ml={1}>
                                                    Acrchivage electronique
                                                    </Typography>
                                                </ListItem>
                                                <ListItem>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="w-8 h-8 text-blue-500"
                                                        viewBox="0 0 20 20"
                                                        fill="red"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>

                                                    <Typography textAlign="left" ml={1}>
                                                    Acrchivage electronique
                                                    </Typography>
                                                </ListItem>
                                                <ListItem>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="w-8 h-8 text-blue-500"
                                                        viewBox="0 0 20 20"
                                                        fill="red"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>

                                                    <Typography textAlign="left" ml={1}>
                                                    Acrchivage electronique
                                                    </Typography>
                                                </ListItem>
                                                
                                              
                                            
                                            </List>
                                                </Box>
                                                <Box>
                                                <List>
                                                <ListItem>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="w-8 h-8 text-blue-500"
                                                        viewBox="0 0 20 20"
                                                        fill="red"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>

                                                    <Typography textAlign="left" ml={1}>
                                                    Acrchivage electronique
                                                    </Typography>
                                                </ListItem>
                                                <ListItem>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="w-8 h-8 text-blue-500"
                                                        viewBox="0 0 20 20"
                                                        fill="red"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>

                                                    <Typography textAlign="left" ml={1}>
                                                    Acrchivage electronique
                                                    </Typography>
                                                </ListItem>
                                                <ListItem>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="w-8 h-8 text-blue-500"
                                                        viewBox="0 0 20 20"
                                                        fill="red"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>

                                                    <Typography textAlign="left" variant="body1"
                                            fontFamily="Inter-Regular" ml={1}>
                                                    Acrchivage electronique
                                                    </Typography>
                                                </ListItem>
                                            
                                            </List>
                                                </Box>
                                            </Box>
                                           
                                       
                                    
                                          
                                   
                                    </Box>
                                </Grid>
                            </Grid>

                            <Grid container spacing={5} my={5}>
                                <Grid item xs={12} sm={6}>
                                    <Box>
                                        <Typography
                                            variant="h4"
                                            textAlign="left"
                                        >
                                            We bring solutions to make life
                                            easier for our customers.
                                        </Typography>
                                        <Typography
                                            lineHeight={2}
                                            textAlign="left"
                                            variant="body1"
                                            fontFamily="Inter-Regular"
                                        >
                                            Les organisations modernes savent
                                            que la gestion du risque et
                                            conformité (lorsqu’applicable) font
                                            partie de la gouvernance de l'organisation.</Typography>

                                            <Box display="flex">
                                            <Box>
                                                <List>
                                                <ListItem>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="w-8 h-8 text-blue-500"
                                                        viewBox="0 0 20 20"
                                                        fill="red"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>

                                                    <Typography textAlign="left" ml={1}>
                                                    Acrchivage electronique
                                                    </Typography>
                                                </ListItem>
                                                <ListItem>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="w-8 h-8 text-blue-500"
                                                        viewBox="0 0 20 20"
                                                        fill="red"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>

                                                    <Typography textAlign="left" ml={1}>
                                                    Acrchivage electronique
                                                    </Typography>
                                                </ListItem>
                                                <ListItem>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="w-8 h-8 text-blue-500"
                                                        viewBox="0 0 20 20"
                                                        fill="red"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>

                                                    <Typography textAlign="left" ml={1}>
                                                    Acrchivage electronique
                                                    </Typography>
                                                </ListItem>
                                                
                                              
                                            
                                            </List>
                                                </Box>
                                                <Box>
                                                <List>
                                                <ListItem>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="w-8 h-8 text-blue-500"
                                                        viewBox="0 0 20 20"
                                                        fill="red"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>

                                                    <Typography textAlign="left" ml={1}>
                                                    Acrchivage electronique
                                                    </Typography>
                                                </ListItem>
                                                <ListItem>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="w-8 h-8 text-blue-500"
                                                        viewBox="0 0 20 20"
                                                        fill="red"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>

                                                    <Typography textAlign="left" ml={1}>
                                                    Acrchivage electronique
                                                    </Typography>
                                                </ListItem>
                                                <ListItem>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="w-8 h-8 text-blue-500"
                                                        viewBox="0 0 20 20"
                                                        fill="red"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>

                                                    <Typography textAlign="left" variant="body1"
                                            fontFamily="Inter-Regular" ml={1}>
                                                    Acrchivage electronique
                                                    </Typography>
                                                </ListItem>
                                            
                                            </List>
                                                </Box>
                                            </Box>
                                           
                                       
                                    
                                          
                                   
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box flex={1}>
                                        <CardMedia
                                            component="img"
                                            image={archivage}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
