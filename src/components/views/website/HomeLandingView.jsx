import React from 'react';
import PropTypes from 'prop-types';
import Banner from './components/Banner';
import InfoPanel from './components/InfoPanel';
import Blog from './components/Blog';
import Services from './components/Services';
import Contact from './components/Contact';
import { withStyles } from '@material-ui/core/styles';
import LandingPageStyles from '../../styles/LandingPageStyles';

const HomeLandingView = (props) => {
  const { classes } = props;

  return (
    <div>
      <Banner />
      <InfoPanel />
      <Services />
      <Blog />
      <Contact />
    </div>
  )
};

HomeLandingView.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object,
};

export default withStyles(LandingPageStyles)(HomeLandingView);
