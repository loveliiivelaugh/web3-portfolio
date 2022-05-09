
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Card, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import { items, projects } from './../data';
import { ColoredTransition } from "../animations/pageTransitions";
import Drawer from '../components/muiTemplates/Drawer';
import MuiTimeline from '../components/muiTemplates/MuiTimeline';
// images
import computer from '../assets/images/computer.png';
import phone from '../assets/images/phone.png';
import tablet from '../assets/images/tablet.png';


const ProjectLaunch = () => {
  const [selected, setSelected] = useState(null);
  const [overlay, setOverlay] = useState('');

  const projectCategory = window.location.pathname
    .split('/')[2]
    .split('-')
    .map(word => word && word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const handleHover = event => {
    const { id } = event.target;
    setOverlay(id);
  };

  const work = projects
    .find(({ category }) => category === projectCategory
      .toLowerCase()
      .replace(' ', '-')).projects;

  return (
    <>
      <ColoredTransition delay={2} color="#000" direction="up" />
      <ColoredTransition delay={1} color="#333" direction="up" />
      <Container maxWidth={false}>
      {selected !== 'all' ? (
        <Paper elevation={16} sx={{ borderRadius: '25px' }}>
          <Card>
            <Grid container>
              <Grid item md={6}>
                <Stack>
                  <center>
                    <img src={phone} style={{ padding: '20px', height: '50%', width: '50%' }}></img>
                    <img src={tablet} style={{ padding: '20px', height: '70%', width: '70%' }}></img>
                    <img src={computer} style={{ padding: '0px', height: '100%', width: '100%' }}></img>
                  </center>
                </Stack>
              </Grid>
              <Grid item md={6}>
                <Box
                  sx={{
                    padding: '10px',
                  }}
                  textAlign={{
                    xs: 'center',
                    md: 'left',
                  }}
                >
                  <MuiTimeline />
                  <Typography variant="h4" gutterBottom>
                    {selected || work[0].title}
                  </Typography>
                  <Typography variant="subtitle1">
                    {work.find(({ title }) => title === selected)?.descr || work[0]?.descr || 
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
                  </Typography>
                  <Box mt={2} textAlign={{
                      xs: 'center',
                      md: 'right',
                    }}
                    p={{
                      xs: 2,
                      md: 4,
                    }}
                  >
                    <Button variant="contained" color="primary">
                      Live Demo
                    </Button>
                    {' '}
                    <Button variant="outlined" color="primary">
                      Source Code
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Paper>
      ) : (
        <Grid container spacing={4}>
        {items.map(({ title, description }, index) => (
          <Grid key={index} item md={4}>
            <Paper elevation={16} sx={{ borderRadius: '25px' }}>
              <Card 
                id={`${title}-card`} 
                onMouseEnter={handleHover} 
                // onMouseLeave={() => setOverlay('')}
                sx={{ position: 'relative', mb: 0 }}
              >
              <img id={`${title}-card`} src={`https://random.imagecdn.app/340/200`} style={{ opacity: overlay === `${title}-card` ? 0.1 : 1 }}></img>
              <Typography variant="h4" sx={{
                opacity: overlay === `${title}-card` ? 0.05 : 1,
                position: 'absolute',
                top: '120px',
                width: '300px',
                padding: '10px',
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
                  <Button variant="contained" color="primary" onClick={() => window.location.assign(`/projects/${projectCategory}/${title.toLowerCase().replace(/ /g, "-")}`)}>
                    Live Demo
                  </Button>
                  <Button variant="outlined" color="primary">
                    Source Code
                  </Button>
                </Box>
              </Card>
            </Paper>
          </Grid>
        ))}
        </Grid>
      )}
      </Container>
    </>
  )
};

export default ProjectLaunch