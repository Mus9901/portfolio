import { Box } from '@mui/material'
import { Footer } from 'components/UI/Footer/Footer'
import { Header } from 'components/UI/Header/Header'

export default function Layout({ children }) {
  return (
    <Box sx={{
      background: '#011627',
      borderRadius: '8px',
      width: '100%'
    }}>
      <Header />
      {children}
      <Footer />
    </Box>
  )
}
