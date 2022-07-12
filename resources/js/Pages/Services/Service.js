import React from "react";
import "../../../../node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";
import {
    Box,
    Container,
    Grid,
    List,
    ListItem,
    Typography,
} from "@mui/material";
import PageHeader from "@/Components/PageHeader";
import Lang from "lang.js";

import parse from "html-react-parser";
import VideoSection from "@/Components/VideoSection";

const currentLang = new Lang();

const ServiceCard = ({ service }) => {
    console.log(service);
    return (
        <>
            <PageHeader
                title="Archico"
                subtitle="Les organisations modernes savent que la gestion du risque et conformité"
            />

            <Container mb={20}>
                <Box mx="auto" my={5}>
                    <Typography
                        color="error"
                        variant="h3"
                        fontFamily="Inter-Medium"
                        textAlign="center"
                    >
                        {service.title.fr}
                    </Typography>
                    <Typography
                         fontFamily="Inter-Roman"
                         lineHeight={2}
                         fontWeight='600'
                         fontSize={14}
                         textAlign='center'
                    >
                        {service.extrait.fr}{" "}
                    </Typography>
                </Box>
                <Box justifyContent="center" width="100%">
                <VideoSection title={service.title.fr} desc={service.extrait.fr}/>
                </Box>
                <Grid container spacing={2} mt={1}>
                    <Grid item xs={12} sm={6}>
                        <Typography
                            sx={{ color: "red" }}
                            variant="h4"
                            textAlign="left"
                            fontSize={20}
                            fontFamily="Inter"
                        >
                            Vos besoins
                        </Typography>
                        {/*     <img src={`../img/services/${service.image1}`}/> */}
                        <Typography
                             fontFamily="Inter-Roman"
                             lineHeight={2}
                             fontWeight='600'
                             sx={{
                                px:{xs:3,sm:3},
                                fontSize:{xs:12,lg:14}
                            }}
                             
                        >
                           
                           <ul className="text-left service">
                                {currentLang.getLocale() === "en"
                                    ? parse(` ${service.needs.en} `)
                                    : parse(`${service.needs.fr}`)}{" "}
                            </ul>
                        </Typography>
                        {/* <List>
                            <ListItem>
                                <svg     xmlns="http://www.w3.org/2000/svg"     class="w-6 h-6 text-blue-500"    viewBox="0 0 20 20"  fill="red">
                                    <path fill-rule="evenodd"  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"  clip-rule="evenodd"  />
                                </svg>

                                <Typography textAlign="left" ml={1}  fontSize={14}
                            fontFamily="Inter-Regular">
                                   Classification des documents physiques 
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <svg     xmlns="http://www.w3.org/2000/svg"     class="w-6 h-6 text-blue-500"    viewBox="0 0 20 20"  fill="red">
                                    <path fill-rule="evenodd"  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"  clip-rule="evenodd"  />
                                </svg>

                                <Typography textAlign="left" ml={1}  fontSize={14}
                            fontFamily="Inter-Regular">
                                   Numérisation des documents
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <svg     xmlns="http://www.w3.org/2000/svg"     class="w-6 h-6 text-blue-500"    viewBox="0 0 20 20"  fill="red">
                                    <path fill-rule="evenodd"  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"  clip-rule="evenodd"  />
                                </svg>

                                <Typography textAlign="left" ml={1}  fontSize={14}
                            fontFamily="Inter-Regular">
                                Creation du plan de classement
                                </Typography>
                            </ListItem>
                        </List> */}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography
                            sx={{ color: "red" }}
                            variant="h4"
                            textAlign="left"
                            fontSize={20}
                            fontFamily="Inter"
                        >
                            Notre service
                        </Typography>
                        <Typography
                            fontFamily="Inter-Roman"
                            lineHeight={2}
                            fontWeight='600'
                            sx={{
                                px:{xs:3,sm:3},
                                fontSize:{xs:12,lg:14}
                            }}
                        >
                            <ul className="text-left service">
                                {currentLang.getLocale() === "en"
                                    ? parse(` ${service.our_service.en} `)
                                    : parse(`${service.our_service.fr}`)}{" "}
                            </ul>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} mt={1}>
                    <Grid item xs={12} sm={6}>
                        <Typography
                            sx={{ color: "red" }}
                            variant="h4"
                            textAlign="left"
                            fontSize={20}
                            fontFamily="Inter"
                            
                        >
                            Valeur ajoutées pour le client
                        </Typography>
                        <Typography
                              fontFamily="Inter-Roman"
                              lineHeight={2}
                              fontWeight='600'
                              sx={{
                                px:{xs:3,sm:3},
                                fontSize:{xs:12,lg:14}
                            }}
                        >
 <ul className="text-left service">
                                {currentLang.getLocale() === "en"
                                    ? parse(` ${service.add_values.en} `)
                                    : parse(`${service.add_values.fr}`)}{" "}
                        </ul>
                        </Typography>
                       
                        
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography
                            sx={{ color: "red" }}
                            variant="h4"
                            textAlign="left"
                            fontSize={20}
                            fontFamily="Inter"
                        >
                            Experience client
                        </Typography>
                        <Typography
                             fontFamily="Inter-Roman"
                             lineHeight={2}
                             fontWeight='600'
                             sx={{
                                px:{xs:3,sm:3},
                                fontSize:{xs:12,lg:14}
                            }}
                        >
                            <ul className="text-left service">
                                {currentLang.getLocale() === "en"
                                    ? parse(` ${service.customer_experiences.en} `)
                                    : parse(`${service.customer_experiences.fr}`)}
                            </ul>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
export default ServiceCard;
