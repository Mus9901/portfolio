import { ExtensionIcon, SnippetsIcon } from '../Icons'
import styles from './Moleculas.module.scss'
import { Typography } from '@mui/material'


export default function SideBar({title='', children}) {
    return (
        <aside className={styles.root}>
            <div className={styles.sidebar}>
              <div className={styles.iconBox}>
                    <SnippetsIcon />
                    <ExtensionIcon />
                    <ExtensionIcon />
              </div>
              <div className={styles.hierarchy}>
                <div className={styles.title}></div>
                    {children}
              </div>
            </div>
        </aside>
    )
}