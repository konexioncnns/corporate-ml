
import  {Box,Typography} from '@mui/material'
import LayoutProfile from "@/Layouts/LayoutProfile";
import img from "../../assets/images/itil4cfr.png";
import ProfileLayout from '@/Layouts/ProfileLayout';
const  Formation =()=>{
    return(
     <ProfileLayout>
         <Box>
             <Typography>Mes formations</Typography>
             <Box display="flex" alignItems="center" width="100%" ml={2}>
                 <img
                     src={img}
                     width="100"
                     height="100"
                     style={{ marginTop: 20, }}
                     alt="p image"
                 />
                 <Typography
                     ml={2}
                     fontFamily="Inter"
                 >
                     Introduction a ITIL 4 Introduction a ITIL 4
                 </Typography>
             </Box>
         </Box>
     </ProfileLayout>
    )
}
export default  Formation
