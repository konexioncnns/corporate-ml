import { ArrowForward } from '@mui/icons-material'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import imgService from "../assets/images/service1.png";
import  imgiso from '../assets/images/iso-slide1.png';
export const SectionImage = () => {
  return (
    <Box
                py={{ xs: 3, md: 12 }}
                sx={{
                    background: "linear-gradient(to right, #fc5c7d, #6a82fb)",
                }}
            >
                <Container>
                    <Grid container alignItems="center">
                        <Grid item xs={12} lg={5}>
                            <Typography
                                variant="h2"
                                my={1}
                                pl={2}
                                fontFamily="Inter"
                                textAlign="left"
                                color="white"
                            >
                                Networking solutions for worldwide communication
                            </Typography>

                            <Box textAlign="left">
                                <Button

                                    variant="contained"
                                    size="large"
                                    sx={{ borderRadius: 10,}}
                                >
                                    Ens savoir plus
                                    <ArrowForward />
                                </Button>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            lg={6}
                            sx={{
                                ml: { xs: -2, lg: "auto" },
                                mt: { xs: 6, lg: 0 },
                            }}
                        >
                            <img src={imgService} height={350} width={400} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
  )
}
