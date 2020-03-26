

import { makeStyles } from '@material-ui/styles';
import SCOTheme from '../../SCOTheme';

const styles = makeStyles({

    subtitle: {
        fontWeight: 'normal',
        fontSize: '2.5rem',
        lineHeight: '3.375rem',
    },
    welcomeButton: {
        height: '16.20vh',
        backgroundColor: SCOTheme.palette.primary.main,
        color: 'white',
        fontSize: '2.5rem'
    },
    startButton: {
        height: '34.72vh'
    },
    systemControls: {
        width: '100%',
        height: 60,
        backgroundColor: SCOTheme.palette.secondary.main,
    }

});

export default styles;
