import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';
import {
  Star,
} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import LandingPageStyles from '../../../styles/LandingPageStyles';

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

const Services = (props) => {
  const { classes } = props;

  return (
    <section className={classes.servicesSection}>
      <Box width="100%" height="100%" display="flex" flexDirection="row" justifyContent="center" alignItems="center">
        <Container maxWidth="lg">
          <Box marginY="2rem">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h4" align="center">Services</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" align="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nisi excepturi odio reprehenderit qui ipsa eligendi? Ducimus itaque voluptate numquam neque, expedita praesentium recusandae qui distinctio ipsam dolores. Voluptatem, magnam?</Typography>
              </Grid>
            </Grid>
          </Box>
          <Grid container spacing={3} alignItems="flex-end">
            {tiers.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                <Fade bottom>
                  <Card elevation={10}>
                    <CardHeader
                      title={tier.title}
                      subheader={tier.subheader}
                      titleTypographyProps={{ align: 'center' }}
                      subheaderTypographyProps={{ align: 'center' }}
                      action={tier.title === 'Pro' ? <Star /> : null}
                      className={classes.cardHeader}
                    />
                    <CardContent>
                      <div className={classes.cardPricing}>
                        <Typography component="h2" variant="h3" color="textPrimary">
                          ${tier.price}
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                          /mo
                      </Typography>
                      </div>
                      <ul>
                        {tier.description.map((line) => (
                          <Typography component="li" variant="subtitle1" align="center" key={line}>
                            {line}
                          </Typography>
                        ))}
                      </ul>
                    </CardContent>
                    <CardActions>
                      <Button fullWidth variant={tier.buttonVariant} color="primary">
                        {tier.buttonText}
                      </Button>
                    </CardActions>
                  </Card>
                  
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </section>
  )
};

Services.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(LandingPageStyles)(Services);