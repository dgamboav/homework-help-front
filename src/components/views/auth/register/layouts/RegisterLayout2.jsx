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
          
              <Button variant="contained" color="primary" fullWidth  >
                <Typography variant="body1" color="initial" style={{textTransform:'none'}} >
                Basico
                </Typography>
                
              </Button>
              <Button variant="contained" color="primary" fullWidth style={{marginTop: 12}} >
              <Typography variant="body1" color="initial" style={{textTransform:'none'}} >
                Bachillerato
                </Typography>
                
              </Button>

              <Button variant="contained" color="primary" fullWidth style={{marginTop: 12}} >
              <Typography variant="body1" color="initial" style={{textTransform:'none'}} >
                Tecnico Superior
                </Typography>
                
              </Button>

              <Button variant="contained" color="primary" fullWidth style={{marginTop: 15}} >
              <Typography variant="body1" color="initial" style={{textTransform:'none'}} >
                Universitario
                </Typography>
                
              </Button>

              <Button variant="contained" color="primary" fullWidth style={{marginTop: 15}} >
              <Typography variant="body1" color="initial" style={{textTransform:'none'}} >
                Maestria
                </Typography>
                
              </Button>
             
           
        </Grid>
      </Container>
    </div>
  );
}
