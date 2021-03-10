import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 
import {
  withStyles,
  ListItem,
  ListItemText,
  // ListItemAvatar,
  // Avatar,
  // ListItemIcon,
  // Typography,
} from '@material-ui/core';
import AppStyles from '../../styles/AppStyles';

const MainListItems = (props) => {
  const { classes } = props;
  /* const [open, setOpen] = React.useState(false);

  const toggleOpen = () => {
    setOpen(true);
  };

  const toggleClose = () => {
    setOpen(false);
  }; */

  return (
    <>
      <ListItem
        button
        className={classes.listItem}
        component={Link}
        to="/"
      >
        <ListItemText primary="Inicio" />
      </ListItem>
      <ListItem
        button
        className={classes.listItem}
        // component={Link}
        // to="/services"
        component="a"
        href="#services"
      >
        <ListItemText primary="Servicios" />
      </ListItem>
      <ListItem
        button
        component="a"
        href="#blog"
        className={classes.listItem}
      >
        <ListItemText primary="Blog" />
      </ListItem>
      <ListItem
        button
        className={classes.listItem}
      >
        <ListItemText primary="Contacto" />
      </ListItem>
      <ListItem
        button
        className={classes.listItem}
        component={Link}
        to="/login"
      >
        <ListItemText primary="Iniciar Sesion" />
      </ListItem>
      <ListItem
        button
        className={classes.listItem}
        component={Link}
        to="/register"
      >
        <ListItemText primary="Registrarse" />
      </ListItem>
    </>
  );
};

MainListItems.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(AppStyles)(MainListItems);
