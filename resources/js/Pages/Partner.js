import {
    Box,
    Paper,
    CardMedia,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import React from "react";

import partner1 from "../assets/images/partner1.png";
import partner2 from "../assets/images/partner2.png";
import partner3 from "../assets/images/partner3.png";
import partner4 from "../assets/images/partner4.png";
import partner5 from "../assets/images/partner5.png";
import partner6 from "../assets/images/partner6.png";
import partner7 from "../assets/images/partner7.png";
const Partner = () => {
    return (
        <Box py={2}>
            <Typography mb={3} color="red" variant="h5" fontFamily="Inter">
                Our Partner
            </Typography>
            <Container>
                <Grid container spacing={5}>
                <Grid item xs={6} sm={2}>
                   
                            <img src={partner7} />
                       
                    </Grid>
                    <Grid item xs={6} sm={2}>
                        <Paper sx={{ height: 80 }}>
                            <img src={partner1} />
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                        <Paper sx={{ height: 80 }}>
                            <img src={partner2} />
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                        <Paper sx={{ height: 80 }}>
                            <img src={partner3} />
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                        <Paper sx={{ height: 80 }}>
                            <img src={partner4} />
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                        <Paper sx={{ height: 80 }}>
                            <img src={partner5} />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
export default Partner;
