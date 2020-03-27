

import { makeStyles, ThemeProvider } from '@material-ui/styles';
import theme from '../../../SCOTheme';

const styles = makeStyles({
    component: {
        width: 228,
        height:  82,
        backgroundColor: 'rgba(255,255,255,0.5)',
        backgroundColor: 'pink',
        padding: 5,
        [theme.breakpoints.up('sm')]: {
            width: 273,
            height: 109,
            padding: 10
        }
    },
    label: {
        fontSize: '1.25rem',
        lineHeight: '1.75rem',
        marginBottom: 5,
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.50rem',
            lineHeight: '2.250rem',
            marginBottom: 8
        }
    },
    subLabel: {
        fontSize: '1rem',
        lineHeight: '1.5rem',
        color: '#545454',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.25rem',
            lineHeight: '1.68rem',
        }
    },
    code: {
        height: 78,
        width: 78,
        [theme.breakpoints.up('sm')]: {
            height: 107,
            width: 107,
        }
    }
});

export default styles;
