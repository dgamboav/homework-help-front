import React from 'react';
import {
  Grid,
  LinearProgress,
  Button,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  PhotoCamera,
} from '@material-ui/icons';
import AppStyles from '../../styles/AppStyles';
import InfoCard from '../../common/InfoCard';
import StatsCard from '../../common/StatsCard';


const StudentsDashboardView = (props) => {
  const { classes } = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6}>
        <InfoCard 
          title="Next class"
          subtitle="20:00h"
          icon={<PhotoCamera />}
          iconPosition="left"
          content={<LinearProgress />}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <InfoCard 
          title="Next class"
          subtitle="20:00h"
          icon={<PhotoCamera />}
          iconPosition="right"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <StatsCard
          title="Module name"
          subtitle="Mudule subtitle"
          actions={<Button>Show more...</Button>}
        />
      </Grid>
    </Grid>
  )
};

export default withStyles(AppStyles)(StudentsDashboardView);