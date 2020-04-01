

import { makeStyles } from '@material-ui/styles';
import theme from '../SCOTheme';
import WideBackground from '../grocery-bg-16x9.png';
import NarrowBackground from '../grocery-bg-9x16.png';

const screenPadding = `${theme.spacing(1)}px`;

const styles = makeStyles({
    component: {
        height: '100vh',
        padding: `${screenPadding} 0`,
        color: theme.palette.primary.main,
        backgroundSize: 'cover',
        [theme.breakpoints.down('xs')]: {
            backgroundImage: `url(${NarrowBackground})`,
        },
        [theme.breakpoints.up('lg')]: {
            backgroundImage: `url(${WideBackground})`,
        }
    },
    header: {
        padding: `0 ${screenPadding}`
    },
    content: {
        padding: `0 ${screenPadding}`
    }, 
    footer: {
        padding: `0 ${screenPadding}`
    },
    subtitle: {
        fontSize: '1.75rem',
        fontWeight: '600',
        [theme.breakpoints.up('sm')]: {
            fontSize: '2.5rem',
        },
    },
    welcomeButton: {
        height: '6.56vh',
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        fontSize: '2.5rem',
        [theme.breakpoints.up('sm')]: {
            height: '16.20vh'
        }
    },
    startButton: {
        height: '14.37vh',
        [theme.breakpoints.up('sm')]: {
            height: '35vh;',
        }
    },
    systemControls: {
        width: '100%',
        height: 67,
        backgroundColor: theme.palette.secondary.main,
        marginTop: 10
    }

});

export default styles;
