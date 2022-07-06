import React from "react";
import { Box, Card, Grid, CardHeader, Typography, Button, Container,createTheme,  } from "@mui/material";
import demoImg from "../assets/images/demoImg.png";
import { Flag } from "@mui/icons-material";
import Team from "./Team";
import Partner from "./Partner";
import PageHeader from "@/Components/PageHeader";
import { red } from "@mui/material/colors";

const defaultTheme = createTheme();
const { breakpoints, typography: { pxToRem } } = defaultTheme

 const Demo = () => {
    return (
      <Box mx={10}>
        
          <Grid container spacing={1} mb={7}>
            <Grid item xs={12} sm={7}
           bgcolor="#F9FAFB"
             
            >
           
               <Box
             
              sx={{
                width:{xs:"95vw",sm:"100%",md:"100vh"},
                height:{xs:"50vh",sm:"80vh",md:"80vh"},
                borderRadius:2,
                py:5,
                opacity: 0.8,
                backgroundImage: `url(${demoImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
               }}
               >
                 <Box >
            <Typography textAlign="left" variant="h4" sx={{typography:{ xs:{fontSize:16},sm:{fontSize:36}}}} fontFamily="Inter" color="red" >Faite une demande de demo en remplissant le formulaire</Typography>
              
            </Box>
              </Box>
               
            </Grid>
            <Grid item xs={12} sm={5} >
                <Box component="form" noValidate autoComplete="off">
                    <Box>
                        <CardHeader
                            title="Demandez une demo"
                            sx={{
                               // backgroundColor: "#D32F2F",
                               borderRadius:2,
                                backgroundColor:"#C62828",
                                height: 40,
                                color: "white",
                            }}
                        />

                        <div className="mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
                            <div className="col-span-2">
                            <Typography fontSize={13} textAlign="left" fontFamily="Inter-Regular">Nom<span className="text-red-500">*</span></Typography>
                                   
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="firstname"
                                        placeholder="Nom"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-100 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2">
                            <Typography fontSize={13} textAlign="left" fontFamily="Inter-Regular">Prenom<span class="text-red-500">*</span></Typography>
                                   
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="lastname"
                                        placeholder="Prenom"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-100 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2">
                            <Typography fontSize={13} textAlign="left" fontFamily="Inter-Regular">Email<span class="text-red-500">*</span></Typography>
                                   
                                <div className="mt-1">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-100 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2">
                            <Typography fontSize={13} textAlign="left" fontFamily="Inter-Regular">Phone<span class="text-red-500">*</span></Typography>
                                   
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-100 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="col-span-4">
                            <Typography fontSize={13} textAlign="left" fontFamily="Inter-Regular">Country<span class="text-red-500">*</span></Typography>
                                   
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="country"
                                        placeholder="Country"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-100 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2">
                            <Typography fontSize={13} textAlign="left" fontFamily="Inter-Regular">Entreprise / Organisation<span class="text-red-500">*</span></Typography>
                                   
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="entreprise"
                                        placeholder="Entreprise"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-100 sm:text-sm"
                                    />
                                </div>
                            </div>
                            
                            <div className="col-span-2">
                            <Typography fontSize={13} textAlign="left" fontFamily="Inter-Regular">Fonction<span class="text-red-500">*</span></Typography>
                                   
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="fonction"
                                        placeholder="fonction"
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-100 sm:text-sm"
                                    />
                                </div>
                            </div>
                            
                            

                            <div className="col-span-4">
                            <Typography fontSize={13} textAlign="left" fontFamily="Inter-Regular">Solution / Service<span class="text-red-500">*</span></Typography>
                                   
                                <div className="mt-1"> 
                                    <select className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-100 sm:text-sm"
                                   >
                                        <option>Selectionner une solution</option>
                                        <option>Archico</option>
                                        <option>Archico</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                      <Box
                         display="flex"
                         justifyContent="flex-start"
                         alignItems="flex-start"
                         mt={3}
                      >
                      <Button
                        
                        variant="contained"
                        type="submit"
                        color="error"
                        sx={{

                            mb: 2,
                            fontFamily: "Inter-Regular",
                        }}
                    >
                        <Typography variant="h7" fontFamily="Inter-Regular"> Envoyer la demande</Typography>
                       
                    </Button>
                      </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
        <Partner/>
     
      </Box>
    );
};
export default Demo