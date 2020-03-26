
import React from 'react';
import styles from './SeflServTrademark.style';
import { Typography, Box } from '@material-ui/core';

const SelfServTrademark = () => {

    const classes = styles();
    return (
        <Box id="SelfServTradeMark" className={classes.component}>
            <Box className={classes.accent}>&nbsp;</Box>
            <Box className={classes.text}>
                <Typography className={classes.primary}>
                    <div>SelfServ™ Checkout</div> 
                </Typography>
                <Typography className={classes.secondary}>
                    <span>FastLane</span>
                </Typography>
            </Box>
        </Box>
    );
}

export default SelfServTrademark;