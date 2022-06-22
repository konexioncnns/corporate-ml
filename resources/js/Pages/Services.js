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
export default function Services() {
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
                            variant="h2"
                            fontSize={32}
                            textAlign="center"
                            fontFamily="Inter"
                            mt={8}
                        >
                            The service we offer is specifically designed to
                            meet your needs.
                        </Typography>
                    </Box>
                    <Box mt={5}>
                        <Container>
                            <Grid container spacing={2}>
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

                                <Grid item xs={12} sm={4}>
                                    <Box display="flex">
                                        <Box>
                                            <img src={archico} height="50" />
                                        </Box>
                                        <Box ml={1}>
                                            <Typography
                                                textAlign="left"
                                                variant="h5"
                                            >
                                                ARCHICO
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
                                                Numériser et archiver vos
                                                informations, permet de
                                                s’assurer d’avoir une mémoire
                                                organisationnelle en cas de
                                                sinistre (feu, inondation,
                                                ouragan, tremblement de terre,
                                                etc.) et aussi s’assurer de la
                                                continuité des affaires.
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={4}>
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
                                </Grid>
                            </Grid>
                            <Grid container spacing={5} my={5}>
                                <Grid item xs={12} sm={6}>
                                    <Box flex={1}>
                                        <CardMedia
                                            component="img"
                                            image={ebiosmanager}
                                            sx={{borderRadius:5}}
                                        />
                                    </Box>
                                </Grid>
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
