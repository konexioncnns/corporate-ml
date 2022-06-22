import React from "react";
import "../../../../node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";
import {
    Box,
    Container,
    Grid,
    List,
    ListItem,
    Typography,
} from "@mui/material";
import PageHeader from "@/Components/PageHeader";

const Archico = () => {
    return (
        <>
            <PageHeader
                title="Archico"
                subtitle="Les organisations modernes savent que la gestion du risque et conformité"
            />

            <Container>
                <Box mx="auto" my={3}>
                    <Typography color="error" variant="h3" textAlign="center">
                        Archico
                    </Typography>
                    <Typography>
                    Numériser et archiver vos informations, permet de s’assurer d’avoir une mémoire organisationnelle en cas de sinistre (feu, inondation, ouragan, tremblement de terre, etc.) et aussi s’assurer de la continuité des affaires.
                    </Typography>
                </Box>
                <Box justifyContent="center" width="100%">
                    <Box mx="auto" width={600}>
                        <Player
                            playsInline
                            poster="/assets/poster.png"
                            /*  src="https://www.youtube.com/watch?v=EZ5rn_tQ5hk"*/
                            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        />
                    </Box>
                </Box>
                <Grid container spacing={2} my={5}>
                    <Grid item xs={12} sm={6}>
                        <Typography
                            sx={{ color: "red" }}
                            variant="h4"
                            textAlign="left"
                            fontSize={20}
                            fontFamily="Inter"
                        >
                            Vos besoins
                        </Typography>
                        <Typography
                            textAlign="left"
                            fontSize={14}
                            fontFamily="Inter-Regular"
                        >
                            Les organisations modernes savent que la gestion du
                            risque et conformité (lorsqu’applicable) font partie
                            de la gouvernance de l’organisation. Pour s’assurer
                            la continuité des affaires en cas de sinistre, les
                            organisations doivent établir à un plan de relève
                            qui intègre l’archivage de leurs données en tenant
                            compte de leur RPO (objectifs de points de reprise)
                            et de leur RTO (objectifs de temps de reprise).
                        </Typography>
                        {/* <List>
                            <ListItem>
                                <svg     xmlns="http://www.w3.org/2000/svg"     class="w-6 h-6 text-blue-500"    viewBox="0 0 20 20"  fill="red">
                                    <path fill-rule="evenodd"  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"  clip-rule="evenodd"  />
                                </svg>

                                <Typography textAlign="left" ml={1}  fontSize={14}
                            fontFamily="Inter-Regular">
                                   Classification des documents physiques 
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <svg     xmlns="http://www.w3.org/2000/svg"     class="w-6 h-6 text-blue-500"    viewBox="0 0 20 20"  fill="red">
                                    <path fill-rule="evenodd"  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"  clip-rule="evenodd"  />
                                </svg>

                                <Typography textAlign="left" ml={1}  fontSize={14}
                            fontFamily="Inter-Regular">
                                   Numérisation des documents
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <svg     xmlns="http://www.w3.org/2000/svg"     class="w-6 h-6 text-blue-500"    viewBox="0 0 20 20"  fill="red">
                                    <path fill-rule="evenodd"  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"  clip-rule="evenodd"  />
                                </svg>

                                <Typography textAlign="left" ml={1}  fontSize={14}
                            fontFamily="Inter-Regular">
                                Creation du plan de classement
                                </Typography>
                            </ListItem>
                        </List> */}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography
                            sx={{ color: "red" }}
                            variant="h4"
                            textAlign="left"
                            fontSize={20}
                            fontFamily="Inter"
                        >
                            Notre solution
                        </Typography>
                        <Typography
                            textAlign="left"
                            fontSize={14}
                            fontFamily="Inter-Regular"
                        >
                            1SIMPLE1 offre des solutions d’archivage et de
                            continuités pour aider à continuer vos affaires/
                            opérations, peu importe la matérialisation des
                            risques que votre entreprise puisse faire face.
                        </Typography>
                        <List>
                            <ListItem>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-6 h-6 text-blue-500"
                                    viewBox="0 0 20 20"
                                    fill="red"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"
                                    />
                                </svg>

                                <Typography
                                    textAlign="left"
                                    ml={1}
                                    fontSize={14}
                                    fontFamily="Inter-Regular"
                                >
                                    L’établissement du profil de risques de
                                    votre organisation;
                                </Typography>
                            </ListItem>
                            <ListItem sx={{mt:-2}}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-6 h-6 text-blue-500"
                                    viewBox="0 0 20 20"
                                    fill="red"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"
                                    />
                                </svg>

                                <Typography
                                    textAlign="left"
                                    ml={1}
                                    fontSize={14}
                                    fontFamily="Inter-Regular"
                                >
                                    BIA – Analyse d’impacts organisationnels;
                                </Typography>
                            </ListItem>
                            <ListItem sx={{mt:-2}}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-6 h-6 text-blue-500"
                                    viewBox="0 0 20 20"
                                    fill="red"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"
                                    />
                                </svg>

                                <Typography
                                    textAlign="left"
                                    ml={1}
                                    fontSize={14}
                                    fontFamily="Inter-Regular"
                                >
                                    Plan d’archivage
                                </Typography>
                            </ListItem>
                            <ListItem  sx={{mt:-2}}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-6 h-6 text-blue-500"
                                    viewBox="0 0 20 20"
                                    fill="red"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"
                                    />
                                </svg>

                                <Typography
                                    textAlign="left"
                                    ml={1}
                                    fontSize={14}
                                    fontFamily="Inter-Regular"
                                >
                                    Plan de gestion intégrée de vos données
                                    (GDI);
                                </Typography>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
                <Grid container spacing={2} mt={-5}>
                    <Grid item xs={12} sm={6}>
                        <Typography
                            sx={{ color: "red" }}
                            variant="h4"
                            textAlign="left"
                            fontSize={20}
                            fontFamily="Inter"
                        >
                            Valeur ajoutées pour le client
                        </Typography>
                        <List>
                            <ListItem>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-6 h-6 text-blue-500"
                                    viewBox="0 0 20 20"
                                    fill="red"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"
                                    />
                                </svg>

                                <Typography
                                    textAlign="left"
                                    ml={1}
                                    fontSize={14}
                                    fontFamily="Inter-Regular"
                                >
                                    Bénéficier de l’expertise à faible coût;
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-6 h-6 text-blue-500"
                                    viewBox="0 0 20 20"
                                    fill="red"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"
                                    />
                                </svg>

                                <Typography
                                    textAlign="left"
                                    ml={1}
                                    fontSize={14}
                                    fontFamily="Inter-Regular"
                                >
                                    Intégrer facilement les meilleures pratiques
                                    (ISACA, NIST, SANS, etc.) ;
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-6 h-6 text-blue-500"
                                    viewBox="0 0 20 20"
                                    fill="red"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"
                                    />
                                </svg>

                                <Typography
                                    textAlign="left"
                                    ml={1}
                                    fontSize={14}
                                    fontFamily="Inter-Regular"
                                >
                                    Diminution de vos coûts d’assurance;
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-6 h-6 text-blue-500"
                                    viewBox="0 0 20 20"
                                    fill="red"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"
                                    />
                                </svg>

                                <Typography
                                    textAlign="left"
                                    ml={1}
                                    fontSize={14}
                                    fontFamily="Inter-Regular"
                                >
                                    Assurance de la continuité de vos affaires/
                                    opérations en cas de sinistres;
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-6 h-6 text-blue-500"
                                    viewBox="0 0 20 20"
                                    fill="red"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"
                                    />
                                </svg>

                                <Typography
                                    textAlign="left"
                                    ml={1}
                                    fontSize={14}
                                    fontFamily="Inter-Regular"
                                >
                                    Augmenter la conformité;
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-6 h-6 text-blue-500"
                                    viewBox="0 0 20 20"
                                    fill="red"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"
                                    />
                                </svg>

                                <Typography
                                    textAlign="left"
                                    ml={1}
                                    fontSize={14}
                                    fontFamily="Inter-Regular"
                                >
                                    Augmenter la confiance de vos clients envers
                                    votre organisation;
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-6 h-6 text-blue-500"
                                    viewBox="0 0 20 20"
                                    fill="red"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"
                                    />
                                </svg>

                                <Typography
                                    textAlign="left"
                                    ml={1}
                                    fontSize={14}
                                    fontFamily="Inter-Regular"
                                >
                                    Automatisation de l’archivage de vos
                                    données;
                                </Typography>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography
                            sx={{ color: "red" }}
                            variant="h4"
                            textAlign="left"
                            fontSize={20}
                            fontFamily="Inter"
                        >
                            Experience client
                        </Typography>
                        <Typography
                            textAlign="left"
                            fontSize={14}
                            fontFamily="Inter-Regular"
                        >
                            Les organisations modernes savent que la gestion du
                            risque et conformité (lorsqu’applicable) font partie
                            de la gouvernance de l’organisation. Pour s’assurer
                            la continuité des affaires en cas de sinistre, les
                            organisations doivent établir à un plan de relève
                            qui intègre l’archivage de leurs données en tenant
                            compte de leur RPO{" "}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
export default Archico;
