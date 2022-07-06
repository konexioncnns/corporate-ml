(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Formation_FormationGrid_js"],{

/***/ "./resources/js/Pages/Formation/FormationGrid.js":
/*!*******************************************************!*\
  !*** ./resources/js/Pages/Formation/FormationGrid.js ***!
  \*******************************************************/
/***/ (() => {

/* import {
  Add,
  ArrowCircleRight,
  ArrowRight,
  ArrowRightAltRounded,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, usePage } from "@inertiajs/inertia-react";
import { pink, red } from "@mui/material/colors";

import React from 'react'
import FilterCategory from './FilterCategory'


 const FormationGrid = () => {
  return (
    <Box mb={80}>
    <Typography>Resultat de recherche</Typography>
    <Container>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={3} sx={{ xs: "none" }}>
                <Box bgcolor="#FFFFFF">
                    <Box sx={{ borderBottom: 0.5 }}>
                        <AccordionSummary>
                            FILTRER PAR CATEGORIES
                        </AccordionSummary>
                        <AccordionDetails>
                            {domaines.map((item, i) => (
                                <ListItem key={i} sx={{ padding: 0 }}>
                                    <Checkbox
                                        sx={{
                                            color: red[800],
                                            "&.Mui-checked": {
                                                color: red[600],
                                            },
                                        }}
                                        value={item.id}
                                        onClick={(e) => filterResult(e)}
                                    />
                                    {item.title.fr}
                                </ListItem>
                            ))}
                        </AccordionDetails>
                    </Box> 
                    <Box sx={{ borderBottom: 0.5 }}>
                        <AccordionSummary>CATEGORIES</AccordionSummary>
                        <AccordionDetails>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    {domaines.map((item, i) => (
                                        <ListItem
                                            key={i}
                                            sx={{ padding: 0 }}
                                        >
                                            <FormControlLabel
                                               
                                                control={
                                                    <Radio
                                                        value={item.id}
                                                onClick={(e)=>filterResult(e)}
                                                        sx={{
                                                            color: pink[800],
                                                            "&.Mui-checked":
                                                                {
                                                                    color: pink[600],
                                                                },
                                                        }}
                                                    />
                                                }
                                                label={item.title.fr}
                                            />
                                        </ListItem>
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </AccordionDetails>
                    </Box>
                </Box>
            </Grid>

            <Grid container item xs={12} mb={10} sm={9}>
                {data.map((item, index) => {
                    return (
                        <Box
                            key={index}
                            mt={2}
                            mx={1}
                            bgcolor="#FFFFFF"
                            sx={{
                                minHeight: 320,
                                xs: {
                                    mx: 1,
                                    width: "98%",
                                    justifyContent: "center",
                                },
                                width: 260,

                                borderWidth: 0.1,
                                borderColor: "#d3cfcf",
                            }}
                        >
                            <Typography textAlign="left">
                                Formation
                            </Typography>
                            <Typography
                                variant="h6"
                                fontWeight="600"
                                fontFamily="Inter"
                                textAlign="left"
                            >
                                {item.title.fr}
                            </Typography>
                            <Typography
                                variant="body2"
                                textAlign="left"
                                fontFamily="Inter-Regular"
                                px={2}
                                sx={{
                                    lineHeight:1.5,
                                    letterSpacing:1,
                                    display:
                                        "-webkit-box",
                                    overflow:
                                        "hidden",
                                    WebkitBoxOrient:
                                        "vertical",
                                    WebkitLineClamp: 6,
                                }}
                            >
                                {item.description.fr}
                            </Typography>
                            <Box sx={{ marginBottom: 2 }}>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        marginTop: 5,
                                        width: 180,
                                        height: 50,
                                        borderRadius: 20,
                                        alignContent: "end",
                                    }}
                                >
                                    <Link
                                        href={route(
                                            "formationDetail",
                                            `${item.id}`
                                        )}
                                    >
                                        En savoir plus
                                        <ArrowCircleRight />
                                    </Link>
                                </Button>
                            </Box>
                        </Box>
                    );
                })}
            </Grid>
        </Grid>
    </Container>
</Box>
  )
}
export default FormationGrid; */

/***/ })

}]);