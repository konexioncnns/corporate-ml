import React from 'react';
import {Box, ListItem, List, Typography, Container,Divider} from "@mui/material"
import { Link } from '@inertiajs/inertia-react';
import profile from "../assets/images/user.jpg";
import ProfileHeader from "@/Layouts/Head";
export default function LayoutProfile ({children}){
    return(
        <Box>

            <Box display='flex'>

                <Box flex={1} ml={10} bgcolor='#f5f5f5' height="100vh" sx={{xs:{display:'none'}}}>
                    <Container>
                        <Box  >
                            <img src={profile} width="160" height="160" style={{borderRadius:'50%'}}/>
                        </Box>
                        <List  >


                            <ListItem selected={true} >  <Link href={route('profile/order')} >Mes Information</Link></ListItem>
                            <Divider />
                            <ListItem>  <Link href={route('profile/training')} >Mes Formations</Link></ListItem>
                            <Divider />
                            <ListItem>  <Link href={route('profile/order')} >Mes Commandes</Link></ListItem>
                            <Divider />
                            <ListItem>  <Link href={route('profile/setting')} >Reglages</Link></ListItem>




                        </List>
                    </Container>
                </Box>
                <Box  flex={5}>
                    {children}
                </Box>
            </Box>
        </Box>

    )
}
