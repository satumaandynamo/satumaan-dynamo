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
                            <Link
                                to="/satumaan-dynamo"
                                className={classes.link}
                            >
                                Home
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/about" className={classes.link}>
                                About
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/contact" className={classes.link}>
                                Contact
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/contact" className={classes.link}>
                                Join Us!
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/contact" className={classes.link}>
                                Bike Kitchen
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/contact" className={classes.link}>
                                Events
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
