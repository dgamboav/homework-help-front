import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Box,
  InputAdornment,
  Drawer,
  List,
  Divider,
  ListItem,
  // ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
} from '@material-ui/core';
import { Menu, Search, Notifications, FilterList, Close } from '@material-ui/icons';
import AppStyles from '../../styles/AppStyles';

const subjects = [
  { name: 'Matematica' },
  { name: 'Ingles' },
  { name: 'Literatura' },
  { name: 'Fisica' },
  { name: 'Quimica' },
  { name: 'Programacion' },
  { name: 'Calculo' },
  { name: 'Redes' },
  { name: 'Algebra' },
];

const Header = (props) => {
  const { title, classes } = props;

  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState([1]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <header>
      <AppBar color="default" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Box display="flex" flexDirection="row" justifyContent="center" width="100%">
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder="Buscar..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      aria-label="toggle password visibility"
                      style={{
                        marginRight: '.5rem',
                      }}
                      onClick={handleDrawerOpen}
                    >
                      <FilterList className={classes.iconSmall} color="primary" />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>
          </Box>
          <IconButton edge="end" color="inherit" aria-label="menu">
            <Notifications />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={handleDrawerClose}>
        <List className={classes.drawerList}>
          <ListItem>
            <ListItemText primary="Materias" />
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
          {subjects.map((subject, index) => (
            <ListItem key={index}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary={subject.name} />
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  onChange={handleToggle(subject.name)}
                  checked={checked.indexOf(subject.name) !== -1}
                  // inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </header>
  );
};

Header.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.any,
};

export default withStyles(AppStyles)(Header);
