import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';

import LandingPageStyles from '../../../styles/LandingPageStyles';

import countries from './data'

function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
      .toUpperCase()
      .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode;
}

const Banner = (props) => {
  const { classes } = props;

  return (
    <section className={classes.banner}>
      <div className={classes.toolbar} />
      <Box width="100%" height="100%" display="flex" flexDirection="row" justifyContent="center" alignItems="center">
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center">Encuentra el tutor ideal para ti</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" align="center">Reserva un tutor de la materia que necesites cerca de ti</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Autocomplete
                id="subjects"
                options={countries}
                classes={{
                  option: classes.option,
                }}
                fullWidth
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(option) => (
                  <React.Fragment>
                    <span>{countryToFlag(option.code)}</span>
                    {option.label} ({option.code}) +{option.phone}
                  </React.Fragment>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Elije una Materia"
                    variant="outlined"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Autocomplete
                id="city"
                options={countries}
                classes={{
                  option: classes.option,
                }}
                fullWidth
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(option) => (
                  <React.Fragment>
                    <span>{countryToFlag(option.code)}</span>
                    {option.label} ({option.code}) +{option.phone}
                  </React.Fragment>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Ciudad"
                    variant="outlined"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Autocomplete
                id="location"
                options={countries}
                classes={{
                  option: classes.option,
                }}
                fullWidth
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(option) => (
                  <React.Fragment>
                    <span>{countryToFlag(option.code)}</span>
                    {option.label} ({option.code}) +{option.phone}
                  </React.Fragment>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Ubicacion"
                    variant="outlined"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Box width="100%" display="flex" flexDirection="row" justifyContent="center">
                <Button variant="contained" color="secondary" size="large" className={classes.bannerButton}>Buscar</Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  )
};

Banner.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(LandingPageStyles)(Banner);