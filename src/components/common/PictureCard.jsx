import React from 'react';
import {
  Typography,
  CardMedia,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Box,
  useMediaQuery,
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

  const screenSize = useMediaQuery(theme => theme.breakpoints.down('sm'));

  // const [expanded, setExpanded] = React.useState(false);

  // const avatarSrc = 

  // const renderAvatar = <Avatar aria-label="icon" className={classes.avatar} src={url} />
    {/* {isIcon && (icon)} */}
  // </Avatar>;

  const renderTitle = <Typography variant="h5">
    {title}
  </Typography>;

  const renderSubtitle = <Typography variant="subtitle1" color="textSecondary" noWrap>
    {subtitle}
  </Typography>;

  const renderPicture = <CardMedia
    className={classes.cover}
    image={url}
    title={title}
  />

  const renderHeaderActions = <Box display="flex" flexDirection="column" justifyContent="center">
    <Rating name="size-small" value={ratingValue} size={screenSize ? 'small' : 'medium'} precision={0.5} max={screenSize ? 1 :5} />
    <Typography variant="caption" align="center">{ratingValue}</Typography>
  </Box>;

  return(
    <Card className={classes.cardPicture}>
      {(align === 'right') && renderPicture}
      <Box display="flex" flexDirection="column" width="100%">
        <CardHeader 
          title={title ? renderTitle : null}
          subheader={subtitle ? renderSubtitle : null}
          action={headerAction ? renderHeaderActions : null}
        />
        {content && (
          <CardContent>
            {content}
          </CardContent>
        )}
        {actions && (
          <CardActions>
            {actions}
          </CardActions>
        )}
      </Box>
      {(align === 'left') && renderPicture}
    </Card>
  )
};

export default withStyles(AppStyles)(StatsCard);
