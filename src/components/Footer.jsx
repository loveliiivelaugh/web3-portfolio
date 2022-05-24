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
    textDecoration: 'none'
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
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className={props.sticky && classes.sticky}
    >
      <Container>
        <div className={classes.wrapper}>
          {pathname !== "/" ? ' ' : (
            <div className={`${classes.item} ${classes.left}`}>
              <Link to="/">
                {/* <img src={props.logo} alt="Logo" className={classes.brand} /> */}
              </Link>
            </div>
          )}
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
            <Grid item md={6} className={`${classes.left}`} p={2}>
              <Typography variant="body1">Contact me at <a href="mailto:woodward.michael.a@gmail.com" style={{ color: '#ddd', textDecoration: 'none' }}>woodward.michael.a@gmail.com</a></Typography>
            </Grid>
            <Grid item md={6} textAlign="right" p={2}>
              <Typography variant="body1">
                Drop some coin or an NFT 😎 @ 0xe5F6BC85E03d7aC6819C97ac1dB1d2a237C05Edf
                <br/>
                or @ michaelwoodward.eth 💛
              </Typography>
            </Grid>
            <Grid item md={6} className={`${classes.left}`} p={2}>
              <Typography variant="body1">
                <a href={resumeLink} target="blank" style={{ color: '#ddd', textDecoration: 'none' }}>
                  View my resume
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item md={12} className={`${classes.item}`} p={2}>
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
                {/* <LinkMui
                  href="https://medium.com"
                  target="_blank"
                  rel="noreferrer"
                  className={classes.link}
                >
                  Blog
                </LinkMui> */}
              </Typography>
            </Grid>
            <Grid item md={12} p={2}>
              <Typography variant="body1" className={classes.item}>
                {props.copyright}
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Section>
  );
}

export default Footer;
