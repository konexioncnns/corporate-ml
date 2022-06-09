import { Grid3x3 } from "@mui/icons-material";
import React from "react";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Typical from "react-typical";
import Footer from "./Layout/Footer";
import Section from "./Section";
import { IMAGES } from "../constants";

import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'
import img7 from '../assets/images/img7.png'
import  imgiso from '../assets/images/iso-slide1.png';


import Wave from "react-wavify";
import messages from '../../../public/messages'
import Lang from 'lang.js' 
const lang = new Lang({ messages })
const msg = lang.get('messages.slogan')
console.log(msg)
import { SectionImage } from "./SectionImage";

export const Carousels = () => {
    function Type() {
        return (
            <Typical
                steps={["1SIMPLE1", 1000, msg, 2800]}
                loop={Infinity}
                wrapper="p"
            />
        );
    }
    return (
        <Box  mt={-11}>
            <Carousel showThumbs={false} autoPlay>
                <div >
                <SectionImage />
                   {/*   <img src={img4} />
                    <Typography
                        color="#f44336"
                        fontWeight="bold"
                        variant="h2"
                        sx={{ sm: "none" }}
                        mt={-60}
                    >
                        {" "}
                        {Type()}
                    </Typography> */}
                </div>
                <div>
                    <img src={img4} />
                    <Typography
                        color="#f44336"
                        fontWeight="bold"
                        variant="h2"
                        sx={{ sm: "none" }}
                        mt={-60}
                    >
                        {" "}
                        {Type()}
                    </Typography>
                </div>
                <div>
                    <img src={imgiso} />
                    <Typography
                        color="#f44336"
                        fontWeight="bold"
                        variant="h2"
                        sx={{ sm: "none" }}
                        mt={-60}
                    >
                        {" "}
                        {Type()}
                    </Typography>
                </div>
                {/* <div>
                    <img src={img7} />
                </div> */}
            </Carousel>

        </Box>
    );
};
