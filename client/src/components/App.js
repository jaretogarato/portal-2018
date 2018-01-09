import React from 'react';
import AuthRoute from './AuthRoute';
import Courses from './course/Courses';
import Course from './Course';
import FetchUser from './FetchUser';
import NavBar from './FetchCourses';
import Flash from './Flash';
import Footer from './shared/Footer';
import Home from './root/Home';
import LectureNotes from './Rift/lectureNotes/LectureNotes';
import LectureForm from './Rift/lectureNotes/LectureForm';
import InviteConfirmation from './InviteConfirmation';
import Login from './Login';
import NoMatch from './NoMatch';
import ProtectedRoute from './ProtectedRoute';
import UserProfile from './profile/UserProfile';
import UserModal from './users/UserModal';
import { FlexContainer, FlexContent } from '../styles/styles';
import { Switch, Route } from 'react-router-dom';

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
              <ProtectedRoute exact path='/lecturenotes' component={LectureNotes} />
              <ProtectedRoute exact path='/lectureform' component={LectureForm} />
              <ProtectedRoute adminOnly={true} exact path='/courses' component={Courses} />
              <ProtectedRoute
                path='/users'
                component={UserModal}
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
