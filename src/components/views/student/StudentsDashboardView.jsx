import React from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  Grid,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AppStyles from '../../styles/AppStyles';


const StudentsDashboardView = (props) => {
  const { classes } = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography component="span" className={classes.justifyFlex} noWrap>
              <div>
                <Typography component="div" variant="h4" noWrap>
                  Title
                </Typography>
                <Typography component="div" variant="body1">
                  Subtitle
                </Typography>
                {/* {props.subtitle && (
                )} */}
              </div>
              <Avatar className={classes.large}>A</Avatar>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
};

export default withStyles(AppStyles)(StudentsDashboardView);