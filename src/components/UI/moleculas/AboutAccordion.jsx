import React, {useContext} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { ExpandIcon, LinkedInIcon, TelegramIcon } from '../Icons';
import VerticalTabs from './AccordionTabs';
import { styled } from '@mui/styles';
import styles from './Moleculas.module.scss'
import { TabContext } from '../About/About';


const CustomAccordion = styled(Accordion)(({ theme }) => {
  return {
    boxShadow: 'none', // this styles directly apply to accordion
    background: 'none',
    borderBottom: `1px solid #1E2D3D`,
    padding: '0 10px',
    borderRadius: '0 !important',
    '.MuiAccordionDetails-root': {
      background: 'none',
      padding: '0 !important'
    },
    '.MuiAccordionSummary-root': {
        background: 'none',
        borderBottom: '1px solid #1E2D3D !important',
        padding: '0 !important',
    }, // this apply to Summary
    '.MuiAccordionSummary-root.Mui-expanded': {
      minHeight: '0 !important'
    },
    
  };
});

export default function AboutAccordion() {
  const {setFolderName} = useContext(TabContext)
  return (
    <div className={styles.accordion}>
      <CustomAccordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h5' color='#fff'>personal-info</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{p: '0'}}>
          <VerticalTabs />
        </AccordionDetails>
      </CustomAccordion>
      <CustomAccordion>
        <AccordionSummary
          expandIcon={<ExpandIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
           <Typography variant='h5' color='#fff'>contacts</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='text-text-color flex flex-col space-y-1'>
            <div className='flex space-x-2 items-center'>
              <TelegramIcon /> <a className='cursor-pointer' href='https://t.me/Mus_9901' target='__blank'>@Mus_9901</a>
            </div>
            <div className='flex space-x-2 items-center'>
              <LinkedInIcon /> <a className='cursor-pointer' href='https://www.linkedin.com/in/' target='__blank'>in.Mustafo</a>
            </div>
          </div>
        </AccordionDetails>
      </CustomAccordion>
    </div>
  );
}
