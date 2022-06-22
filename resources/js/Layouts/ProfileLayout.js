import { ArrowBackIosNewIcon, GolfCourseSharp, GradeOutlined, Home, Inbox, MonetizationOn, MoreRounded, Settings } from '@mui/icons-material'; 
import { Box, CardMedia, ListItem, ListItemButton, ListItemIcon, Typography,ListItemText, Container, Button, Divider } from '@mui/material';
import React, { useState } from 'react'
import profile from "../assets/images/user.jpg";
import arrow from "../assets/images/arrow.png"; 
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/outline'
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';

const navigation = [
  { name: 'Mes information', icon: Home, href:`${route('profile/training')}`, current: true },
  { name: 'Mes reglages', icon: UsersIcon, href: `${route('profile/setting')}`, count: 3, current: false },
  { name: 'Mes Commandes', icon: FolderIcon, href: `${route('profile/order')}`, count: 4, current: false },
  { name: 'Tous les messages', icon: Inbox, href: '#', current: false },
  { name: 'Factures', icon: Inbox, href: '#', count: 12, current: false },
  { name: 'Liste des souhait', icon: ChartBarIcon, href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function ProfileLayout({children}) {
    const [open, setOpen] = useState(false)
    const sideMenu =[
        {id:1,title:'',path:'/order',icon:<GradeOutlined sx={{color:'white', width: 30,
            height: 30,}} />},
        {id:2,title:'Mes formation',path:'/order',icon:<GolfCourseSharp sx={{ color:'white',width: 30,
            height: 30,}}/>},
        {id:3,title:'',path:'/order',icon:<Settings sx={{color:'white', width: 30,
            height: 30,}}/>}, 
    ]
  return (
  <Container>
        <div className='flex '>
        
       <div className="w-72 h-screen bg-dark-light position relative">
       <div className="flex-1 flex flex-col min-h-0 border-b border-black-300 border-t border-black-300 border-l border-black-300 border-r border-black-300 bg-white">
    <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
      <div className="flex items-center flex-shrink-0 px-auto">
        <img
          className="h-30 w-auto"
          src={profile}
          alt="Workflow"
        />
      </div>
      <nav className="mt-5 flex-1 px-2 bg-white space-y-1" aria-label="Sidebar">
        {navigation.map((item) => (
          <InertiaLink
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? 'bg-gray-100 text-gray-900 hover:text-gray-900 hover:bg-gray-100'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
              'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
            )}
          >
            <item.icon
              className={classNames(
                item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                'mr-1 flex-shrink-0 h-6 w-6'
              )}
              aria-hidden="true"
            />
            <Typography ml={2}>{item.name}</Typography>
            <Divider color="error"/>
         
            
          </InertiaLink>
        ))}
      </nav>
    </div>
   
  </div>
  
             
          
        
             
        </div>
        <div className="p-7 text-2xl font-semibold flex-1 h-screen">
         
        {children}

        </div>
    </div>
  </Container>
  )
}

export default ProfileLayout