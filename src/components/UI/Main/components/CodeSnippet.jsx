import { Typography, Box } from '@mui/material'
import styles from '../style.module.scss'


export const CodeSnippet = () => {
    return (
        <div className={styles.codesnippet}>
            <div className={styles.codeBox}> 
                    <Box display='flex' flexDirection='column' rowGap='8px'>
                        <div><span className={styles.function}>function</span> Home() <span className={styles.parantheses}> {'{'}</span></div>
                        <div>
                            <Box whiteSpace='nowrap'>
                                <span className={styles.const}>&emsp;const</span> <span className={styles.parantheses}>[</span>myDate, setMyDate<span className={styles.parantheses}>]
                                </span> = <span className={styles.function}>useState</span><span className={styles.parantheses}>([])</span>;
                            </Box>
                        </div>
                    </Box>
                <Box display='flex' flexDirection='column' rowGap='4px'>
                    <div>
                        <span className={styles.const}>&emsp;const</span> date =
                        <span className={styles.parantheses}>new</span><span className={styles.function}> Date()</span>
                    </div>
                    <div>&emsp;<span className={styles.function}>setMyDate(</span>date.setMonth(date.getMonth + 4)<span className={styles.function}>)</span></div>
                    
                    <div><span className={styles.const}>&emsp;return</span>&emsp;myDate</div>
                    <div><span className={styles.parantheses}>{'}'}</span></div>
                </Box>
            </div>
        </div>  
    )
}