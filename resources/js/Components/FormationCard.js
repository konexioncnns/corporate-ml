import {
    Comment,
    CommentBankOutlined,
    CommentBankTwoTone,
    ModeCommentRounded,
    PeopleAltSharp,
} from "@mui/icons-material";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Container,
    Divider,
    Grid,
    Stack,
    Typography,
} from "@mui/material";

import React from "react";
import img from "../assets/images/student1.jpg";
import img3 from "../assets/images/itil4cfr.png";
import img2 from "../assets/images/itil4cfr.png";

const FormationCard = () => {
    return (
        <Container>
            <Grid container alignItems="center">
                <Grid mt={5} item xs={12} sm={3}>
                    <Card sx={{ maxWidth: 250, minHeight: 350 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={img}

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
                                <Box>
                                <CardMedia
                                component="img" image={img} sx={{width:50, height:50,borderRadius:20}} />
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
                                    >
                                        {" "}
                                        ISO 27001 Introduction
                                    </Typography>
                                </Box>
                                <Box textAlign="left">
                                    <Typography>Duré: 48</Typography>
                                </Box>
                            </Box>

                            <Stack
                                position="relative"
                                sx={{ bgcolor: "red", borderRadius: 10 }}
                                mt={5}
                            >
                                <Button mt={2} href='/formation/1'>
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
                            sx={{ justifyContent: "space-between" }}
                        >
                            <Box display="flex" mr={3}>
                                <PeopleAltSharp />
                                <Typography fontSize={12}>172</Typography>
                            </Box>
                            <Box display="flex">
                                <Typography fontSize={12}>0</Typography>
                                <ModeCommentRounded size="small" />
                            </Box>
                        </Box>
                    </Card>
                </Grid>
                <Grid mt={5} item xs={12} sm={3}>
                    <Card sx={{ maxWidth: 250, minHeight: 350 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={img3}
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
                                <Box>
                                    <img src={img} width="60" heightt="60" />
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
                                    >
                                        {" "}
                                        ISO 27001 Introduction
                                    </Typography>
                                </Box>
                                <Box textAlign="left">
                                    <Typography>Duré: 48</Typography>
                                </Box>
                            </Box>

                            <Stack
                                position="relative"
                                sx={{ bgcolor: "red", borderRadius: 10 }}
                                mt={5}
                            >
                                <Button mt={2}>
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
                            sx={{ justifyContent: "space-between" }}
                        >
                            <Box display="flex" mr={3}>
                                <PeopleAltSharp />
                                <Typography fontSize={12}>172</Typography>
                            </Box>
                            <Box display="flex">
                                <Typography fontSize={12}>0</Typography>
                                <ModeCommentRounded size="small" />
                            </Box>
                        </Box>
                    </Card>
                </Grid>
                <Grid mt={5} item xs={12} sm={3}>
                    <Card sx={{ maxWidth: 250, minHeight: 350 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={img}
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
                                <Box>
                                    <img src={img} width="60" heightt="60" />
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
                                    >
                                        {" "}
                                        ISO 27001 Introduction
                                    </Typography>
                                </Box>
                                <Box textAlign="left">
                                    <Typography>Duré: 48</Typography>
                                </Box>
                            </Box>

                            <Stack
                                position="relative"
                                sx={{ bgcolor: "red", borderRadius: 10 }}
                                mt={5}
                            >
                                <Button mt={2}>
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
                            sx={{ justifyContent: "space-between" }}
                        >
                            <Box display="flex" mr={3}>
                                <PeopleAltSharp />
                                <Typography fontSize={12}>172</Typography>
                            </Box>
                            <Box display="flex">
                                <Typography fontSize={12}>0</Typography>
                                <ModeCommentRounded size="small" />
                            </Box>
                        </Box>
                    </Card>
                </Grid>


                <Grid mt={5} item xs={12} sm={3}>
                    <Card sx={{ maxWidth: 250, minHeight: 350 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={img}
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
                                <Box>
                                    <img src={img} width="60" heightt="60" />
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
                                    >
                                        {" "}
                                        ISO 27001 Introduction
                                    </Typography>
                                </Box>
                                <Box textAlign="left">
                                    <Typography>Duré: 48</Typography>
                                </Box>
                            </Box>

                            <Stack
                                position="relative"
                                sx={{ bgcolor: "red", borderRadius: 10 }}
                                mt={5}
                            >
                                <Button mt={2}>
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
                            sx={{ justifyContent: "space-between" }}
                        >
                            <Box display="flex" mr={3}>
                                <PeopleAltSharp />
                                <Typography fontSize={12}>172</Typography>
                            </Box>
                            <Box display="flex">
                                <Typography fontSize={12}>0</Typography>
                                <ModeCommentRounded size="small" />
                            </Box>
                        </Box>
                    </Card>
                </Grid>

            </Grid>
        </Container>
    );
};
export default FormationCard;
