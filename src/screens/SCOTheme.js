
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
      fontFamily: ['Roboto'],
      h1: {
          fontWeight: 'bold',
          fontSize: '4.43rem',
      },
      h2: {
        fontWeight: '500',
        fontSize: '2.66rem',
      },
  }, 
}

const SCOTheme = responsiveFontSizes(createMuiTheme(theme));

export default SCOTheme;