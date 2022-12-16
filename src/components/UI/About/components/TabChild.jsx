import React, {useContext} from 'react'
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { TabContext } from '../About';
import styles from '../About.module.scss'
import { FolderClose } from 'components/UI/Icons';
import Bio from 'components/UI/moleculas/Bio';
import Experience from 'components/UI/moleculas/Experience';
import Education from 'components/UI/moleculas/Education';

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
          <Box sx={{ p: 0 }}>
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


  export default function CustomTabPanel() {
    const {value, folderName, setValue} = useContext(TabContext)
    return (
        <div className={styles.tabChild}>
            {value > -1 && <div className={styles.folderName}>
                <div className={styles.innerFolder}>
                    <Typography variant='h5'>{folderName}</Typography>
                    <Box onClick={() => {setValue(-1)}} sx={{cursor: 'pointer'}}>
                        <FolderClose />
                    </Box>
                </div>
            </div>}
            <TabPanel value={value} index={0}>
                <Bio />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Experience />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Education />
            </TabPanel>
        </div>
    )
  }