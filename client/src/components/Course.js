import React from 'react';
import { setActiveCourse } from '../actions/course';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Container, Grid, Segment } from 'semantic-ui-react';
import CourseSideNav from './tether/CourseSideNav';
import People from './tether/People';
import SectionSelect from './tether/SectionSelect'
import CourseHome from './course/CourseHome';
import CourseSettings from './tether/CourseSettings';
import PeopleProfile from './tether/PeopleProfile';
import Assignment from './assignments/Assignment';
import Quizzes from './quizzes/Quizzes';
import QuizForm from './quizzes/QuizForm';
import SingleQuiz from './quizzes/SingleQuiz';
import LectureNotes from './Rift/lectureNotes/LectureNotes';
import Wiki from './Rift/wiki/Wiki';
import Attendance from './attendance/Attendance';
import Assignments from './assignments/Assignments';
import CreateAssignment from './assignments/CreateAssignment';



class Course extends React.Component {
  componentDidMount() {
    const { match: { params: { id }}, dispatch } = this.props;
    dispatch(setActiveCourse(id))
  }

  // componentWillUnmount() {
  //   this.props.dispatch(clearActiveCourse())
  // }

  render() {
    return (
      <Segment basic>
        <Container fluid style={styles.noBorder}>
          <Grid style={styles.noBorder}>
            <Grid.Column computer={3}>
              <Segment style={styles.sideBar}>
                <Route component={CourseSideNav} />
              </Segment>
            </Grid.Column>
            <Grid.Column computer={13}>
              <Segment>
                <Switch>
                  <Route exact path="/courses/:id" component={CourseHome} />
                  <Route path="/courses/:id/people" component={People} />
                  <Route path="/courses/:id/sections" component={SectionSelect} />
                  <Route path="/courses/:id/settings" component={CourseSettings} />
                  <Route path="/courses/:id/user/:id" component={PeopleProfile} />
                  <Route path="/courses/:id/attendance" component={Attendance} />
                  <Route exact path='/courses/:id/quizzes' component={Quizzes} />
                  <Route exact path='/courses/:id/quizform' component={QuizForm} />
                  <Route exact path='/courses/:id/quizzes/:id' component={SingleQuiz} />
                  <Route exact path='/courses/:id/lecture-Notes' component={LectureNotes} />
                  <Route exact path='/courses/:id/assignment' component={Assignment} />
                  <Route exact path='/courses/:id/assignments' component={Assignments} />
                  <Route exact path='/courses/:id/assignments/create' component={CreateAssignment} />
                  <Route exact path='/courses/:id/wiki' component={Wiki} />
                </Switch>
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    )
  }
}

const styles = {
  noBorder: {
    border:'none',
  },

  sideBar: {
    height: "65vh",
    width: '11em',
  }
}

export default connect()(Course);
