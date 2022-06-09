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
import { useDispatch } from "react-redux";
//import { addCart } from "../../redux/featured/formation/formationSlice";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

/*Fin slideformationCard*/
import React from "react";
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
            <Box>
                <BannerImage
                    color="white"
                    title="Catalogue de formation"
                    subtitle="Técharger ou consulter en ligne notre catalogue de formation"
                    img={img1}
                />
            </Box>{" "}
            <Accordions />
            {/*  <Carousels/> <SwiperFormation /> */}
            <Box>
                <SelectSection />
            </Box>
            {/* SliderFormation */}
            <Box>
                <Container>
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
                                                sx={{
                                                    xs: { minWidth: 250 },
                                                    maxWidth: 350,
                                                    maxHeight: 450,
                                                }}
                                            >
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                         
                                                        sx={{maxHeight:140}}
                                                        image={`../img/formations/${item.image}`}
                                                        alt="green iguana"
                                                    />{" "}
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
                                                        <Box textAlign="left">
                                                            <Typography
                                                                mt={2}
                                                                gutterBottom
                                                                variant="h7"
                                                                fontWeight="600"
                                                                fontFamily="inter-Regular"
                                                                color="black"
                                                                textAlign="left"
                                                                noWrap
                                                            >
                                                                {" "}
                                                                {item.title.fr}
                                                            </Typography>
                                                        </Box>
                                                        <Box textAlign="left">
                                                            <Typography>
                                                                Duré: 48
                                                            </Typography>
                                                            <IconButton>
                                                                <AddShoppingCart
                                                                    color="error"
                                                                    onClick={() =>
                                                                        handleCart(
                                                                            item
                                                                        )
                                                                    }
                                                                />
                                                            </IconButton>
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
                                                        <Button
                                                            mt={2}
                                                            href={`/formation/${item.id}`}
                                                        >
                                                            <Typography
                                                                color="white"
                                                                variant="body2"
                                                                fontFamily="inter-Regular"
                                                            >
                                                                Voir la
                                                                formation
                                                            </Typography>
                                                        </Button>
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