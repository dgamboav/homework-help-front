import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Grid,
  LinearProgress,
  Button,
  Link
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
          // content={<LinearProgress />}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Link component={RouterLink} to="/teachers" underline="none">
          <InfoCard 
            title="Next class"
            subtitle="20:00h"
            icon={<PhotoCamera />}
            iconPosition="right"
          />
        </Link>
      </Grid>
      <Grid item xs={6}>
        <InfoCard 
          title="First class"
          subtitle="09:00h"
        />
      </Grid>
      <Grid item xs={6}>
        <InfoCard 
          title="Next class"
          subtitle="12:00h"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <StatsCard
          title="Module name"
          subtitle="Mudule subtitle"
          icon={(<PhotoCamera />)}
          headerAction
          actions={(<Button component={RouterLink} to="/">Show more...</Button>)}
        />
      </Grid>
    </Grid>
  )
};

export default withStyles(AppStyles)(StudentsDashboardView);