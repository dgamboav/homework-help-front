import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {Avatar, Box, makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { green, purple } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField'










const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 75,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    display: 'flex',
    flexGrow: 5,
    alignSelf: 'center',
    paddingTop: 30,
    paddingLeft: 50,
    fontWeight: 'bolder',
  },
  /*logo Principal*/
  logo:{
    minHeight: 300,
    alignItems: 'flex-center',
    paddingTop: 1,
    marginLeft: 500,
    paddingBottom: 52,
  },

  /* Botones */
  boton1: {
    marginRight:10,
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

  /* Boton de inicio de sesion */
  iniciosesion: {
    marginLeft: 110,
  }
  
  

}));

export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

        {/* Linea de header  */}
      <AppBar position="static"> 
        <Toolbar className={classes.toolbar}>
          
          
          
          
        </Toolbar>
      </AppBar>

       {/*<img className={classes.logo} src={Logo}/>*/}

      <Typography className={classes.title} variant="h5" noWrap>
            Registrate con tu e-mail
          </Typography>

         
        <br/> <br/>
      <Button 
      color="primary"
      className={classes.boton1}
      variant='contained'
      >
        Soy Profesor
      </Button>

        

      <Button 
      color="primary"
      variant='contained'
      className= "">

        Soy Estudiante
      </Button>

     


    </div>

    

    
    
  );
}