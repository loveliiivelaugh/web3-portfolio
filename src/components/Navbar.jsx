import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import { Link } from "react-router-dom";
// import { Link } from "./../util/router";
// import { useAuth } from "./../hooks/useAuth";
// import { useDarkMode } from "../util/theme";
import logo from "../assets/favicon.ico";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 28,
    marginRight: theme.spacing(2),
  },
  drawerList: {
    width: 250,
  },
  spacer: {
    flexGrow: 1,
  },
}));

function Navbar(props) {
  const classes = useStyles();
  // const { user } = useAuth();
  // const darkMode = useDarkMode();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuState, setMenuState] = useState(null);
  // Use inverted logo if specified
  // and we are in dark mode
  // const logo =
  //   props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  const handleOpenMenu = (event, id) => {
    // Store clicked element (to anchor the menu to)
    // and the menu id so we can tell which menu is open.
    setMenuState({ anchor: event.currentTarget, id });
  };

  const handleCloseMenu = () => {
    setMenuState(null);
  };

  return (
    <Section bgColor={props.color} size="auto">
      <AppBar position="static" color="transparent" elevation={0}>
        <Container disableGutters={true}>
          <Toolbar>
            <Link to="/">
              <img src={logo} alt="Logo" className={classes.logo} />
            </Link>
            <div className={classes.spacer} />
            <Hidden smUp={true} implementation="css">
              <IconButton
                onClick={() => {
                  setDrawerOpen(true);
                }}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List
          className={classes.drawerList}
          onClick={() => setDrawerOpen(false)}
        >
          <ListItem component={Link} to="/" button={true}>
            <ListItemText>List Item</ListItemText>
          </ListItem>
          {/* {!user && (
            <ListItem component={Link} to="/auth/signin" button={true}>
              <ListItemText>Sign in</ListItemText>
            </ListItem>
          )}

          {user && (
            <>
              <ListItem component={Link} to="/dashboard" button={true}>
                <ListItemText>Dashboard</ListItemText>
              </ListItem>
              <ListItem component={Link} to="/settings/general" button={true}>
                <ListItemText>Settings</ListItemText>
              </ListItem>
              <Divider />
              <ListItem
                button={true}
                onClick={(event) => {
                  // signout();
                }}
              >
                <ListItemText>Sign out</ListItemText>
              </ListItem>
            </>
          )} */}

          {/* <ListItem>
            <IconButton
              color="inherit"
              onClick={darkMode.toggle}
              style={{ opacity: 0.6 }}
            >
              {darkMode.value && <NightsStayIcon />}

              {!darkMode.value && <WbSunnyIcon />}
            </IconButton>
          </ListItem> */}
        </List>
      </Drawer>
    </Section>
  );
}

export default Navbar;
