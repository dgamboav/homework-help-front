import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import {
  Grid,
  Link,
  LinearProgress,
} from '@material-ui/core';
import {
  AccessAlarm,
  Equalizer,
  Face,
} from '@material-ui/icons';
import InfoCard from '../../common/InfoCard';

const TeachersDashboardView = (/* props */) => {
  
  return (
    <Grid container spacing={2}>
      
      <Grid item xs={12} sm={12}>
        <InfoCard 
          title="Próxima clase"
          subtitle="20:00h"
          icon={<AccessAlarm />}
          iconPosition="left"
          content={<LinearProgress value={85} variant="determinate" />}
        />
      </Grid>
      <Grid item xs={6}>
        <Link component={RouterLink} to="/teachers/lessons/list" underline="none">
          <InfoCard 
            icon={<Face />}
            iconPosition="right"
            // title="First class"
            subtitle={<b>Buscar Clases</b>}
          />
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Link component={RouterLink} to="/teachers/lessons/list" underline="none">
          <InfoCard 
            icon={<AccessAlarm />}
            iconPosition="right"
            // title="First class"
            subtitle={<b>Clases Agendadas</b>}
          />
        </Link>

      </Grid>
      <Grid item xs={6}>
        <Link component={RouterLink} to="/students" underline="none">
          <InfoCard 
            icon={<Equalizer />}
            iconPosition="right"
            // title="First class"
            subtitle={<b>Instituciones</b>}
          />
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Link component={RouterLink} to="/teachers" underline="none">
          <InfoCard 
            icon={<Equalizer />}
            iconPosition="right"
            // title="Next class"
            subtitle={<b>Resultados</b>}
          />
        </Link>
      </Grid>
    </Grid>
  )
};


TeachersDashboardView.propTypes = {
  classes: PropTypes.object,
};

export default TeachersDashboardView;