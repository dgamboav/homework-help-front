import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import {
  Grid,
  Button,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
// import {
//   PhotoCamera,
//   AccessAlarm,
//   Functions,
//   SwapVerticalCircle,
//   Exposure,

// } from '@material-ui/icons';
import AppStyles from '../../styles/AppStyles';
import PictureCard from '../../common/PictureCard';

const teachers = [
  {
    subject: 'Inglés',
    name: 'Jhon Doe',
    rating: 4.5,
    url: 'https://lh3.googleusercontent.com/proxy/qnrUz_aI6QTNTa_N1cWSzgEaIKYCd_VABrAXTQ57Rasmu4hH5EEsqSikoQ82x4b2m9H13L9KJbEBBH70VvVk',
    isOpen: false,
  },
  {
    subject: 'Matemática',
    name: 'Annie Frank',
    rating: 3,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-OAuML_GxY5p-jo-uPSPekFRhs-zoxO3v_A&usqp=CAU',
    isOpen: false,
  },
  {
    subject: 'Cálculo',
    name: 'Bruno Díaz',
    rating: 5,
    url: 'http://www.clickgest.com/sites/default/files/2016-03/team4-large.jpg',
    isOpen: false,
  },
  {
    subject: 'Química',
    name: 'Eli Pietro Jr.',
    rating: 4.8,
    url: 'https://meuprimeirosite.drac.co/verum/img/about.jpg',
    isOpen: false,
  },
];

const TeachersListView = (props) => {
  const { classes } = props;

  const [teacherList, setTeacherList] = useState(teachers)
  // const [expanded, setExpanded] = useState([]);

  // const openInfo = (teacher) => {
  //   teacher.isOpen = !teacher.isOpen;
  //   console.log(teacher)
  // };

  useEffect(() => {
    setTeacherList(teacherList)
  }, [teacherList]);

  console.log(teacherList);

  return (
    <Grid container spacing={2}>
      {teacherList.map((teacher, index) => (
        <Grid item xs={12} key={index}>
          <PictureCard 
            title={teacher.subject}
            subtitle={teacher.name}
            ratingValue={teacher.rating}
            align="right"
            headerAction
            url={teacher.url}
            actions={(
              <>
                <Button component={RouterLink} to="/teacher/lesson/schedule" color="primary" variant="outlined" className={classes.noWrapText}>Ver Disponibilidad</Button>
                <Button component={RouterLink} to="/teacher/profile" color="secondary" variant="outlined">Perfil</Button>
              </>
            )}
          />
        </Grid>
      ))}
      <Grid item xs={12}>
      </Grid>
    </Grid>
  )
};

TeachersListView.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.object,
};

export default withStyles(AppStyles)(TeachersListView);