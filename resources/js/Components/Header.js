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
import { BorderAll, Image, ShoppingBag, ShoppingBagOutlined, ShoppingCart, ShoppingCartCheckout } from "@mui/icons-material";
import logo from '../assets/images/logo.png'
import CardMedia from "@mui/material/CardMedia";
import { pink, red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../constants";
import { Badge } from "@mui/material";
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const menus = [
    {id:1,title:"Acceuil",path:"/"},
    {id:2,title:"Apropos",path:"about"},
    {id:3,title:"Formation",path:"/formations"},
    {id:4,title:"Contactez",path:"/contact"},
    {id:5,title:"Services",path:"/services"},
    {id:6,title:"Catalogue",path:"/catalogues"},
    {id:7,title:"Publications",path:"/posts"}
]

const Header = () => {

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
const navigate = useNavigate()
    return (
        <Box>

            <AppBar elevation={1} position="fixed"
        // style={{ background: 'transparent', boxShadow: 'none'}}
        style={{ backgroundColor:'white',borderBottomWidth: 1}}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                    >
                        <CardMedia
                            component="img"
                            height="60"
                            width="70"

                            image={logo}
                            alt="Logo 1s1"
                            onClick={()=>navigate("/")}

                        />
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
                                    <Typography   textAlign="center" onClick={()=>navigate(page.path)}>
                                        {page.title}
                                    </Typography>
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
                               onClick={()=>navigate(menu.path)}
                                sx={{ my: 2, color: "black", display: "block",fontFamily:'Inter' }}

                            >
                                {menu.title}
                            </Button>
                        ))}
                    </Box>
                    <Box>
                    <ShoppingCart/>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                              <Badge badgeContent={4} color="primary">
                                 <ShoppingCart />
                                </Badge>

                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={handleCloseUserMenu}
                                >
                                    <Typography  textAlign="center">
                                        {setting}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        </Box>
    );
};
export default Header;
