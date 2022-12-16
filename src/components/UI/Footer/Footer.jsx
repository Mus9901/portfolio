import styles from './style.module.scss'
import Link from 'next/link'
import { Container, Typography } from '@mui/material'
import { GithubIcon, TwitterIcon } from '../Icons'
export function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.leftBox}>
          <Typography variant='h5'>find me in:</Typography>
          <div className={styles.iconBox}><TwitterIcon /></div>
          <div className={styles.iconBox}><TwitterIcon /></div>
        </div>
        <div className={styles.rightBox}>
            <a href="https://github.com/MalikaRakhimova31" target='__blank'>
              <Typography variant='h5'>@MalikaRakhimova31</Typography>
            </a>
            <GithubIcon/>
        </div>
    </footer>
  )
}
