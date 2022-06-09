import Sidebar from "../Components/Drawer"
import {Box, ListItem, List, Typography, Container,Divider} from "@mui/material"
import Layout from "@/Components/Layout/Layout";
const LayoutAdmin =({children})=>{
    return(

           <Box display="flex" >
               <Box width={300} mt={100}>
                   <Sidebar />

               </Box>
               <Box>
                   {children}
               </Box>
           </Box>

    )

}
export default LayoutAdmin
