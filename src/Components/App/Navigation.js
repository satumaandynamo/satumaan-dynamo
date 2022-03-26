import React from "react";
import { ReactComponent as Logo } from "../../Assets/dynamo-white.svg";
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
} from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";
import "./../../App.css";

const useStyles = makeStyles((theme) => ({
  navbarStyle: {
    backgroundColor: "transparent",
    backdropFilter: "blur(2px)",
    boxShadow: "0px 2px 8px 0px rgba(255, 255, 255, 0)",
  },
  navlinks: {
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    fontFamily: "Saira Stencil One",
    textTransform: "uppercase",
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 1.6,
    marginLeft: 5,
    color: "white",
  },
  link: {
    textDecoration: "none",
    background: "#ffa500",
    color: "black",
    fontSize: "18px",
    padding: "10px 15px 10px 15px",
    borderRadius: "50px",
    marginLeft: theme.spacing(5),
    transition: ".3s ease-in-out",
    "&:hover": {
      background: "#ffedcc",
      transition: ".3s ease-in-out",
    },
  },
  dropdownStyle: {
    textDecoration: "none",
    background: "#ffa500",
    color: "black",
    fontSize: "18px",
    borderRadius: "20px",
    marginTop: "40px",
    marginLeft: theme.spacing(0),
  },
  dropdownListItemStyle: {
    transition: ".3s ease-in-out",
    "&:hover": {
      background: "#ffedcc",
      transition: ".3s ease-in-out",
    },
    margin: "20px",
    color: "black",
  },
  languageSelector: {
    width: "120px",
    borderRadius: 4,
    position: "relative",
  },
}));

const CustomSelect = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 50,
    width: 80,
    backgroundColor: "transparent",
    border: "white",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 50,
      boxShadow: "0 0 0 0.2rem #fff",
    },
  },
}));

function Navbar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="sticky" className={classes.navbarStyle}>
      <CssBaseline />
      <Toolbar>
        <Typography className={classes.logo} variant="title">
          <span className="logo-text">
            <Logo
              alt="Satumaan Dynamon logo"
              height={50}
              className="navbar-logo"
            />
            Satumaan Dynamo
          </span>
        </Typography>
        <FormControl
          variant="standard"
          className={classes.languageSelector}
        ></FormControl>
        <FormControl sx={{ m: 10 }} variant="standard">
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
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
