import React from 'react';
import Attendance from './attendance/Attendance';
import AuthRoute from './AuthRoute';
import Courses from './course/Courses';
import CourseView from './course/CourseView';
import Course from './Course';
import FetchUser from './FetchUser';
import NavBar from './FetchCourses';
import Flash from './Flash';
import Footer from './shared/Footer';
import Home from './root/Home';
import Assignment from './Rift/assignments/Assignment';
import Quizzes from './Rift/quizzes/Quizzes';
import QuizForm from './Rift/quizzes/QuizForm';
import LectureNotes from './Rift/lectureNotes/LectureNotes';
import Wiki from './Rift/wiki/Wiki';
import InviteConfirmation from './InviteConfirmation';
import LectureView from './lecture/LectureView';
import Login from './Login';
import NoMatch from './NoMatch';
import ProtectedRoute from './ProtectedRoute';
import UserProfile from './profile/UserProfile';
import Users from './users/Users';
import { FlexContainer, FlexContent } from '../styles/styles';
import { Switch, Route } from 'react-router-dom';
import CreateAssignment from './Rift/assignments/CreateAssignment';


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
              <Route exact path='/quizzes' component={Quizzes} />
              <Route exact path='/quizform' component={QuizForm} />
              <Route exact path='/lecturenote' component={LectureNotes} />
              <Route exact path='/assignment' component={Assignment} />
              <Route exact path='/assignment/create' component={CreateAssignment} />
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
