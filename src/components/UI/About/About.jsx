import React, {createContext, useState, useEffect} from 'react'
import SideBar from "../moleculas/SideBar";
import AboutAccordion from "../moleculas/AboutAccordion";
import CustomTabPanel from "./components/TabChild";
import styles from './About.module.scss'
import LeetCode from '../atoms/LeetCode';
import { Typography } from '@mui/material';

export const TabContext = createContext()

export default function About() {
    const [value, setValue] = useState(-1)
    const [empty, setEmpty] = useState(false)
    const [folderName, setFolderName] = useState('')

    useEffect(() => {
        if(value > -1) {
            setEmpty(true)
        } else {
            setEmpty(false)
        }
    }, [value])
    
    return (
        <TabContext.Provider value={{value, setValue, setFolderName, folderName}}>
            <div className={styles.root}>
                <SideBar children={<AboutAccordion />}/>
                <div className={styles.panelWrapper}>
                    {empty ?
                        <CustomTabPanel />  : <div className={styles.emptyImg}>
                        <img src='/images/react.svg' alt='react logo with girl'/>
                             </div>
                        }
                </div>
                {/* <div className={styles.codeSnippets}>
                    <Typography variant='h5'>// Code Snippets</Typography>
                    <LeetCode />
                </div> */}
            </div>
        </TabContext.Provider>
    )
}