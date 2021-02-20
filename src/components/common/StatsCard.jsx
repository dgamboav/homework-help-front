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
import { Rating } from '@material-ui/lab';
import AppStyles from '../styles/AppStyles';

const StatsCard = (props) => {
  const {
    classes,
    icon,
    title,
    subtitle,
    content,
    actions,
    align,
    headerAction,
  } = props;

  const renderAvatar = <Avatar aria-label="icon" className={classes.avatar}>
    {icon}
  </Avatar>;

  const renderTitle = <Typography variant="h5" align={align}>
    {title}
  </Typography>;

  const renderSubtitle = <Typography variant="subtitle1" align={align}>
    {subtitle}
  </Typography>;

  const renderHeaderActions = <Rating name="size-small" defaultValue={2} size="medium" max={1} />;

  return(
    <Card className={classes.card}>
      <CardHeader
        avatar={icon ? renderAvatar : null}
        title={title ? renderTitle : null}
        subheader={subtitle ? renderSubtitle : null}
        action={headerAction ? renderHeaderActions : null}
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
