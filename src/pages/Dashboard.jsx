import React, { useEffect, useState } from 'react';
import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import Dashboard from '../components/muiTemplates/Dashboard/Dashboard';
import AlpacaVisuals from '../components/alpaca/AlpacaVisuals';
import PlaidVisuals from '../components/plaid/PlaidVisuals';
import Portfolio from './Portfolio';

const projects = [
  'Budget Tracking with Plaid',
  'Appointments with Ethereum + Web3',
  'Photo Gallery with Google Photos API',
  'Crypto Portfolio Dashboard with Alpaca and D3',
  'AI enabled Dash Cam with Computer Vision',
  'Conversational UI with GPT-3',
  'React API Services Component Cookbook',
];

const cms = {
  title: 'Supabase + React',
  subtitle: 'React Cookbook',
  description: "Here are a few opinionated React recipes composed into reusable components in order to  make commonly used API's easier to consume with React, abstracting  away most of the boilerplate and enabling  a basic setup with minimal  effort. All  of these  recipes have been built with modern design patterns (React  18 + hooks)  and include documentation, examples, and  tests.",
};

const DashboardPage = (props) => {
  const [page, setPage] = useState('plaid');

  const toggleContent = (page) => ({
      'alpaca': () => <AlpacaVisuals />,
      'plaid': () => <PlaidVisuals />,
      'projects': () => <ProjectGrid projects={projects} />,
      'portfolio': () => <Portfolio />
  }[page]());

  const handleClick = title => setPage(title);

  return <Dashboard content={toggleContent(page)} handleClick={handleClick} />;
};

export default DashboardPage;


const pageHeader = (cms) => {
  return (
    <>
      <Typography variant="h1" align="center" gutterBottom>
        {cms.title}
      </Typography>
      <Typography variant="h2" align="center" gutterBottom>
        {cms.subtitle}
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        {cms.description}
      </Typography>
    </>
  )
}

const ProjectGrid = (projects) => (
  <Container maxWidth="xl">
    <Typography variant="h4" align="center" gutterBottom>
      Project Grid
    </Typography>
    <Grid container spacing={2}>
    {projects.map((title, index) => (
      <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
        <Link to={`/projects/category/${title}`}>
          <Card elevation={10}>
            <CardContent>
              <img src="https://via.placeholder.com/240" alt="placeholder" />
            </CardContent>
          </Card>
        </Link>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Grid>
    ))}
    </Grid>
  </Container>
);