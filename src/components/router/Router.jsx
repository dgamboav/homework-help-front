import React from 'react';
import { Switch } from 'react-router-dom';
import AppRoute from './AppRoute';

// Layouts
import MainLayout from '../layouts/MainLayout';
import SimpleLayout from '../layouts/SimpleLayout';

// Pages
// import HomeView from '../views/home/HomeView';
import StudentsDashboardView from '../views/student/StudentsDashboardView';
import TeachersDashboardView from '../views/teacher/TeachersDashboardView';
import TeacherRegisterView from '../views/teacher/TeacherRegisterView';
import TeachersListView from '../views/teacher/TeachersListView';
import RegisterView from '../views/auth/register/RegisterView';
import LoginView from '../views/auth/login/LoginView';
import TeacherProfileView from '../views/teacher/ProfileView';
import LessonScheduleView from '../views/lesson/LessonScheduleView';
import LessonDetailView from '../views/lesson/LessonDetailView';
import LessonListView from '../views/lesson/LessonListView';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { useSelector } from 'react-redux';

const Router = () => {

  const isAuth = useSelector((state) => (state.auth.isAuth));

  return (
    <Switch>
      <AppRoute exact path="/" component={LoginView} layout={SimpleLayout} />
      <AppRoute exact path="/register" component={RegisterView} layout={SimpleLayout} />
      <AppRoute exact path="/students" component={StudentsDashboardView} layout={MainLayout} />
      <AppRoute exact path="/teachers" component={TeachersDashboardView} layout={MainLayout} />
      <AppRoute exact path="/teachers/register" component={TeacherRegisterView} layout={MainLayout} />
      <AppRoute exact path="/teachers/list" component={TeachersListView} layout={MainLayout} />
      <AppRoute exact path="/teachers/lessons/list" component={LessonListView} layout={MainLayout} />
      <AppRoute exact path="/teacher/profile" component={TeacherProfileView} layout={MainLayout} />
      <AppRoute exact path="/teacher/lesson/schedule" component={LessonScheduleView} layout={MainLayout} />
      <AppRoute exact path="/teacher/lesson" component={LessonDetailView} layout={MainLayout} />

      {/* <Route component={Error404} /> */}
    </Switch>
  );
};

export default Router;