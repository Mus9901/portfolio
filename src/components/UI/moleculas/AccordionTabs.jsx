import React, {useContext} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styles from './Moleculas.module.scss'
import { TabContext } from '../About/About';
import { FolderIcon } from '../Icons';
import FolderText from 'components/UI/atoms/FolderText';


function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const { value, setValue, setFolderName } = useContext(TabContext)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.tabs} id='tabs'>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ }}
      >
        <Tab 
          label={<FolderText color='#E99287' text='bio' />} 
          {...a11yProps(0)}  
          onClick={() => {setFolderName('bio')}}
          sx={{
            textTransform: 'none',
            p: '4px 2px !important',
            minHeight: '24px !important',
            fontFamily: 'inherit !important'
          }} />
        <Tab label={<FolderText color='#43D9AD' text='experience' />} {...a11yProps(1)}  
        onClick={() => {setFolderName('experience')}}
          sx={{
          textTransform: 'none',
          p: '4px 2px !important',
          minHeight: '24px !important'
        }}/>
        <Tab label={<FolderText color='#3A49A4' text='education' />} {...a11yProps(2)}  
          onClick={() => {setFolderName('education')}}
        sx={{
          textTransform: 'none',
          p: '4px 2px !important',
          minHeight: '24px !important'
        }}/>
      </Tabs>
    
    </div>
  );
}
