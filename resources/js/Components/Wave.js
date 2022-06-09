import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import Wave from "react-wavify";


import { Featured } from "./Featured";
import img from '../assets/images/img6.png'
import { MonetizationOn } from "@mui/icons-material";
import Typical from "react-typical";
export const WaveComponent = () => {
    return (
        <Box>

            <Box   bgcolor="#86c4e8" >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <Typography variant='h3' fontFamily='Inter' color='white'>
                                Nos services
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box display='flex'>

                      <Typography variant='h5' fontFamily='Inter' color='white'>
                        Les services de 1SIMPLE1 sont:
                            <Typical
                            steps={["Archivage numeriques", 2000, "Placement TI", 2800,"Archivage numeriques", 2000, "Placement TI", 2800]}
                            loop={Infinity}
                            wrapper="p"
                        />
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>



                </Box> <Wave

                    className="wave"
                    fill="#86c4e8" /*#140a42*/
                    paused={false}
                    options={{
                        height: 20,
                        amplitude: 45,
                        speed: 0.1,
                        points: 10,
                    }}
                />
        </Box>
    );
};
