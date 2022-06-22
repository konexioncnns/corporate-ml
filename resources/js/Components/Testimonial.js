import { Avatar, Box, Card, CardMedia, Paper, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft } from "@mui/icons-material";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Box
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }

const Testimonial = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows:true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
        
    
    }
    return (
        <Box display="flex" justifyContent="center">
            <Box sx={{ width: "50%" }}>
                <Slider {...settings}>
                    <CardT />
                    <CardT />
                    <CardT />
                    <CardT /> 
                     </Slider>
                
            </Box>
        </Box>
    );
};

const CardT = () => {
    return (
      <Card elevation={2}>
         <Box display="flex" alignItems="center" flexDirection="column">
       
       <Avatar
       imgProps={{
           style:{borderRadius:"50%"}
       }}
           src="https://www.tutorialrepublic.com/examples/images/clients/1.jpg"
           style={{
               width: 120,
               height: 120,
               border: "1px solid lightgray",
               padding: 7,
               borderRadius: "50%",
               justifyContent: "center",
           }}
       />
       <Typography   textAlign="center" variant="body1" fontFamily="Inter-Regular" fontSize={14}>
           J’ai eu la chance de travailler avec 1SIMPLE1 dans la mise en
           place d’un guichet unique pour les utilisateurs des services
           informatiques de notre organisation Louis Laganière,
           Directeur Opérations en technologie de l’information à la
           Société québécoise des infrastructures (SQI)
       </Typography>
       <Typography fontWeight="500" fontFamily="Inter" sx={{color:"red"}}>CANAM</Typography>
  
  </Box>
      </Card>

    );
};

export default Testimonial;
