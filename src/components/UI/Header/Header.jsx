import { Container, Divider, Typography } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './style.module.scss'

export function Header() {
  const router = useRouter()
  console.log(router.pathname === '/');
  const { t } = useTranslation('common')
  const langs = [
    {
      key: 'ru',
      label: 'ru'
    },
    {
      key: 'uz',
      label: 'uz'
    },
    {
      key: 'en',
      label: 'en'
    }
  ]
  return (
      <header className={styles.header}>
        <nav>
            <ul>
                <li className={styles.userName}>
                  <Typography variant='h5'>mustafo-irgashev</Typography>
                </li>
                  <Link href='/'>
                    <li className={router.pathname === '/' && styles.active}>
                      <a>
                      <Typography variant='h5'>_hello</Typography>
                      </a>
                    </li>
                  </Link>
                  <Link href='/about'>
                    <li  className={router.pathname === '/about' && styles.active}>
                      <a href="">
                        <Typography variant='h5'>_about-me</Typography>
                      </a>
                     </li>
                  </Link>
                <Link href='/projects'>
                  <li className={router.pathname === '/projects' && styles.active}>
                    <a href="">
                      <Typography variant='h5'>_projects</Typography>
                    </a>
                  </li>
                </Link>
            </ul>
            {/* <ul>
                <Link href='/'>
                  <li className={`${router.pathname === '/contact' && styles.active} ${styles.contactItem}`}>
                    <a>
                    <Typography variant='h5'>_contact-me</Typography>
                    </a>
                  </li>
                </Link>
            </ul> */}

          </nav>
      </header>
      // <Divider />
  )
}
