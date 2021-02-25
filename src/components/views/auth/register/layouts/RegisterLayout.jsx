import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
  root: {
    //*flexGrow: 1,*/}
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 75,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    display: "flex",
    flexGrow: 5,
    alignSelf: "center",
    paddingTop: 30,
    paddingLeft: 50,
    fontWeight: "bolder",
  },
  /*logo Principal*/
  logo: {
    minHeight: 300,
    alignItems: "flex-center",
    paddingTop: 1,
    marginLeft: 500,
    paddingBottom: 52,
  },

  /* Botones */
  boton1: {
    marginRight: 10,
    marginLeft: 20,
  },
  /*terminos y condiciones */
  terminos: {
    marginLeft: 50,
  },

  /*ya tienes cuenta */
  cuenta: {
    marginLeft: 100,
  },
}));

export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* Linea de header  */}
      <AppBar>
        <Toolbar className={classes.toolbar}></Toolbar>
      </AppBar>

	  

      <CssBaseline />
      <Container maxWidth="xs" style={{paddingTop:70}}>
	  <Box display="flex" flexDirection="row" justifyContebt="center">
        <img src="../img/" alt="Logo"/>
      </Box>
        <Grid container spacing={8}>
          <Grid item xs={10}></Grid>
        </Grid>
        <Grid container spacing={12}>
          <Grid item xs={10}></Grid>
        </Grid>
        <Grid container spacing={8}>
          <Grid item xs={10}>
            <Typography align="center" variant="h5" noWrap>
              Registrate con tu e-mail
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={10}>
          <Grid item xs={2}></Grid>
        </Grid>
        <Grid container spacing={10}>
          <Grid item xs={12}></Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button color="primary" fullWidth variant="contained">
              <Typography variant="body1" color="initial" noWrap style={{textTransform:'none'}}>
                Soy Profesor
              </Typography>
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button color="primary" variant="contained" fullWidth>
              <Typography variant="body1" color="initial" noWrap style={{textTransform:'none'}}>
                Soy Estudiante
              </Typography>
            </Button>
          </Grid>

          <Grid container spacing={12}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <form>
                <Grid container spacing={10}>
                  <Grid item xs={12}></Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="full_name"
                      label="Nombre Completo"
                      fullWidth
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField id="email" label="e-mail" fullWidth />
                  </Grid>
                </Grid>

                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      id="password"
                      label="Contraseña"
                      type="password"
                      autoComplete="current-password"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={6}>
          <Grid item xs={12}></Grid>
        </Grid>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <Typography
              className={classes.terminos}
              variant="body1"
              align="right"
            >
              Acepto los <u>terminos y condiciones</u>
            </Typography>
          </Grid>
        </Grid>

        <br />
        <Button color="primary" variant="contained" fullWidth>
          R
        </Button>

        <Grid container spacing={8}>
          <Grid item xs={8}></Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="body1" align="center">
              ¿Ya tienes Cuenta?
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} justify="center">
          <Grid item xs={5}>
            <Button>Inicia Sesión</Button>
          </Grid>
        </Grid>
      </Container>

      {/*<img className={classes.logo} src={Logo}/>*/}
    </div>
  );
}
