import {
    Add,
    ArrowCircleRight,
    ArrowRight,
    ArrowRightAltRounded,
    ExpandMore,
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
    ListItemButton,
    ListItemText,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, usePage } from "@inertiajs/inertia-react";
import { pink, red } from "@mui/material/colors";
import { useSelector } from "react-redux";
import PageHeader from "@/Components/PageHeader";

import img from '../assets/images/demoImg.png'




export default function SearchPageList() {

    const { domaines, formations,textSearch } = usePage().props;
    const [dataF, setData] = useState([]);
    const [filteredPost, setFilteredPost] = useState([]);
    const [active, setActive] = useState(0);
    const search = useSelector((state)=>state.search.searchText);
    const [searchTxt ,setSearch]=useState('');
  
        console.log("search:",searchTxt,)
        useEffect(() => {

    const filtered = dataF.filter((form)=>form.title?.fr.toLowerCase().includes(searchTxt.toLowerCase()
    || form.title?.en.toLowerCase().includes(searchTxt.toLowerCase())));
    setFilteredPost(filtered);
  
  
    }, [searchTxt])

    useEffect(() => {
        fetchData();
        setSearch(search)
    }, []);
  //  console.log("Data with fetch:", filteredPost);
    const fetchData = () => {
        setData(formations);
        console.log(dataF);

      //  setFilteredPost(posts.data);
    };
    useEffect(() => {
        if(active===0){
            
            setFilteredPost(formations)
            return;
        }
        const filtered = dataF.filter((form)=>form.domaine_id===active);
        setFilteredPost(filtered);
      
    }, [active])

    const [checkBoxValue, setCheckBoxValue] = useState();
    const getCheckBoxValue = (e) => {
        setCheckBoxValue(e.target.value);
        alert(`Vous avez cocher: ${checkBoxValue}`);
    };

    /* Fonction pour filtrer les resultats par editeur */

    
const FilterCat=()=>{
    return(
        <Grid item xs={12} sm={3} sx={{ xs: "none" }}>
        <Box bgcolor="#FFFFFF">
            <Box sx={{ borderBottom: 0.5 }}>
            
                    <AccordionSummary>
                        CATEGORIES
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                        <ListItem>
                                  <ListItemButton
                                    component="a"
                                    onClick={()=>setActive(0)}
                                    selected={active===0 ? true:false}
                                    sx={{
                                        "Mui-selected": {
                                            backgroundColor: "red",}
                                    }}
                                  
                                >
                                    
                                    Voir toutes les formation
                                   
                                </ListItemButton>
                              </ListItem>

                            {domaines.map((item, i) => (
                              <ListItem  >
                                  <ListItemButton
                                
                                    component="a"
                                    onClick={()=>setActive(item.id)}
                                    selected={active===item.id? true:false}
                                   
                                            
                                  
                                  
                                >
                                    <Typography variant="h4" fontSize={16} fontFamily="Inter var"  fontWeight="500">
                                     {item.title.fr}</Typography>
                                   
                                </ListItemButton>
                              </ListItem>
                            ))}
                        </List>
                    </AccordionDetails>
               
            </Box>
            <Box sx={{ borderBottom: 0.5 }}>
            <Accordion>
                <AccordionSummary  expandIcon={<ExpandMore />}>
                    FILTRER PAR EDITEUR
                </AccordionSummary>
                <AccordionDetails>
                    {domaines.map((item, i) => (
                        <ListItem key={i} sx={{ padding: 0 }}>
                            <Checkbox
                                sx={{
                                    color: red[800],
                                    "&.Mui-checked": {color: red[600],},
                                }}
                                value={item.id}
                                onClick={()=>setActive(item.id)}
                            />
                            {item.title.fr}
                        </ListItem>
                    ))}
                </AccordionDetails>
          </Accordion>
            </Box>
        </Box>
    </Grid>
    )
}
    return (
        <Box mt={-10}>
           <Box height="40vh"   sx={{


         
         minHeight:"200px",
         width:"100vw",
         backgroundImage:`url(${img})`,
         backgroundRepeat: "no-repeat",
         backgroundSize: "cover",
         justifyContent:'center',
         backgroundPosition:"center center",
         backgroundAttachment:'scroll',
         boxSizing:'border-box',

        
     }}>
       <Box 
       >
       <TextField sx={{
        paddingY:15
       }} placeholder="Trouver une formation" />
       </Box>

           </Box>
            <Typography  fontFamily="Inter var" fontSize={20}>Resultat de recherche</Typography>
            <Container>
                <Grid container spacing={2}>
                   <FilterCat/>

                    <Grid container item xs={12} mb={10} sm={9}>
                        {filteredPost.map((item, index) => {
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
                                    <Typography textAlign="left"  fontFamily="Inter var">
                                        Formation
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        fontWeight="bold"
                                        fontSize={22}
                                        fontFamily="Inter var"
                                        textAlign="left"
                                        px={2}
                                    >
                                        {item.title.fr}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        textAlign="left"
                                        fontWeight="400"
                                        fontSize={18}
                                        fontFamily="Inter var"
                                        px={2}
                                        sx={{
                                            lineHeight: 1.5,
                                            letterSpacing: 1,
                                            display: "-webkit-box",
                                            overflow: "hidden",
                                            WebkitBoxOrient: "vertical",
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
    );
}
