import React, { useState } from 'react';
import { Avatar, Box, Button, Chip, Grid, InputAdornment, List, ListItem, ListItemAvatar, ListItemText, makeStyles, TextField, Typography } from '@material-ui/core';
import InfoComonent from './components/InfoComponent';
// import { Link as LinkRouter } from 'react-router-dom';
import { AlternateEmail, LocationCity, PhoneAndroid } from '@material-ui/icons';
import DatePicker from '../../common/DatePicker';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {useForm} from '../../../hooks/useForm';


const useStyles = makeStyles(() => ({
    chip: {
        margin: '2px'
    },
    formControl: {
        // margin: theme.spacing(1),
        width: "100%"
      },
  }));

const TeacherRegisterView = () => {
    const classes = useStyles();

    const [ formValues, handleInputChange ] = useForm({
        email: 'juanperez@gmail.com',
        password: '1234'
    });

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
    });

    const [personName, setPersonName] = React.useState([]);
    

    const handleChange = (event) => {
        setPersonName(event.target.value);
    };

    const handleChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
        if (options[i].selected) {
            value.push(options[i].value);
        }
        }
        setPersonName(value);
    };

    const languages = [
        'Español',
        'Italiano',
        'Ingles',
        'Frances'
      ];


    return ( 
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <InfoComonent  />
                </Grid>

                <Grid item xs={12}>
                {/* <form noValidate autoComplete="off" style={ { padding: '1rem' , width: '100%' } }> */}

                    <Grid container spacing={2}>

                        <Grid item xs={12} md={6}>
                            <TextField 
                                fullWidth 
                                label="Nombres" 
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField 
                                fullWidth 
                                label="Apellidos" 
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField 
                                multiline 
                                rows={1} 
                                rowsMax={2} 
                                fullWidth 
                                label="Dirección" 
                                InputProps={
                                    {
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
                            <DatePicker></DatePicker>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Teléfono"
                                fullWidth
                                InputProps={
                                    {
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
                                InputProps={
                                    {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AlternateEmail />
                                            </InputAdornment>
                                        ),
                                    }
                                }
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-mutiple-chip-label">Idiomas</InputLabel>
                                <Select
                                    labelId="demo-mutiple-chip-label"
                                    id="demo-mutiple-chip"
                                    multiple
                                    fullWidth
                                    value={personName}
                                    onChange={handleChange}
                                    input={<Input id="select-multiple-chip" />}
                                    renderValue={(selected) => (
                                        <div className={classes.chips}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value} className={classes.chip} />
                                        ))}
                                        </div>
                                    )}
                                >
                                {languages.map((lang) => (
                                    <MenuItem key={lang} value={lang}>
                                    {lang}
                                    </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="subjectSelect">Materias</InputLabel>
                                <Select
                                    labelId="subjectSelect"
                                    id="demo-mutiple-chip"
                                    multiple
                                    fullWidth
                                    value={personName}
                                    onChange={handleChange}
                                    input={<Input id="select-multiple-chip" />}
                                    renderValue={(selected) => (
                                        <div className={classes.chips}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value} className={classes.chip} />
                                        ))}
                                        </div>
                                    )}
                                >
                                {languages.map((lang) => (
                                    <MenuItem key={lang} value={lang}>
                                    {lang}
                                    </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                            >   
                                Registrar
                            </Button>
                        </Grid>
                    </Grid>
                {/* </form> */}
                </Grid>
            </Grid>
        </>
     );
}
 
export default TeacherRegisterView;