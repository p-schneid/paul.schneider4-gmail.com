
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const theme = {
  spacing: 10, 
  palette: {
      primary: {
        main: '#17565e'
      },
      secondary: {
        main: '#A5CE39',
        contrast: '#51AF46' // MUI Theme extension
      },
  },
  typography: {
      fontFamily: ['Open Sans'],
      h1: {
          fontWeight: 'bold',
          fontSize: '6.5rem',
      },
      h2: {
        fontWeight: '600',
        fontSize: '3.75rem',
      },
  }, 
}

const SCOTheme = responsiveFontSizes(createMuiTheme(theme));

export default SCOTheme;