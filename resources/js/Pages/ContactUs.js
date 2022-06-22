import React, { useState } from "react";
import {
    Box,
    Typography,
    TextField,
    TextareaAutosize,
    Button,
    createTheme,
    Grid,
    Card,
    Container,
    CardHeader,
    Divider,
    Chip,
} from "@mui/material";
import { useForm } from "@inertiajs/inertia-react";
import { height } from "tailwindcss/defaultTheme";
import {
    AlternateEmail,
    AttachEmail,
    Calculate,
    Call,
    Email,
    EmailOutlined,
    Facebook,
    LinkedIn,
    LocalActivity,
    LocationCity,
    LocationOn,
    YouTube,
} from "@mui/icons-material";
const theme = createTheme();

const ContactUs = () => {
    const { data, setData, post, errors } = useForm({
        fullname: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const submitForm = (e) => {
        e.preventDefault();
    };
    function handleSubmit(e) {
        e.preventDefault();
        post(route("contact.save"));
    }

    return (
        <Container>
            <Card
                elevation={1}
                sx={{ width: "100%", borderRadius: 5 }}
                mb={5}
                height="20vh"
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} mt={3} px={5}>
                        <Box>
                            <Card>
                                <CardHeader
                                    title="Par telephone"
                                    sx={{
                                        backgroundColor: "red",
                                        height: 30,
                                        color: "white",
                                        fontFamily: "Inter",
                                    }}
                                />
                                <Typography
                                    fontFamily="Inter-Regular"
                                    variant="h7"
                                    mt={5}
                                    color="red"
                                >
                                    Du lundi au vendredi <br />
                                    De 9h à 17h
                                </Typography>
                                <Divider />
                                <Box mt={1}>
                                    <Typography
                                        variant="h7"
                                        textAlign="center"
                                        ml={3}
                                        fontFamily="Inter"
                                    >
                                        MALI
                                    </Typography>
                                    <Box display="flex">
                                        <Box ml={20}>
                                            <Call
                                                style={{
                                                    color: "red",
                                                    width: 50,
                                                    height: 50,
                                                }}
                                            />
                                        </Box>

                                        <Box
                                            ml={-20}
                                            justifyItems="center"
                                            width="100%"
                                        >
                                            <Typography
                                                fontFamily="Inter-Regular"
                                                textAlign="center"
                                            >
                                                (+223) 20 20 39 54
                                            </Typography>
                                            <Typography
                                                fontFamily="Inter-Regular"
                                                textAlign="center"
                                            >
                                                (+223) 67 13 55 75
                                            </Typography>
                                            <Typography
                                                fontFamily="Inter-Regular"
                                                textAlign="center"
                                            >
                                                (+223) 68 35 08 48
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box display="flex" my={2}>
                                        <LocationOn
                                            style={{
                                                marginLeft: 10,
                                                color: "red",
                                                width: 20,
                                                height: 20,
                                            }}
                                        />
                                        <Typography
                                            ml={2}
                                            fontFamily="Inter-Regular"
                                        >
                                            Porte 128, Rue 656 à Sogoniko en
                                            Face de FOFY Industrie Bamako-Mali
                                        </Typography>
                                    </Box>
                                </Box>

                                <Divider sx={{ color: "red" }} />
                                <Box mt={1}>
                                    <Typography
                                        variant="h7"
                                        textAlign="center"
                                        ml={3}
                                        fontFamily="Inter"
                                    >
                                        CANADA
                                    </Typography>
                                    <Box display="flex">
                                        <Box ml={20}>
                                            <Call
                                                style={{
                                                    color: "red",
                                                    width: 35,
                                                    height: 35,
                                                }}
                                            />
                                        </Box>

                                        <Box
                                            ml={-20}
                                            justifyItems="center"
                                            width="100%"
                                        >
                                            <Typography textAlign="center">
                                                (+1) 514 776 7755
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box display="flex" my={1}>
                                        <LocationOn
                                            style={{
                                                marginLeft: 10,
                                                color: "red",
                                                width: 20,
                                                height: 20,
                                            }}
                                        />
                                        <Typography
                                            ml={2}
                                            fontFamily="Inter-Regular"
                                        >
                                            1190 rue Poirier, Brossard, Québec,
                                            J4W 2A7
                                        </Typography>
                                    </Box>
                                    <Divider sx={{ color: "red" }} />
                                    <Box
                                        display="flex"
                                        my={1}
                                        alignItems="center"
                                    >
                                        <AlternateEmail
                                            style={{
                                                marginLeft: 10,
                                                color: "red",
                                                width: 45,
                                                height: 45,
                                            }}
                                        />
                                        <Typography
                                            variant="h5"
                                            fontSize={16}
                                            fontFamily="Inter-Regular"
                                        >
                                            contact@1simple1.com
                                        </Typography>
                                    </Box>
                                </Box>
                                <Divider />
                                <Typography textAlign="left" fontFamily="Inter">
                                    {" "}
                                    Suivez nous sur les reseau sociaux
                                </Typography>
                                <Box display="flex">
                                    <Typography>
                                        <Facebook
                                            style={{
                                                color: "red",
                                                width: 35,
                                                height: 35,
                                            }}
                                        />
                                    </Typography>
                                    <Typography>
                                        <LinkedIn
                                            style={{
                                                color: "red",
                                                width: 35,
                                                height: 35,
                                            }}
                                        />
                                    </Typography>
                                    <Typography>
                                        <YouTube
                                            style={{
                                                color: "red",
                                                width: 35,
                                                height: 35,
                                            }}
                                        />
                                    </Typography>
                                </Box>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} mt={3} px={5}>
                        <Box>
                            <Box component="form" noValidate autoComplete="off">
                                <Card>
                                    <CardHeader
                                        title="Formulaire de contact"
                                        sx={{
                                            backgroundColor: "red",
                                            height: 30,
                                            color: "white",
                                        }}
                                    />
                                    <TextField
                                        label="Full Name"
                                        variant="outlined"
                                        fullWidth
                                        fontFamily="Inter-Regular"
                                        sx={{ marginBottom: "20px !important" }}
                                        name="fullname"
                                        value={data.fullname}
                                        onChange={(e) =>
                                            setData("fullname", e.target.value)
                                        }
                                    />
                                    <Box
                                        component="form"
                                        sx={{
                                            "& .MuiTextField-root": {
                                                m: 0.5,
                                                width: "46%",
                                            },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            label="Email"
                                            variant="outlined"
                                            fullWidth
                                            fontFamily="Inter-Regular"
                                            sx={{
                                                marginBottom: "20px !important",
                                            }}
                                            name="email"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                        />
                                        <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          First name
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
  
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Last name
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                                        <TextField
                                            label="Phone number"
                                            variant="outlined"
                                            fontFamily="Inter-Regular"
                                            fullWidth
                                            sx={{
                                                marginBottom: "20px !important",
                                            }}
                                            name="phone"
                                            value={data.phone}
                                            onChange={(e) =>
                                                setData("phone", e.target.value)
                                            }
                                        />
                                    </Box>
                                    <TextField
                                        label="Subject"
                                        variant="outlined"
                                        fullWidth
                                        sx={{ marginBottom: "20px !important" }}
                                        name="subject"
                                        fontFamily="Inter-Regular"
                                        value={data.subject}
                                        onChange={(e) =>
                                            setData("subject", e.target.value)
                                        }
                                    />
                                    <TextField
                                        label="Message"
                                        variant="outlined"
                                        fontFamily="Inter-Regular"
                                        fullWidth
                                        sx={{ marginBottom: "20px !important" }}
                                        name="message"
                                        value={data.message}
                                        onChange={(e) =>
                                            setData("message", e.target.value)
                                        }
                                        multiline
                                        rows={5}
                                    />

                                    <Button
                                        variant="contained"
                                        type="submit"
                                        color="error"
                                        sx={{
                                            mb: 2,
                                            fontFamily: "Inter-Regular",
                                        }}
                                        onClick={handleSubmit}
                                    >
                                        Envoyer le message
                                    </Button>
                                </Card>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    );
};

export default ContactUs;
