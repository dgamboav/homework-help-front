import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  // Container,
  // Link,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppStyles from '../../styles/AppStyles';


const Header = (props) => {
  const { title, classes } = props;

  return (
    <header>
      <AppBar color="primary">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <IconButton edge="end" color="inherit" aria-label="menu">
            <NotificationsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default withStyles(AppStyles)(Header);
