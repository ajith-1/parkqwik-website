import React,{useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


 function Expand({data}){

    const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

    return(
        <Box sx={{p:2}}>
        {data.map((item)=>{

          return(
            <Accordion expanded={expanded === item.panel}
            onChange={handleChange(item.panel)}
            sx={{ my:'20px',maWidth:'900px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography >
               {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
          )
        })}
      </Box>
    )
}


export default Expand;