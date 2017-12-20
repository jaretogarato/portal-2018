import React from 'react';
import Attendance from './attendance/Attendance';
import AuthRoute from './AuthRoute';
import CourseForm from './course/CourseForm';
import Courses from './course/Courses';
import CourseView from './course/CourseView';
import Course from './Course';
import FetchUser from './FetchUser';
import NavBar from './FetchCourses';
import Flash from './Flash';
import Footer from './shared/Footer';
import Home from './root/Home';
import Assignment from './Rift/Assignment'
import Quizzes from './Rift/Quizzes'
import LectureNotes from './Rift/LectureNotes'
import Wikiß from './Rift/Wikiß'
import InviteConfirmation from './InviteConfirmation';
import LectureView from './lecture/LectureView';
import Login from './Login';
import NoMatch from './NoMatch';
import ProtectedRoute from './ProtectedRoute';
import UserProfile from './profile/UserProfile';
import Users from './users/Users';
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
              <Route exact path='/quizzes' component={Quizzes} />
              <Route exact path='/lecturenotes' component={LectureNotes} />
              <Route exact path='/assignments' component={Assignments} />
              <Route exact path='/wiki' component={Wiki} />
              <ProtectedRoute exact path='/' component={Home} />
              <AuthRoute exact path='/login' component={Login} />
              <ProtectedRoute exact path='/attendance' component={Attendance} />
              <ProtectedRoute exact path='/user_profile' component={UserProfile} />
              <ProtectedRoute
                exact path='/course_view'
                component={CourseView}
              />
              <ProtectedRoute path="/courses/:id" component={Course} />
              <ProtectedRoute adminOnly={true} exact path='/courses' component={Courses} />
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
