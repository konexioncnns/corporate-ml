import { ArrowForward, CircleOutlined, Facebook, Twitter, WhatsApp } from '@mui/icons-material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Button, Card, Divider, Grid, Link, ListItem, Tab, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React,{SyntheticEvent} from 'react'
import { useParams } from 'react-router-dom'
import { LabelButton } from '../components/LabelButton'
function Objectifs(){
  return(
    <Box>
      <Typography textAlign="left" fontFamily="Inter-Regular">
      Après avoir suivi la formation de coach professionnel, vous parviendrez à atteindre les objectifs suivants :
<li>acquérir les techniques et outils spécifiques à la profession de coach ;</li>
</Typography>
    </Box>
  )
}

/* Prereaquis */
function Prerequis(){
  return(
    <Typography textAlign="left" fontFamily="Inter-Regular">
      Suivre la formation PECB ISO 37301 Lead Implementer, nécessite les prérequis suivants :

<li>avoir des connaissances basiques sur les normes ISO standards applicables aux systèmes de gestion ;</li>
<li>avoir des connaissances basiques de la norme ISO 37301:2021 ou des directives de la norme ISO 19600 ; </li>
<li>avoir des connaissances fondamentales sur la mise en place de systèmes de gestion.</li>
    </Typography>
  )
}
const FormationDetail = () => {
  const [value, setValue] = React.useState('1');
  const {id} = useParams()
console.log('id est:',id)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <Box mx={10} sx={{bgColor:'white'}} >
       <Grid container spacing={2}>
           <Grid item xs={12} sm={8}>
               <Box textAlign="left"  sx={{minHeight:600,width:"100%"}}>
                <Box display="flex" bgcolor="red" alignItems="center" justifyContent="space-between">
                <Box>
                <Typography variant='h4' color="white" fontFamily="Inter">
                   Formation ITIL 4
                 </Typography >
                 <Typography fontSize={13} color="white" fontFamily="Inter-regular">
                   Formateur:Tiemoko sidibe
                 </Typography>
                </Box>
                 <Box justifyContent="space-between">
                   <Typography fontFamily="Inter-regular" color="white">Partagez sur</Typography>
                      <Facebook color="inherit" sx={{width:40,height:40,mr:1}}/>
                      <Twitter sx={{width:40,height:40,mr:1}}/>
                      <WhatsApp sx={{width:40,height:40,mr:1}}/>
                 </Box>

                </Box>
                 <Typography textAlign='left' variant='body2' fontFamily="Inter-Regular" lineHeight={2} letterSpacing={1} >

Formation avec certification
ISO 37301 : management de la conformité
Un système de management de la conformité ou Compliance Management System (CMS) 
conforme à la norme ISO 37301:2021 offre de multiples bénéfices.
 Il permet à une entreprise de minimiser ou de compenser les coûts,
  les risques et les préjudices causés par le non-respect des normes. 
  De surcroît, il garantit la pérennité de l'entreprise et suscite la fiabilité, 
  tout en encourageant les bonnes pratiques de gouvernance, la transparence 
  et l'éthique dans les échanges commerciaux.
  ISO 37301 : management de la conformité
Un système de management de la conformité ou Compliance Management System (CMS) 
conforme à la norme ISO 37301:2021 offre de multiples bénéfices.
 Il permet à une entreprise de minimiser ou de compenser les coûts,
  les risques et les préjudices causés par le non-respect des normes. 
  De surcroît, il garantit la pérennité de l'entreprise et suscite la fiabilité, 
  tout en encourageant les bonnes pratiques de gouvernance, la transparence 
  et l'éthique dans les échanges commerciaux.

                 </Typography>

               <Box sx={{ width: '100%', typography: 'body1',  }}>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab sx={{fontStyle:"OpenSans",fontWeight:'bold'}} label="Objectifs" value="1" />
            <Tab sx={{fontWeight:'bold'}}  label="Programme" value="2" />
            <Tab sx={{fontWeight:'bold'}} label="Prérequis" value="3" />
            <Tab sx={{fontWeight:'bold'}} label="Formateur" value="4" />
            <Tab sx={{fontWeight:'bold'}} label="Pour qui ?" value="5" />
          </TabList>
        </Box>
        <Box  sx={{border:"0.5px solid",borderColor:"#c4bcbc" }}>
        <TabPanel value="1">{Objectifs()}</TabPanel>
        <TabPanel value="2">Programme</TabPanel>
        <TabPanel value="3">{Prerequis()}</TabPanel>
        <TabPanel value="4">Formateur</TabPanel>
        <TabPanel value="5">Pour qui ?</TabPanel>
        </Box>
      </TabContext>
    </Box>
               </Box>

           </Grid>
           <Grid item xs={12} sm={4}>
               <Box mb={3}  textAlign="left" bgcolor="white" sx={{minHeight:"auto",width:"100%"}}>
                    <Typography variant='h5'>Toutes les formations</Typography>
                    <Card elevation={5} textAlign="right" sx={{boxShadow:5, borderRadius:5, height: 400, width: 300,borderWidth:2 }}>
                           <Typography mt={3} textAlign="center" variant="h5">Detail de la formation</Typography>
                            <ListItem
                                    sx={{ justifyContent: "space-between" }}
                                >
                                    <Typography color="black" fontWeight="700" variant="h7">
                                      Formation
                                    </Typography>
                                    <Typography color="black" variant="h7">
                                       ISO27001-1S1
                                    </Typography>
                                    <Divider />
                                </ListItem>
                                <ListItem
                                    sx={{ justifyContent: "space-between" }}
                                >
                                    <Typography color="black" fontWeight="700" variant="h7">
                                    Prix HT:
                                    </Typography>
                                    <Typography color="black" variant="h7">
                                        200000 FCFA
                                    </Typography>
                                    <Divider />
                                </ListItem>
                                <ListItem
                                    sx={{ justifyContent: "space-between" }}
                                >
                                    <Typography color="black" fontWeight="700" variant="h7">
                                        Duré:
                                    </Typography>
                                    <Typography  textAlign="right" color="black" variant="h7">
                                        2 jours
                                    </Typography>
                                    <Divider />
                                </ListItem>
                                <ListItem
                                    sx={{ justifyContent: "space-between" }}
                                >
                                    <Typography color="black" fontWeight="700" variant="h7">
                                       Lieu:
                                    </Typography>
                                    <Typography  color="black" variant="h7">
                                      E-learning
                                    </Typography>
                                    <Divider />
                                </ListItem>
                                <ListItem
                                    sx={{ justifyContent: "space-between" }}
                                >
                                    <Typography color="black" fontWeight="700" variant="h7">
                                       Langue
                                    </Typography>
                                    <Typography  color="black" variant="h7">
                                       Français
                                    </Typography>
                                    <Divider />
                                </ListItem>
                               <Box mt={5} sx={{alignItems:"flex-end"}} >
                               <LabelButton label="En savoir plus"  click={()=>navigate(`/formation/1`)}/>
                               </Box>
                            </Card>


               </Box>
             <Box textAlign="left">
             <Button  variant='contained' size='large'>Recevoir un devis</Button>

             </Box>
           </Grid>
       </Grid>
   </Box>
  )
}
export default FormationDetail
