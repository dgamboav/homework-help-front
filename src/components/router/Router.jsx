import React from 'react';
import { Switch } from 'react-router-dom';
import AppRoute from './AppRoute';

// Pages
import HomeView from '../views/home/HomeView';
import StudentsDashboardView from '../views/student/StudentsDashboardView';
import TeachersDashboardView from '../views/teacher/TeachersDashboardView';
import RegisterView from '../views/auth/register/RegisterView';
import LoginView from '../views/auth/login/LoginView';
import Register2 from '../views/auth/register/RegisterView2';
import RegisterStudents from '../views/auth/register/RegisterStudents';

// Layouts
import MainLayout from '../layouts/MainLayout';
import SimpleLayout from '../layouts/SimpleLayout';
import RegisterLayout from '../views/auth/register/layouts/RegisterLayout';
import RegisterLayout2 from '../views/auth/register/layouts/RegisterLayout2';
import RegisterLayoutStudents from '../views/auth/register/layouts/RegisterLayoutStudents';

const Router = () => {
  return (
    <Switch>
      <AppRoute exact path="/login" component={LoginView} layout={SimpleLayout} />
      <AppRoute exact path="/register" component={RegisterView} layout={RegisterLayout} />
      <AppRoute exact path="/register2" component={Register2} layout={RegisterLayout2} />
      <AppRoute exact path="/registerstudents" component={RegisterStudents} layout={RegisterLayoutStudents} />

      <AppRoute exact path="/" component={HomeView} layout={MainLayout} />
      <AppRoute exact path="/students" component={StudentsDashboardView} layout={MainLayout} />
      <AppRoute exact path="/teachers" component={TeachersDashboardView} layout={MainLayout} />
      {/* <Route component={Error404} /> */}
    </Switch>
  );
};

export default Router;