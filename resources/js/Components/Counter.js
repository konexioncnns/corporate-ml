import React from "react"; 
import CountUp from "react-countup";
import { Box, Card, Grid, Typography } from "@mui/material";

const Counter = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
                <Card height="30vh">
                  <Typography>Clients</Typography>
                    <CountUp end={200} duration={7} />
                </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Card height="30vh">
                  <Typography variant="h4">
                    <CountUp end={200}  duration={20} />+</Typography>
                </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Card height="30vh">
                    <CountUp end={200} duration={7} />
                </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Card height="30vh">
                    <CountUp end={200} duration={7} />
                </Card>
            </Grid>
        </Grid>
    );
};
export default Counter;
