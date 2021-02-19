import React from 'react';
import { Switch } from 'react-router-dom';
import AppRoute from './AppRoute';

// Pages
import HomeView from '../views/home/HomeView';
import StudentsDashboardView from '../views/student/StudentsDashboardView';
import TeachersDashboardView from '../views/teacher/TeachersDashboardView';
import RegisterView from '../views/auth/register/RegisterView';
import LoginView from '../views/auth/login/LoginView';

// Layouts
import MainLayout from '../layouts/MainLayout';
import SimpleLayout from '../layouts/SimpleLayout';

const Router = () => {
  return (
    <Switch>
      <AppRoute exact path="/login" component={LoginView} layout={SimpleLayout} />
      <AppRoute exact path="/register" component={RegisterView} layout={SimpleLayout} />

      <AppRoute exact path="/" component={HomeView} layout={MainLayout} />
      <AppRoute exact path="/students" component={StudentsDashboardView} layout={MainLayout} />
      <AppRoute exact path="/teachers" component={TeachersDashboardView} layout={MainLayout} />
      {/* <Route component={Error404} /> */}
    </Switch>
  );
};

export default Router;