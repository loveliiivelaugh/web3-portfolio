import React, { useEffect, useState, useRef } from "react";
import { Alert, Box, Button, Container, Grid, Fade, Snackbar, Typography } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { projectsData } from '../data/projects.js';
import { items } from './../data';
import { useCustomCursor } from '../animations/useCustomCursor';

const useStyles = makeStyles(theme => ({
  sectionHeader: {
    marginBottom: theme.spacing(4),
    '& :hover': {
      cursor: 'none',
    },
  }
}));

function FeaturesSection(props) {
  const classes = useStyles();
  const { HeaderCursor } = useCustomCursor();
  const [overlay, setOverlay] = useState('');
  const [open, setOpen] = useState(false);
  const handleHover = event => setOverlay(event.target.id);


  const colors = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#8bc34a',
    '#ff9800',
    '#ff5722',
    '#795548',
    '#9e9e9e',
    '#607d8b',
  ];


  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container maxWidth="lg">
        <motion.div>
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            size={4}
            textAlign="center"
            className={classes.sectionHeader}
          />
        </motion.div>
        <Grid container columnSpacing={4} rowSpacing={2} justifyContent="space-between">
        {[...projectsData].splice(0, 9).map(({ title, features, img, repo, url }, index) => (
        <Grid key={index} item xs={12} sm={6} md={4}>
          <Fade in>
            <motion.div
              id={title + '-card'}
              onHoverStart={handleHover} 
              onHoverEnd={() => setOverlay('')}
              whileHover={{ scale: 1.1 }}
              onClick={event => handleHover(event)}
              whileTap={handleHover}
              style={{
                position: 'relative',
                height: '220px',
                width: '340px',
                margin: 'auto',
                padding: '10px',
                backgroundColor: colors[index],
                borderRadius: '10px',
              }}
            >
            <motion.img 
              id={`${title}-card`}
              src={img}
              whileTap={handleHover}
              style={{
                opacity: overlay === `${title}-card` ? 0.1 : 1,
                height: '100%',
                width: '100%',
                borderRadius: '15px',
                boxShadow: '1px 5px 8px 6px rgba(0, 0, 0, 0.3)',
              }}
            ></motion.img>
            <Typography variant="h4" sx={{
              opacity: overlay === `${title}-card` ? 0.05 : 1,
              position: 'absolute',
              top: '120px',
              width: '300px',
              padding: '10px',
              color: '#fff'
            }}>
              {/* {title} */}
            </Typography>
              <Box
                sx={{
                  opacity: overlay === `${title}-card` ? 1 : 0,
                  position: 'absolute',
                  top: '25px',
                  width: '300px',
                  padding: '10px',
                  // zIndex: 10
                }}
                textAlign={{
                  xs: 'center',
                  md: 'left',
                }}
              >
                <Typography variant="h5" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="subtitle2">
                  {features}
                </Typography>
                <Button variant="contained" color="primary" onClick={() => repo === '#' ? setOpen(true) : window.open(repo)}>
                  Source Code
                </Button>
                {' '}
                <Button variant="outlined" color="primary" sx={{ color: '#fff' }} onClick={() => url === '#' ? setOpen(true) : window.open(url)}>
                  See Live
                </Button>
              </Box>
            </motion.div>
          </Fade>
        </Grid>
        ))}
        </Grid>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Note archived"
          // action={action}
        >
          <Alert severity="warning">Demo App Coming Soon!</Alert>
        </Snackbar>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
