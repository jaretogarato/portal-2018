import React from 'react';
import { setActiveCourse, clearActiveCourse } from '../actions/course';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Container, Grid, Segment } from 'semantic-ui-react';
import CourseSideNav from './tether/CourseSideNav';
import People from './tether/People';
import SectionSelect from './tether/SectionSelect'
import CourseSettings from './tether/CourseSettings';
import PeopleProfile from './tether/PeopleProfile';
import SectionShow from './tether/SectionShow';

import Assignment from './Rift/assignments/Assignment';
import Quizzes from './Rift/quizzes/Quizzes';
import QuizForm from './Rift/quizzes/QuizForm';
import SingleQuiz from './Rift/quizzes/SingleQuiz';
import LectureNotes from './Rift/lectureNotes/LectureNotes';
import Wiki from './Rift/wiki/Wiki';
import CreateAssignment from './Rift/assignments/CreateAssignment';
import Attendance from './attendance/Attendance';



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
            <Grid.Column width={3}>
              <Segment style={styles.sideBar}>
                <Route component={CourseSideNav} />
              </Segment>
            </Grid.Column>
            <Grid.Column width={13}>
              <Segment>
                <Route exact path="/courses/:id" component={SectionShow} />
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
                <Route exact path='/courses/:id/assignment/create' component={CreateAssignment} />
                <Route exact path='/courses/:id/wiki' component={Wiki} />
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
