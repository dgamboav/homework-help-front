import React, { useState } from 'react';
import { Avatar, Box, Button, Grid, Icon, makeStyles, Typography } from '@material-ui/core';
import EventNoteIcon from '@material-ui/icons/EventNote';
import { Rating } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(13),
      height: theme.spacing(13),
    },
  }));

const ProfileView = () => {
    const classes = useStyles();

    const [name] = useState("Jesus Arrieche")
    const [subject] = useState("Algebra")
    const [rating] = useState(2)
    const [students] = useState(125)

    return ( 
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
                        <Avatar alt={name} src="/static/images/avatar/1.jpg" className={classes.large} />
                    </Box>
                    <Typography align={'center'} className variant="h5">{name}</Typography>
                    <Typography align={'center'} className variant="subtitle1">{subject}</Typography>
                    <Box display="flex" justifyContent="center">
                        <Rating value={rating} readOnly size="small"></Rating>
                    </Box>
                    <Typography align={'center'} className variant="subtitle2">({students} estudiantes)</Typography>

                    <Box m={2}>
                        <Typography variant="body2" align="justify">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt neque consequuntur, non iure, omnis pariatur enim excepturi adipisci voluptate asperiores natus sequi eos dolorem veniam! Dolore distinctio mollitia veritatis dolorum?
                        </Typography>
                    </Box>

                    


                </Grid>

                <Grid container item display="flex" xs={12} justify="center" >
                    <Box m={2}>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<EventNoteIcon />}
                            
                        >
                            Agendar
                        </Button>
                    </Box>
                </Grid>

            </Grid>
        </div>
     );
}
 
export default ProfileView;