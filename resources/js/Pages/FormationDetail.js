import {
    ArrowForward,
    CircleOutlined,
    Facebook,
    Share,
    Twitter,
    WhatsApp,
} from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
    Breadcrumbs,
    Button,
    Card,
    CardHeader,
    Divider,
    Grid,
    Link,
    ListItem,
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
        <Box mx={10} sx={{ bgColor: "white" }}>
           
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                    <Box
                        textAlign="left"
                        sx={{ minHeight: 600, width: "100%" }}
                    >
                           
                        <Box
                            display="flex"
                            bgcolor="red"
                            alignItems="center"
                            py={3}
                            justifyContent="space-between"
                        >
                            <Box>
                                <Breadcrumbs my={3} aria-label="breadcrumb">
        <Link underline="hover" color="white" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="white"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="white">Breadcrumbs</Typography>
      </Breadcrumbs>
                                <Typography
                                    variant="h5"
                                    color="white"
                                    fontFamily="Inter"
                                >
                                    {data.title}
                                </Typography>
                                <Typography
                                    fontSize={13}
                                    color="white"
                                    fontFamily="Inter-regular"
                                >
                                    Formateur:{" "}
                                    {`${data.formateur.firstname} ${data.formateur.lastname}`}
                                </Typography>
                            </Box>
                            <Box justifyContent="space-between">
                                <Typography
                                    fontFamily="Inter-regular"
                                    color="white"
                                >
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

                        <Box sx={{ width: "100%", typography: "body1" }}>
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
                                        <Box
                                            dangerouslySetInnerHTML={{
                                                __html: data.overview,
                                            }}
                                        ></Box>
                                    </TabPanel>
                                    <TabPanel value="2">
                                        <Box
                                            dangerouslySetInnerHTML={{
                                                __html: data.programme,
                                            }}
                                        ></Box>
                                    </TabPanel>
                                    <TabPanel value="3">{Prerequis()}</TabPanel>
                                    <TabPanel value="4">
                                        {" "}
                                        {`${data.formateur.firstname} ${data.formateur.lastname}`}
                                    </TabPanel>
                                    <TabPanel value="5">Pour qui ?</TabPanel>
                                </Box>
                            </TabContext>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Box
                        mb={3}
                        textAlign="left"
                        bgcolor="white"
                        sx={{ minHeight: "auto", width: "100%" }}
                    >
                        <Card
                            elevation={5}
                            textAlign="right"
                            sx={{
                                boxShadow: 5,
                                borderRadius: 2,
                                height: 400,
                                width: 300,
                                borderWidth: 2,
                            }}
                        >
                            <CardHeader
                                title="Toutes les formations"
                                sx={{
                                    backgroundColor: "red",
                                    height: 40,
                                    color: "white",
                                }}
                            />
                            <Typography mt={3} textAlign="center" variant="h5">
                                Detail de la formation
                            </Typography>
                            <ListItem sx={{ justifyContent: "space-between" }}>
                                <Typography
                                    color="black"
                                    fontWeight="700"
                                    variant="h7"
                                >
                                    Formation
                                </Typography>
                                <Typography color="black" variant="h7">
                                    {data.title}
                                </Typography>
                                <Divider />
                            </ListItem>
                            <ListItem sx={{ justifyContent: "space-between" }}>
                                <Typography
                                    color="black"
                                    fontWeight="700"
                                    variant="h7"
                                >
                                    Prix HT:
                                </Typography>
                                <Typography color="black" variant="h7">
                                    {data.price}FCFA
                                </Typography>
                                <Divider />
                            </ListItem>
                            <ListItem sx={{ justifyContent: "space-between" }}>
                                <Typography
                                    color="black"
                                    fontWeight="700"
                                    variant="h7"
                                >
                                    Duré:
                                </Typography>
                                <Typography
                                    textAlign="right"
                                    color="black"
                                    variant="h7"
                                >
                                    2 jours
                                </Typography>
                                <Divider />
                            </ListItem>
                            <ListItem sx={{ justifyContent: "space-between" }}>
                                <Typography
                                    color="black"
                                    fontWeight="700"
                                    variant="h7"
                                >
                                    Lieu:
                                </Typography>
                                <Typography color="black" variant="h7">
                                    E-learning
                                </Typography>
                                <Divider />
                            </ListItem>
                            <ListItem sx={{ justifyContent: "space-between" }}>
                                <Typography
                                    color="black"
                                    fontWeight="700"
                                    variant="h7"
                                >
                                    Langue
                                </Typography>
                                <Typography color="black" variant="h7">
                                    Français
                                </Typography>
                                <Divider />
                            </ListItem>
                            <Box mt={5} sx={{ alignItems: "flex-end" }}>
                                <LabelButton
                                    label="En savoir plus"
                                    click={() => navigate(`/formation/1`)}
                                />
                            </Box>
                        </Card>
                    </Box>
                    <Box textAlign="left">
                        <Button color="error" variant="contained" size="large"   
                          onClick={() =>handleCart(data) }>
                            Ajouter au panier
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};
export default FormationDetail;
