import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import Section from "./Section";
import SectionHeader from "./SectionHeader";


const useStyles = makeStyles((theme) => ({
  itemsContainer: {
    marginTop: 60,
  },
  row: {
    // Reverse every other row
    "&:nth-of-type(even)": {
      flexDirection: "row-reverse",
    },

    // Spacing between rows
    "&:not(:last-child)": {
      marginBottom: `${theme.spacing(3)}px`,
    },
  },
  figure: {
    maxWidth: 300,
    margin: "30px auto",
  },
  image: {
    height: "auto",
    maxWidth: "100%",
  },
}));

const SingleProjectSection = (props) => {
  const classes = useStyles();
  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Container
          maxWidth="md"
          disableGutters
          className={classes.itemsContainer}
        >
        <h1>Single Project Container</h1>
        </Container>
      </Container>
    </Section>
  )
}

export default SingleProjectSection
