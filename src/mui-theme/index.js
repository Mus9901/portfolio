// https://mui.com/material-ui/customization/theming/

import { createTheme } from '@mui/material'
import { rem } from 'utils/pxToRem'

export default createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#fff',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          cursor: 'pointer!important',
          backgroundColor: '#00B427',
          borderRadius: 'var(--border-radius) !important',
          textTransform: 'none',
          boxShadow: 'none',
          color: '#fff',
          fontSize: rem(16),
          lineHeight: rem(24),
          fontWeight: 600,
          padding: `${rem(12)} 0`,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            color: 'white',
            backgroundColor: '#00B427',
          },
          svg: {
            marginLeft: rem(15),
          },
          '& .MuiTypography-root': {
            fontWeight: 500,
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: rem(22),
          paddingRight: rem(22),
          width: '100%',
          maxWidth: '100%',
          
         
        },
      },
    },
  },
  typography: {
    fontFamily: 'Free Code',
    h1: {
      fontSize: rem(62),
      fontWeight: 400,
      lineHeight: rem(81),
      color: '#E5E9F0',
      fontFamily: 'inherit',
    },

    h5: {
      fontSize: rem(16),
      fontWeight: 400,
      lineHeight: rem(21),
      color: 'var(--text-color)',
      fontFamily: 'inherit',
      '@media (max-width: 768px)': {
        fontSize: rem(14),
        lineHeight: rem(24),
        fontWeight: 400,
        color: 'var(--text-color)',
      },
    },
    h6: {
      fontSize: rem(18),
      fontWeight: 450,
      lineHeight: rem(24),
      color: '#E5E9F0',
      fontFamily: 'inherit',
      '@media (max-width: 768px)': {
        fontSize: rem(14),
        lineHeight: rem(24),
        fontWeight: 400,
        color: '#E5E9F0',
      },
    },
    h7: {
      fontSize: rem(32),
      fontWeight: 450,
      lineHeight: rem(42),
      color: '#4D5BCE',
      fontFamily: 'inherit',
    },
    h8: {
      fontSize: rem(16),
      fontWeight: 450,
      lineHeight: rem(20),
      color: '#607B96',
      fontFamily: 'inherit',
    },
   
  }
})
