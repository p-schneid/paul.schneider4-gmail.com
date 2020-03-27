

import { makeStyles } from '@material-ui/styles';
import theme from '../../../SCOTheme';

const styles = makeStyles({
    component: {
        display: 'flex'
    },
    accent: {
        backgroundColor: theme.palette.secondary.contrast,
        width: 5,
        height: 42 
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 10,
    },
    primary: {
        fontFamily: 'Raleway',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        lineHeight: '2.0625rem',
        color: '#1A2D38',
        [theme.breakpoints.up('sm')]:{
            fontSize: '1.75rem'
        }
    },
    secondary: {
        fontFamily: 'Raleway',
        fontWeight: 'bold',
        fontSize: '1rem',
        lineHeight: '1.3125rem',
        color: '#1A2D38',
        opacity: '0.36',
        [theme.breakpoints.up('sm')]:{
            fontSize: '1.125rem'
        }
    }
    
})

export default styles;