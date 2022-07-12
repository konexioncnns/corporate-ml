import {
    ArrowForward,
    CircleOutlined,
    ExpandMore,
    Facebook,
    Share,
    Twitter,
    WhatsApp,
} from "@mui/icons-material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Breadcrumbs,
    Button,
    Card,
    CardHeader,
    Divider,
    Grid,
    Link,
    ListItem,
    Stack,
    Tab,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { SyntheticEvent } from "react";
import { useParams } from "react-router-dom";
import { LabelButton } from "../components/LabelButton";
import parse from "html-react-parser";
import {
    FacebookIcon,
    FacebookShareButton,
    FacebookShareCount,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from "react-share";
import StickyBox from "react-sticky-box";
import { useDispatch } from "react-redux";
import { addCart } from "@/redux/featured/formation/formationSlice";
import { red } from "@mui/material/colors";
import { gray } from "tailwindcss/colors";


function Objectifs() {
    return (
        <Box>
            <Typography textAlign="left" fontFamily="Inter-Regular">
                Après avoir suivi la formation de coach professionnel, vous
                parviendrez à atteindre les objectifs suivants :
                <li>
                    acquérir les techniques et outils spécifiques à la
                    profession de coach ;
                </li>
            </Typography>
        </Box>
    );
}

/* Prereaquis */
function Prerequis() {
    return (
        <Typography textAlign="left" fontFamily="Inter-Regular">
            Suivre la formation PECB ISO 37301 Lead Implementer, nécessite les
            prérequis suivants :
            <li>
                avoir des connaissances basiques sur les normes ISO standards
                applicables aux systèmes de gestion ;
            </li>
            <li>
                avoir des connaissances basiques de la norme ISO 37301:2021 ou
                des directives de la norme ISO 19600 ;{" "}
            </li>
            <li>
                avoir des connaissances fondamentales sur la mise en place de
                systèmes de gestion.
            </li>
        </Typography>
    );
}
const FormationDetail = ({ data }) => {
    const [value, setValue] = React.useState("1");
    const { id } = useParams();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    const dispatch = useDispatch();
    const handleCart = (product) => {
        dispatch(addCart(product));
        /* window.location.href = ('/cart')*/
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    console.log("Formation: ", data);

    return (
        <Box>
            {" "}
            <Box ml={16}>
                <Breadcrumbs my={3} aria-label="breadcrumb">
                    <Link underline="hover" href="/">
                        MUI
                    </Link>
                    <Link
                        underline="hover"
                        href="/material-ui/getting-started/installation/"
                    >
                        Core
                    </Link>
                    <Typography color="white">Breadcrumbs</Typography>
                </Breadcrumbs>
            </Box>
            <Box bgcolor={red[500]} height={150} s>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Box ml={16}>
                        <Typography
                            fontStyle="normal"
                            fontSize={30}
                            fontWeight="700"
                            color="white"
                            fontFamily="Inter-Roman"
                        >
                            {data.title}
                        </Typography>
                        <Typography
                            fontSize={13}
                            color="white"
                            fontFamily="Inter-Roman"
                        >
                            Formateur:{" "}
                            {`${data.formateur.firstname} ${data.formateur.lastname}`}
                        </Typography>
                    </Box>
                    <Box justifyContent="space-between" mr={16}>
                        <Typography fontFamily="Inter-regular" color="white">
                            <Share />
                            Partagez
                        </Typography>
                        <FacebookShareButton
                            url={`http://localhost:8000/formation/${data.id}`}
                            quote={"1simple1 toujours plus loin!"}
                            hashtag={"#1simple1"}
                            description={"aiueo"}
                            className="Demo__some-network__share-button"
                        >
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>
                        <TwitterShareButton
                            title={"test"}
                            url={`http://localhost:8000/formation/${data.id}`}
                            hashtags={["#1simple1", "hashtag2"]}
                        >
                            <TwitterIcon size={32} round />
                        </TwitterShareButton>
                        <WhatsappShareButton
                            title="1SIMPLE1"
                            url={`http://localhost:8000/formation/${data.id}`}
                        >
                            <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                    </Box>
                </Box>
            </Box>
            <Box mx={10} sx={{ bgColor: "white" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={8}>
                        {matches ? (
                            <Box>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMore />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        Objectifs

                                    </AccordionSummary>
                                    <AccordionDetails>

                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMore />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        Objectifs

                                    </AccordionSummary>
                                    <AccordionDetails>
                                        
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMore />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        Objectifs

                                    </AccordionSummary>
                                    <AccordionDetails>
                                        
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMore />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        Objectifs

                                    </AccordionSummary>
                                    <AccordionDetails>
                                        
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        ) : (
                            <Box
                                textAlign="left"
                                sx={{ minHeight: 600, width: "100%" }}
                            >
                                <Typography
                                    mt={3}
                                    textAlign="left"
                                    variant="body2"
                                    fontFamily="Inter-Regular"
                                    lineHeight={2}
                                    letterSpacing={1}
                                >
                                    <ul>{parse(data.description)}</ul>
                                </Typography>

                                <Box
                                    sx={{ width: "100%", typography: "body1" }}
                                >
                                    <TabContext value={value}>
                                        <Box
                                            sx={{
                                                borderBottom: 1,
                                                borderColor: "divider",
                                            }}
                                        >
                                            <TabList
                                                onChange={handleChange}
                                                aria-label="lab API tabs example"
                                            >
                                                <Tab
                                                    sx={{
                                                        fontStyle: "OpenSans",
                                                        fontWeight: "bold",
                                                    }}
                                                    label="Objectifs"
                                                    value="1"
                                                />
                                                <Tab
                                                    sx={{ fontWeight: "bold" }}
                                                    label="Programme"
                                                    value="2"
                                                />
                                                <Tab
                                                    sx={{ fontWeight: "bold" }}
                                                    label="Prérequis"
                                                    value="3"
                                                />
                                                <Tab
                                                    sx={{ fontWeight: "bold" }}
                                                    label="Formateur"
                                                    value="4"
                                                />
                                                <Tab
                                                    sx={{ fontWeight: "bold" }}
                                                    label="Pour qui ?"
                                                    value="5"
                                                />
                                            </TabList>
                                        </Box>
                                        <Box
                                            sx={{
                                                border: "0.5px solid",
                                                borderColor: "#c4bcbc",
                                            }}
                                        >
                                            <TabPanel value="1">
                                                <ul
                                                    className="accordion"
                                                    dangerouslySetInnerHTML={{
                                                        __html: data.overview,
                                                    }}
                                                ></ul>
                                            </TabPanel>
                                            <TabPanel value="2">
                                                <Typography fontFamily="Inter-Regular">
                                                    <ul
                                                        className="accordion"
                                                        dangerouslySetInnerHTML={{
                                                            __html: data.programme,
                                                        }}
                                                    ></ul>
                                                </Typography>
                                            </TabPanel>
                                            <TabPanel value="3">
                                                {Prerequis()}
                                            </TabPanel>
                                            <TabPanel value="4">
                                                {" "}
                                                {`${data.formateur.firstname} ${data.formateur.lastname}`}
                                            </TabPanel>
                                            <TabPanel value="5">
                                                Pour qui ?
                                            </TabPanel>
                                        </Box>
                                    </TabContext>
                                </Box>
                            </Box>
                        )}
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Box
                            mb={3}
                            textAlign="left"
                            bgcolor="white"
                            sx={{
                                minHeight: "auto",
                                width: "100%",
                                mt: { xs: 10, sm: -0 },
                            }}
                        >
                            <Card
                                elevation={5}
                                textAlign="right"
                                mx={4}
                                sx={{
                                    boxShadow: 5,
                                    borderRadius: 2,
                                    height: 500,
                                    width: {
                                        xs: "250px",
                                        sm: "280px",
                                        md: "300px",
                                        lg: "320px",
                                    },
                                    borderWidth: 2,
                                }}
                            >
                                <CardHeader
                                    title="Toutes les formations"
                                    sx={{
                                        fontSize: 14,
                                        fontWeight: "600",
                                        fontFamily: "Inter-Roman",
                                        backgroundColor: "red",
                                        height: 40,
                                        color: "white",
                                    }}
                                />
                                <Typography
                                    mt={3}
                                    textAlign="center"
                                    fontWeight="800"
                                    fontSize={16}
                                    fontFamily="Inter-Roman"
                                >
                                    Detail de la formation
                                </Typography>

                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    my={2}
                                    mx={2}
                                >
                                    <Box flex={1 / 2}>
                                        <Typography
                                            color="black"
                                            fontWeight="600"
                                            fontSize={14}
                                            fontFamily="Inter-Roman"
                                        >
                                            Formation
                                        </Typography>
                                    </Box>
                                    <Box flex={1 / 2}>
                                        <Typography
                                            textAlign="left"
                                            color="black"
                                            fontWeight="600"
                                            fontSize={14}
                                            fontFamily="Inter-Roman"
                                        >
                                            {data.title}
                                        </Typography>
                                    </Box>
                                    <Divider />
                                </Box>

                                <Divider variant="middle" />

                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    my={2}
                                    mx={2}
                                >
                                    <Box flex={1 / 2}>
                                        <Typography
                                            color="black"
                                            fontWeight="600"
                                            fontSize={14}
                                            fontFamily="Inter-Roman"
                                        >
                                            Durée
                                        </Typography>
                                    </Box>
                                    <Box flex={1 / 2}>
                                        <Typography
                                            textAlign="left"
                                            color="black"
                                            fontWeight="600"
                                            fontSize={14}
                                            fontFamily="Inter-Roman"
                                        >
                                            2 jours (14 heures)
                                        </Typography>
                                    </Box>
                                </Box>

                                <Divider variant="middle" />

                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    my={2}
                                    mx={2}
                                >
                                    <Box flex={1 / 2}>
                                        <Typography
                                            color="black"
                                            fontWeight="600"
                                            fontSize={14}
                                            fontFamily="Inter-Roman"
                                        >
                                            Prix:
                                        </Typography>
                                    </Box>
                                    <Box flex={1 / 2}>
                                        <Typography
                                            textAlign="left"
                                            color="red"
                                            fontWeight="bold"
                                            fontSize={18}
                                            fontFamily="Inter-Roman"
                                        >
                                            {data.price} FCFA
                                        </Typography>
                                    </Box>
                                </Box>

                                <Divider variant="middle" />
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    my={2}
                                    mx={2}
                                >
                                    <Box flex={1 / 2}>
                                        <Typography
                                            color="black"
                                            fontWeight="600"
                                            fontSize={14}
                                            fontFamily="Inter-Roman"
                                        >
                                            Langue
                                        </Typography>
                                    </Box>
                                    <Box flex={1 / 2}>
                                        <Typography
                                            textAlign="left"
                                            color="black"
                                            fontSize={14}
                                            fontWeight="600"
                                            fontFamily="Inter-Roman"
                                        >
                                            Anglais,Français
                                        </Typography>
                                    </Box>
                                </Box>
                                <Divider variant="middle" />
                                <Stack mx={3} position="relative" mt={5}>
                                    <Button
                                        mt={2}
                                        sx={{
                                            alignItems: "center",
                                            borderRadius: 5,
                                            fontSize: 14,
                                            fontWeight: "600",
                                            fontFamily: "Inter-Roman",
                                        }}
                                        justifyContent="center"
                                        variant="contained"
                                        color="error"
                                        onClick={() => handleCart(data)}
                                    >
                                        Ajouter au panier
                                    </Button>
                                </Stack>
                                <Box width="100%">
                                    <Box
                                        mt={5}
                                        bgcolor={gray}
                                        sx={{
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Typography
                                            textAlign="center"
                                            color="black"
                                            fontWeight="500"
                                            fontFamily="Inter-Roman"
                                        >
                                            Partager cette formation
                                        </Typography>
                                        <Box justifyContent="space-around">
                                            <FacebookShareButton
                                                url={`http://localhost:8000/formation/${data.id}`}
                                                quote={
                                                    "1simple1 toujours plus loin!"
                                                }
                                                hashtag={"#1simple1"}
                                                description={"aiueo"}
                                                className="Demo__some-network__share-button"
                                            >
                                                <FacebookIcon size={15} round />
                                            </FacebookShareButton>
                                            <TwitterShareButton
                                                title={"test"}
                                                url={`http://localhost:8000/formation/${data.id}`}
                                                hashtags={[
                                                    "#1simple1",
                                                    "hashtag2",
                                                ]}
                                            >
                                                <TwitterIcon size={15} round />
                                            </TwitterShareButton>
                                            <WhatsappShareButton
                                                title="1SIMPLE1"
                                                url={`http://localhost:8000/formation/${data.id}`}
                                            >
                                                <WhatsappIcon size={15} round />
                                            </WhatsappShareButton>
                                        </Box>
                                    </Box>
                                </Box>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
export default FormationDetail;
