import styles from './style.module.scss'
import Link from 'next/link'
import { Container, Typography } from '@mui/material'
import { GithubIcon, LinkedInIcon, TelegramIcon, TwitterIcon } from '../Icons'
export function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.leftBox}>
          <Typography variant='h5'>find me in:</Typography>
          <div className={styles.iconBox}><TelegramIcon /></div>
          <div className={styles.iconBox}><LinkedInIcon /></div>
        </div>
        <div className={styles.rightBox}>
            <a href="https://github.com/Mus9901" target='__blank'>
              <Typography variant='h5'>@Mus9901</Typography>
            </a>
            <GithubIcon/>
        </div>
    </footer>
  )
}
