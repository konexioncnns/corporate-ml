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
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const currentLang = new Lang();

export default function Example() {
    return (
        <Container>
            <Box display="flex">
                <Box>
                    <img src={img} width="150px" height="150px" />
                </Box>
                <Box ml={3}>
                    <Typography fontFamily="Inter" textAlign="left">
                        Formation Itil4 fondation
                    </Typography>
                    <Typography textAlign="left">
                        Formation avec certification ITIL ™ITIL™ pour
                        Information Technology Infrastructure.
                    </Typography>
                    <Typography
                        textAlign="left"
                        fontSize={12}
                        fontFamily="Inter"
                    >
                        Formateur Tiemoko sidibe
                    </Typography>
                </Box>
                <Box>
                    <Typography alignItems="center">19.99</Typography>
                </Box>
            </Box>
            <AccodionDomaine />
            
        </Container>
    );
}
