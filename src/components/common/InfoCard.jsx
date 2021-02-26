import React from 'react';
import {
  Typography,
  // CardHeader,
  Card,
  CardContent,
  Avatar,
  Box,
  useMediaQuery,
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

  const screenSize = useMediaQuery(theme => theme.breakpoints.down('sm'));

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
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
              {title && (
                <Typography variant="h5">
                  {title}
                </Typography>
              )}
              {subtitle && (
                <Typography variant="body2" color="primary">
                  {subtitle}
                </Typography>
              )}
            </Box>
            {content && (
              <Box marginTop=".5rem">
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
