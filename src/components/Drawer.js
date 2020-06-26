import React from 'react'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Slide from '@material-ui/core/Slide'

// import { useStore } from '../store/Store';

import HomeIcon from '@material-ui/icons/Home'
import PeopleIcon from '@material-ui/icons/People'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'
import PublicIcon from '@material-ui/icons/Public'

let themeObject = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#3cc3fd',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
  },
})

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBarButton: {
    fontWeight: 'bold',
    [theme.breakpoints.between('xs', 'md')]: {
      marginRight: theme.spacing(1),
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}))

function HideOnScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

// const useDarkMode = () => {
//   const [theme, setTheme] = useState(themeObject);
//   const {
//     palette: { type },
//   } = theme;

//   // setHidden(event.target.checked);
//   //setTheme(event.target.checked);

//   const toggleDarkMode = () => {
//     const updatedTheme = {
//       ...theme,
//       palette: {
//         ...theme.palette,
//         type: type === 'light' ? 'dark' : 'light',
//       },
//     };
//     setTheme(updatedTheme);
//   };

//   return [theme, toggleDarkMode];
// };

const Drawer = (props) => {
  const classes = useStyles()
  // const [state, setState] = useState({ left: false });
  //const [hidden, setHidden] = useState(themeObject);
  // const [theme, toggleDarkMode] = useDarkMode();
  // const themeConfig = createMuiTheme(theme);
  // const { darkMode, setDarkMode } = useStore();

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

  const toggleDrawer = (side, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    // setState({ ...state, [side]: open })
  }

  const sideList = (side) => (
    <div
      className={classes.list}
      role="presentation"
      // onClick={toggleDrawer(side, false)}
      // onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem>
          <ListItemText primary="Pages" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ContactPhoneIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary="Categories" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FlightTakeoffIcon />
          </ListItemIcon>
          <ListItemText primary="Travel" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FastfoodIcon />
          </ListItemIcon>
          <ListItemText primary="Food" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PublicIcon />
          </ListItemIcon>
          <ListItemText primary="LDR" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
            className={classes.menuButton}
            href="/dashboard"
          >
            Subscribe
          </Button>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <FormControlLabel
            control={
              <Switch
                //   onChange={() => setDarkMode(!darkMode)}
                label="Dark Mode"
                value="hidden"
                color="primary"
              />
            }
            label="Dark Mode"
          />
        </ListItem>
      </List>
    </div>
  )

  return (
    <div className={classes.root}>
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                // onClick={toggleDrawer('left', true)}
              >
                <MenuIcon />
              </IconButton>

              <Typography variant="h6" className={classes.title}>
                Glass of Sky
              </Typography>

              <Button
                variant="outlined"
                color="inherit"
                className={classes.appBarButton}
                href="/signin"
              >
                Login
              </Button>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </React.Fragment>

      <SwipeableDrawer
        // open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        {sideList('left')}
      </SwipeableDrawer>
    </div>
  )
}

export default Drawer
