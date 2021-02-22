import React, { useState } from 'react';
import { Box, Button,  Grid } from '@material-ui/core';
import DatePicker from '../../common/DatePicker';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import {default as TeacherInfoComponent} from '../teacher/components/InfoComponent';

const LessonScheduleView = () => {

    const [times] = useState([
        '10:30 AM',
        '11:30 AM',
        '1:30 PM'
    ]);

    const timesList = times.map((time, i) => {
        return <Box component={Button} key={i}>
            
                <AccessAlarmIcon />
                {time}
            
        </Box>
    })

    return ( 
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <TeacherInfoComponent name="Juan Perez" subject="Algebra" />
                </Grid>

                <Grid container item xs={12} display="flex" justify="center">
                   <DatePicker />
                </Grid>

                <Grid container item xs={12} justify="center">
                    {timesList}
                </Grid>
            </Grid>
        </div>
     );
}
 
export default LessonScheduleView;