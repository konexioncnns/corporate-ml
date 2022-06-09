import { ArrowForward, Computer } from "@mui/icons-material";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import img from "../assets/images/service1.png";
import icon1 from "../assets/icons/computer.png";
import icon2 from "../assets/icons/archiver.png";
export const ServiceSection = () => {
    return (
        <Box>
            <Box mt={10}>
                <Container>
                    <Typography variant="h4" textAlign="center" fontFamily='Inter'>
                    Le service que nous offrons sont spécifiquement conçu pour répondre à vos besoins.
                    </Typography>
                </Container>
            </Box>
            <Box mt={10}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={4}>
                            <Box display="flex">
                                <Box mr={1}>
                                    <img src={icon1} width="100" height="100" />
                                </Box>

                                <Box>
                                    <Typography variant="h5" textAlign="left">
                                        Software & Integration
                                    </Typography>
                                    <Typography
                                        textAlign="left"
                                        fontFamily="Inter-Regular"
                                    >
                                        Duis mollis gravida commodo id luctus
                                        erat porttitor ligula, eget lacinia odio
                                        sem aget elit nullam quis risus eget.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Box display="flex">
                                <Box mt={-1} mr={1}>
                                    <img src={icon2} width="100" height="100" />
                                </Box>

                                <Box>
                                    <Typography variant="h5" textAlign="left">
                                        Archivage numérique
                                    </Typography>
                                    <Typography
                                        textAlign="left"
                                        fontFamily="Inter-Regular"
                                    >
                                        Duis mollis gravida commodo id luctus
                                        erat porttitor ligula, eget lacinia odio
                                        sem aget elit nullam quis risus eget.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Box display="flex">
                              
                            <Box mr={1} >
                            <img src={icon1} width="100" height="100" />
                            </Box>
                             
                                <Box>
                                    <Typography variant="h5" textAlign="left">
                                        Software & Integration
                                    </Typography>
                                    <Typography  textAlign="left" fontFamily="Inter-Regular">
                                    Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};
