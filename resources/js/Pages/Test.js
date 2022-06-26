/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Container,
    List,
    ListItem,
    MenuItem,
    Select,
    Typography,
} from "@mui/material";
import { InertiaLink, Link } from "@inertiajs/inertia-react";
import { Call, ExpandMore, ToysOutlined } from "@mui/icons-material";
import img from "../assets/images/itil4cfr.png";
import AccodionDomaine from "./AccodionDomaine";
import Lang from "lang.js";
import Setting from "./Profile/Setting";
import PostDetail from "./PostDetail";
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const currentLang = new Lang();

export default function Example() {
    return (
        <Box>
            <PostDetail/>
           
            
        </Box>
    );
}
