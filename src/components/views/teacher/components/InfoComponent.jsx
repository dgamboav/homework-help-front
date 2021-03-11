import React from 'react';
import { Avatar, Box, Typography, makeStyles } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(17),
      height: theme.spacing(17),
    },
  }));

const InfoComonent = (props) => {
    const classes = useStyles();

    const {name, subject, rating, students} = props

    return ( 
        <>
            <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
                <Avatar alt={name}  className={classes.large} />
            </Box>
            {name && (
              <Typography align={'center'} className variant="h5">{name}</Typography>
            )}

            
            {subject && (
              <Typography align={'center'} className variant="subtitle1">{subject}</Typography>
            )}
            {rating && (
                <Box display="flex" justifyContent="center">
                    <Rating value={rating} readOnly size="small"></Rating>
                </Box>
            )} 

            {students && (
                <Typography align={'center'} className variant="subtitle2">({students} estudiantes)</Typography>
            )}
        </>
     );
}

InfoComonent.propTypes = {
    name: PropTypes.string.isRequired,
    subject: PropTypes.string,
    rating: PropTypes.number,
    students: PropTypes.number.isRequired
}
 
export default InfoComonent;