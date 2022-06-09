import { ArrowBackIosNewIcon, GolfCourseSharp, GradeOutlined, MonetizationOn, MoreRounded, Settings } from '@mui/icons-material'; 
import { Box, CardMedia, ListItem, ListItemButton, ListItemIcon, Typography,ListItemText, Container, Button } from '@mui/material';
import React, { useState } from 'react'
import profile from "../assets/images/user.jpg";
import arrow from "../assets/images/arrow.png"; 
function ProfileLayout({children}) {
    const [open, setOpen] = useState(true)
    const sideMenu =[
        {id:1,title:'Mes information',path:'/order',icon:<GradeOutlined sx={{color:'white', width: 30,
            height: 30,}} />},
        {id:2,title:'Mes formation',path:'/order',icon:<GolfCourseSharp sx={{ color:'white',width: 30,
            height: 30,}}/>},
        {id:3,title:'Mes reglages',path:'/order',icon:<Settings sx={{color:'white', width: 30,
            height: 30,}}/>}, 
    ]
  return (
  <Container>
        <div className='flex '>
        <div className={`${open ? "w-72" : "w-20"} h-screen bg-dark-purple position relative`}>
            {/* <img 
                src={arrow} 
                height={50}
                width={50}
                style={{marginTop:50}}
                
                onClick={()=>setOpen(!open)}
            <div className={`absolute cursor-pointer rounded-full-right-3 top-9 w-27 border-2 border-dark-purple ${!open && "rotate-180"}`}>
            /> */}
            
  
             
          
        
              <Box position="relative" width="100%" sx={{alignItems:'center'}} >
              <img src={profile} style={{borderRadius:'50%'}} />  
               <Typography mt={2} color='white' fontFamily="Inter" fontSize={16} >Kone Abdrahamane</Typography>
              </Box>
            
                
 
            {sideMenu.map((menu,index)=>
            
            (<ListItem key={index} sx={{  "&:hover": { backgroundColor: 'red'  }}} >
            <ListItemButton href={menu.path}>
              <ListItemIcon>
                {menu.icon}
              </ListItemIcon>
             <Typography color='white' fontFamily='Inter' fontSize={14} href={menu.path} >{menu.title}</Typography>
            </ListItemButton>
          </ListItem> ))}
        </div>
        <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        {children}

        </div>
    </div>
  </Container>
  )
}

export default ProfileLayout