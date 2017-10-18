import React, { Component } from 'react';
import Attendance from './Attendance';
import Courses from './Courses';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import CourseView from './CourseView';
import InviteConfirmation from './InviteConfirmation';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import AdminRoute from './AdminRoute';
import FetchUser from './FetchUser';
import Footer from './Footer';
import UserProfile from './UserProfile';
import Users from './Users';
import CourseForm from './CourseForm';
import { FlexContainer, FlexContent } from '../styles/styles';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <FlexContainer>
        <FlexContent>
          <FetchUser>
            <NavBar />
            <Flash />
            <Switch>
              <Route exact path='/invitation/accept' component={InviteConfirmation} />
              <Route exact path='/' component={Home} />
              <AuthRoute exact path='/login' component={Login} />
              <ProtectedRoute exact path='/attendance' component={Attendance} />
              <ProtectedRoute exact path='/user_profile' component={UserProfile} />
              <ProtectedRoute exact path='/course_view' component={CourseView} />
              <AuthRoute exact path='/register' component={Register} />
              <AdminRoute path='/courses' component={Courses} />
              <AdminRoute path='/users' component={Users} />
              <AdminRoute path='/courseform' component={CourseForm} />
              <Route component={NoMatch} />
            </Switch>
          </FetchUser>
        </FlexContent>
        <Footer />
      </FlexContainer>
    );
  }
}

export default App;
