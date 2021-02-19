import React from 'react';
import {
  Typography,
  // CardHeader,
  Card,
  CardContent,
  Avatar,
  Box,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AppStyles from '../styles/AppStyles';

const InfoCard = (props) => {
  const {
    classes,
    title,
    subtitle,
    content,
    icon,
    iconPosition,
   } = props;


  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Box className={classes.justifyFlex}>
          {(icon && iconPosition === 'left') && (
            <Avatar className={classes.large}>{icon}</Avatar>
          )}
          <Box
            width="100%"
            marginLeft={(iconPosition === 'left') ? '1rem' : 0}
            marginRight={(iconPosition === 'right') ? '1rem' : 0}  
          >
            <Typography variant="h4" noWrap>
              {title}
            </Typography>
            {subtitle && (
              <Typography variant="body2" noWrap>
                {subtitle}
              </Typography>
            )}
            {content && (
              <Box>
                {content}
              </Box>
            )}
          </Box>
          {(icon && iconPosition === 'right') && (
            <Avatar className={classes.large}>{icon}</Avatar>
          )}
        </Box>
      </CardContent>
    </Card>
  )
};

export default withStyles(AppStyles)(InfoCard);
