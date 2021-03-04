import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
} from '@material-ui/core';
import Banner from './components/Banner';
import InfoPanel from './components/InfoPanel';
import { withStyles } from '@material-ui/core/styles';
import LandingPageStyles from '../../styles/LandingPageStyles';

const HomeLandingView = (props) => {
  const { classes } = props;

  return (
    <div>
      <Banner />
      <InfoPanel />
      {/* {[...new Array(30)]
        .map(
          () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        )
        .join('\n')} */}
    </div>
  )
};

HomeLandingView.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object,
};

export default withStyles(LandingPageStyles)(HomeLandingView);
