import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormationCard from '../components/FormationCard';
import { Divider, ListItem } from '@mui/material';
import Data from '../constants/Data';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


export default function Domaine() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log("Valeur:", value)
  };

  return (
    <Box
      sx={{ flexGrow: 1,width:"xl", bgcolor: 'background.paper', display: 'flex', minHeight: 400 }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
      
        sx={{ borderRight: 1, borderColor: 'divider',textAlign:"left",}}
      > 
        {Data.Category.map((item)=>(
            <ListItem> <Tab label={item.title} index={item}  key={item.id}/></ListItem>
        ))}
        
      </Tabs>
      
     <Box>
     
            {Data.Category.map(item=>(
              
                <TabPanel value={value} index={item.id}  key={item.id}>
               {Data.Formation.filter(x=>x.catId === item.id).map(ite=>(
                   <List  key={ite.id}>{ite.title}</List >
                  
               ))
     
    }
        
              </TabPanel>
             ))}
         
     
        
     </Box>
     
    </Box>
  );
}
