import Side from "@/Components/Tailwind/Side";
import { useForm } from "@inertiajs/inertia-react";
import { Box, Button, Card, CardHeader, Container, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";

import React from "react";
import { useSelector } from "react-redux";

 const Checkout = () => {
    const cart = useSelector( (state) => state.cart.cartItems);

    console.log("Mon panier: ",cart)
    const { data, setData, post, errors } = useForm({
        Payment_method:"",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const submitForm = (e) => {
        e.preventDefault();
    };
    function handleSubmit(e) {
        e.preventDefault();
        post(route("placeorder"));
    }

    return (
        <Box>
           <Grid container>
            <Grid item sm={12}>
            <Side/>
            </Grid>
           </Grid>
            
       {/*  <Container>
            <Card
                elevation={1}
                sx={{ width: "100%", borderRadius: 5 }}
                mb={5}
                height="20vh"
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} mt={3} px={5}>
                        <Card>
                        <CardHeader
                                    title="Information client"
                                    sx={{
                                        backgroundColor: "red",
                                        height: 30,
                                        color: "white",
                                        fontFamily: "Inter",
                                    }}
                                />
                                 <Box
                                        component="form"
                                        sx={{
                                            "& .MuiTextField-root": {
                                                m: 0.5,
                                                width: "46%",
                                            },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            label="Email"
                                            variant="outlined"
                                            fullWidth
                                            fontFamily="Inter-Regular"
                                            sx={{
                                                marginBottom: "20px !important",
                                            }}
                                            name="email"
                                           
                                        />
                                        <TextField
                                            label="Phone number"
                                            variant="outlined"
                                            fontFamily="Inter-Regular"
                                            fullWidth
                                            sx={{
                                                marginBottom: "20px !important",
                                            }}
                                            name="phone"
                                          
                                        />
                                    </Box>
                                    <Box
                                        component="form"
                                        sx={{
                                            "& .MuiTextField-root": {
                                                m: 0.5,
                                                width: "46%",
                                            },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            label="Email"
                                            variant="outlined"
                                            fullWidth
                                            fontFamily="Inter-Regular"
                                            sx={{
                                                marginBottom: "20px !important",
                                            }}
                                            name="email"
                                           
                                        />
                                     
                                    </Box>
                                    <Box
                                        component="form"
                                        sx={{
                                            "& .MuiTextField-root": {
                                                m: 0.5,
                                                width: "46%",
                                            },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                    
                                        <TextField
                                            label="Phone number"
                                            variant="outlined"
                                            fontFamily="Inter-Regular"
                                            fullWidth
                                            sx={{
                                                marginBottom: "20px !important",
                                            }}
                                            name="phone"
                                          
                                        />
                                    </Box>
                                
                        </Card>
                        <Card>
                        <CardHeader
                                    title="Info payement"
                                    
                                    sx={{mb:2,
                                        backgroundColor: "red",
                                        height: 30,
                                        color: "white",
                                        fontFamily: "Inter",
                                    }}
                                />
                                 <Box
                                        component="form"
                                        sx={{
                                            "& .MuiTextField-root": {
                                                m: 0.5,
                                                width: "46%",
                                            },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            label="Email"
                                            variant="outlined"
                                            fullWidth
                                            fontFamily="Inter-Regular"
                                            sx={{
                                                marginBottom: "20px !important",
                                            }}
                                            name="email"
                                           
                                        />
                                        <TextField
                                            label="Phone number"
                                            variant="outlined"
                                            fontFamily="Inter-Regular"
                                            fullWidth
                                            sx={{
                                                marginBottom: "20px !important",
                                            }}
                                            name="phone"
                                          
                                        />
                                    </Box>
                                    <Box
                                        component="form"
                                        display="flex"
                                        sx={{
                                            "& .MuiTextField-root": {
                                                m: 0.5,
                                                width: "30%",
                                            },
                                        }}
                                      
                                        noValidate
                                        autoComplete="off"
                                        justifyContent="flex-start"
                                    >
                                          <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
                                          <InputLabel htmlFor="my-input">Mois</InputLabel>

                                          <Select 
                                          
                                          
                                          >
                                       
                                       <MenuItem value="#">Selection le mois</MenuItem>
                                       <MenuItem >2</MenuItem>
                                       <MenuItem >3</MenuItem>
                                       <MenuItem >4</MenuItem>
                                       <MenuItem >5</MenuItem>
                                       <MenuItem >6</MenuItem>
                                       <MenuItem >7</MenuItem>
                                       <MenuItem >8</MenuItem>
                                       <MenuItem >9</MenuItem>
                                       <MenuItem >10</MenuItem>
                                       <MenuItem >11</MenuItem>
                                       <MenuItem >12</MenuItem>

                                        
                                       
                                       </Select>
                                       </FormControl>
                                       
                                       <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
                                       <TextField
                                             label="Mois"
                                             variant="outlined"
                                             fontFamily="Inter-Regular"

                                            />
                                       </FormControl>
                                       
                                       <FormControl sx={{ m: 1, minWidth: 30 }} size="small">
                                      
                                          <TextField
                                             label="Année"
                                             variant="outlined"
                                             fontFamily="Inter-Regular"

                                            />
                                       
                                       
                                       </FormControl>
                                       
                                    </Box>
                                  <Button
                                        variant="contained"
                                        type="submit"
                                        color="error"
                                        sx={{
                                            mb: 2,
                                            fontFamily: "Inter-Regular",
                                        }}
                                        onClick={handleSubmit}
                                    >
                                        Payer maintenant
                                    </Button>
                        </Card>
                    </Grid>
                </Grid>
            </Card>
        </Container> */}</Box>
    );
};
export default Checkout;