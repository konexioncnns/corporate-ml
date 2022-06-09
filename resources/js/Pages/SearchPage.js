import {
    Add,
    ArrowCircleRight,
    ArrowRight,
    ArrowRightAltRounded,
    
    
} from "@mui/icons-material";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Card,
    Container,
    Divider,
    Grid,
    List,
    ListItem,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "@inertiajs/inertia-react";
const a =0;
const formation = [
    {
        id: 1,
        editor:"PCEB",
        title: "ITIL ™ 4 Foundation avec certification",
        desc: "Formation avec certification ITIL ™ITIL™ pour Information Technology Infrastructure Library, regroupe un ensemble de bonnes pratiques en matière de gestion des services informatiques.",
    },
    {
        id: 2,
        editor:"ACELOX",
        title: "ITIL ™ 4 Foundation avec certification",
        desc: "Formation avec certification ITIL ™ITIL™ pour Information Technology Infrastructure Library, regroupe un ensemble de bonnes pratiques en matière de gestion des services informatiques.",
    },
    {
        id: 3,
        editor:"ALFRESCO",
        title: "Digitalisation de votre entreprise",
        desc: "Formation avec certification ITIL ™ITIL™ pour Information Technology Infrastructure Library, regroupe un ensemble de bonnes pratiques en matière de gestion des services informatiques.",
    },
    {
        id: 4,
        editor:"MICROSOFT",
        title: "Office 365",
        desc: "Formation avec certification ITIL ™ITIL™ pour Information Technology Infrastructure Library, regroupe un ensemble de bonnes pratiques en matière de gestion des services informatiques.",
    },
    {
        id: 5,
        title: "ITIL ™ 4 Foundation avec certification",
        desc: "Formation avec certification ITIL ™ITIL™ pour Information Technology Infrastructure Library, regroupe un ensemble de bonnes pratiques en matière de gestion des services informatiques.",
    },
];

export default function SearchPage() {

    const [checkBoxValue, setCheckBoxValue] = useState("")
    const [data, setData] = useState(formation)
    const getCheckBoxValue = (e)=>{
        setCheckBoxValue(e.target.value)
        alert(`Vous avez cocher: ${checkBoxValue}`)
    }
   
    /* Fonction pour filtrer les resultats par editeur */
    const filterResult =(e)=>{
        const a =[]
        const result = formation.filter((currentData)=>{
            return currentData.editor === e.target.value; })
            setData(result);

    }
    return (
        <Box mb={80}>
            <Typography>Resultat de recherche</Typography>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3} sx={{ xs: "none" }}>
                        <Box bgcolor="#FFFFFF">
                            <Accordion sx={{borderBottom:0.5}} >
                                <AccordionSummary expandIcon={<ExpandMoreIcon/>} >
                                    FILTRER PAR EDITEUR
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ListItem sx={{padding:0}}>
                                        <Checkbox value="ACELOX" onClick={(e)=>filterResult(e)} />
                                        ACELOX
                                    </ListItem>
                                    <ListItem sx={{padding:0}}>
                                        <Checkbox value="ALFRESCO" onClick={(e)=>filterResult(e)} />
                                        ALFRESCO
                                    </ListItem>
                                    <ListItem sx={{padding:0}}>
                                        <Checkbox value="PCEB" onClick={(e)=>filterResult(e)}/>
                                        PCEB
                                    </ListItem>
                                    <ListItem sx={{padding:0}}>
                                        <Checkbox value="MICROSOFT" onClick={(e)=>filterResult(e)}/>
                                        MICROSOFT
                                    </ListItem>
                                    <ListItem sx={{padding:0}}>
                                        <Checkbox value="ORACLE" onClick={(e)=>filterResult(e)}/>
                                        ORACLE
                                    </ListItem>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{borderBottom:0.5}}>
                                <AccordionSummary>
                                    CERTIFICATION
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ListItem sx={{padding:0}}>
                                        <Checkbox />
                                        ISO 27001
                                    </ListItem>
                                    <ListItem sx={{padding:0}}>
                                        <Checkbox />
                                        ITIL 4
                                    </ListItem>
                                    <ListItem sx={{padding:0}}>
                                        <Checkbox />
                                        DevOps Foundation
                                    </ListItem>
                                    <ListItem sx={{padding:0}}>
                                        <Checkbox />
                                        CIA ®
                                    </ListItem>
                                    <ListItem sx={{padding:0}}>
                                        <Checkbox />
                                        
                                    </ListItem>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    </Grid>

                    <Grid container item xs={12} mb={10} sm={9}>
                        {data.map((item, index) => {
                            return (
                                <Box
                                    key={index}
                                    mt={2}
                                    mx={1}
                                    bgcolor="#FFFFFF"
                                    sx={{
                                        minHeight: 320,
                                      xs:{mx:1, width: '98%',justifyContent:'center'},
                                        width: 260,
                                     
                                        borderWidth: 0.1,
                                        borderColor: "#d3cfcf",
                                    }}
                                >
                                    <Typography textAlign="left">
                                        Formation
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        fontWeight="600"
                                        fontFamily="Inter"
                                        textAlign="left"
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography textAlign="left" py={1} >
                                        Formation avec certification ITIL ™
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        textAlign="center"

                                    >
                                        {item.desc}
                                    </Typography>
                                    <Box sx={{ marginBottom: 2 }}>
                                        
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                marginTop: 5,
                                                width: 180,
                                                height: 50,
                                                borderRadius: 20,
                                                alignContent: "end",
                                            }}
                                          
                                        >
                                           <Link href={route('formationDetail',`${item.id}`)} >
                                            En savoir plus
                                            <ArrowCircleRight />
                                        </Link>
                                        </Button>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
