import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import {
  withStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  // ListItemIcon,
  // Link,
  ListItemText,
  ListItemSecondaryAction,
  useMediaQuery,
  Button,
} from '@material-ui/core';
import { Menu, Close } from '@material-ui/icons';
import MainListItem from './MainListItem';
import AppStyles from '../../styles/AppStyles';


const LandingHeader = (props) => {
  const { classes } = props;

  const [open, setOpen] = useState(false);
  const screenSize = useMediaQuery(theme => theme.breakpoints.down('sm'));


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <header>
      <AppBar>
        <Toolbar>
          <Box width="100%" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" align={screenSize ? 'left' : 'center'}>HomeworkHelp</Typography>
            {!screenSize && (
              <>
                <Box>
                  <Button component="a" href="#back-to-top-anchor" className={classes.buttonLink}>Inicio</Button>
                  <Button component="a" href="#services" className={classes.buttonLink}>Servicios</Button>
                  <Button component="a" href="#blog" className={classes.buttonLink}>Blog</Button>
                  <Button component="a" href="#contact" className={classes.buttonLink}>Contacto</Button>
                </Box>
                <Box>
                  <Button component={RouterLink} to="/login" className={classes.buttonLink}>Ingresar</Button>
                  <Button component={RouterLink} to="/register" className={classes.buttonLink}>Registrarse</Button>
                </Box>
              </>
            )}
            {screenSize && (
              <>
                <IconButton onClick={handleDrawerOpen}>
                  <Menu className={classes.buttonLink} />
                </IconButton> 
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={handleDrawerClose}>
        <List className={classes.drawerList} component="nav">
          <ListItem>
            <ListItemText primary="Menu" />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                onClick={handleDrawerClose}
              >
                <Close />
              </IconButton>    
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <MainListItem />
        </List>
        <Divider />
      </Drawer>
    </header>
  );
};

LandingHeader.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(AppStyles)(LandingHeader);
