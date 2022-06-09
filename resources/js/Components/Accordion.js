import {
    Accordion,
    AccordionActions,
    AccordionDetails,
    AccordionSummary,
    Box,
    Card,
    Container,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import { LabelButton } from "./LabelButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const trainings = [
    {
        id: "1",
        title: "Formation itil 4",
        prerequis: "Introduction",
        description:
            "cupidatat non,7proident, sunt in culpa qui officia deserunt mollit anim id est laborum officia deserunt mollit mollitmollitmollitanim",
    },
];
export default function Accordions() {
   
    return (
        <Container>
           <Box py={4}>
           <Typography variant="h3" textAlign="center" fontFamily="Inter" fontWeight="bold">
                Liste des formations
            </Typography>
            <Typography py={1} fontSize={12} fontWeight="600" variant="body2"  fontFamily="Inter">
            1SIMPLE1 vous propose une solution de formation sur mesure qui cible 100% de vos besoins
            </Typography>
            
           </Box>
            <Accordion elevation={2} sx={{borderBottomWidth: 2,}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h6" fontSize={15}  fontWeight="700"  fontFamily="Inter">

                        Formation avec certification ISO 9001 : Système de
                        management de la qualité
                    </Typography>
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
                                            <ul>
                                                <li>
                                                    Les objectifs de cette formation sont:
                                                    Maîtriser les lignes
                                                    directrices de l’ISO 19011
                                                    et les spécifications de
                                                    l’ISO 17021
                                                </li>
                                                <li>
                                                    Acquérir l’expertise
                                                    nécessaire pour diriger une
                                                    équipe d’audit de SMQ
                                                </li>
                                                <li>
                                                    A Comprendre les activités
                                                    opérationnelles de l’ISO
                                                    9001 conformément au SMQ
                                                </li>
                                                <li>
                                                    Comprendre l’organisme et
                                                    son contexte
                                                </li>
                                                <li>
                                                    Améliorer en continu la
                                                    pertinence, l’adéquation et
                                                    l’efficacité du SMQ
                                                </li>
                                            </ul>
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
                                                <li>
                                                    Formation avec certification
                                                    ISO 9001 : Système de
                                                    management de la qualité Si
                                                    vous cherchez une nouvelle
                                                    opportunité de faire avancer
                                                    votre carrière, devenir un
                                                    auditeur principal ISO
                                                    9001LA vous aidera
                                                    certainement.
                                                </li>
                                                <li>
                                                    Ce cours est conçu pour vous
                                                    donner toutes les
                                                    connaissances et les
                                                    compétences nécessaires pour
                                                    vous permettre d’auditer un
                                                    système de management de la
                                                    qualité (SMQ) en vous
                                                    présentant les approches les
                                                    plus récentes en matière
                                                    d'audit et en s’appuyant sur
                                                    des études de cas et
                                                    ateliers pratiques.
                                                </li>
                                                <li>
                                                    Lors de cette formation qui
                                                    vous donnera le statut
                                                    d’Auditeur principal
                                                    certifié, vous comprendrez
                                                    les principes et les points
                                                    clés de l’audit d’un SMQ
                                                    (Système de Management de la
                                                    Qualité) conformément aux
                                                    normes ISO 9001 version
                                                    2015, ISO 19011 et 17021.
                                                </li>
                                            </ul>
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box>
                                        <Typography color="red" variant="h6">
                                            Prérequis
                                        </Typography>
                                        <ul>
                                            <li>
                                                <Typography
                                                    fontSize={14}
                                                    fontWeight="bold"
                                                >
                                                    JAVA
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography
                                                    fontSize={14}
                                                    fontWeight="bold"
                                                >
                                                    JAVA
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography
                                                    fontSize={14}
                                                    fontWeight="bold"
                                                >
                                                    PHP
                                                </Typography>
                                            </li>
                                        </ul>
                                    </Box>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={3} >
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
                                        200000 FCFA
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
                               <Box mt={5} sx={{alignItems:"flex-end"}} >
                               <LabelButton label="En savoir plus"  click={()=>alert(`/formation/1`)}/>
                               </Box>
                            </Card>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>

            <Accordion elevation={2} sx={{borderBottomWidth: 2,}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h6" fontSize={15}  fontWeight="700"  fontFamily="Inter">

                    Obtenir la Certification ITIL™ INTERMEDIATE en Transition des Services
                    </Typography>
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
                                            <ul>
                                                <li>
                                                    Les objectifs de cette formation sont:
                                                    Maîtriser les lignes
                                                    directrices de l’ISO 19011
                                                    et les spécifications de
                                                    l’ISO 17021
                                                </li>
                                                <li>
                                                    Acquérir l’expertise
                                                    nécessaire pour diriger une
                                                    équipe d’audit de SMQ
                                                </li>
                                                <li>
                                                    A Comprendre les activités
                                                    opérationnelles de l’ISO
                                                    9001 conformément au SMQ
                                                </li>
                                                <li>
                                                    Comprendre l’organisme et
                                                    son contexte
                                                </li>
                                                <li>
                                                    Améliorer en continu la
                                                    pertinence, l’adéquation et
                                                    l’efficacité du SMQ
                                                </li>
                                            </ul>
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
                                                <li>
                                                    Formation avec certification
                                                    ISO 9001 : Système de
                                                    management de la qualité Si
                                                    vous cherchez une nouvelle
                                                    opportunité de faire avancer
                                                    votre carrière, devenir un
                                                    auditeur principal ISO
                                                    9001LA vous aidera
                                                    certainement.
                                                </li>
                                                <li>
                                                    Ce cours est conçu pour vous
                                                    donner toutes les
                                                    connaissances et les
                                                    compétences nécessaires pour
                                                    vous permettre d’auditer un
                                                    système de management de la
                                                    qualité (SMQ) en vous
                                                    présentant les approches les
                                                    plus récentes en matière
                                                    d'audit et en s’appuyant sur
                                                    des études de cas et
                                                    ateliers pratiques.
                                                </li>
                                                <li>
                                                    Lors de cette formation qui
                                                    vous donnera le statut
                                                    d’Auditeur principal
                                                    certifié, vous comprendrez
                                                    les principes et les points
                                                    clés de l’audit d’un SMQ
                                                    (Système de Management de la
                                                    Qualité) conformément aux
                                                    normes ISO 9001 version
                                                    2015, ISO 19011 et 17021.
                                                </li>
                                            </ul>
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box>
                                        <Typography color="red" variant="h6">
                                            Prérequis
                                        </Typography>
                                        <ul>
                                            <li>
                                                <Typography
                                                    fontSize={14}
                                                    fontWeight="bold"
                                                >
                                                    JAVA
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography
                                                    fontSize={14}
                                                    fontWeight="bold"
                                                >
                                                    JAVA
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography
                                                    fontSize={14}
                                                    fontWeight="bold"
                                                >
                                                    PHP
                                                </Typography>
                                            </li>
                                        </ul>
                                    </Box>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={3} >
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
                                        200000 FCFA
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
                               <Box mt={5} sx={{alignItems:"flex-end"}} >
                               <LabelButton label="En savoir plus"   click={()=>alert(`/formation/1`)}/>
                               </Box>
                            </Card>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion elevation={2} sx={{borderBottomWidth: 2,}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h6" fontSize={15}  fontWeight="700"  fontFamily="Inter">

                    COBIT ® Foundation avec certification
                    </Typography>
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
                                            <ul>
                                                <li>
                                                    Les objectifs de cette formation sont:
                                                    Maîtriser les lignes
                                                    directrices de l’ISO 19011
                                                    et les spécifications de
                                                    l’ISO 17021
                                                </li>
                                                <li>
                                                    Acquérir l’expertise
                                                    nécessaire pour diriger une
                                                    équipe d’audit de SMQ
                                                </li>
                                                <li>
                                                    A Comprendre les activités
                                                    opérationnelles de l’ISO
                                                    9001 conformément au SMQ
                                                </li>
                                                <li>
                                                    Comprendre l’organisme et
                                                    son contexte
                                                </li>
                                                <li>
                                                    Améliorer en continu la
                                                    pertinence, l’adéquation et
                                                    l’efficacité du SMQ
                                                </li>
                                            </ul>
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
                                                <li>
                                                    Formation avec certification
                                                    ISO 9001 : Système de
                                                    management de la qualité Si
                                                    vous cherchez une nouvelle
                                                    opportunité de faire avancer
                                                    votre carrière, devenir un
                                                    auditeur principal ISO
                                                    9001LA vous aidera
                                                    certainement.
                                                </li>
                                                <li>
                                                    Ce cours est conçu pour vous
                                                    donner toutes les
                                                    connaissances et les
                                                    compétences nécessaires pour
                                                    vous permettre d’auditer un
                                                    système de management de la
                                                    qualité (SMQ) en vous
                                                    présentant les approches les
                                                    plus récentes en matière
                                                    d'audit et en s’appuyant sur
                                                    des études de cas et
                                                    ateliers pratiques.
                                                </li>
                                                <li>
                                                    Lors de cette formation qui
                                                    vous donnera le statut
                                                    d’Auditeur principal
                                                    certifié, vous comprendrez
                                                    les principes et les points
                                                    clés de l’audit d’un SMQ
                                                    (Système de Management de la
                                                    Qualité) conformément aux
                                                    normes ISO 9001 version
                                                    2015, ISO 19011 et 17021.
                                                </li>
                                            </ul>
                                        </Typography>
                                    </Box>
                                </ListItem>
                                <ListItem>
                                    <Box>
                                        <Typography color="red" variant="h6">
                                            Prérequis
                                        </Typography>
                                        <ul>
                                            <li>
                                                <Typography
                                                    fontSize={14}
                                                    fontWeight="bold"
                                                >
                                                    JAVA
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography
                                                    fontSize={14}
                                                    fontWeight="bold"
                                                >
                                                    JAVA
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography
                                                    fontSize={14}
                                                    fontWeight="bold"
                                                >
                                                    PHP
                                                </Typography>
                                            </li>
                                        </ul>
                                    </Box>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={3} >
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
                                        200000 FCFA
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
                               <Box mt={5} sx={{alignItems:"flex-end"}} >
                               <LabelButton label="En savoir plus"  click={()=>alert(`ok`)}/>
                               </Box>
                            </Card>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            
            
        </Container>
    );
}
