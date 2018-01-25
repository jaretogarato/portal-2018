import React from 'react';
import AuthRoute from './AuthRoute';
import Courses from './course/Courses';
import Course from './Course';
import FetchUser from './FetchUser';
import NavBar from './FetchCourses';
import Flash from './Flash';
import Footer from './shared/Footer';
import Home from './root/Home';
import InviteConfirmation from './InviteConfirmation';
import Login from './Login';
import NoMatch from './NoMatch';
import ProtectedRoute from './ProtectedRoute';
import UserProfile from './profile/UserProfile';
import {
  FlexContainer,
  FlexContent,
} from '../styles/styles';

import {
  Switch,
  Route,
} from 'react-router-dom';

import PeopleProfile from './people/PeopleProfile';
import '../styles/appWrap.css';

class App extends React.Component {
  render() {
    return (
      <FlexContainer>
        <FlexContent>
          <FetchUser>
            <NavBar />
            <Flash />
            <Switch>
              <Route exact path='/invitation/accept' component={InviteConfirmation} />
              <ProtectedRoute exact path='/' component={Home} />
              <AuthRoute exact path='/login' component={Login} />
              <ProtectedRoute exact path='/user_profile' component={UserProfile} />
              <ProtectedRoute path="/courses/:id" component={Course} />
              <ProtectedRoute path="/user_profile/:id" component={PeopleProfile} />
              <ProtectedRoute adminOnly={true} exact path='/courses' component={Courses} />
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
