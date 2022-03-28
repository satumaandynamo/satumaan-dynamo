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
    createTheme,
    ThemeProvider,
    Switch,
} from '@material-ui/core'
import { styled } from '@material-ui/styles'
import { Link } from 'react-router-dom'
import DrawerComponent from './Drawer'
import './../../App.css'
import { dark, light } from './../../theme.js'

const useStyles = makeStyles((theme) => ({
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
        backgroundColor: 'transparent',
        border: 'white',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: 50,
            boxShadow: '0 0 0 1px inset #fff',
        },
        textAlign: 'right',
    },
}))

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff'
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor:
                    theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff'
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}))

function Navbar(props) {
    const classes = useStyles()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    // Translations for buttons
    let languageStoredInLocalStorage = localStorage.getItem('language')
    let [language, setLanguage] = useState(
        languageStoredInLocalStorage ? languageStoredInLocalStorage : 'English'
    )

    // Toggler

    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

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
    props.language === 'Suomi'
        ? (Contact = Contact.Suomi)
        : (Contact = Contact.English)
    props.language === 'Suomi'
        ? (JoinUs = JoinUs.Suomi)
        : (JoinUs = JoinUs.English)
    props.language === 'Suomi'
        ? (Events = Events.Suomi)
        : (Events = Events.English)
    props.language === 'Suomi'
        ? (BikeKitchen = BikeKitchen.Suomi)
        : (BikeKitchen = BikeKitchen.English)

    return (
        <ThemeProvider
            theme={isDarkTheme ? createTheme(dark) : createTheme(light)}
        >
            <AppBar position="sticky" style={{ background: 'transparent' }}>
                <CssBaseline />
                <Toolbar
                    className="navbarstyle"
                    style={{ background: 'transparent' }}
                >
                    <div>
                        <Typography
                            variant="title"
                            component={Link}
                            to="/satumaan-dynamo"
                            className="navbar-logo-area"
                            color="secondary"
                            style={{
                                boxShadow: 'none',
                            }}
                        >
                            <Logo
                                alt="Satumaan Dynamon logo"
                                height={44}
                                className="navbar-logo"
                            />
                            <span className="logo-text">Satumaan Dynamo</span>
                        </Typography>
                    </div>
                    <div className="navbar-link-area">
                        <FormControl
                            variant="standard"
                            className={classes.languageSelector}
                        ></FormControl>
                        <FormControl variant="standard">
                            <Select
                                input={<CustomSelect />}
                                value={props.language}
                                onChange={(e) =>
                                    props.handleSetLanguage(e.target.value)
                                }
                            >
                                <MenuItem
                                    value="English"
                                    MenuProps={{
                                        classes: {
                                            paper: classes.dropdownListItemStyle,
                                        },
                                    }}
                                >
                                    English
                                </MenuItem>
                                <MenuItem
                                    value="Suomi"
                                    MenuProps={{
                                        classes: {
                                            paper: classes.dropdownListItemStyle,
                                        },
                                    }}
                                >
                                    Suomi
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <MaterialUISwitch
                            checked={isDarkTheme}
                            onChange={changeTheme}
                        />
                        {isMobile ? (
                            <DrawerComponent />
                        ) : (
                            <div className="navbar-links-div">
                                <Link to="/satumaan-dynamo" className="navlink">
                                    {Home.content}
                                </Link>
                                <Link to="/about" className="navlink">
                                    {About.content}
                                </Link>
                                <Link to="/contact" className="navlink">
                                    {Contact.content}
                                </Link>
                                <Link to="/joinus" className="navlink">
                                    {JoinUs.content}
                                </Link>
                                <Link to="/events" className="navlink">
                                    {Events.content}
                                </Link>
                                <Link to="/bikekitchen" className="navlink">
                                    {BikeKitchen.content}
                                </Link>
                            </div>
                        )}
                    </div>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default Navbar
