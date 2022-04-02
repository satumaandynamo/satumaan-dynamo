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
import DrawerComponent from '../navigation-drawer'
import { dark, light } from '../../theme.js'
import '../styles/navbar.css'
import { LanguageDropdown, DropdownListItem } from '../styles/index'
import { ThemeSwitch } from '../theme-switch'
import { useTranslation } from 'react-i18next'

function Navbar(props) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  // Toggler
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  const { t } = useTranslation()

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <AppBar
        position="sticky"
        style={{
          background: 'transparent',
          boxShadow: 'none',
          marginBottom: '3%',
        }}
      >
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
                defaultValue={localStorage.getItem('i18nextLng') || 'fi'}
                onChange={(e) => props.handleSetLanguage(e.target.value)}
              >
                <DropdownListItem
                  value="en"
                  MenuProps={{
                    classes: {},
                  }}
                >
                  {t('language.english')}
                </DropdownListItem>
                <DropdownListItem
                  value="fi"
                  MenuProps={{
                    classes: {},
                  }}
                >
                  {t('language.finnish')}
                </DropdownListItem>
              </LanguageDropdown>
            </FormControl>
            <ThemeSwitch checked={isDarkTheme} onChange={changeTheme} />
            {isMobile ? (
              <DrawerComponent />
            ) : (
              <div className="navbar-links-div">
                <Link to="/satumaan-dynamo" className="navlink">
                  {t('navigation.home')}
                </Link>
                <Link to="/bikekitchen" className="navlink">
                  {t('navigation.bikekitchen')}
                </Link>
                <Link to="/about" className="navlink">
                  {t('navigation.about')}
                </Link>
                <Link to="/contact" className="navlink">
                  {t('navigation.contact')}
                </Link>
                <Link to="/events" className="navlink">
                  {t('navigation.events')}
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
