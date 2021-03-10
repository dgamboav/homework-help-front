import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import {
  Box,
  Container,
  Grid,
  Typography,
  Avatar,
} from '@material-ui/core';
import {
  AccessTime,
} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import LandingPageStyles from '../../../styles/LandingPageStyles';

const InfoPanel = (props) => {
  const { classes } = props;

  return (
    <section className={classes.infoPanelSection}>
      <Box width="100%" height="100%" display="flex" flexDirection="row" justifyContent="center" alignItems="center">
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4}>
              <Fade left>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Box display="flex" flexDirection="row" justifyContent="center">
                      <Avatar className={classes.avatarSize}>
                        <AccessTime fontSize="large" />
                      </Avatar>
                    </Box>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant="h5">Title</Typography>
                    <Typography variant="body1">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro quo quidem excepturi blanditiis reprehenderit dignissimos?
                      </Typography>
                  </Grid>
                </Grid>
              </Fade>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Fade left>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Box display="flex" flexDirection="row" justifyContent="center">
                      <Avatar className={classes.avatarSize}>
                        <AccessTime fontSize="large" />
                      </Avatar>
                    </Box>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant="h5">Title</Typography>
                    <Typography variant="body1">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro quo quidem excepturi blanditiis reprehenderit dignissimos?
                      </Typography>
                  </Grid>
                </Grid>
              </Fade>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Fade left>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Box display="flex" flexDirection="row" justifyContent="center">
                      <Avatar className={classes.avatarSize}>
                        <AccessTime fontSize="large" />
                      </Avatar>
                    </Box>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography variant="h5">Title</Typography>
                    <Typography variant="body1">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro quo quidem excepturi blanditiis reprehenderit dignissimos?
                      </Typography>
                  </Grid>
                </Grid>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  )
};

InfoPanel.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(LandingPageStyles)(InfoPanel);