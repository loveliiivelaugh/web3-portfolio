import React from "react";
import { useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import { Link } from "react-router-dom";
import logo from "../assets/favicon.ico";
// import { useDarkMode } from "../util/theme";
import { projects } from "../data";

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
  // const darkMode = useDarkMode();
  const classes = useStyles();
  const { pathname } = useLocation();
  const path = pathname.split('/')[2];

  // Use inverted logo if specified
  // and we are in dark mode
  // const logo =
  //   props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  const TheList = () => (
    <List
      className={classes.drawerList}
      onClick={() => props.setDrawerOpen(false)}
    >
      <ListItem>
        <ListItemText>
          <strong>{path.replace('-', ' ')} Projects</strong>
        </ListItemText>
      </ListItem>
      <Divider />
    {projects
      .find(({ category }) => category === path)?.projects
      .map(({ title }, i) => (
        <ListItem key={i} component={Link} to="/" button>
          <ListItemText>
            {title || `Project ${i + 1}`}
          </ListItemText>
        </ListItem>
    ))}
    </List>
  );

  return (
    <Section bgColor={props.color} size="auto">
      <AppBar position="static" color="transparent" elevation={0}>
        <Container disableGutters={true}>
          <Toolbar>
            <Link to="/">
              <img src={logo} alt="Logo" className={classes.logo} />
            </Link>
            <div className={classes.spacer} />
            {pathname !== "/" && (
              <IconButton
                onClick={() => {
                  props.setDrawerOpen(true);
                }}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={props.drawerOpen}
        onClose={() => props.setDrawerOpen(false)}
      >
        <TheList />
      </Drawer>
    </Section>
  );
}

export default Navbar;
