import React, { useState } from 'react'
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  useTheme,
  useMediaQuery,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px',
  },
  drawerList: {
    width: 200,
    flexShrink: 0,
    alignText: 'right',
  },
  button: {
    marginTop: 2,
  },
}))

function DrawerComponent(props) {
  const classes = useStyles()
  const [openDrawer, setOpenDrawer] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const { t } = useTranslation()

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor={'right'}
      >
        <List className={classes.drawerList}>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/satumaan-dynamo" className={classes.link}>
                {t('navigation.home')}
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/about" className={classes.link}>
                {t('navigation.about')}
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contact" className={classes.link}>
                {t('navigation.contact')}
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/joinus" className={classes.link}>
                {t('navigation.joinus')}
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/events" className={classes.link}>
                {t('navigation.events')}
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/bikekitchen" className={classes.link}>
                {t('navigation.bikekitchen')}
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        size="large"
        className={classes.button}
      >
        <MenuIcon fontSize="inherit" />
      </IconButton>
    </>
  )
}
export default DrawerComponent
