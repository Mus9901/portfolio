import Image from 'next/image'
import styles from './style.module.scss'
import useTranslation from 'next-translate/useTranslation'
import { Typography } from '@mui/material'
import { CodeSnippet } from './components/CodeSnippet'
import SliderSnippet from './components/Slider'
import TicTacToe from './TicTacToe'

export function Main() {
  const { t } = useTranslation('common')
 

  return (
    <main className={styles.main}>
      <div className={styles.container}>
         <div className={styles.textBody}>
           <div className={styles.titleBox}>
              <Typography variant='h6'>Hi all. I am</Typography>
              <Typography variant='h1' >Malika Rakhimova</Typography>
              <Typography variant='h7'>{'>>'}Front-end developer</Typography>
           </div>
           <div className={styles.comments}>
              <Typography variant='h8'>// complete the game to continue</Typography>
              <Typography variant='h8'>// you can also see it on my Github page</Typography>
              <div><span className={styles.const}> const</span> <span className={styles.github}>githubLink</span> = <a href="https://github.com/MalikaRakhimova31" target='__blank'><span className={styles.link}>https://github.com/MalikaRakhimova31</span></a></div>
           </div>
         </div>
        <TicTacToe />
      </div>
    </main>
  )
}
