import React from 'react';
import { Grid, Typography, Box } from "@material-ui/core"
import styles from './MobileQRCode.style'
import QRCode from './QR.png';


const MobileQRCode = () => {

    const classes = styles();
    return (
        <Box id='MobileQRCode' className={classes.component}>
            <Grid container direction='row'>
                <Grid item xs={6}>
                    <Typography className={classes.label}>Scan this code to complete your Mobile Shopping</Typography>
                    <Typography className={classes.subLabel}>CC# 14-037</Typography>
                </Grid>
                <Grid item container justify='flex-end' alignItems='center' xs>
                    <Grid item>
                        <img src={QRCode} className={classes.code}></img>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )

}

export default MobileQRCode;