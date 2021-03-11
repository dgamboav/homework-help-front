import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    //*flexGrow: 1,*/}
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
      <Container maxWidth="xs" style={{ paddingTop: 70 }}>
        <Grid container spacing={2}>
          <Grid item xs={10}></Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              align="center"
              variant="h4"
              style={{ paddingTop: 30, paddingBottom: 20 }}
            >
              Registrate con tus datos
            </Typography>
          </Grid>
        </Grid>

        <form>
          <Grid container justify="center" spacing={2}>
            <Grid item xs={6}>
              <TextField id="name" label="Nombre" />
            </Grid>

            <Grid item xs={6}>
              <TextField id="apellido" label="Apellido" />
            </Grid>

            <Grid item xs={12}>
              <TextField id="e-mail" label="Correo" fullWidth />
            </Grid>

            <Grid item xs={12}>
              <TextField id="pais" label="País" fullWidth />
            </Grid>

            <Grid item xs={6}>
              <TextField id="name" label="Acudiente" />
            </Grid>

            <Grid item xs={6}>
              <TextField id="cel" label="Celular" />
            </Grid>

            <Grid item xs={12}>
              <TextField id="text" label="Centro Educativo" fullWidth />
            </Grid>

            <Grid item xs={6}>
              <TextField id="nivel" label="Nivel/Grado" />
            </Grid>

            <Grid item xs={6}>
              <TextField id="lenguaje" label="Idioma" />
            </Grid>

            <Grid item xs={12}>
              <TextField id="direction" label="Dirección" fullWidth style={{paddingBottom:50}} />
            </Grid>
          </Grid>

          <Grid item xs={12} style={{paddingBottom:20}}>
            <Button variant="contained" color="primary" fullWidth>
              Registrate
            </Button>
          </Grid>
        </form>
      </Container>
    </div>
  );
}
