import React, { useState } from 'react';
import { Button,  Grid, makeStyles } from '@material-ui/core';
import DatePicker from '../../common/DatePicker';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import {default as TeacherInfoComponent} from '../teacher/components/InfoComponent';

const useStyles = makeStyles((theme) => ({
    timeButton: {
        backgroundColor: theme.palette.tertary.main,
        '&:active': {
            backgroundColor: theme.palette.tertary.dark,
        },
        '&:hover': {
            backgroundColor: theme.palette.tertary.dark,
        },
    },
  }));


const LessonScheduleView = () => {
    const classes = useStyles();

    const [times] = useState([
        '10:30 AM',
        '11:30 AM',
        '1:30 PM'
    ]);


    return ( 
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TeacherInfoComponent name="Juan Pérez" subject="Algebra" />
                </Grid>

                <Grid item xs={12}>
                   <DatePicker />
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        {times.map((time, i) => {
                            return(
                                <Grid item key={i}  xs={12} >
                                    <Button variant="contained" color="primary" size="large" className={classes.timeButton} fullWidth>
                                        <AccessAlarmIcon />
                                        {time}
                                    </Button>
                                </Grid>
                            )                                 
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default LessonScheduleView;