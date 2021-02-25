import React, { useState } from 'react';
import { Box, Button,  Grid, makeStyles } from '@material-ui/core';
import DatePicker from '../../common/DatePicker';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import {default as TeacherInfoComponent} from '../teacher/components/InfoComponent';

const useStyles = makeStyles(() => ({
    timeButton: {
        width: "80%",
        background: "#80D872"
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
            <Grid container>
                <Grid item xs={12}>
                    <TeacherInfoComponent name="Juan Pérez" subject="Algebra" />
                </Grid>

                <Grid container item xs={12} display="flex" justify="center">
                   <DatePicker />
                </Grid>

                <Grid container item xs={12}>
                    {times.map((time, i) => {
                        return(
                            <Grid key={i}  xs={12} >
                                <Box m={1} display="flex" justifyContent="center">
                                    <Button variant="contained" color="primary" size="large" className={classes.timeButton}>
                                        <AccessAlarmIcon />
                                        {time}
                                    </Button>
                                </Box>
                            </Grid>
                        )                                 
                    })}


                </Grid>
            </Grid>
        </div>
     );
}
 
export default LessonScheduleView;