import {Box, TableCell, Button, TableHead, TableRow, Typography, Menu,MenuItem,Chip} from '@mui/material'
import React from 'react'
import LayoutProfile from "@/Layouts/LayoutProfile";
import {More, MoreRounded} from "@mui/icons-material";
import ProfileLayout from '@/Layouts/ProfileLayout';

 const Order = () => {
     const [anchorEl, setAnchorEl] = React.useState(null);
     const open = Boolean(anchorEl);
     const handleClick = (event) => {
         setAnchorEl(event.currentTarget);
     };
     const handleClose = () => {
         setAnchorEl(null);
     };

     return (
        <ProfileLayout>
        <Box>
            <Typography
                mt={-3}
                textAlign="center"
                fontSize={22}
                fontFamily="Inter"
            >
                Liste des commandes
            </Typography>
            <TableHead>
                <TableRow>
                    <TableCell
                        variant="head"
                        size="medium"
                        width={200}
                    >
                        <Typography fontFamily="Inter">
                            N° de la commande
                        </Typography>
                    </TableCell>
                    <TableCell
                        variant="head"
                        size="medium"
                        width={200}
                    >
                        <Typography fontFamily="Inter">
                            Etat
                        </Typography>
                    </TableCell>
                    <TableCell
                        variant="head"
                        size="medium"
                        width={200}
                    >
                        <Typography fontFamily="Inter">
                            Montant avec taxes
                        </Typography>
                    </TableCell>
                    <TableCell
                        variant="head"
                        size="medium"
                        width={200}
                    >
                        <Typography fontFamily="Inter">
                            Date
                        </Typography>
                    </TableCell>
                    <TableCell
                        variant="head"
                        size="medium"
                        width={200}
                    >
                        <Typography fontFamily="Inter">
                            Actions
                        </Typography>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableRow>
                <TableCell>1S10001</TableCell>
                <TableCell><Chip label="Finalisée" color="success" variant="contained" /></TableCell>
                <TableCell>50000</TableCell>
                <TableCell>22/05/2021</TableCell>
                <TableCell><Button
                    id="orderActions"

                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MoreRounded />
                </Button>
                    <Menu
                        id="orderActions"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',}}>
                        <MenuItem onClick={handleClose} >Voir les details</MenuItem>
                        <MenuItem onClick={handleClose} >Voir les details</MenuItem>
                        <MenuItem onClick={handleClose} >Voir les details</MenuItem>
                            </Menu>



                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>1S10002</TableCell>
                <TableCell><Chip label="Finalisée" color="success" variant="contained" /></TableCell>
                <TableCell>50000</TableCell>
                <TableCell>22/05/2021</TableCell>
                <TableCell>Plus ...</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>1S10003</TableCell>
                <TableCell><Chip label="Rejetée" color="error" variant="contained" /></TableCell>
                <TableCell>50000</TableCell>
                <TableCell>22/05/2021</TableCell>
                <TableCell>Afficher</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>1S10004</TableCell>
                <TableCell><Chip label="En cour..." color="warning" variant="contained" /></TableCell>
                <TableCell>50000</TableCell>
                <TableCell>22/05/2021</TableCell>
                <TableCell>Afficher</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>1S10005</TableCell>
                <TableCell><Chip label="Finalisée" color="success" variant="contained" /></TableCell>
                <TableCell>50000</TableCell>
                <TableCell>22/05/2021</TableCell>
                <TableCell>Afficher</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>1S10006</TableCell>
                <TableCell><Chip label="Finalisée" color="success" variant="contained" /></TableCell>
                <TableCell>50000</TableCell>
                <TableCell>22/05/2021</TableCell>
                <TableCell>Afficher</TableCell>
            </TableRow>
        </Box>
</ProfileLayout>

    )
}
export default  Order
