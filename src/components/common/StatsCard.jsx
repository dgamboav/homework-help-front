import React from 'react';
import {
  Typography,
  CardHeader,
  Card,
  CardContent,
  CardActions,
  Avatar,
  Box,
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
    isRating,
    isAvatar,
    isIcon,
    url,
    ratingValue,
    extraContent,
  } = props;

  const [expanded, setExpanded] = React.useState(false);

  // const avatarSrc = 

  const renderAvatar = <Avatar aria-label="icon" className={classes.avatar} src={url} />
    {/* {isIcon && (icon)} */}
  // </Avatar>;

  const renderTitle = <Typography variant="h5" align={align}>
    {title}
  </Typography>;

  const renderSubtitle = <Typography variant="subtitle1" align={align}>
    {subtitle}
  </Typography>;

  const renderHeaderActions = <Box display="flex" flexDirection="column" justifyContent="center">
    <Rating name="size-small" value={ratingValue} size="medium" precision={0.5} max={5} />
    <Typography variant="caption" align="center">{ratingValue}</Typography>
  </Box>;

  return(
    <Card className={classes.card}>
      <CardHeader
        avatar={isAvatar || isIcon ? renderAvatar : null}
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
        <CardActions className={classes.cardActions}>
          {actions}
        </CardActions>
      )}
      {extraContent && (
        <>{extraContent}</>
      )}
    </Card>
  )
};

export default withStyles(AppStyles)(StatsCard);
