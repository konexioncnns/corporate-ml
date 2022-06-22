import React from 'react'
import { Avatar, Box, Card, Container, Divider, Grid, Typography } from "@mui/material";
import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import man from "../assets/images/man.png";
import man1 from "../assets/images/man1.png";
 const Team = () => {
  return (
    <Container>
        <Typography my={5}  color="red" variant='h5' fontFamily="Inter">Our wonderfull team</Typography>
    <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
            <Card elevation={2} height={400}>
                <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                >
                    <Avatar
                        imgProps={{
                            style: { borderRadius: "50%",borderColor:"2px solid red" },
                        }}
                        src="https://www.tutorialrepublic.com/examples/images/clients/1.jpg"
                        style={{
                            width: 120,
                            height: 120,
                            border: "2px solid red",
                            padding: 10,
                            borderRadius: "50%",
                            justifyContent: "center",
                        }}
                    />
                     <Typography
                     mt={5}
                     
                        fontWeight="500"
                        fontFamily="Inter"
                        sx={{ color: "red" }}
                    >
                        Mariame Diarra
                    </Typography>
                    <Typography
                     mt={1}
                     mb={2}
                        fontWeight="500"
                        fontFamily="Inter"
                        sx={{ color: "gray" }}
                    >
                        Comptable de surface
                    </Typography>
                    <Divider/>
                    <Typography
                        textAlign="center"
                        variant="body1"
                        fontFamily="Inter-Regular"
                        fontSize={13}
                        fontStyle="italic"
                    >
                        Le lorem ipsum (également appelé faux-texte, lipsum, ou bolo bolo) est Le lorem ipsum (également appelé faux-texte)
                      
                    </Typography>
                    <Box display="flex" my={3}>
                        <Facebook />
                        <LinkedIn />
                        <GitHub />

                    </Box>
                   
                </Box>
            </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Card elevation={2} height={400}>
                <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                >
                    <Avatar
                        imgProps={{
                            style: { borderRadius: "50%",borderColor:"2px solid red" },
                        }}
                        src={man}
                        style={{
                            width: 120,
                            height: 120,
                            border: "2px solid red",
                            padding: 10,
                            borderRadius: "50%",
                            justifyContent: "center",
                        }}
                    />
                     <Typography
                     mt={5}
                     
                        fontWeight="500"
                        fontFamily="Inter"
                        sx={{ color: "red" }}
                    >
                        Dore le maire
                    </Typography>
                    <Typography
                     mt={1}
                     mb={2}
                        fontWeight="500"
                        fontFamily="Inter"
                        sx={{ color: "gray" }}
                    >
                        TITRE
                    </Typography>
                    <Divider/>
                    <Typography
                        textAlign="center"
                        variant="body1"
                        fontFamily="Inter-Regular"
                        fontSize={13}
                        fontStyle="italic"
                    >
                        Le lorem ipsum (également appelé faux-texte, lipsum, ou bolo bolo) est Le lorem ipsum (également appelé faux-texte)
                      
                    </Typography>
                    <Box display="flex" my={3}>
                        <Facebook />
                        <LinkedIn />
                        <GitHub />

                    </Box>
                   
                </Box>
            </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Card elevation={2} height={400}>
                <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                >
                    <Avatar
                        imgProps={{
                            style: { borderRadius: "50%",borderColor:"2px solid red" },
                        }}
                        src={man1}
                        style={{
                            width: 120,
                            height: 120,
                            border: "2px solid red",
                            padding: 10,
                            borderRadius: "50%",
                            justifyContent: "center",
                        }}
                    />
                     <Typography
                     mt={5}
                     
                        fontWeight="500"
                        fontFamily="Inter"
                        sx={{ color: "red" }}
                    >
                      Lassine keite
                    </Typography>
                    <Typography
                     mt={1}
                     mb={2}
                        fontWeight="500"
                        fontFamily="Inter"
                        sx={{ color: "gray" }}
                    >
                        Le celib.....e
                    </Typography>
                    <Divider/>
                    <Typography
                        textAlign="center"
                        variant="body1"
                        fontFamily="Inter-Regular"
                        fontSize={13}
                        fontStyle="italic"
                    >
                       Le lorem ipsum (également appelé faux-texte, lipsum, ou bolo bolo) est
                   Le lorem ipsum (également appelé faux-texte)
                    </Typography>
                    <Box display="flex" my={3}>
                        <Facebook />
                        <LinkedIn />
                        <GitHub />

                    </Box>
                   
                </Box>
            </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Card elevation={2} height={400}>
                <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                >
                    <Avatar
                        imgProps={{
                            style: { borderRadius: "50%",borderColor:"2px solid red" },
                        }}
                        src={man}
                        style={{
                            width: 120,
                            height: 120,
                            border: "2px solid red",
                            padding: 10,
                            borderRadius: "50%",
                            justifyContent: "center",
                        }}
                    />
                     <Typography
                     mt={5}
                     
                        fontWeight="500"
                        fontFamily="Inter"
                        sx={{ color: "red" }}
                    >
                        Bissidi Traore
                    </Typography>
                    <Typography
                     mt={1}
                     mb={2}
                        fontWeight="500"
                        fontFamily="Inter"
                        sx={{ color: "gray" }}
                    >
                        Cm
                    </Typography>
                    <Divider/>
                    <Typography
                        textAlign="center"
                        variant="body1"
                        fontFamily="Inter-Regular"
                        fontSize={13}
                        fontStyle="italic"
                    >
                        Le lorem ipsum (également appelé faux-texte, lipsum, ou bolo bolo) est Le lorem ipsum (également appelé faux-texte)
                      
                    </Typography>
                    <Box display="flex" my={3}>
                        <Facebook />
                        <LinkedIn />
                        <GitHub />

                    </Box>
                   
                </Box>
            </Card>
        </Grid>
       
        
    </Grid>
</Container>
  )
}
export default Team