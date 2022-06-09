import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { BorderAll, Image, Language, ShoppingBag, ShoppingBagOutlined,ShoppingCart,ShoppingCartCheckout } from "@mui/icons-material";
import logo from '../../assets/images/logo.png'
import CardMedia from "@mui/material/CardMedia";
import { pink, red } from "@mui/material/colors";
import { Badge, Select } from "@mui/material";
import { InertiaLink, Link } from "@inertiajs/inertia-react";
const settings = ["Profile", "Account", "Dashboard", "Logout"];
import messages from '../../../../public/messages'
import Lang from 'lang.js' 
const lang = new Lang({ messages })



const menus = [
    {id:1,title:lang.get('messages.home'),path:"/"},
    {id:2,title:lang.get('messages.about'),path:"/about"},
    {id:3,title:lang.get('messages.training'),path:"/formation"},
    {id:4,title:lang.get('messages.contact'),path:"/contact"},
    {id:5,title:lang.get('messages.services'),path:"/services"},
    {id:6,title:lang.get('messages.catalog'),path:"/catalogue"},
    {id:7,title:lang.get('messages.posts'),path:"/posts"},
    {id:8,title:lang.get('messages.login'),path:"/login"},
    {id:9,title:lang.get('messages.register'),path:"/register"}
]
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";
import {getTotals,getCartTotalQuantity} from "@/redux/featured/formation/formationSlice";
import { TranslateIcon } from "@heroicons/react/outline";

const Header = () => {
    
    const language = new Lang();
const handleLang=(e)=>{
setLocale(e.target.value);
    window.location.href = `http://127.0.0.1:8000/lang/${e.target.value}`
      
}



    const dispatch = useDispatch()
    const cart = useSelector( (state) => state.cart.cartItems);
    const qty = useSelector(getCartTotalQuantity);
    console.log('Qty:',cart);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    React.useEffect(()=>{
        dispatch(getTotals())
    },[])
    React.useEffect(()=>{
        dispatch(getTotals())
    },[cart])
    return (
        <Box>
           <Box>
           <AppBar height={15} bgcolor='red' mb={20}>
                <Typography textAlign='center'>Mini header</Typography>
            </AppBar>
           </Box>

            <AppBar mt={20} elevation={1} position="fixed"
        // style={{ background: 'transparent', boxShadow: 'none'}}
        style={{ backgroundColor:'white',borderBottomWidth: 1}}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"

                        sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                    >
                      <Link href={route('formationDetail',1)} >


                        <CardMedia
                            component="img"
                            height="60"
                            width="70"

                            image={logo}
                            alt="Logo 1s1"


                        /> </Link>
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{ color: red[500] }}  />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                                width:240
                            }}
                        >
                            {menus.map((page) => (
                                <MenuItem

                                    key={page.id}

                                    onClick={handleCloseNavMenu}
                                >
                                    <InertiaLink  href={page.path}>
                                        {page.title}
                                    </InertiaLink>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        AAAAAA
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {menus.map((menu,index) => (
                            <Button
                                key={menu.id}
                             href={menu.path}

                                sx={{ my: 2, color: "black", display: "block",fontFamily:'Inter' }}

                            >
                           <InertiaLink  href={menu.path}>
                                        {menu.title}
                                    </InertiaLink>
                            </Button>
                        ))}
                
                           
                    
                    </Box>
                                
                       
                            
                            <Select size="small" id="lang" >
                               <MenuItem><Button href={route('langue','en')} > English</Button></MenuItem>
                              <MenuItem><Button href={route('langue','fr')} >Français</Button></MenuItem>
                            </Select>


                    <Box  sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton
                                href="/cart"
                                sx={{ p: 0 }}
                            >

                                <Badge badgeContent={qty} color="primary">
                                    <ShoppingCart size="small"/>
                                </Badge>


                            </IconButton>
                        </Tooltip>

                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
        </Box>
    );
};
export default Header;
