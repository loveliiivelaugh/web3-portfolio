import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import { motion } from 'framer-motion';
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { items } from './../data';


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

  const handleHover = event => {
    const { id } = event.target;
    console.info('hover event:', { id });
    setOverlay(id);
  };

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
          {items.map(({ title, description, image }, index) => (
            <Grid key={index} item md={4}>
            <React.Suspense fallback="Loading...">
              <motion.div
                id={title + '-card'}
                onHoverStart={handleHover} 
                onHoverEnd={() => setOverlay('')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate(`/projects/${title.toLowerCase().replace(/ /g, "-")}`)}
                style={{ position: 'relative' }}
              >
              <motion.img 
                id={`${title}-card`}
                src={image} 
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
                    {description}
                  </Typography>
                  <Button variant="outlined" color="primary" onClick={() => navigate(`/projects/${title.toLowerCase().replace(/ /g, "-")}`)}>
                    Learn More
                  </Button>
                </Box>
              </motion.div>
              </React.Suspense>
            </Grid>
          ))}
          </Grid>
        </Container>
      </Container>
    </Section>
  );
}

export default FeaturesSection;

const ProjectsCarousel = ({projects, classes}) => {
  const [activeItem, setActiveItem] = useState(0);

  const handlePrev = (max) => setActiveItem(prev => (prev === 0 ? max : prev - 1));
  const handleNext = (max) => setActiveItem(prev => (prev === max ? 0 : prev + 1));
  return (
    <>
      <Button variant="text" color="primary" onClick={() => handlePrev(projects.length - 1)}>{'<'}</Button>
        {projects.map(({title, image}, index) => index === activeItem && (
          <figure className={classes.figure}>
            <img
              src={image}
              alt={title}
              className={classes.image}
            />
          </figure>
        ))}
      <Button variant="text" color="primary" onClick={() => handleNext(projects.length - 1)}>{'>'}</Button>
    </>
  )
}
