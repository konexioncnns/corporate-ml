import {
    AppBar,
    Typography,
    Link,
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
import { InertiaLink } from "@inertiajs/inertia-react";
import { Call, ShoppingCart } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import FrFlag from "../../assets/icons/fr.png";
import EnFlag from "../../assets/icons/en.png";
import { ChevronDownIcon } from "@heroicons/react/outline";
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

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

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
                {menus.map((menu,i) => (
                    <Link key={i} underline="none" color="black" href={menu.path}>
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
                        bgcolor="red"
                        display="flex"
                        justifyContent="space-around"
                        alignItems="center"
                        height="5vh"
                    >
                        <Box>
                            <Typography>
                                Pour plus d'information :
                                <a
                                    href="tel:+223 20
                            20 20 20"
                                >
                                    <Call /> contacter nous
                                </a>
                            </Typography>
                        </Box>

                        <Box display="flex" alignItems="center">
                            {" "}
                            <Box>
                                {/*   Langue switcher */}

                                {currentLang.getLocale() === "en" ? (
                                    <MenuItem>
                                        <a href={route("langue", "fr")}>
                                            <img
                                                src={FrFlag}
                                                height={20}
                                                width={20}
                                            />
                                        </a>
                                    </MenuItem>
                                ) : (
                                    <MenuItem>
                                        <a href={route("langue", "en")}>
                                            {" "}
                                            <img
                                                src={EnFlag}
                                                height={20}
                                                width={20}
                                            />
                                        </a>
                                    </MenuItem>
                                )}
                            </Box>
                            <InertiaLink sx={{}} href="/login">
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
                            </InertiaLink>
                            <InertiaLink href="/register">
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
                            </InertiaLink>
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
                        <Link href="#" underline="none">
                            <CardMedia
                                component="img"
                                height="60"
                                width="70"
                                image={logo}
                                alt="Logo 1s1"
                            />
                        </Link>

                        {matches ? (
                            <Box mx={10} >
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
                                {menus.map((menu) => (
                                    <InertiaLink 
                                        href={menu.path}
                                        underline="none"
                                        key={menu.id}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: 14,
                                                color: "black",
                                                display: "block",
                                                fontFamily: "Inter",
                                                "&:hover": {},
                                            }}
                                        >
                                            {menu.title}
                                        </Typography>
                                    </InertiaLink>
                                ))}
                                <Typography
                                    aria-describedby={id}
                                    onClick={handleClick}
                                    sx={{
                                        fontSize: 14,
                                        color: "black",
                                        display: "block",
                                        fontFamily: "Inter",
                                        cursor: "pointer",
                                    }}
                                >
                                    {lang.get("messages.about")}
                                </Typography>

                                <Popover
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "left",
                                    }}
                                >
                                    <List>
                                        <ListItem>
                                            <InertiaLink
                                                href="/about"
                                                underline="none"
                                            >
                                                A propos
                                            </InertiaLink>
                                        </ListItem>
                                        <ListItem>
                                            <InertiaLink
                                                href="/about"
                                                underline="none"
                                            >
                                                A propos
                                            </InertiaLink>
                                        </ListItem>

                                        
                                    </List>
                                </Popover>
                            </Box>
                        )}

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton sx={{ p: 0 }}>
                                    <InertiaLink href="/cart">
                                        <Badge
                                            badgeContent={qty}
                                            color="primary"
                                        >
                                            <ShoppingCart size="small" />
                                        </Badge>
                                    </InertiaLink>
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
