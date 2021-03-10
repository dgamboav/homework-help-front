import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
import { withStyles, makeStyles, createStyles } from '@material-ui/core/styles';
import {
    Grid,
    Box,
    Typography,
    Link,
    Container,
    Stepper,
    Step,
    StepLabel,
    StepConnector,
} from '@material-ui/core';
import {
    PersonAdd,
    School,
    Check,
} from '@material-ui/icons';
import RegisterForm from './components/RegisterForm';
import ButtonChoise from './components/ButtonChoise';
import SuccessFeedback from './components/SuccessFeedback';
import AppStyles from '../../../styles/AppStyles';


const useColorlibStepIconStyles = makeStyles((theme) => createStyles({
    rootStepper: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 50%, ${theme.palette.tertary.main} 100%)`,
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 50%, ${theme.palette.tertary.main} 100%)`,
    },
}));

const StepIcon = (props) => {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <PersonAdd />,
        2: <School />,
        3: <Check />,
    };

    return (
        <div
            className={clsx(classes.rootStepper, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

StepIcon.propTypes = {
    active: PropTypes.any,
    completed: PropTypes.any,
};

const getSteps = () => {
    return ['Registrarse', 'Nivel Academico', 'Finalizar'];
};

const RegisterView = (props) => {
    const {
        classes,
    } = props;

    // const [accept, setAccept] = React.useState(false);
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <RegisterForm next={handleNext} />;
            case 1:
                return <ButtonChoise next={handleNext} back={handleBack} />;
            case 2:
                return <SuccessFeedback finish={handleReset} />;
            default:
                return 'Unknown step';
        }
    };

    return (
        <Container maxWidth="sm">
            <Box width="100%">
                <Stepper
                    alternativeLabel
                    activeStep={activeStep}
                    connector={<StepConnector
                        classes={{
                            alternativeLabel: classes.alternativeLabel,
                            active: classes.activeStepper,
                            completed: classes.completedStepper,
                            line: classes.line
                            }}
                        />}
                    className={classes.stepperContainer}
                    >
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel StepIconComponent={StepIcon}>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

            </Box>
            {getStepContent(activeStep)}
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