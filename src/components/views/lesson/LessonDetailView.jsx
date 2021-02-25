import React, { useState } from 'react';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import EventNoteIcon from '@material-ui/icons/EventNote';
import {default as TeacherInfoComponent} from '../teacher/components/InfoComponent';
import { Link as LinkRouter } from 'react-router-dom';

const LessonDetailView = () => {
    const [name] = useState("Juan Pérez")
    const [subject] = useState("Algebra")
    const [rating] = useState(3)
    const [students] = useState(125)

    return ( 
        <>
            <Grid container>
                <Grid item xs={12}>
                    <TeacherInfoComponent name={name} subject={subject} rating={rating} students={students} />
                </Grid>

                <Box m={2}>
                    <Typography variant="body2" align="justify">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt neque consequuntur, non iure, omnis pariatur enim excepturi adipisci voluptate asperiores natus sequi eos dolorem veniam! Dolore distinctio mollitia veritatis dolorum?
                    </Typography>
                </Box>

                <Grid container item display="flex" xs={12} justify="center" >
                    <Box m={2}>
                        
                        <Button
                            component={LinkRouter}
                            to="/teacher/lesson/schedule"
                            variant="contained"
                            color="primary"
                            startIcon={<EventNoteIcon />}
                        >
                            Agendar
                        </Button>
                        
                    </Box>
                </Grid>

            </Grid>
        </>
     );
}
 
export default LessonDetailView;