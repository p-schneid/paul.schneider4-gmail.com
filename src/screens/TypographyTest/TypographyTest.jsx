
import React from "react";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

let theme = createMuiTheme({
  typography: {
    h1: {
        fontSize: '6.25rem',
        fontWeight: 'bold'
    }, 
    h2: {
        fontSize: '3.75rem',
        fontWeight: '500'
    }, 
    h3: {
        fontSize: '3rem',
        fontWeight: '500'
    }, 
    h4: {
        fontSize: '3rem',
        fontWeight: 'normal'
    }, 
    h5: {
        fontSize: '2.5rem',
        fontWeight: '500'
    },
    h6: {
        fontSize: '2.5rem',
        fontWeight: 'normal'
    } 
  }
});

theme = responsiveFontSizes(theme);

export default function TypographyTest() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1">Responsive h1</Typography>
      <h1>Static h1</h1>
      <Typography variant="h2">Responsive h2</Typography>
      <h2>Static h2</h2>
      <Typography variant="h3">Responsive h3</Typography>
      <h3>Static h3</h3>
      <Typography variant="h4">Responsive h4</Typography>
      <h4>Static h4</h4>
      <Typography variant="h5">Responsive h5</Typography>
      <h5>Static h5</h5> 
      <Typography variant="h6">Responsive h6</Typography>
      <h6>Static h6</h6>
    </ThemeProvider>
  );
}
