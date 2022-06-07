import React from "react";
import { Link, useLocation } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import LinkMui from "@mui/material/Link";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
// import { useDarkMode } from "./../util/theme";
// import Stripe from './stripe';

const useStyles = makeStyles((theme) => ({
  sticky: {
    marginTop: "auto",
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
  item: {
    display: "flex",
    flex: "none",
    justifyContent: "center",
    width: "100%",
    marginBottom: 24,
    [theme.breakpoints.up("sm")]: {
      flex: "50%",
    },
  },
  brand: {
    display: "block",
    height: 128,
  },
  social: {
    alignItems: "flex-end",
  },
  link: {
    color: "#fff",
    lineHeight: 1.5,
    "&:not(:last-of-type)": {
      marginRight: "1.2rem",
    },
    textDecoration: 'none',
  },
  left: {
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
    },
  },
  right: {
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end",
    },
  },
  // Move links to end (bottom right)
  // Swaps position with social
  smallLinks: {
    [theme.breakpoints.up("sm")]: {
      order: 1,
    },
  },
  legal: {
    opacity: 0.6,
    fontSize: "0.875rem",
    "& a": {
      color: "inherit",
      marginLeft: "0.8rem",
    },
  },
}));

function Footer(props) {
  const classes = useStyles();
  const { pathname } = useLocation();
  const resumeLink = 'https://docs.google.com/document/d/1XRXuKHKSs5A1Kh2XkxHu-qxJpbrd527_ug9ycvp7u2o/edit?usp=sharing';
  // const darkMode = useDarkMode();
  // Use inverted logo if specified
  // and we are in dark mode
  // const logo =
  //   props.logoInverted && darkMode.value ? props.logoInverted : props.logo;
  
  return (
    <Container maxWidth="xl" sx={{ width: '100%' }}>
      <Box component="footer" sx={{ position: 'absolute', bottom: 0, color: '#fff' }}>
        <div className={classes.wrapper}>
          <div className={`${classes.item} ${classes.right} ${classes.social}`}>
            <a
              href="https://twitter.com/loveliiivelaugh"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <TwitterIcon fontSize="small" />
            </a>
            <a
              href="https://LinkedIn.com/in/michaelanthonywoodward"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <LinkedInIcon fontSize="small" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <InstagramIcon fontSize="small" />
            </a>
          </div>
          <Grid container>
            <Grid item sm={12} md={6} textAlign={{ sm: 'center', md: 'left'}} p={2}>
              <Typography variant="body1">Contact me at <a href="mailto:woodward.michael.a@gmail.com" style={{ color: '#ddd', textDecoration: 'none' }}>woodward.michael.a@gmail.com</a></Typography>
            </Grid>
            <Grid item sm={12} md={6} textAlign={{ sm: 'center', md: 'right' }} p={2}>
              <Typography variant="subtitle1">
                Drop some coin or an NFT 😎
                <br/>
                @ 0xe5F6BC85E03d7aC6819C97ac1dB1d2a237C05Edf
                <br/>
                or @ michaelwoodward.eth 💛
              </Typography>
            </Grid>
            <Grid item sm={12} md={6} textAlign={{ sm: 'center', md: 'left'}} p={2}>
              <Typography variant="body1">
                <a href={resumeLink} target="blank" style={{ color: '#ddd', textDecoration: 'none' }}>
                  View my resume
                </a>
              </Typography>
            </Grid>
            <Grid item md={12} p={2} textAlign="center">
              <Typography>
                <LinkMui to="/" className={classes.link}>
                  Home
                </LinkMui>
                <LinkMui to="/about" className={classes.link}>
                  About
                </LinkMui>
                <LinkMui href="mailto:woodward.michael.a@gmail.com" className={classes.link}>
                  Contact
                </LinkMui>
              </Typography>
            </Grid>
            <Grid item md={12} p={2} textAlign={{ sm: "center", md: 'right' }}>
              <Typography variant="body1">
                {props.copyright}
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Container>
  );
}

export default Footer;
