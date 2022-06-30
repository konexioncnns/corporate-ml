import { Box, Button } from '@mui/material'
import React, { useEffect } from 'react'

 const FilterPost = ({ post,setFilteredPost,active,setActive}) => {
    useEffect(() => {
        if(active===0){
            
            setFilteredPost(post?.data)
            return;
        }
        const filtered = post.data.filter((article)=>article.category_id===active);
        setFilteredPost(filtered);
      
    }, [active])
    
  return (
    <Box display="flex" justifyContent="space-between" width={300}>
         <Button onClick={()=>setActive(0)}  mr={2}  variant={active===0? 'contained':'outlined'} color="error">
        Tout
    </Button>
    <Button onClick={()=>setActive(1)}  mr={2}  variant={active===1? 'contained':'outlined'} color="error">
        Videos
    </Button>
    <Button onClick={()=>setActive(2)}  variant={active===2? 'contained':'outlined'} color="error">
        Archives
    </Button>
    
</Box>
  )
}
export default FilterPost