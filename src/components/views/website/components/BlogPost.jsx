import React from 'react';
import PropTypes from 'prop-types';
import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Hidden,
  Button,
} from '@material-ui/core';
// import {
//   AccessTime,
// } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import LandingPageStyles from '../../../styles/LandingPageStyles';


const BlogPost = (props) => {
  const {
    classes,
    // post,
  } = props;

  return (
    <CardActionArea /* component="a" href="#" */>
      <Card className={classes.post} elevation={10}>
        <div className={classes.postDetails}>
          <CardContent>
            <Typography component="h2" variant="h5">
              Post title
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {/* {post.date} */}
              Post date
            </Typography>
            <Typography variant="subtitle1">
              {/* {post.description} */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minus provident adipisci, quibusdam itaque illum. Ea, reprehenderit. Odio, aperiam recusandae?
            </Typography>
          </CardContent>
          <CardActions>
            <Button component="a" color="primary" variant="text">Continue Reading...</Button>
          </CardActions>
        </div>
        <Hidden xsDown>
          {/* <CardMedia className={classes.postMedia} image={post.image} title={post.imageTitle} /> */}
          <CardMedia className={classes.postMedia} image="https://www.lagomera.es/wp-content/uploads/2019/10/Estudiantes.jpg" title='Students' />
        </Hidden>
      </Card>
    </CardActionArea>
  )
};

BlogPost.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(LandingPageStyles)(BlogPost);