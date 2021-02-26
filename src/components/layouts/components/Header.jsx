import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Box,
  InputAdornment,
} from '@material-ui/core';
import { Menu, Search, Notifications, FilterList } from '@material-ui/icons';
import AppStyles from '../../styles/AppStyles';


const Header = (props) => {
  const { title, classes } = props;

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
                      // onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                    >
                      <FilterList className={classes.iconSmall} color="primary" />
                      {/* {values.showPassword ? <Visibility /> : <VisibilityOff />} */}
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
    </header>
  );
};

export default withStyles(AppStyles)(Header);
