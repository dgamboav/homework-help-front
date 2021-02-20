import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Grid,
  Link,
} from '@material-ui/core';
import InfoCard from '../../common/InfoCard';


const TeachersDashboardView = (props) => {
  
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
      <Link component={RouterLink} to="/" underline="none">
        <InfoCard 
          title="First class"
          subtitle="09:00h"
        />
      </Link>
      </Grid>
      <Grid item xs={6}>
        <Link component={RouterLink} to="/students" underline="none">
          <InfoCard 
            title="Next class"
            subtitle="12:00h"
          />
        </Link>

      </Grid>
      <Grid item xs={6}>
        <InfoCard 
          title="First class"
          subtitle="13:00h"
        />
      </Grid>
      <Grid item xs={6}>
        <InfoCard 
          title="Next class"
          subtitle="15:00h"
        />
      </Grid>
    </Grid>
  )
};

export default TeachersDashboardView;