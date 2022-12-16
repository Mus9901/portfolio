import { Typography } from '@mui/material'
import styles from './Moleculas.module.scss'
import { bio } from '../mock/bio';


export default function Bio() {
    return (
        <div className={styles.tabContainer}>
            <div className={styles.commentBox}>
               {bio.map((el, index) => 
                <div className={styles.comment} key={`bio-${index}`}>
                    <Typography variant='h5' textAlign='right'>{el.order}</Typography>
                    <Typography variant='h5'>{el.text}</Typography>
                </div>)}
            </div>
        </div>
    )
}