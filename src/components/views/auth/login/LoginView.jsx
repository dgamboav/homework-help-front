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
    Container
} from '@material-ui/core';
import AppStyles from '../../../styles/AppStyles';



const LoginView = (props) => {
    const {
        classes,
    } = props;

    return (
        <Container maxWidth="sm">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6" align="center">Ingresa con tu E-mail</Typography>
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
                        <Grid item xs={12} sm={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                            >
                                Iniciar Sesión
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Link component={RouterLink} to="/register" underline="none">
                        <Typography variant="body2" align="center">¿No tienes cuenta?</Typography>
                    </Link>
                </Grid>
                <Grid item xs={12}>
                <Link component={RouterLink} to="/register" underline="none">
                        <Typography variant="body2" align="center">Registrarse</Typography>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
};

LoginView.propTypes = {
    classes: PropTypes.object,
};
 
export default withStyles(AppStyles)(LoginView);