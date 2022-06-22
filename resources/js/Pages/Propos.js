import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Box, CardMedia, Container, Grid, Typography } from "@mui/material";
import {
    Campaign,
    DoneOutline,
    Extension,
    JoinInner,
    MapsHomeWork,
    RemoveRedEye,
} from "@mui/icons-material";
import ts from "../assets/images/ts.jpg";
import bourse from "../assets/images/bourse.png";
import { width } from "tailwindcss/defaultTheme";
import { bgcolor } from "@mui/system";
import Team from "./Team";
import PageHeader from "@/Components/PageHeader";
import Partner from "./Partner";

function Apropos() {
    return (
        <Box mb={20}>
            <PageHeader
            title="A propos de 1SIMPLE1 TOUJOURS PLUS LOINS"

            />
            <Container>
                <Typography color="red" fontFamily="Inter" variant="h5">
                    1SIMPLE1
                </Typography>
                <Typography fontSize={16}
                            fontFamily="Inter-Regular">
                    1SIMPLE1 est une compagnie en TI (Technologie de
                    l’Information) qui opère en Technologies de l’Information
                    (TI) depuis 2012. 1SIMPLE1 fait partie du groupe
                    transcontinental – Groupe NYETA.
                </Typography>
                <Timeline position="alternate">
                    <Typography color="red" fontFamily="Inter" variant="h6">
                        Historique
                    </Typography>
                    <TimelineItem>
                        <TimelineSeparator sx={{ color: "red" }}>
                            <TimelineDot
                                sx={{ color: "white", bgcolor: "red" }}
                            >
                                <Campaign />
                            </TimelineDot>
                            <TimelineConnector
                                sx={{ bgcolor: "red", width: 5 }}
                            />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography
                                color="red"
                                variant="h6"
                                fontFamily="Inter"
                            >
                                2012 - Creation
                            </Typography>

                            <Typography
                                textAlign="left"
                                fontFamily="Inter-Regular"
                            >
                                La société à été lancée en 2012
                                <br />
                                au CANADA avec des clients
                                <br />
                                comme PSP Investissement,
                                <br />
                                FxInnovqtion et le Gouvernement du Canada
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot
                                sx={{ color: "white", bgcolor: "red" }}
                            >
                                <Extension />
                            </TimelineDot>
                            <TimelineConnector
                                sx={{ bgcolor: "red", width: 5 }}
                            />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography
                                variant="h6"
                                color="red"
                                fontFamily="Inter"
                            >
                                2018- Extension
                            </Typography>

                            <Typography  fontSize={14}
                            fontFamily="Inter-Regular">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot
                                sx={{ color: "white", bgcolor: "red" }}
                            />
                        </TimelineSeparator>
                        <TimelineContent></TimelineContent>
                    </TimelineItem>
                </Timeline>
                <Grid container my={5} justifyContent="space-between">
                    <Grid item xs={12} sm={8}>
                        <Typography
                            textAlign="left"
                            variant="h6"
                            color="red"
                            fontFamily="Inter"
                            mb={1}
                        >
                            Le fondateur
                        </Typography>
                        <Typography  variant="h4"
                                                lineHeight={1.5}
                                                textAlign="left"
                                                fontFamily="Inter-Regular"
                                                fontSize={14}>
                            Le fondateur Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since
                            the 1500s, when an unknown printer took a galley of
                            type and scrambled it to Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to Lorem Ipsum is
                            simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled.
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={4}>
                        <img src={ts} width={300} height={200} />
                    </Grid>
                </Grid>

                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot
                                sx={{ color: "white", bgcolor: "red" }}
                            >
                                <RemoveRedEye />
                            </TimelineDot>
                            <TimelineConnector
                                sx={{ bgcolor: "red", width: 5 }}
                            />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography  color="red"
                                variant="h6"
                                fontFamily="Inter">
                                Notre vision
                            </Typography>

                            <Typography  fontSize={14}
                            fontFamily="Inter-Regular">
                                Notre vision est de devenir un partenaire
                                stratégique pour les organisations et de leur
                                offrir les meilleurs services disponibles au
                                monde.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot
                                sx={{ color: "white", bgcolor: "red" }}
                            >
                                <JoinInner />
                            </TimelineDot>
                            <TimelineConnector
                                sx={{ bgcolor: "red", width: 5 }}
                            />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography
                                variant="h6"
                                color="red"
                                fontFamily="Inter"
                            >
                                Nos valeur
                            </Typography>

                            <Typography  fontSize={14}
                            fontFamily="Inter-Regular">
                                Nos valeurs reposent sur la satisfaction du
                                client, l’unicité de chaque client, la
                                transparence envers le client, le plaisir à
                                livrer un service de qualité au client et le
                                partage et la redistribution à la communauté.{" "}
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot
                                sx={{ color: "white", bgcolor: "red" }}
                            >
                                <MapsHomeWork />
                            </TimelineDot>
                            <TimelineConnector
                                sx={{ bgcolor: "red", width: 5 }}
                            />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography
                                variant="h6"
                                color="red"
                                fontFamily="Inter"
                            >
                                Notre mision
                            </Typography>

                            <Typography  fontSize={14}
                            fontFamily="Inter-Regular">
                                Notre mission est d’aider les organisations à
                                devenir plus performantes grâce aux TI et aux
                                meilleures pratiques en termes de gouvernance et
                                de gestion des TI (ITIL, CobIT, etc.).{" "}
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot
                                sx={{ color: "white", bgcolor: "red" }}
                            ></TimelineDot>
                            <TimelineConnector
                                sx={{ bgcolor: "red", width: 5 }}
                            />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography
                                variant="h6"
                                color="red"
                                fontFamily="Inter"
                            >
                                Notre approche
                            </Typography>

                            <Typography  fontSize={14}
                            fontFamily="Inter-Regular">
                                Notre approche est orientée «Service client». En
                                plus,elle combine écoute, expertise, expérience
                                pour adresser les préoccupations des clients.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot
                                sx={{ color: "white", bgcolor: "red" }}
                            >
                                <DoneOutline />
                            </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent></TimelineContent>
                    </TimelineItem>
                </Timeline>
                <Box my={2}>
                    <Typography
                        variant="h6"
                        color="red"
                        fontFamily="Inter"
                        mt={2}
                    >
                        Engagement social
                    </Typography>
                    <Typography fontFamily="Inter-Regular">
                        À 1SIMPLE1, nous sommes fières de notre réussite et de
                        la confiance que nos clients nous ont accordée. Nous
                        croyons que la réussite n’a de valeurs que si qu’elle
                        est utilisée pour faire des impacts positifs dans la vie
                        de nos concitoyens. Pour cela, nous avons mis en place
                        un programme de bourses d’excellence et un programme de
                        soutien aux écoles de milieux défavorisés par la
                        fourniture de matériels scolaires et d’équipements
                        informatiques.
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        my={3}
                        variant="h6"
                        color="red"
                        fontFamily="Inter"
                        mt={2}
                    >
                        Bourses d’excellence 1SIMPLE1
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <img
                                src={bourse}
                                style={{ width: "100%", height: 200 }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Typography
                                 variant="h4"
                                 lineHeight={2}
                                 textAlign="left"
                                 fontFamily="Inter-Regular"
                                 fontSize={14}
                            >
                                Initiée en septembre 2017, les bourses
                                d’excellence 1SIMPLE1 visent à encourager les
                                élèves maliens/ maliennes les plus méritant(e)s.
                                Ces bourses annuelles visent également à
                                encourager l’entrepreneuriat chez les jeunes. La
                                première édition de remise des bourses est
                                prévue pour Mai 2018, à la suite de deux (2)
                                sessions d’études consécutives. Les bourses
                                seront sanctionnées de trois (3) prix qui
                                varient entre 1000$ à 500$. Ces bourses sont
                                financées 100% par 1SIMPLE1.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                
            </Container>
            <Team/>
           <Box mt={5}>
           <Partner/>
           </Box>
        </Box>
    );
}
export default Apropos;
