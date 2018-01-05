import React from 'react';
import Attendance from './attendance/Attendance';
import AuthRoute from './AuthRoute';
import Courses from './course/Courses';
import Course from './Course';
import FetchUser from './FetchUser';
import NavBar from './FetchCourses';
import Flash from './Flash';
import Footer from './shared/Footer';
import Home from './root/Home';

import InviteConfirmation from './InviteConfirmation';
import LectureView from './lecture/LectureView';
import Login from './Login';
import NoMatch from './NoMatch';
import ProtectedRoute from './ProtectedRoute';
import UserProfile from './profile/UserProfile';
import UserModal from './users/UserModal';
import { FlexContainer, FlexContent } from '../styles/styles';
import { Switch, Route } from 'react-router-dom';


// import CreateAssignment from './rift/assignments/CreateAssignment';

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
              <ProtectedRoute adminOnly={true} exact path='/courses' component={Courses} />
              <ProtectedRoute
                exact path='/users'
                component={UserModal}
                adminOnly={true}
              />
              <ProtectedRoute
                path='/users'
                component={UserModal}
                adminOnly={true}
              />
              <ProtectedRoute
                path='/lectures/:id'
                component={LectureView}
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
