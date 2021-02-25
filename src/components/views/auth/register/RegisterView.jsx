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
    Link,
    Container,
    FormControlLabel,
    Switch,
} from '@material-ui/core';
import AppStyles from '../../../styles/AppStyles';

const RegisterView = (props) => {
    const {
        classes,
    } = props;

    const [accept, setAccept] = React.useState(false);

    const handleChange = (event) => {
        setAccept(event.target.checked);
    };

    return (
        <Container maxWidth="sm">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6" align="center">Registrate con tu E-mail</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        className={classes.buttonRounded}
                    >
                        Soy Profesor
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        className={classes.buttonRounded}
                    >
                        Soy Estudiante
                    </Button>
                </Grid>
            </Grid>
            <Box marginY="1.5rem">
                <form>
                    <Grid container spacing={2}>
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
                            >
                                Registrarse
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Link component={RouterLink} to="/login" underline="none">
                        <Typography variant="body2" align="center">¿Ya tienes cuenta?</Typography>
                    </Link>
                </Grid>
                <Grid item xs={12}>
                <Link component={RouterLink} to="/login" underline="none">
                        <Typography variant="body2" align="center">Inicia sesión aquí</Typography>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
};

RegisterView.propTypes = {
    classes: PropTypes.object,
};
 
export default withStyles(AppStyles)(RegisterView);