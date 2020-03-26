
import React from 'react'
import {Container, Grid, Box, Typography} from '@material-ui/core'
import styles from './Welcome.style';
import MobileQRCode from './components/MobileQRCode/MobileQRCode';

const WelcomeScreen = () => {
    const classes = styles();
    
    return (
        <Container id='WelcomeScreen' maxWidth='xl'>
            <Grid container alignContent='space-between' className='full-height'>
                <Grid item container>
                    <Grid item>
                        <Box id="SelfServTradeMark">SelfServ™ Checkout</Box>
                    </Grid>
                </Grid>
                <Grid id='WelcomeContent' item container justify='center'>
                    <Grid item xs='12'>
                        <Typography variant='h1' align='center'>Welcome!</Typography>
                    </Grid>
                    <Grid item xs='12'>
                        <Typography display='block' align='center' className={classes.subtitle}>Scan your items, or touch "Start" to begin</Typography>
                    </Grid>
                    <Grid item xs='8'>
                        <Box id='WelcomeOptions' mt='10.28vh'>
                            <Grid container direction='row' spacing={1}>
                                <Grid item xs='5'>
                                    <Box id='WelcomeStart' className={`${classes.startButton} ${classes.welcomeButton}`}> &nbsp;</Box>
                                </Grid>
                                <Grid item xs='7' container direction='column' spacing={1}>
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
                <Grid item container direction='row-reverse' alignItems='center'> 
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
        </Container>
    )
}

export default WelcomeScreen;