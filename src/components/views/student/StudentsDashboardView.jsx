import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import {
  Grid,
  LinearProgress,
  Link,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  Face,
  AccessAlarm,
  Equalizer,
  // SwapVerticalCircle,
  // Exposure,
} from '@material-ui/icons';
import AppStyles from '../../styles/AppStyles';
import InfoCard from '../../common/InfoCard';
const StudentsDashboardView = (/* props */) => {
  // const { classes } = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="body1">Próxima clase</Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <InfoCard 
          title="Proxima Clase"
          subtitle="20:00h"
          icon={<AccessAlarm />}
          iconPosition="left"
          content={<LinearProgress value={50} variant="determinate" />}
        />
      </Grid>
      <Grid item xs={6}>
        <Link component={RouterLink} to="/teachers" underline="none">
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
            // title="Next class"
            subtitle={<b>Clases Agendadas</b>}
          />
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Link component={RouterLink} to="/teachers" underline="none">
          <InfoCard 
            icon={<Equalizer />}
            iconPosition="right"
            // title="Next class"
            subtitle={<b>Instituciones</b>}
          />
        </Link>
      </Grid>
    </Grid>
  )
};

StudentsDashboardView.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(AppStyles)(StudentsDashboardView);