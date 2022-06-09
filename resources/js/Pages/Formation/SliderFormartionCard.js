import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    IconButton,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Data from "../../constants/Data";
import ts from "../../assets/images/ts.jpg";
import {
    AddShoppingCart,
    ModeCommentRounded,
    PeopleAltSharp,
    ShoppingCart,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/featured/formation/formationSlice";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

const SliderFormation = () => {

  /*   const {formations  } = usePage().props 
    console.log("Formation: ",formations); */

    const dispatch = useDispatch();
    const handleCart = (product) => {
        dispatch(addCart(product));
        /* window.location.href = ('/cart')*/
    };

    return (
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
                    {Data.Formation.map((item, index) => {
                        return (
                            <SwiperSlide>
                                <Grid key={index} mt={5} item xs={12} sm={3}>
                                    <Card
                                        sx={{ maxWidth: 250, minHeight: 360 }}
                                    >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={item.image}
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
                                                        image={ts}
                                                        sx={{
                                                            width: 50,
                                                            height: 50,
                                                            borderRadius: 20,
                                                        }}
                                                    />
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Box textAlign="center" mb={1}>
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
                                                        Securite
                                                    </Typography>
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
                                                        {item.title}
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
                                                                handleCart(item)
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
                                                        Voir la formation
                                                    </Typography>
                                                </Button>
                                            </Stack>
                                        </CardContent>

                                        <CardActions></CardActions>

                                        <Box
                                            bgcolor="#f6f6f6"
                                            display="flex"
                                            sx={{
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <Box display="flex" mr={3}>
                                                <PeopleAltSharp />
                                                <Typography fontSize={12}>
                                                    172
                                                </Typography>
                                            </Box>
                                            <Box display="flex">
                                                <Typography fontSize={12}>
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
    );
};
export default SliderFormation;
