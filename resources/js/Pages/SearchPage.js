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
    CardHeader,
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
import { Link, usePage } from "@inertiajs/inertia-react";
import Lang from "lang.js";
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
    const currentLang = new Lang();
    const {domaines} = usePage().props
    console.log("Liste des domaines: ",domaines)

    const [checkBoxValue, setCheckBoxValue] = useState([])
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
            <>
                <Grid container spacing={2}>
                    <Grid item ml={3} xs={12} sm={2} sx={{ xs: "none" }}>
                        <Box bgcolor="#FFFFFF">
                            <Box sx={{borderBottom:0.5}} >
                                <CardHeader 
                              
                                title="Filtrer par domaine"
                            

                                />
                                <AccordionDetails>
                                    {domaines.map((item,index)=>(
                                      
                                        <ListItem sx={{padding:0}}>
                                        <Checkbox value={item.id} onClick={(e)=>filterResult(e)} />
                                      {  currentLang.getLocale() === "en" ?   item.title.en : item.title.fr}
                                    </ListItem>
                                   
                                    )) }
                                  
                                 
                                </AccordionDetails>
                            </Box>
                            <Accordion sx={{borderBottom:0.5}}>
                                <AccordionSummary>
                                  Toute les formations
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ListItem sx={{padding:0}}>
                                        <Checkbox />
                                       Axelos
                                    </ListItem>
                                    <ListItem sx={{padding:0}}>
                                        <Checkbox />
                                        PCEB
                                    </ListItem>
                                    <ListItem sx={{padding:0}}>
                                        <Checkbox />
                                       Alfresco
                                    </ListItem>
                                    <ListItem sx={{padding:0}}>
                                        <Checkbox />
                                        MICROSOFT
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
                                        maxHeight: 360,
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
            </>
        </Box>
    );
}
