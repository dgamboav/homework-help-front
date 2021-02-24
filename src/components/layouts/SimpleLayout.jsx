import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Container,
    Box,
    Avatar,
} from '@material-ui/core';
import AppStyles from '../styles/AppStyles';
import Logo from '../layouts/assets/logo.png';


const SimpleLayout = (props) => {
    const {
        children,
        classes,
    } = props;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar color="primary">
                <Toolbar />
            </AppBar>
            <Box width="100%" display="flex" flexDirection="row" justifyContent="center">
                <Avatar src={Logo} alt="Logo" className={classes.logo} style={{ zIndex: 9999 }} />
            </Box>
            <main className={classes.content}>
                <Container maxWidth="xl" className={classes.container}>
                    {children}
                </Container>
            </main>
        </div>
    );
};

SimpleLayout.propTypes = {
    children: PropTypes.object.isRequired,
    classes: PropTypes.object,
};

export default withStyles(AppStyles)(SimpleLayout);
