import {
    Box,
    Button,
    Card,
    CardHeader,
    CardMedia,
    Container,
    Divider,
    FormControl,
    Icon,
    InputLabel,
    ListItem,
    ListItemText,
    MenuItem,
    Select,
    Stack,
    Table,
    TableBody,
    TableHead,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import IMAGES from "../constants/Images";

import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

import AddIcon from "@mui/icons-material/Add";
import MinimizeIcon from "@mui/icons-material/Minimize";
import img from "../assets/images/itil4cfr.png";
import { AccessAlarm } from "@mui/icons-material";
import { fontFamily } from "@mui/system";
import { addCart, clearCart, decreaseCartQty, getCart, getCartTotalQuantity, getTotals, removeFromCart } from "../redux/featured/formation/formationSlice";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
    const dispatch = useDispatch();


    const cart = useSelector((state)=>state.cart.cartItems);
    const qty = useSelector(getCartTotalQuantity);
    const { cartTotalAmont } = useSelector((state) => state.cart);

    const [quantity, setQuantity] = useState();

    const handleDelete = (product) => {
        dispatch(removeFromCart(product));
    };

    const handleDecrease = (product) => {
        dispatch(decreaseCartQty(product));
    };
    const handleIncrease = (product) => {
        dispatch(addCart(product));
    };
    const handleClear = () => {
        dispatch(clearCart());
        navigate("/");
    };
    useEffect(() => {
        dispatch(getTotals());
    }, [cart]);
    console.log("Donnees:", cart);
    return (
        <Box>
            <h2>Panier d'achat</h2>

            <Container sx={{ display: "flex", flexWrap: "wrap" }}>
                <Box sx={{ flex: 2 }}>
                    <CardHeader
                        sx={{ backgroundColor: "red", maxHeight: 60,borderRadius:2,color:"white", fontFamily:'Inter' }}
                        title="Votre panier"
                        subheader={`Vous avez ${qty} produit(s) dans le panier`}
                        subheaderTypographyProps={{
                            style:{color:"white"}
                        }}
                    />


                    {cart.map((item,index)=>{
                        return(
                            <Card  xs={12}
                                   key={index}
                                   sx={{
                                       display: "flex",
                                       borderRadius: 2,
                                       marginTop: 2,
                                       padding: "10px",
                                       boxShadow: "0 12px, 20px, 1px, rgba(64, 64, 64, 0.09)",
                                   }}
                            >
                                <Box>
                                    <img
                                        src={`../img/formations/${item.image}`}
                                        width="70"
                                        height="70"
                                        style={{ marginTop: 20 }}
                                        alt="p image"
                                    />
                                </Box>

                                <Box textAlign="left" ml={3}>
                                    <Typography variant="h6" maxWidth={300}  whiteSpace="normal">
                                        {item.title.fr}
                                    </Typography>
                                    <Box display="flex">
                                        <AccessAlarm fontSize="small" />
                                        <Typography ml={1} variant="body2" fontSize={13}>
                                            Dure: 48 heures
                                        </Typography>
                                    </Box>


                                </Box>

                                <Box sx={{ flex: 0.5,flexGrow:1 }}>
                                    <Typography mb={-3}>Participant(s)</Typography>
                                    <Typography variant="h6" mt={3}>
                                        <Button size="large" onClick={() =>handleDecrease(item)}>
                                            {" "}
                                            <MinimizeIcon color="info" />{" "}
                                        </Button>
                                        <Button variant="outlined"  >{qty} </Button>
                                        <Button size="large" onClick={() => handleIncrease(item)}>
                                            {" "}
                                            <AddIcon color="success" />
                                        </Button>
                                    </Typography>
                                </Box>
                                <Box sx={{ flex: 0.5,xs:"none" }}>
                                    <Typography mb={-3}>Sous Total</Typography>
                                    <Typography variant="h6" mt={3} sx={{ flex: 0.5 }}>
                                        {item.price * qty}
                                    </Typography>
                                </Box>
                                <HighlightOffOutlinedIcon
                                    sx={{ marginTop: 5, color: "red" }}
                                    onClick={() =>handleDelete(item)}
                                />
                            </Card>)}
                    )}


                    <Divider light />
                </Box>
            </Container>
            <Container>
                <Card>
                    <Typography
                        sx={{
                            textAlign: "end",
                            marginTop: "50px",
                            marginBottom: "10px",
                            fontSize: "20px",
                            textTransform: "uppercase",
                            marginLeft: "20px",
                        }}
                    >
                        TOTAL :{cartTotalAmont}
                    </Typography>
                </Card>
            </Container>

            <Container

            >
                <Box   sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
                    <Box xs={12}>
                        <Button
                            variant="contained"
                            color="error"
                            sx={{
                                flex: 1,
                                height: "50px",
                                fontSize: 16,
                                fontFamily:"Inter",
                                width: "100%",
                                backgroundColor:"red",
                                borderRadius:5
                            }}
                            href="/formation"
                        >
                            Continuer l'achat
                        </Button>
                    </Box>
                    <Box  xs={12}>
                        <Button
                            variant="contained"
                            sx={{
                                flex: 1,
                                height: "50px",
                                fontSize: 16,
                                fontFamily:"Inter",
                                width: "100%",
                                backgroundColor: "success",
                                borderRadius:5
                            }}
                            href={route('checkout')}

                        >
                            Commander
                        </Button>
                    </Box>

                </Box>
            </Container>
        </Box>
    );
}

export default Cart;
