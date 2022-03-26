import { createStyles, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() =>
    createStyles({
        '@global': {
            html: {
                '-webkit-font-smoothing': 'antialiased',
                '-moz-osx-font-smoothing': 'grayscale',
                height: '100%',
                width: '100%',
            },
            '*, *::before, *::after': {
                boxSizing: 'inherit',
            },
            body: {
                height: '100%',
                width: '100%',
            },
            '#root': {
                height: '100%',
                width: '100%',
            },
            '.MuiContainer-maxWidthLg': {
                padding: '7%',
                whiteSpace: 'pre-line',
            },
            a: {
                boxShadow: 'inset 0px -3px 0px 0px #FFA500',
                color: 'white',
                fontWeight: 'bold',
                textDecoration: 'none',
                padding: '1px',
                transition: '.4s ease-in-out',
            },
            'a:hover': {
                // background: '#4c3100',
                boxShadow: 'inset 0px -8px 0px 0px #FFA500',
                transition: '.4s ease-in-out',
                color: 'white',
            },
        },
    })
)

const GlobalStyles = () => {
    useStyles()

    return null
}

export default GlobalStyles
