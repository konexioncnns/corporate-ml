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
import { red } from "tailwindcss/colors";
import Example from "./Blog";
import PageHeader from "@/Components/PageHeader";
import Support from "@/Components/Support";
const theme = createTheme();

const ContactUs = () => {
    const { data, setData, post, errors } = useForm({
        firstname: "",
        lastname: "",
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
        <div>  
            
          {/*   <PageHeader
            title=" 1SIMPLE1 TOUJOURS PLUS LOIN"
            subtitle=" Vous avez des questions concernant notre gamme de formations ou de services ?"
            /> */}
            <Support/>
        
        <Container>
          
            <Card
                elevation={1}
                sx={{ width: "100%", borderRadius: 5 }}
                mb={5}
                height="20vh"
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} mt={3} px={5}>
                        <Box>
                            <Card>
                                <CardHeader
                                    title="Par telephone"
                                    sx={{
                                        backgroundColor: "#D32F2F",
                                        height: 40,
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
                                        <Box mx="auto">
                                            <Call
                                                style={{
                                                    color: "red",
                                                    width: 30,
                                                    height: 30,
                                                }}
                                            />
                                        </Box>

                                        <Box
                                            mx="auto"
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
                                        <Box  ml="auto">
                                            <Call
                                                style={{
                                                    color: "red",
                                                    width: 30,
                                                    height: 30,
                                                }}
                                            />
                                        </Box>

                                        <Box
                                            mx="auto"
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
                    <Grid item xs={12} sm={8} mt={3} px={5}>
                        <Box>
                            <Box component="form" noValidate autoComplete="off">
                                <Card>
                                    <CardHeader
                                        title="Formulaire de contact"
                                        sx={{
                                            backgroundColor:"#D32F2F",
                                            height: 40,
                                            color: "white",
                                        }}
                                    />
                                    
                                    <div className="mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
                                <div className="col-span-2">
                                <Typography textAlign="left" fontFamily="Inter">Nom</Typography>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="firstname"
                                            value={data.firstname}
                                            onChange={(e) =>
                                                setData("firstname", e.target.value)
                                            }
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-2">
                                <Typography textAlign="left" fontFamily="Inter">Prenom</Typography>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="lastname"
                                            value={data.firstname}
                                            onChange={(e) =>
                                                setData("lastname", e.target.value)
                                            }
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-2">
                                <Typography textAlign="left" fontFamily="Inter">Email</Typography>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="email"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-2">
                                <Typography textAlign="left" fontFamily="Inter">Telephone</Typography>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="phone"
                                            value={data.phone}
                                            onChange={(e) =>
                                                setData("phone", e.target.value)
                                            }
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-4">
                                <Typography textAlign="left" fontFamily="Inter">Subject</Typography>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="subject"
                                            value={data.subject}
                                            onChange={(e) =>
                                                setData("subject", e.target.value)
                                            }subject
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                               
                                <div className="col-span-4">
                                   <Typography textAlign="left" fontFamily="Inter">Message</Typography>
                                    <div className="mt-1">
                                        <textarea
                                            type="text"
                                            name="message"
                                            value={data.message}
                                            onChange={(e) =>
                                                setData("message", e.target.value)
                                            }message
                                            multiple
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-40"
                                        />
                                    </div>
                                </div>
                                 
                            </div>

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
        </div>
    );
};

export default ContactUs;
