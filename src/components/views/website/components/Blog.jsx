import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
// import {
//   AccessTime,
// } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import Post from './BlogPost';
import LandingPageStyles from '../../../styles/LandingPageStyles';


const Blog = (props) => {
  const { classes } = props;

  return (
    <section className={classes.blogSection}>
      <div id="blog" />
      <Box width="100%" height="100%" display="flex" flexDirection="row" justifyContent="center" alignItems="center">
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center">Blog</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" align="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi excepturi odio reprehenderit qui ipsa eligendi? Ducimus itaque voluptate numquam neque, expedita praesentium recusandae qui distinctio ipsam dolores. Voluptatem, magnam?</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Post
                // title={}
                // date={}
                // description={}
                // image={}
                // imageTitle={}
                // url={}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Post
                // title={}
                // date={}
                // description={}
                // image={}
                // imageTitle={}
                // url={}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Post
                // title={}
                // date={}
                // description={}
                // image={}
                // imageTitle={}
                // url={}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  )
};

Blog.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(LandingPageStyles)(Blog);