import { DatePicker } from "@mui/lab";
import {
    Box,
    Button,
    Container,
    FormControl,
    FormControlLabel,
    CardMedia,
    FormLabel,
    Grid,
    InputLabel,
    Link,
    MenuItem,
    OutlinedInput,
    Radio,
    RadioGroup,
    Select,
    Typography,
} from "@mui/material";
import img from "../assets/images/formation.png"
import React from "react";
import Data from "../constants/Data";
import ts from "../assets/images/search.png";
export const SelectSection = () => {
    const [category, setCategory] = React.useState(0);

    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    return (
        <Box py={{ xs: 3, md: 12 }}>
            <Box mb={2}>
                <Container>
                    <Typography variant="h4" fontFamily="Inter" color="red">
                        Trouver votre formation à distance ou en présentiel
                    </Typography>

                </Container>
            </Box>
            <Box
                position="relative"
                width="100%"
                height="100%"
                mt={2}
                display="flex"
                justifyContent="center"
                bgcolor="#F1F3F4"
                sx={{
         
                    height:"50vh",
                    /* backgroundImage: `url(${img})`, */
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundAttachment:'fixed',
                    
                   
                }}
            >
               
           
            <Container>
                <Grid container alignItems="center">
                    <Grid item xs={12} lg={5}>
                        <Box xs={12}>
                            <Typography
                                mb={2}
                                variant="h5"
                                fontFamily="Inter"
                                textAlign="left"
                            >
                                Formation ITIL 4
                            </Typography>

                            <Typography
                                fontWeight="300"
                                fontSize={18}
                                fontFamily="Inter-Regular"
                                textAlign="left"
                            >
                                Retrouvez votre formation parmi nos offres
                            </Typography>
                            <Typography mb={1} textAlign="left" variant="body2">
                                <Link href="#" color="#9b9696">
                                    Voir le catalogue de formation
                                </Link>
                            </Typography>

                            <Typography
                                fontWeight="300"
                                fontSize={18}
                                fontFamily="Inter-Regular"
                                textAlign="left"
                            >
                                Vous etes une entreprise ou un particulier ?
                            </Typography>
                            <Typography mb={1} textAlign="left" variant="body2">
                                <Link href="#" color="#9b9696">
                                    Demandez un devis
                                </Link>
                            </Typography>

                            <Typography
                                fontWeight="300"
                                textAlign="left"
                                fontSize={18}
                                fontFamily="Inter-Regular"
                            >
                                Vous hésistez Vous n'avez pas encore trouvé
                                votre formation? Nos conseillers sont là pour
                                vous accompagner contactez-nous
                            </Typography>
                            <Typography textAlign="left" variant="body2">
                                <Link href="#" color="#9b9696">
                                    Contactez-nous
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        lg={6}
                        sx={{
                            ml: { xs: 2, lg: "auto" },
                            mt: { xs: 6, lg: 0 },
                        }}
                    >
                        <Box mr={15} mt={4}>
                            <Box mb={2}>
                                <Box mb={1} textAlign="left">
                                    <Typography
                                        mb={1}
                                        textAlign="left"
                                        variant="h7"
                                        fontFamily="Inter-Regular"
                                    >
                                        Domaine de formation
                                    </Typography>
                                </Box>
                                <FormControl
                                    fullWidth
                                    mb={1}
                                    variant="outlined"
                                >
                                    <Select
                                        value={category}
                                        onChange={handleChange}
                                        variant="filled"
                                    >
                                        {Data.Category.map((item) => (
                                            <MenuItem
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.title}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>

                            <Box mb={2}>
                                <Box mb={1} textAlign="left">
                                    <Typography
                                        mb={1}
                                        textAlign="left"
                                        variant="h7"
                                        fontFamily="Inter-Regular"
                                    >
                                        Domaine de formation
                                    </Typography>
                                </Box>
                                <FormControl
                                    fullWidth
                                    mb={1}
                                    variant="outlined"
                                >
                                    <Select
                                        value={category}
                                        onChange={handleChange}
                                        variant="filled"
                                    >
                                        {Data.Category.map((item) => (
                                            <MenuItem
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.title}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>


                            <Box mb={2}></Box>
                            <Box textAlign="left">
                                <FormControl>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel
                                            value="female"
                                            control={<Radio />}
                                            label="Presentièl"
                                        />
                                        <FormControlLabel
                                            value="male"
                                            control={<Radio />}
                                            label="Distentièl"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                            <Box textAlign="left">
                                <Button
                                    variant="contained"
                                    textAlign="left"
                                    color="error"
                                    fontFamily="Inter"
                                    size="large"
                                    sx={{
                                        width: 150,
                                        borderRadius: 10,
                                        backgroundColor: "red",
                                        color: "white", fontFamily:"Inter"
                                    }}
                                  href="/search"

                                >
                                    Recherhe
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            </Box>
        </Box>
    );
};
