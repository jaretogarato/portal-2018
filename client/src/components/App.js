import React, { Component } from 'react';
import Attendance from './attendance/Attendance';
import Courses from './course/Courses';
import NoMatch from './NoMatch';
import NavBar from './shared/NavBar';
import Login from './Login';
import LectureView from './lecture/LectureView';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import CourseView from './course/CourseView';
import InviteConfirmation from './InviteConfirmation';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import AdminRoute from './AdminRoute';
import FetchUser from './FetchUser';
import Footer from './shared/Footer';
import UserProfile from './profile/UserProfile';
import Users from './users/Users';
import CourseForm from './course/CourseForm';
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
                <ProtectedRoute
                  exact path='/course_view'
                  component={CourseView}
                />
                <AuthRoute exact path='/register' component={Register} />
                <ProtectedRoute adminOnly={true} path='/courses' component={Courses} />
                <ProtectedRoute
                  exact path='/users'
                  component={Users}
                  adminOnly={true}
                />
                <ProtectedRoute
                  path='/users'
                  component={Users}
                  adminOnly={true}
                />
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
