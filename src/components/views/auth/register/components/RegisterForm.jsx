import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Button,
  Typography,
  TextField,
  Box,
  FormControlLabel,
  Switch,
} from '@material-ui/core';
import AppStyles from '../../../../styles/AppStyles';

const RegisterForm = (props) => {
  const {
    classes,
    next,
  } = props;

  const [accept, setAccept] = React.useState(false);

  const handleChange = (event) => {
    setAccept(event.target.checked);
  };

  return (
    <Box marginY="1.5rem">
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" align="center">Registrate con tu E-mail</Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              id="fullname"
              name="fullname"
              type="text"
              label="Nombre Completo"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              id="email"
              name="email"
              type="email"
              label="E-mail"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              id="password"
              name="password"
              type="password"
              label="Contraseña"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography align="right">
              <FormControlLabel
                control={<Switch checked={accept} onChange={handleChange} name="accept" />}
                label="Acepto los terminos y condiciones"
              />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={next}
            >
              Registrarse
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

RegisterForm.propTypes = {
  classes: PropTypes.object,
  next: PropTypes.func,
};

export default withStyles(AppStyles)(RegisterForm);