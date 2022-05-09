import React from 'react';
import { Grid, Typography } from '@mui/material';
import { PieChart, Pie } from 'recharts';

const PlaidDashboard = () => {
  return (
    <>
      <Grid container maxWidth='xl'>
        <Plaid />
      </Grid>
      <Typography variant="h4" align="center" gutterBottom>
        Plaid Visualizations
      </Typography>
      <Typography variant="h4" align="center" gutterBottom>
        Account + Transaction Budgeting
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Piechart />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Barchart />
        </Grid>
      </Grid>
      <DataGridDemo />
    </>
  )
}

export default PlaidDashboard