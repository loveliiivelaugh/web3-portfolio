import React from "react";
import { Link, useLocation } from 'react-router-dom';
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import LinkMui from "@mui/material/Link";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
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
    height: 32,
  },
  social: {
    alignItems: "flex-end",
  },
  link: {
    color: "inherit",
    lineHeight: 1,
    "&:not(:last-of-type)": {
      marginRight: "1.2rem",
    },
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
          <div className={`${classes.item} ${classes.left}`}>
            <Link to="/">
              <img src={props.logo} alt="Logo" className={classes.brand} />
            </Link>
          </div>
          <div
            className={`${classes.item} ${classes.right} ${classes.smallLinks}`}
          >
            <Typography>
              <LinkMui to="/" className={classes.link}>
                Home
              </LinkMui>
              <LinkMui to="/about" className={classes.link}>
                About
              </LinkMui>
              <LinkMui to="/contact" className={classes.link}>
                Contact
              </LinkMui>
              <LinkMui
                href="https://medium.com"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                Blog
              </LinkMui>
            </Typography>
          </div>
          <div className={`${classes.item} ${classes.right} ${classes.social}`}>
            <a
              href="https://twitter.com/divjoy"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <TwitterIcon fontSize="small" />
            </a>
            <a
              href="https://facebook.com/DivjoyOfficial"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <FacebookIcon fontSize="small" />
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
          <div className={`${classes.item} ${classes.left}`}>
            Buy me a coffee or a beer STRIPE
            {/* <Stripe /> */}
          </div>
          <div className={`${classes.item} ${classes.left}`}>
            Donate BTC or ETH CRYPTO
            <Button variant="contained" color="primary" onClick={() => console.log({ donate: 5 })}>
              $5
            </Button>
          </div>
          <div className={`${classes.item} ${classes.left}`}>
            <p>Shout out at <a href="mailto:woodward.michael.a@gmail.com" style={{ color: '#ddd', textDecoration: 'none' }}>email@email.com</a></p>
          </div>
          <div className={`${classes.item} ${classes.left}`}>
            <center>
              <p>See my resume at <a href="#" style={{ color: '#ddd', textDecoration: 'none' }}>Michael Woodward Front End Developer</a></p>
            </center>
          </div>
          <span className={`${classes.item} ${classes.legal} ${classes.left}`}>
            {props.copyright}
            {/* <LinkMui to="/legal/terms-of-service">
              Terms
            </LinkMui>
            <LinkMui to="/legal/privacy-policy">
              Privacy
            </LinkMui> */}
          </span>
        </div>
      </Container>
    </Section>
  );
}

export default Footer;
