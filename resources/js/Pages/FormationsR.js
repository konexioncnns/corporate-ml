import { Box, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Accordions from "../components/Accordion";
import { Carousels } from "../components/Carousel";
import Section from "../components/Section";

import img from "../assets/images/img5.png"
import { SwiperFormation } from "../components/SwiperFormation";
import { SelectSection } from "../components/SelectSection";


export default function Formations() {
    return (
        <Box>
             
            <Box >
           <Carousels/>
           {/* <Accordions />  <SwiperFormation /> */}
            </Box>
            <SelectSection />

            
           
    
           
            
        </Box>
    );
}
