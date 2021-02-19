import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Container,
} from '@material-ui/core';
import AppStyles from '../../styles/AppStyles';


const Header = (props) => {
  const { classes } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">© Copyright - www.ideadecoders.com - {new Date().getFullYear()}</Typography>
      </Container>
    </footer>
  );
};

export default withStyles(AppStyles)(Header);
