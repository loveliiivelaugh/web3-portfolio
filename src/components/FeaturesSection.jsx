import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Alert, Box, Button, Container, Grid, Snackbar, Typography } from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import { motion } from 'framer-motion';
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { items } from './../data';
import { projectsData } from '../data/projects.js';


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


function FeaturesSection(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [overlay, setOverlay] = useState('');
  const [open, setOpen] = useState(false);
  const handleHover = event => setOverlay(event.target.id);

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
        <Container maxWidth={false}>
          <Grid container spacing={4}>
          {projectsData.map(({ title, features, img, repo, url }, index) => (
            <Grid key={index} item md={4}>
            <React.Suspense fallback="Loading...">
              <motion.div
                id={title + '-card'}
                onHoverStart={handleHover} 
                onHoverEnd={() => setOverlay('')}
                whileHover={{ scale: 1.1 }}
                // whileTap={{ scale: 0.9 }}
                style={{ position: 'relative' }}
              >
              <motion.img 
                id={`${title}-card`}
                src={img} 
                style={{
                  opacity: overlay === `${title}-card` ? 0.1 : 0.8,
                  height: '220px',
                  width: '340px',
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
                {title}
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
                  <Typography variant="subtitle1">
                    {features}
                  </Typography>
                  <Button variant="contained" color="primary" onClick={() => repo === '#' ? setOpen(true) : navigate(repo)}>
                    Source Code
                  </Button>
                  {' '}
                  <Button variant="outlined" color="primary" sx={{ color: '#fff' }} onClick={() => url === '#' ? setOpen(true) : navigate(url)}>
                    See Live
                  </Button>
                </Box>
              </motion.div>
              </React.Suspense>
            </Grid>
          ))}
          </Grid>
        </Container>
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
