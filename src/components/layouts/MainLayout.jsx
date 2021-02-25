import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  Container,
  // Link,
} from '@material-ui/core';
// import { Link as RouterLink } from 'react-router-dom';
import AppStyles from '../styles/AppStyles';
import Header from './components/Header';
import Footer from './components/Footer';

const MainLayout = (props) => {
  const {
    children,
    classes,
    title,
  } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header title={title} />
      <main className={classes.content}>
        <Container maxWidth="xl">
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  )
};

export default withStyles(AppStyles)(MainLayout);