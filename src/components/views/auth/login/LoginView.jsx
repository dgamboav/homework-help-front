import React from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppStyles from '../../../styles/AppStyles';
import { useForm } from '../../../../hooks/useForm';
import {
    Grid,
    Button,
    Typography,
    TextField,
    Box,
    Link,
    Container
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { loginWithUsernamePassword } from '../../../../actions/auth';



const LoginView = (props) => {
    const dispatch = useDispatch();

    const history = useHistory();

    const { classes } = props;

    const [ formValues, handleInputChange ] = useForm();

    const { email, password } = formValues;

    const handleSubmitLoginForm = (e) => {
        e.preventDefault();
        
        dispatch(loginWithUsernamePassword(email, password));

        // history.push('/students')
    }

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
                <form onSubmit={ handleSubmitLoginForm }>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField  
                                id="email"
                                name="email"
                                type="text"
                                label="E-mail"
                                fullWidth
                                onChange={ handleInputChange }
                                value={ email }
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField  
                                id="password"
                                name="password"
                                type="password"
                                label="Contraseña"
                                fullWidth
                                onChange={ handleInputChange }
                                value={ password }
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
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