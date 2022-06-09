import { ArrowForward, SettingsOverscan, Token } from "@mui/icons-material";
import {
    Box,
    Button,
    CardMedia,
    Container,
    Grid,
    Link,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import MediationIcon from '@mui/icons-material/Mediation';
import React from "react";
const bgImage = "../assets/images/img4.jpg";
import Typical from "react-typical";
 const Heading = () => {
    return (
        <Box height="90vh"
    
        sx={{backgroundImage:'url("https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80")',
        backgroundSize:"cover",
        backgroundPosition:"center"

    }}
        >
           <Box  py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={5}>
                <Typography variant="h2" color='white'>
                <Typography variant="h2" color='white'>Nous fournissons des servive:</Typography>
                <Typical
                steps={["1SIMPLE1", 1000, "1SIMPLE1 Toujours plus loin!", 2800]}
                loop={Infinity}
                wrapper="p"
            />
        
                </Typography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <Stack>
          
            
            
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>


        </Box>
    );
};
export default Heading