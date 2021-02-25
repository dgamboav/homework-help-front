import React, { useState } from 'react';
import { Avatar, Box, Chip, Grid, InputAdornment, List, ListItem, ListItemAvatar, ListItemText, makeStyles, TextField, Typography } from '@material-ui/core';
import InfoComonent from './components/InfoComponent';
// import { Link as LinkRouter } from 'react-router-dom';
import { AlternateEmail, LocationCity, PhoneAndroid } from '@material-ui/icons';


const useStyles = makeStyles((/* theme */) => ({
    chip: {
        margin: '2px'
    },
  }));

const ProfileView = () => {
    const classes = useStyles();

    const [info] = useState({
        name: "Juan Pérez",
        subjects: ["Ingles", "Algebra", "Ciencias", "Francés", "Música", "Arte"],
        rating: 3,
        students: 125,
        academicTraining: [
            {
             tittle: "Licenciatura en Matemática",
             institution: "Universidad Autonoma de Panama - UAP",
             expeditionDate: 2005   
            }
        ]
    })

    const listSubjects = info.subjects.map((val, i) =>
        <Box key={i} display="inline" className={classes.chip}>
            <Chip
                label={val}
                variant="outlined" 
                color="primary" 
                avatar={<Avatar>{val[0]}</Avatar>} 
            />
        </Box>
    );

    return ( 
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <InfoComonent name={info.name} rating={info.rating} students={info.students} />
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="subtitle1" align="center">Materias Impartidas</Typography>
                    <Box display="flex" justifyContent="center" flexWrap="wrap">
                        {listSubjects}
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="subtitle1" align="center">Formación Académica</Typography>
                    <List>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt="Test"></Avatar>
                                    </ListItemAvatar>

                                    <ListItemText 
                                        primary={info.academicTraining[0].tittle}
                                        secondary={
                                            <>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    color="textPrimary"
                                                >
                                                    {info.academicTraining[0].institution}
                                                </Typography>
                                                -   {info.academicTraining[0].expeditionDate}
                                            </>
                                        }
                                    />
                                </ListItem>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt="Test"></Avatar>
                                    </ListItemAvatar>

                                    <ListItemText 
                                        primary={info.academicTraining[0].tittle}
                                        secondary={
                                            <>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    color="textPrimary"
                                                >
                                                    {info.academicTraining[0].institution}
                                                </Typography>
                                                -   {info.academicTraining[0].expeditionDate}
                                            </>
                                        }
                                    />
                                </ListItem>
                            </Grid>
                        </Grid>
                    </List>
                </Grid>
                <Grid item xs={12}>
                {/* <form noValidate autoComplete="off" style={ { padding: '1rem' , width: '100%' } }> */}

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField 
                                multiline 
                                rows={1} 
                                rowsMax={2} 
                                fullWidth 
                                label="Dirección" 
                                defaultValue="Calle 1, edificio Santa Lucia, Dep 37-06 " 
                                InputProps={
                                    {
                                        readOnly:true,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LocationCity />
                                            </InputAdornment>
                                        ),
                                    }
                                }
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Teléfono"
                                fullWidth
                                defaultValue="+57 (000) 001 0011"
                                InputProps={
                                    {
                                        readOnly:true,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PhoneAndroid />
                                            </InputAdornment>
                                        ),
                                    }
                                }
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Correo"
                                fullWidth
                                defaultValue="juanperez@gmail.com"
                                InputProps={
                                    {
                                        readOnly:true,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AlternateEmail />
                                            </InputAdornment>
                                        ),
                                    }
                                }
                            />
                        </Grid>
                    </Grid>
                {/* </form> */}
                </Grid>
            </Grid>
        </>
     );
}
 
export default ProfileView;