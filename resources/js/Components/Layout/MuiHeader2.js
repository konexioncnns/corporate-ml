import {
    AppBar,
    Typography, 
    Box,
    Toolbar,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Drawer,
    CardMedia,
    Select,
    Button,
    MenuItem,
    Tooltip,
    Badge,
    Menu,
    Paper,
    Popover,
    Input,
} from "@mui/material";
import React, { useState } from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../../assets/images/logo.png";
import {
    getTotals,
    getCartTotalQuantity,
} from "@/redux/featured/formation/formationSlice";
import messages from "../../../../public/messages";
import Lang from "lang.js";
import { InertiaLink, Link } from "@inertiajs/inertia-react";
import { AccountCircleOutlined, Call, KeyboardArrowDown, LoginOutlined, ShoppingCart, ShoppingCartCheckoutOutlined, ShoppingCartTwoTone, VerifiedUser } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import FrFlag from "../../assets/icons/fr.png";
import EnFlag from "../../assets/icons/en.png";
import { ArrowSmDownIcon, ChevronDownIcon, UserCircleIcon } from "@heroicons/react/outline";
import { UserIcon } from "@heroicons/react/solid";
import { red } from "@mui/material/colors";
const lang = new Lang({ messages });
const currentLang = new Lang();

const l = currentLang.getLocale;

const menus = [
    { id: 1, title: lang.get("messages.home"), path: "/" },
    { id: 2, title: lang.get("messages.about"), path: "/apropos" },
    { id: 3, title: lang.get("messages.training"), path: "/formation" },
    { id: 4, title: lang.get("messages.contact"), path: "/contactus" },
    { id: 5, title: lang.get("messages.services"), path: "/services" },
    { id: 6, title: lang.get("messages.catalog"), path: "/catalogue" },
    { id: 7, title: lang.get("messages.posts"), path: "/articles" },
];

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const MuiHeader = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorElS, setAnchorElS] = React.useState(null);
  const open = Boolean(anchorEl);
  const openS = Boolean(anchorElS);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickS = (event) => {
    setAnchorElS(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseS = () => {
    setAnchorElS(null);
  };

    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {menus.map((menu, i) => (
                    <Link
                        key={i}
                        underline="none"
                        color="black"
                        href={menu.path}
                    >
                        <ListItem button key={menu.id}>
                            <ListItemText primary={menu.title} />
                        </ListItem>
                    </Link>
                ))}
                
            </List>
        </Box>
    );

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cartItems);
    const qty = useSelector(getCartTotalQuantity);

    React.useEffect(() => {
        dispatch(getTotals());
    }, []);
    React.useEffect(() => {
        dispatch(getTotals());
    }, [cart]);
    const [currency, setCurrency] = useState("USD");

    const handleCurrencyChange = (e) => {};

    return (
        <Box sx={{ marginBottom: "50px" }}>
            <ElevationScroll {...props}>
                <AppBar>
                    <Box
                    display={{xs:'none',sm:"flex"}}
                        bgcolor={red[100]}
                        justifyContent="space-around"
                        alignItems="center"
                        height="5vh"
                    >
                        <Box>
                            <Typography color='black' fontSize={12} fontFamily="Inter-Roman">
                                Pour plus d'infos : 
                               <a
                                    href="tel:+223 20
                            20 20 20"
                                >
                                    <Call /> +223 20
                            20 20 20
                                </a> 
                            </Typography>
                        </Box>

                        <Box display="flex" alignItems="center">
                            {" "}
                            <Box>
                                {/*   Langue switcher */}

                                {currentLang.getLocale() === "en" ? (
                                    <MenuItem>
                                        <Link href={route("langue", "fr")}>
                                            <img
                                                src={FrFlag}
                                                height={20}
                                                width={20}
                                            />
                                        </Link>
                                    </MenuItem>
                                ) : (
                                    <MenuItem>
                                        <Link href={route("langue", "en")}>
                                            {" "}
                                            <img
                                                src={EnFlag}
                                                height={20}
                                                width={20}
                                            />
                                        </Link>
                                    </MenuItem>
                                )}
                            </Box>
                            <a sx={{}} href="/login">
                                <Typography
                                    sx={{
                                        fontSize: 14,
                                        color: "black",
                                        display: "block",
                                        fontFamily: "Inter-regular",
                                        mr: 2,
                                        color: "white",
                                        fontSize: 14,
                                    }}
                                >
                                    {lang.get("messages.login")}
                                </Typography>
                            </a>
                            <a href="/register">
                                <Typography
                                    sx={{
                                        fontSize: 14,
                                        color: "black",
                                        display: "block",
                                        fontFamily: "Inter-regular",
                                        fontSize: 14,
                                        color: "white",
                                    }}
                                >
                                    {lang.get("messages.register")}
                                </Typography>
                            </a>
                            <Select onChange={handleCurrencyChange}>
                                <MenuItem value="XOF">FCFA</MenuItem>
                                <MenuItem value="CAD">Dollar Cad</MenuItem>
                                <MenuItem value="EUR">Euro</MenuItem>
                            </Select>
                        </Box>
                    </Box>
                    <Toolbar
                        sx={{
                            height: "10vh",
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "20px",
                            backgroundColor: "white",
                        }}
                    >
                        <Link href="/" underline="none">
                            <CardMedia
                                component="img"
                                height="60"
                                width="70"
                                image={logo}
                                alt="Logo 1s1"
                            />
                        </Link>

                        {matches ? (
                            <Box mx={10}>
                                <IconButton
                                    size="large"
                                    edge="end"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={toggleDrawer("right", true)}
                                >
                                    <MenuIcon sx={{ color: "black" }} />
                                </IconButton>

                                <Drawer
                                    anchor="right"
                                    open={state["right"]}
                                    onClose={toggleDrawer("right", false)}
                                >
                                    {list("right")}
                                </Drawer>
                            </Box>
                        ) : (
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    flexGrow: 0.3,
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 16,
                                        fontWeight: "bold",
                                        color: "black",
                                        display: "block",
                                        fontFamily: "Inter-Roman",
                                        cursor: "pointer",
                                    }}
                                >
                                    <Link  href="/formation">
                                            {" "}
                                            {lang.get("messages.training")}
                                        </Link>
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: 14,
                                        fontWeight: "600",
                                        color: "black",
                                        display: "block",
                                        fontFamily: "Inter-Roman",
                                        cursor: "pointer",
                                    }}
                                >
                                    <Link href="/catalogue">
                                        {" "}
                                        {lang.get("messages.catalog")}
                                    </Link>
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: 14,
                                        fontWeight: "600",
                                        color: "black",
                                        display: "block",
                                        fontFamily: "Inter-Roman",
                                        cursor: "pointer",
                                    }}
                                >
                                    <a href="/services">
                                        {" "}
                                        {lang.get("messages.services")}
                                    </a>
                                </Typography>
                                <Typography
                                    id="solution-menu"
                                    aria-controls={
                                        openS ? "solution-menu" : undefined
                                    }
                                    aria-haspopup="true"
                                    aria-expanded={openS ? "true" : undefined}
                                   
                                    onClick={handleClickS} 
                                    sx={{
                                        fontSize: 14,
                                        fontWeight: "600",
                                        color: "black",
                                        display: "block",
                                        fontFamily: "Inter-Roman",
                                        cursor: "pointer",
                                         
                                    }}
                                >
                                    <Link href="/services">
                                        {" "}
                                        {lang.get("messages.solutions")}
                                    </Link>
                                </Typography>

                                <Typography
                                    aria-describedby="posts"
                                    onClick={handleClick}
                                    sx={{
                                        fontSize: 14,
                                        fontWeight: "600",
                                        color: "black",
                                        display: "block",
                                        fontFamily: "Inter-Roman",
                                        cursor: "pointer",
                                    }}
                                >
                                    <Link href="/articles">
                                        {lang.get("messages.posts")}
                                    </Link>
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: 14,
                                        fontWeight: "600",
                                        color: "black",
                                        display: "block",
                                        fontFamily: "Inter-Roman",
                                        cursor: "pointer",
                                    }}
                                >
                                    <a href="/contactus">
                                        {lang.get("messages.contact-us")}
                                    </a>
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: 16,
                                        fontWeight: "bold",
                                        color: "black",
                                        display: "block",
                                        fontFamily: "Inter-Roman",
                                        cursor: "pointer",
                                    }}
                                >
                                    <Link
                                    
                                        href={route("demo")}
                                        underline="none"
                                    >
                                        Demo
                                    </Link>
                                </Typography>

                                <Typography
                                    id="a-propos"
                                    aria-controls={
                                        open ? "basic-menu" : undefined
                                    }
                                    aria-haspopup="true"
                                    aria-expanded={open ? "true" : undefined}
                                    onClick={handleClick}
                                    sx={{
                                        fontSize: 16,
                                        fontWeight: "bold",
                                        color: "black",
                                        display: "block",
                                        fontFamily: "Inter-Roman",
                                        cursor: "pointer",
                                    }}
                                >
                                    <a
                                        href="/service/1"
                                        underline="none"
                                    >
                                        A propos
                                    </a>
                                </Typography>
                                <Typography>

                                </Typography>
                                <Menu
                                    id="solution-menu"
                                    anchorEl={anchorElS}
                                    open={openS}
                                    onClose={handleCloseS}
                                    MenuListProps={{
                                        "aria-labelledby": "basic-button",
                                    }}
                                >
                                    <MenuItem onClick={handleCloseS}>
                                        Archico
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseS}>
                                        Collab
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseS}>
                                      CRM
                                    </MenuItem>
                                </Menu>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        "aria-labelledby": "basic-button",
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>
                                        Profile
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        My account
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </Box>
                        )}

                        <Box display={{xs:"none",sm:"flex"}} sx={{ flexGrow: 0 }}>
                            <Tooltip title="Votre panier" sx={{ mr: "5px" }}>
                                <IconButton sx={{ p: 0 }}>
                                    <a href="/cart">
                                        <Badge badgeContent={qty} color="error">
                                            <ShoppingCartTwoTone size="small" />
                                        </Badge>
                                    </a>
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Box  display={{xs:"none",sm:"flex"}}  sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton sx={{ p: 0 }}>
                                    <a href="/user/orders">
                                        <AccountCircleOutlined />
                                    </a>
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </Box>
    );
};

export default MuiHeader;
