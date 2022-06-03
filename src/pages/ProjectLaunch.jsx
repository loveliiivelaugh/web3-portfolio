
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Box, Button, Card, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { projects } from './../data';
import { ColoredTransition } from "../animations/pageTransitions";
import MuiTimeline from '../components/muiTemplates/MuiTimeline';
// images
import computer from '../assets/images/computer.png';
import phone from '../assets/images/phone.png';
import tablet from '../assets/images/tablet.png';

const ProjectLaunch = (props) => {
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
      <Container maxWidth="lg">
        <Paper elevation={16} sx={{ borderRadius: '25px', m: 4 }}>
          <Card>
            <Grid container>
              <Grid item md={6}>
                <Stack>
                  <img src={phone} style={{ padding: '20px', height: '40%', width: '40%', margin: 'auto' }} alt="phone example" />
                  <img src={tablet} style={{ padding: '20px', height: '60%', width: '60%', margin: 'auto' }} alt="tablet example" />
                  <img src={computer} style={{ padding: '0px', height: '90%', width: '90%', margin: 'auto' }} alt="computer example" />
                </Stack>
              </Grid>
              <Grid item md={6}>
                <Box
                  sx={{ padding: '10px' }}
                  textAlign={{ xs: 'center', md: 'left' }}
                >
                  <MuiTimeline />
                  <Typography variant="h4" gutterBottom>
                    {selected || work[0].title}
                  </Typography>
                  <Typography variant="subtitle1">
                    {work.find(({ title }) => title === selected)?.descr || work[0]?.descr || 
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
                  </Typography>
                  <Box 
                    mt={2} 
                    textAlign={{ xs: 'center', md: 'right' }}
                    p={{ xs: 2, md: 4 }}
                  >
                  <Link to={'#'}>
                    <Button variant="contained" color="primary">
                      Live Demo
                    </Button>
                  </Link>
                    {' '}
                    <Button variant="outlined" color="primary">
                      Source Code
                    </Button>
                    {' '}
                    <Button variant="text" color="primary" onClick={() => props.setDrawerOpen(true)}>
                      See More
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Paper>
      </Container>
    </>
  )
};

export default ProjectLaunch