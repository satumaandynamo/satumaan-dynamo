import { React, useState } from 'react'
import { ReactComponent as Logo } from '../../Assets/dynamo-white.svg'
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
    Select,
    MenuItem,
    FormControl,
    InputBase,
    InputLabel,
} from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { Link } from 'react-router-dom'
import DrawerComponent from './Drawer'
import './../../App.css'

const useStyles = makeStyles((theme) => ({
    navbarStyle: {
        backgroundColor: 'transparent',
        backdropFilter: 'blur(2px)',
        boxShadow: '0px 2px 8px 0px rgba(255, 255, 255, 0)',
        justifyContent: 'space-between',
    },
    navlinks: {
        display: 'flex',
    },
    logo: {
        display: 'flex',
        flexGrow: '1',
        cursor: 'pointer',
        fontFamily: 'Saira Stencil One',
        textTransform: 'uppercase',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 1.6,
        marginLeft: 5,
        color: 'white',
    },
    link: {
        textDecoration: 'none',
        textTransform: 'uppercase',
        background: '#ffa500',
        color: 'black',
        fontSize: '14px',
        fontWeight: 'Light',
        boxShadow: 'none',
        padding: '8px',
        borderRadius: '50px',
        marginLeft: theme.spacing(1),
        transition: '.4s ease-in-out',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '&:hover': {
            background: '#4c3100',
            boxShadow: 'none',
            transition: '.4s ease-in-out',
            color: 'white',
        },
    },
    dropdownStyle: {
        flexGrow: '1',
        textDecoration: 'none',
        background: '#ffa500',
        color: 'black',
        fontSize: '18px',
        borderRadius: '20px',
        marginTop: '40px',
        marginLeft: theme.spacing(0),
    },
    dropdownListItemStyle: {
        transition: '.3s ease-in-out',
        '&:hover': {
            background: '#ffedcc',
            transition: '.3s ease-in-out',
        },
        margin: '20px',
        color: 'black',
    },
    languageSelector: {
        width: '100px',
        borderRadius: 4,
        position: 'relative',
    },
}))

const CustomSelect = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        borderRadius: 50,
        width: 100,
        backgroundColor: 'transparent',
        border: 'white',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: 50,
            boxShadow: '0 0 0 1px inset #fff',
        },
    },
}))

const localeList = [
    { name: 'English', code: 'en', lang: 'English' },
    { name: 'Suomi', code: 'fi', lang: 'Finnish' },
]

const titles = {
    en: {
        'Home.header': `Localization in Create React App`,
        'Contact.footer': 'Love you 3000',
    },
    fi: {
        'Home.header': `Koti`,
        'Contact.footer': `Yhteystiedot`,
    },
}

function Navbar(props) {
    const classes = useStyles()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    // Translations for buttons
    let languageStoredInLocalStorage = localStorage.getItem('language')
    let [language, setLanguage] = useState(languageStoredInLocalStorage ? languageStoredInLocalStorage : 'English')

    let Home = {
            English: {
                content: 'Home',
            },
            Suomi: {
                content: 'Etusivu',
            },
        },
        About = {
            English: {
                content: 'About',
            },
            Suomi: {
                content: 'Meistä',
            },
        },
        Contact = {
            English: {
                content: 'Contact',
            },
            Suomi: {
                content: 'Yhteystiedot',
            },
        },
        JoinUs = {
            English: {
                content: 'Join Us!',
            },
            Suomi: {
                content: 'Liity!',
            },
        },
        Events = {
            English: {
                content: 'Events',
            },
            Suomi: {
                content: 'Tapahtumat',
            },
        },
        BikeKitchen = {
            English: {
                content: 'Bike Kitchen',
            },
            Suomi: {
                content: 'Bike Kitchen',
            },
        }

    props.language === 'Suomi' ? (Home = Home.Suomi) : (Home = Home.English)
    props.language === 'Suomi' ? (About = About.Suomi) : (About = About.English)
    props.language === 'Suomi' ? (Contact = Contact.Suomi) : (Contact = Contact.English)
    props.language === 'Suomi' ? (JoinUs = JoinUs.Suomi) : (JoinUs = JoinUs.English)
    props.language === 'Suomi' ? (Events = Events.Suomi) : (Events = Events.English)
    props.language === 'Suomi' ? (BikeKitchen = BikeKitchen.Suomi) : (BikeKitchen = BikeKitchen.English)

    return (
        <AppBar position="sticky" className={classes.navbarStyle}>
            <CssBaseline />
            <Toolbar>
                <Typography className={classes.logo} variant="title">
                    <Logo alt="Satumaan Dynamon logo" height={44} className="navbar-logo" />
                    <span className="logo-text">Satumaan Dynamo</span>
                </Typography>
                <FormControl variant="standard" className={classes.languageSelector}></FormControl>
                <FormControl variant="standard">
                    <Select
                        input={<CustomSelect />}
                        value={props.language}
                        onChange={(e) => props.handleSetLanguage(e.target.value)}
                    >
                        <MenuItem
                            value="English"
                            MenuProps={{
                                classes: { paper: classes.dropdownListItemStyle },
                            }}
                        >
                            English
                        </MenuItem>
                        <MenuItem
                            value="Suomi"
                            MenuProps={{
                                classes: { paper: classes.dropdownListItemStyle },
                            }}
                        >
                            Suomi
                        </MenuItem>
                    </Select>
                </FormControl>
                {isMobile ? (
                    <DrawerComponent />
                ) : (
                    <div className={classes.navlinks}>
                        <Link
                            to="/"
                            className={classes.link}
                            id="Home.header"
                            defaultMessage="Localization in Create React App"
                        >
                            {Home.content}
                        </Link>
                        <Link to="/about" className={classes.link}>
                            {About.content}
                        </Link>
                        <Link
                            to="/contact"
                            className={classes.link}
                            id="Contact.header"
                            defaultMessage="Localization in Create React App"
                        >
                            {Contact.content}
                        </Link>
                        <Link to="/joinus" className={classes.link}>
                            {JoinUs.content}
                        </Link>
                        <Link to="/events" className={classes.link}>
                            {Events.content}
                        </Link>
                        <Link to="/bikekitchen" className={classes.link}>
                            {BikeKitchen.content}
                        </Link>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
