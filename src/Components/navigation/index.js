import { React, useState } from 'react'
import { ReactComponent as Logo } from '../../assets/dynamo-white.svg'
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
import DrawerComponent from './drawer'
import { dark, light } from '../../theme.js'
import '../styles/navbar.css'
import { LanguageDropdown, DropdownListItem } from '../styles/index'
import { ThemeSwitch } from '../theme-switch'

function Navbar(props) {
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
    ? (Events = Events.Suomi)
    : (Events = Events.English)
  props.language === 'Suomi'
    ? (BikeKitchen = BikeKitchen.Suomi)
    : (BikeKitchen = BikeKitchen.English)

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <AppBar position="sticky" style={{ background: 'transparent' }}>
        <CssBaseline />
        <Toolbar className="navbarstyle" style={{ background: 'transparent' }}>
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
            <FormControl fullWidth>
              <LanguageDropdown
                value={props.language}
                onChange={(e) => props.handleSetLanguage(e.target.value)}
              >
                <DropdownListItem
                  value="English"
                  MenuProps={{
                    classes: {},
                  }}
                >
                  English
                </DropdownListItem>
                <DropdownListItem
                  value="Suomi"
                  MenuProps={{
                    classes: {},
                  }}
                >
                  Suomi
                </DropdownListItem>
              </LanguageDropdown>
            </FormControl>
            <ThemeSwitch checked={isDarkTheme} onChange={changeTheme} />
            {isMobile ? (
              <DrawerComponent />
            ) : (
              <div className="navbar-links-div">
                <Link to="/satumaan-dynamo" className="navlink">
                  {Home.content}
                </Link>
                <Link to="/bikekitchen" className="navlink">
                  {BikeKitchen.content}
                </Link>
                <Link to="/about" className="navlink">
                  {About.content}
                </Link>
                <Link to="/contact" className="navlink">
                  {Contact.content}
                </Link>
                <Link to="/events" className="navlink">
                  {Events.content}
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
