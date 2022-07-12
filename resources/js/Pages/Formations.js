import {
    Box,
    CardMedia,
    Container,
    Grid,
    Typography,
    Button,
    Card,
    CardActionArea,
    CardActions,
    IconButton,
    CardContent,
    Stack,
    FormControl,
    Select,
    MenuItem,
    RadioGroup,
    FormControlLabel,
    Radio,
} from "@mui/material";
/*Start slideformationCard*/
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ts from "../assets/images/ts.jpg";
import {
    AddShoppingCart,
    ModeCommentRounded,
    PeopleAltSharp,
    ShoppingCart,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
//import { addCart } from "../../redux/featured/formation/formationSlice";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

/*Fin slideformationCard*/
import React, { useState } from "react";
import Accordions from "../components/Accordion";
import { Carousels } from "../components/Carousel";
import Section from "../components/Section";

import img from "../assets/images/img5.png";
import img1 from "../assets/images/head2.jpg";
import { SwiperFormation } from "../components/SwiperFormation";
import { SelectSection } from "../components/SelectSection";
import FormationCard from "../components/FormationCard";
import { BannerImage } from "../components/BannerImage";
import Statistique from "../components/Statistique";
import { SearchForm } from "../components/SearchForm";
import SliderFormation from "./Formation/SliderFormartionCard";
import { addCart } from "@/redux/featured/formation/formationSlice";
import Data from "@/constants/Data";
import Lang from "lang.js";
import PageHeader from "@/Components/PageHeader";
import AccodionDomaine from "./AccodionDomaine";
import Recherchex from "./Formation/Recherche";
import RechercheInput from "./Formation/RechercheInput";

const currentLang = new Lang();

const FormationData = [{ id: 1 }];

export default function Formations({ data }) {
    const dispatch = useDispatch();
    const handleCart = (product) => {
        dispatch(addCart(product));
        /* window.location.href = ('/cart')*/
    };
    console.log("Formation: ", data);
  
   
    return (
        <Box mt={-11}>
            <PageHeader
                title=" Nos offres de formation professionnelle"
                subtitle=" Nos offres de formation professionnelle et continue"
            >
                
                </PageHeader>

            {/*  <Carousels/> <SwiperFormation /> */}

            {/* Recherche */}
           <RechercheInput dataForm={data} />
            <AccodionDomaine />
            {/* SliderFormation */}
            <Box>
                <Container>
                    <Typography fontFamily="Inter-Roman" color="red" variant="h5">
                        Nos formation à la une !
                    </Typography>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={4}
                        navigation={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log("slide change")}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            360: {
                                // width: 360,
                                slidesPerView: 1,
                            },
                            480: {
                                // width: 480,
                                slidesPerView: 1,
                            },
                            576: {
                                // width: 576,
                                slidesPerView: 2,
                            },
                            768: {
                                // width: 768,
                                slidesPerView: 4,
                            },
                        }}
                    >
                        <Grid container alignItems="center">
                            {data.map((item, index) => {
                                return (
                                    <SwiperSlide>
                                        <Grid
                                            key={index}
                                            mt={5}
                                            item
                                            xs={12}
                                            sm={3}
                                        >
                                            <Card
                                                elevation={3}
                                                sx={{
                                                    xs: { minWidth: 250 },
                                                    maxWidth: 350,
                                                    maxHeight: 450,
                                                }}
                                            >
                                                <CardActionArea>
                                                    <InertiaLink
                                                        href={`/formation/${item.id}`}
                                                    >
                                                        <CardMedia
                                                            component="img"
                                                            sx={{
                                                                maxHeight: 140,
                                                            }}
                                                            image={`../img/formations/${item.image}`}
                                                            alt="green iguana"
                                                        />
                                                    </InertiaLink>
                                                </CardActionArea>
                                                <CardContent>
                                                    <Box
                                                        position="relative"
                                                        width="100%"
                                                        mt={-4}
                                                        display="flex"
                                                        justifyContent="center"
                                                    >
                                                        <Box href="http:1simple1.com">
                                                            <CardMedia
                                                                component="img"
                                                                image={`../img/${item.formateur.image}`}
                                                                sx={{
                                                                    width: 50,
                                                                    height: 50,
                                                                    borderRadius: 20,
                                                                }}
                                                            />
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <Box
                                                            textAlign="center"
                                                            mb={1}
                                                        >
                                                            {currentLang.getLocale() ===
                                                            "en" ? (
                                                                <Typography
                                                                    mb={2}
                                                                    gutterBottom
                                                                    variant="h7"
                                                                    fontWeight="700"
                                                                    fontFamily="inter-Regular"
                                                                    color="red"
                                                                    textAlign="center"
                                                                >
                                                                    {" "}
                                                                    {
                                                                        item
                                                                            .domaine
                                                                            .title
                                                                            .en
                                                                    }
                                                                </Typography>
                                                            ) : (
                                                                <Typography
                                                                    mb={2}
                                                                    gutterBottom
                                                                    variant="h7"
                                                                    fontWeight="700"
                                                                    fontFamily="inter-Regular"
                                                                    color="red"
                                                                    textAlign="center"
                                                                >
                                                                    {" "}
                                                                    {
                                                                        item
                                                                            .domaine
                                                                            .title
                                                                            .fr
                                                                    }
                                                                </Typography>
                                                            )}

                                                            <br></br>
                                                        </Box>
                                                        <Box>
                                                            <Typography
                                                                textAlign="center"
                                                                my={2}
                                                                gutterBottom
                                                                variant="h7"
                                                                fontWeight="600"
                                                                fontFamily="inter-Regular"
                                                                color="black"
                                                                noWrap
                                                            >
                                                                {" "}
                                                                {item.title.fr}
                                                            </Typography>
                                                        </Box>
                                                        <Box>
                                                            {currentLang.getLocale() ===
                                                            "en" ? (
                                                                <Typography
                                                                    textAlign="left"
                                                                    sx={{
                                                                        display:
                                                                            "-webkit-box",
                                                                        overflow:
                                                                            "hidden",
                                                                        WebkitBoxOrient:
                                                                            "vertical",
                                                                        WebkitLineClamp: 2,
                                                                    }}
                                                                    fontFamily="Inter-Regular"
                                                                >
                                                                    {
                                                                        item
                                                                            .description
                                                                            .en
                                                                    }
                                                                </Typography>
                                                            ) : (
                                                                <Typography
                                                                    textAlign="left"
                                                                    sx={{
                                                                        display:
                                                                            "-webkit-box",
                                                                        overflow:
                                                                            "hidden",
                                                                        WebkitBoxOrient:
                                                                            "vertical",
                                                                        WebkitLineClamp: 3,
                                                                    }}
                                                                    fontFamily="Inter-Regular"
                                                                >
                                                                    {
                                                                        item
                                                                            .description
                                                                            .fr
                                                                    }
                                                                </Typography>
                                                            )}
                                                            <Box
                                                                display="flex"
                                                                justifyContent="space-between"
                                                            >
                                                                {/* <IconButton>   <AddShoppingCart
                                                                    color="error"
                                                                    onClick={() =>
                                                                        handleCart(
                                                                            item
                                                                        )
                                                                    }
                                                                />
                                                            </IconButton> */}
                                                            </Box>
                                                        </Box>
                                                    </Box>

                                                    <Stack
                                                        position="relative"
                                                        sx={{
                                                            bgcolor: "red",
                                                            borderRadius: 10,
                                                        }}
                                                        mt={5}
                                                    >
                                                        <InertiaLink
                                                            href={`/formation/${item.id}`}
                                                        >
                                                            <Button mt={2}>
                                                                <Typography
                                                                    color="white"
                                                                    variant="body2"
                                                                    fontFamily="inter-Regular"
                                                                >
                                                                    Voir la
                                                                    formation
                                                                </Typography>
                                                            </Button>
                                                        </InertiaLink>
                                                    </Stack>
                                                </CardContent>

                                                <CardActions></CardActions>

                                                <Box
                                                    bgcolor="#f6f6f6"
                                                    display="flex"
                                                    sx={{
                                                        justifyContent:
                                                            "space-between",
                                                    }}
                                                >
                                                    <Box display="flex" mr={3}>
                                                        <PeopleAltSharp />
                                                        <Typography
                                                            fontSize={12}
                                                        >
                                                            172
                                                        </Typography>
                                                    </Box>
                                                    <Box display="flex">
                                                        <Typography
                                                            fontSize={12}
                                                        >
                                                            0
                                                        </Typography>
                                                        <ModeCommentRounded size="small" />
                                                    </Box>
                                                </Box>
                                            </Card>
                                        </Grid>
                                    </SwiperSlide>
                                );
                            })}{" "}
                        </Grid>
                    </Swiper>
                </Container>
            </Box>
            <Box>
                <Statistique />
            </Box>
        </Box>
    );
}
