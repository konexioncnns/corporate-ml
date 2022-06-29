import React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Card,
    CardHeader,
    Container,
    Divider,
    Grid,
    List,
    ListItem,
    MenuItem,
    Typography,
} from "@mui/material";
import { ArrowForwardIosSharp, ExpandMore } from "@mui/icons-material";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import Lang from "lang.js"; 
const currentLang = new Lang();
import parse from 'html-react-parser';
import { addCart } from "@/redux/featured/formation/formationSlice";
import { useDispatch } from "react-redux";

const AccodionDomaine = () => {

    const dispatch = useDispatch();
    const handleCart = (product) => {
        dispatch(addCart(product));
        /* window.location.href = ('/cart')*/
    };
   
    const { domaines, formations } = usePage().props;
    console.log("Formations pour le accordion:", formations);
    return (
        <Container>
            <Box py={2} bgcolor="#E62E2D" mb={3}>
                <Typography  color="white" textAlign="left" fontSize={22} variant="h3" fontFamily="Inter">Les formations par domaines</Typography>
            </Box>
            {domaines.map((item, index) => (
                <Accordion
                    key={index}
                    elevation={1}
                    sx={{ borderBottomWidth: 1, }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography
                            variant="h4"
                            fontSize={16}
                            fontFamily="Inter-Regular"
                        >
                            {currentLang.getLocale() ==="en"
                                ? item.title.en
                                : item.title.fr}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {" "}
                        <List>
                            {formations.map((itemf, i) =>
                                itemf.domaine_id === item.id ? (
                                    <Accordion key={i}>
                                        <AccordionSummary
                                      
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{backgroundColor:"#E4E4E4",py:0.5,marginBottom:1}}
                    >
                        <Box flex={1/2} display="flex" justifyContent="space-between">
                             <Typography
                            variant="h4"
                            fontSize={14}
                            fontFamily="Inter-Regular"
                        >
                            {currentLang =="en"
                                ? itemf.title.en
                                : itemf.title.fr}
                        </Typography>
                        <Typography>{itemf.formateur.firstname} {itemf.formateur.lastname}</Typography>
                        </Box>
                       
                    </AccordionSummary>
                    <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={8}>
                            <List>
                                <ListItem>
                                    <Box>
                                    <Typography color="red" variant="h6">
                                            Objectifs
                                        </Typography>
                                        <Typography
                                            fontSize={14}
                                            fontWeight="400"
                                            variant="body2"
                                            textAlign="left"
                                            letterSpacing={1}
                                            fontFamily="Inter-Regular"
                                        >

                                           { currentLang.getLocale() === "en"
                                ? parse(`${itemf.overview.en}`)
                                : parse(`${itemf.overview.fr}`)
                                
                                }
                                            

                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box>
                                        <Typography color="red" variant="h6">
                                            Description
                                        </Typography>
                                        <Typography
                                            fontSize={14}
                                            fontWeight="500"
                                            variant="body2"
                                            textAlign="left"
                                            letterSpacing={1}
                                            fontFamily="Inter-Regular"
                                            
                                        >
                                            <ul>
                                            { currentLang === "en"
                                ? parse(`${itemf.description.en}`)
                                : parse(`${itemf.description.fr}`)
                                
                                }
                                    
                                            </ul>
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box>
                                        <Typography color="red" variant="h6">
                                        Programme
                                        </Typography>
                                   
                                        { currentLang.getLocale() === "en"
                                ? parse(`${itemf.programme?.en}`)
                                : parse(`${itemf.programme?.fr}`)
                                
                                }
                                       
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box>
                                        <Typography color="red" variant="h6">
                                        Public
                                        </Typography>
                                   
                                        { currentLang.getLocale() === "en"
                                ? parse(`${itemf.public?.en}`)
                                : parse(`${itemf.public?.fr}`)
                                
                                }
                                       
                                    </Box>
                                </ListItem>
                            </List>
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
                                    {itemf.title.fr}
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
                                    {itemf.price}FCFA
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
                           {/*  <Box mt={5} sx={{ alignItems: "flex-end" }}>
                                <LabelButton
                                    label="En savoir plus"
                                    click={() => navigate(`/formation/${itemf.id}`)}
                                />
                            </Box> */}
                        </Card>
                    </Box>
                    <Box textAlign="left">
                        <Button color="error" variant="contained" size="large"   
                          onClick={() =>handleCart(itemf) }>
                            Ajouter au panier
                        </Button>
                    </Box>
                </Grid>
                       {/*  <Grid item xs={12} sm={3} >
                            <Card elevation={5} textAlign="right" sx={{boxShadow:5, borderRadius:5, height: 400, width: 300,borderWidth:2 }}>
                           <Typography mt={3} textAlign="center" variant="h5">Detail de la formation</Typography>
                            <ListItem
                                    sx={{ justifyContent: "space-between" }}
                                >
                                    <Typography color="black" fontWeight="700" variant="h7">
                                      Formation
                                    </Typography>
                                    <Typography color="black" variant="h7">
                                       ISO27001-1S1
                                    </Typography>
                                    <Divider />
                                </ListItem>
                                <ListItem
                                    sx={{ justifyContent: "space-between" }}
                                >
                                    <Typography color="black" fontWeight="700" variant="h7">
                                    Prix HT:
                                    </Typography>
                                    <Typography color="black" variant="h7">
                                      {itemf.price} FCFA
                                    </Typography>
                                    <Divider />
                                </ListItem>
                                <ListItem
                                    sx={{ justifyContent: "space-between" }}
                                >
                                    <Typography color="black" fontWeight="700" variant="h7">
                                        Duré:
                                    </Typography>
                                    <Typography  textAlign="right" color="black" variant="h7">
                                        2 jours
                                    </Typography>
                                    <Divider />
                                </ListItem>
                                <ListItem
                                    sx={{ justifyContent: "space-between" }}
                                >
                                    <Typography color="black" fontWeight="700" variant="h7">
                                       Lieu:
                                    </Typography>
                                    <Typography  color="black" variant="h7">
                                      E-learning
                                    </Typography>
                                    <Divider />
                                </ListItem>
                                <ListItem
                                    sx={{ justifyContent: "space-between" }}
                                >
                                    <Typography color="black" fontWeight="700" variant="h7">
                                       Langue
                                    </Typography>
                                    <Typography  color="black" variant="h7">
                                       Français
                                    </Typography>
                                    <Divider />
                                </ListItem>
                              
                            </Card>
                        </Grid> */}
                    </Grid>
                </AccordionDetails>

                                
                                        </Accordion>
                                ) : null
                            )}
                        </List>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Container>
    );
};
export default AccodionDomaine;
