import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  toolbar: {
    minHeight: 75,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
}));



export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* Linea de header  */}
      <AppBar position="static">
        <Toolbar className={classes.toolbar}></Toolbar>
      </AppBar>

      <CssBaseline />
      <Container maxWidth="xs">
        <Grid container spacing={2}>
          <Grid item xs={7}></Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography align="center" variant="h4" style={{ paddingTop: 50, paddingBottom: 50 }}>
              ¿Cual es tu Nivel de estudio?
            </Typography>
          </Grid>
          
              <Button variant="contained" color="primary" fullWidth>
                Basico
              </Button>
              <Button variant="contained" color="primary" fullWidth>
                Bachillerato
              </Button>

              <Button variant="contained" color="primary" fullWidth>
                Tecnico Superior
              </Button>

              <Button variant="contained" color="primary" fullWidth>
                Universitario
              </Button>

              <Button variant="contained" color="primary" fullWidth>
                Maestria
              </Button>
             
           
        </Grid>
      </Container>
    </div>
  );
}
{/* <Grid container spacing={2}>
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
            </Grid> */}
{/* {activeStep === steps.length ? (
                <div>
                    <Typography className={classes.instructions}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Button onClick={handleReset} className={classes.button}>
                        Reset
                    </Button>
                </div>
            ) : (
                <>
                </>
            )} */}

