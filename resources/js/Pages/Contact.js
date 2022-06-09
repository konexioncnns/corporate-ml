import { Box, Card, Container, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import Wave from 'react-wavify'
import { BannerImage } from '../components/BannerImage'
import { Featured } from '../components/Featured'
import { HeadSection } from '../components/HeadSection'
import  Heading  from './Heading'
import IMAGES from '../constants/index'
import img from "../assets/images/head.jpg"
import contact from '../assets/images/contact.png'
import { ArrowForward, SettingsOverscan, Token } from '@mui/icons-material'
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Label from '@/Components/Label';
import Button from '@/Components/Button';
import messages from '../../../public/messages'
import Lang from 'lang.js' 
import { Inertia } from '@inertiajs/inertia'
const lang = new Lang({ messages })
const Contact = () => {
  const { data, setData, post, errors } = useForm({
    fullname: '',
    email: '',
    phone: '',
    message: '',
});

 

function  handleSubmit (e) {
  e.preventDefault();
  post(route("contact.save"));
};

console.log("Donne du formulaire:",data)
  return (
     /* <HeadSection label="Contactez nous" img={img} />
  <Featured /> */

    <Box mt={-11}>
<Box>
      <BannerImage color="red" img={img} title={lang.get('messages.header_contact')} subtitle={lang.get('messages.subtitle_contact')}/>
   </Box>
  <Box mt={-5}  >
  <Container>
     <Card elevation={1} sx={{width:'100%',borderRadius:5}} mb={5}  height='20vh'>
      <Grid container spacing={2}>
      <Grid item xs={12} lg={5}>
     {/*
           <Stack>
              <Box display="flex" alignItems="center" p={2}>



                <Typography variant="h7" color="text" pl={2} fontFamily="Inter" textAlign="left" >
                  It becomes harder for us to give others a hand.
                  <br />
                  We get our heart broken by people we love.
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" p={2}>


                  <Box>
                  <SettingsOverscan   color="primary" style={{width:60, height:60}} />
                  </Box>

                <Typography variant="h7" color="text" pl={2} fontFamily="Inter" textAlign="left">
                  As we live, our hearts turn colder.
                  <br />
                  Cause pain is what we go through as we become older.
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" p={2}>

                  <Token  color="red" style={{width:60, height:60}}  />

                <Typography variant="h7" color="text" pl={2} fontFamily="Inter" textAlign="left">
                  When we lose family over time.
                  <br />
                  What else could rust the heart more over time? Blackgold.
                </Typography>
              </Box>
            </Stack> */}
            <img src={contact} width="250px" height="200px" />
      </Grid>
      <Grid mb={5} bgcolor="fbfbfb" item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
             <Box
             mr={10}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
        ml: { xs: 5, lg: "auto" }
      }}
      noValidate
      autoComplete="off"
    >
      <form onSubmit={handleSubmit} >
      
      <Label forinput="name" value={lang.get('messages.full_name')} />
 
                    <input
          required
          id="outlined-required"
          label={lang.get('messages.full_name')}
          name="fullname"
          value={data.name}
          onChange={(e) =>
            setData("fullname", e.target.value)
        }
          placeholder={lang.get('messages.full_name')}
        />
         <Label forinput="name" value={lang.get('messages.phone_number')} />

         <input
          required
          type="text"
          name="phone"
          value={data.phone}
          onChange={(e) =>
            setData("phone", e.target.value)
        }
          label={lang.get('messages.phone_number')}
          placeholder={lang.get('messages.phone_number')}
        />
        <input
         type="email"
          name="email"
          value={data.email}
          onChange={(e) =>
            setData("email", e.target.value)
        }
          label={lang.get('messages.email_address')}
          placeholder={lang.get('messages.email_address')}
        />
         <input
             type="text"
          label={lang.get('messages.message')}
          name="message"
          value={data.message}
          onChange={(e) =>
            setData("message", e.target.value)
        }
          multiline
          rows={8}

        /> 

<button
                                type="submit"
                                className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                            >
                                Save
                            </button>

         </form>
    </Box>
          </Grid>
      </Grid>

     </Card>
   </Container>
  </Box>
   </Box>

  /*  <Typography variant="h4" mt={3} fontFamily="Inter" >
       Nos publication recentes
       <Wave
       fill='#f79902'
       paused={false}
       options={{
         height: 10,
         amplitude: 20,
         speed: 0.15,
         points: 16}}
       />
   </Typography> */

  )
}
export default  Contact
