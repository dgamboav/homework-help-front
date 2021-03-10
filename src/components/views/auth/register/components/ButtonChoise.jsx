import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Button,
  Typography,
  Box,
} from '@material-ui/core';
import AppStyles from '../../../../styles/AppStyles';

const ButtonChoise = (props) => {
  const {
    classes,
    next,
    back,
  } = props;

  return (
    <Box marginY="1.5rem">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography align="center" variant="h6">
            ¿Cual es tu Nivel de estudio?
            </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="secondary" fullWidth>
            Basico
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="secondary" fullWidth>
            Bachillerato
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="secondary" fullWidth>
            Tecnico Superior
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="secondary" fullWidth>
            Universitario
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="secondary" fullWidth>
            Maestria
          </Button>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Button variant="contained" color="primary" fullWidth onClick={back}>
            Atras
          </Button>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Button variant="contained" color="primary" fullWidth onClick={next}>
            Siguiente
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

ButtonChoise.propTypes = {
  classes: PropTypes.object,
  next: PropTypes.func,
  back: PropTypes.func,
};

export default withStyles(AppStyles)(ButtonChoise);