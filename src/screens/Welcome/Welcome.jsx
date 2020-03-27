
import React from 'react'
import {Grid, Box, Typography} from '@material-ui/core'
import styles from './Welcome.style';
import MobileQRCode from './components/MobileQRCode/MobileQRCode';
import SelfServTrademark from './components/SelfServTrademark/SelfServTrademark';
import { ThemeProvider } from '@material-ui/core';
import SCOTheme from '../SCOTheme';


const WelcomeScreen = () => {
    const classes = styles();
    
    return (
        <ThemeProvider theme={SCOTheme}>
            <Grid id='WelcomeScreen' container alignContent='space-between' className={classes.component}>
                <Grid item container className={classes.header}>
                    <Grid item>
                        <SelfServTrademark />
                    </Grid>
                </Grid>
                <Grid id='WelcomeContent' item container justify='center' className={classes.content}>
                    <Grid item xs='12'>
                        <Typography variant='h1' align='center' color='primary'>Welcome!</Typography>
                    </Grid>
                    <Grid item xs='12'>
                        <Typography display='block' align='center' color='primary' className={classes.subtitle}>Scan your items, or touch "Start" to begin</Typography>
                    </Grid>
                    <Grid item xs='10' md='8'>
                        <Box id='WelcomeOptions' mt='10.28vh'>
                            <Grid container direction='row' spacing={1}>
                                <Grid item xs='5'>
                                    <Box id='WelcomeStart' className={`${classes.startButton} ${classes.welcomeButton}`}> &nbsp;</Box>
                                </Grid>
                                <Grid item xs='7' container direction='column' justify='space-between' spacing={1}>
                                    <Grid item>
                                        <Box id='WelcomeUseBag' className={classes.welcomeButton}>&nbsp;</Box>
                                    </Grid>
                                    <Grid item>
                                        <Box id='WelcomeSearch' className={classes.welcomeButton}>&nbsp;</Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item container direction='row-reverse' alignItems='center' className={classes.footer} > 
                    <Grid item xs container justify='flex-end'>
                        <Grid item> 
                            <MobileQRCode />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={8} lg={6} container>
                        <Box id='SystemControls' className={classes.systemControls}>&nbsp;</Box>
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default WelcomeScreen;