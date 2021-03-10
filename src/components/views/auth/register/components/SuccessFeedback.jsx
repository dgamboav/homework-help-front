import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Button,
  Box,
} from '@material-ui/core';
import CompletedTask from '../assets/completed_task.svg';
import AppStyles from '../../../../styles/AppStyles';

const SuccessFeedback = (props) => {
  const {
    classes,
    // next,
    finish,
  } = props;

  return (
    <Box marginY="1.5rem">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box width="100%" className={classes.centerImage}>
            <img src={CompletedTask} className={classes.appImage} alt="" />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={finish}>
            Finalizar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

SuccessFeedback.propTypes = {
  classes: PropTypes.object,
  finish: PropTypes.func,
};

export default withStyles(AppStyles)(SuccessFeedback);