import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  // useMediaQuery,
  // Link,
  useScrollTrigger,
  Zoom,
  Fab,
} from '@material-ui/core';
import {
  KeyboardArrowUp,
} from '@material-ui/icons';
// import { Link as RouterLink } from 'react-router-dom';
import AppStyles from '../styles/AppStyles';
import Header from './components/LandingHeader';
import Footer from './components/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const ScrollTop = (props) => {
  const { children, window } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const LandingPageLayout = (props) => {
  const {
    children,
    classes,
  } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div id="back-to-top-anchor" />
      <Header />
      <main>
        {children}
      </main>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
      <Footer />
    </div>
  )
};

LandingPageLayout.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object,
  title: PropTypes.any,
};

export default withStyles(AppStyles)(LandingPageLayout);