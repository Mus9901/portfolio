import { Typography, Box } from '@mui/material'
import { CalendarIcon, EyeIcon } from '../Icons'
import styles from './Atoms.module.scss'
import {CodeSnippet} from '../Main/components/CodeSnippet'


export default function LeetCode({problemNum, seen, createdAt}) {
    return (
        <div className={styles.snippet}>
            <div className={styles.snippetHeader}>
                <div className={styles.problemNumber}>
                    <Typography variant='h9'># 1140 Richest number</Typography>
                    {/* <Typography variant='h9'>Richest number</Typography> */}
                </div>
                <Box sx={{
                        display: 'flex',
                        // flexDirection: 'column',
                        columnGap: '16px'
                    }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '6px'
                    }}><EyeIcon /><Typography variant='h5' color='#fff' fontSize='14px'>12</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '6px'
                    }}><CalendarIcon /><Typography variant='h5' color='#fff' fontSize='14px'>20.10.2020</Typography>
                    </Box>
                </Box>
            </div>
            <div className={styles.codeBox}>
                {/* <CodeSnippet /> */}
            </div>
        </div>
    )
}

