import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
} from '@material-ui/core';
// import {
//   AccessTime,
// } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
// import Post from './BlogPost';
import LandingPageStyles from '../../../styles/LandingPageStyles';


const Contact = (props) => {
  const { classes } = props;

  return (
    <section className={classes.contactSection}>
      <div id="blog" />
      <Box width="100%" height="100%" display="flex" flexDirection="row" justifyContent="center" alignItems="center">
        <Container maxWidth="lg">
          <Grid container justify="center" spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center">Contact</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" align="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi excepturi odio reprehenderit qui ipsa eligendi? Ducimus itaque voluptate numquam neque, expedita praesentium recusandae qui distinctio ipsam dolores. Voluptatem, magnam?</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <Card>
                <CardHeader
                  title={<Typography variant="h5">Contact Us</Typography>}
                />
                <CardContent>
                  <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextField
                            label="Fullname"
                            name="fullname"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label="E-mail"
                            name="email"
                            type="email"
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                        <TextField
                            label="Message"
                            name="message"
                            multiline
                            rows={2}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button variant="contained" color="primary" size="small" fullWidth>Submit</Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  )
};

Contact.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(LandingPageStyles)(Contact);