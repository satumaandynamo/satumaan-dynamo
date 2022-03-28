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
                        <Switch checked={isDarkTheme} onChange={changeTheme} />
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
