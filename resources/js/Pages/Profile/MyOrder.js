import React from 'react'
import ProfileLayout from '@/Layouts/ProfileLayout';
import { Button, Chip, Menu, MenuItem } from '@mui/material';
import { InertiaLink, Link, usePage } from '@inertiajs/inertia-react';
import { Download, MoreRounded, RemoveRedEye } from '@mui/icons-material';
import { EyeIcon } from '@heroicons/react/outline';
import * as moment from 'moment'
 const MyOrder = ( ) => {
    const {data  } = usePage().props  
    console.log("Mes commandes",data)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
  return (
  
    <ProfileLayout>
            <div>
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table class="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                          N° de la commande
                                    </th>
                                    <th
                                        class="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Etat
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Montant avec taxes
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                          Date
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                              
 {data.map((item,index)=>{
    return(
                             
                                <tr>
                                    <td class="px-5 py-5 bg-white text-sm">
                                        <div class="flex items-center">
                
                                                <div class="ml-3">
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                    #{item.order_number}
                                                    </p>
                                                </div>
                                            </div>
                                    </td>
                                    <td class="px-5 py-5 bg-white text-sm">
                                    <Chip sx={{textAlign:"left"}} label="Finalisée" color="success" variant="contained" />
                                    </td>
                                    <td class="px-5 py-5 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap"> {item.amount} </p>
                                    </td>
                                    <td class="px-5 py-5 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">{moment(item.created_at,'DD-MM-YYYY').format('ll')} </p>
                                    </td>
                                    <td class="px-5 py-5 bg-white text-sm">
                                    
                    <a href={`/checkout/pdf/${item.order_number}`}><Download color='secondary' /></a>
                    <a href={`/checkout/pdf/${item.order_number}`}><RemoveRedEye color='success'/></a>
              
                                   
                                    </td>
                                </tr>
)})}

                            </tbody>
                        </table>
                        <div
                            class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                            <span class="text-xs xs:text-sm text-gray-900">
                                Showing 1 to 4 of 50 Entries
                            </span>
                            <div class="inline-flex mt-2 xs:mt-0">
                                <button
                                    class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                                    Prev
                                </button>
                                &nbsp; &nbsp;
                                <button
                                    class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
         
            </div> 
    </ProfileLayout>
  )
}
export default MyOrder