import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { defaults } from "lodash";
import React from "react";

const Statistique = () => {
    return (
        <Box mt={10}>
            <Container>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={4} bgcolor="GrayText" height={200}>
                        <Stack
                            height={200}
                            my="auto"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Typography color='white'  fontFamily='Inter-Regular'>95 %</Typography>
                            <Typography color='white' fontFamily='Inter-Regular'>de client satisfaits</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={4} bgcolor="red" height={200}>
                        <Stack
                            height={200}
                            my="auto"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Typography color='white' fontFamily='Inter-Regular'>95 %</Typography>
                            <Typography color='white' fontFamily='Inter-Regular'>de client satisfaits</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={4} bgcolor="purple" height={200}>
                        <Stack
                            height={200}
                            my="auto"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Typography color='white' fontFamily='Inter-Regular' >95 %</Typography>
                            <Typography  color='white'  fontFamily='Inter-Regular'>de client satisfaits</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
export default Statistique;
