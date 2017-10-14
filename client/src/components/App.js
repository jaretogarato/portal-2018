import React, { Component } from 'react';
import Courses from './Courses';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import InviteConfirmation from './InviteConfirmation';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import AdminRoute from './AdminRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import Footer from './Footer';
// import { Container, Grid, Header, Segment } from 'semantic-ui-react';
// import Lorem from 'react-lorem-component';
// import ImgHero from '../assets/images/hero-image.png';
import UserProfile from './UserProfile';
import Users from './Users';
import CourseForm from './CourseForm';

class App extends Component {
  render() {
    return (
      <div>
        <FetchUser>
          <NavBar />
          <Flash />
          <Switch>
            <Route exact path='/invitation/accept' component={InviteConfirmation} />
            <Route exact path='/' component={Home} />
            <AuthRoute exact path='/login' component={Login} />
            <ProtectedRoute exact path='/user_profile' component={UserProfile} />
            <AuthRoute exact path='/register' component={Register} />
            <AdminRoute path='/courses' component={Courses} />
            <AdminRoute path='/users' component={Users} />
            <AdminRoute path='/courseform' component={CourseForm} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
        <Footer />
      </div>
    );
  }
}

export default App;
