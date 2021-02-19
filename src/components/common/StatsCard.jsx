import React from 'react';
import {
  Typography,
  CardHeader,
  Card,
  CardContent,
  CardActions,
  Avatar,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AppStyles from '../styles/AppStyles';

const StatsCard = (props) => {
  const {
    classes,
    icon,
    title,
    subtitle,
    content,
    actions,
  } = props;

  return(
    <Card className={classes.card}>
      <CardHeader
        avatar={(
          <Avatar aria-label="icon" className={classes.avatar}>
            {icon}
          </Avatar>
        )}
        title={(
          <Typography variant="h4" align="right">
            {title}
          </Typography>
        )}
        subheader={(
          <Typography variant="subtitle1" align="right">
            {subtitle}
          </Typography>
        )}
      />
      {content && (
        <CardContent className={classes.cardContent}>
          {content}
        </CardContent>
      )}
      {actions && (
        <CardActions>
          {actions}
        </CardActions>
      )}
    </Card>
  )
};

export default withStyles(AppStyles)(StatsCard);
