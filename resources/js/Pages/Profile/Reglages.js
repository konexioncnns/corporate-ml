import React from "react";
import {TabContext, TabList,TabPanel} from "@mui/lab";
import {
    Tab,
    Box,
    Typography,
    Card,
    CardHeader,
    CardContent,
    TextField,
    Button,
    List,
    ListItem,
    IconButton
} from "@mui/material";
import LayoutProfile from "@/Layouts/LayoutProfile";
import {
    Facebook, FacebookOutlined,
    FilterAltOffOutlined,
    GitHub,
    Google,
    GradientOutlined, LinkedIn,
    TextFieldsOutlined, WhatsApp
} from "@mui/icons-material";
import ProfileLayout from "@/Layouts/ProfileLayout";



 const    Reglages = () => {
    const [value, setValue] = React.useState('1');

     const handleChange = (event, newValue) => {
         setValue(newValue);
     };
    return(
        <ProfileLayout>
           <Box sx={{width:'50%'}}>
               <TabContext value={value}>
                   <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                       <TabList onChange={handleChange} >
                           <Tab sx={{fontFamily:"Inter-Roman",fontWeight:'bold'}} label="General" value="1" />
                           <Tab sx={{fontFamily:"Inter-Roman",fontWeight:'bold'}} label="Avatar" value="2" />
                           <Tab sx={{fontFamily:"Inter-Roman",fontWeight:'bold'}} label="Mot de pass" value="3" />
                       </TabList>
                   </Box>
                   <Box sx={{border:"0.5px solid",borderColor:"#c4bcbc",textAlign:'left' }}>
                       <TabPanel value="1"><Typography>
                           <Card>
                               <CardHeader title='Biography' subtitle='Mes details'/>

                               <CardContent>
                                  <Box display='flex'>

                                      <Box>
                                          <ListItem divider={true} fontFamily='Inter-Regular'>Nom:</ListItem>
                                          <ListItem divider={true}>Prenom:</ListItem>
                                          <ListItem divider={true}>Date de naissance:</ListItem>
                                          <ListItem divider={true}>Telephone:</ListItem>
                                          <ListItem divider={true}>Genre:</ListItem>
                                      </Box>
                                      <Box>
                                          <ListItem divider={true}>
                                              <Typography fontFamily='Inter'>Kone</Typography>
                                          </ListItem>
                                          <ListItem divider={true}>    <Typography fontFamily='Inter'>Abdrahamane</Typography></ListItem>
                                          <ListItem divider={true}>    <Typography fontFamily='Inter'>20/10/1982</Typography></ListItem>
                                          <ListItem divider={true}>    <Typography fontFamily='Inter'>+223 70 70 70 70</Typography></ListItem>
                                          <ListItem divider={true}>  <Typography fontFamily='Inter'>Homme</Typography></ListItem>
                                      </Box>

                                  </Box>
                               </CardContent>
                           </Card>
                           <Card bgcolor="#f6f6f6">
                               <CardHeader title='Réseaux sociaux'/>

                                   <CardContent>
                                   <Box display='flex'>

                                       <IconButton>
                                           <Facebook/>

                                       </IconButton>
                                       <IconButton>
                                           <Google/>
                                       </IconButton>
                                       <IconButton>
                                           <GitHub/>
                                       </IconButton>
                                       <IconButton>
                                           <LinkedIn/>
                                       </IconButton>
                                       <IconButton>
                                           <WhatsApp/>
                                       </IconButton>

                                   </Box>
                               </CardContent>
                           </Card>

                       </Typography>  </TabPanel>
                       <TabPanel value="2"><Typography>Image</Typography>  </TabPanel>
                       <TabPanel value="3"><Typography>
                          <Box>
                              <Typography textAlign='center' fontSize={14} fontFamily='Inter' mb={3}>Changer de mot de passe</Typography>
                              <Box display='flex' justifyContent='space-between' mb={2}>
                                  <TextField placeholder="Mot de pass"/>
                                  <TextField placeholder="Confirmer" />
                              </Box>
                              <Button mt={2} variant='contained'  size='large'  >Confirmer</Button>
                          </Box>
                       </Typography>  </TabPanel>
                   </Box>
               </TabContext>
           </Box>
        </ProfileLayout>
    )
}
export default Reglages
