import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setActiveCourse } from '../actions/course';
import {
  Route,
  Switch,
} from 'react-router-dom';

import {
  Container,
  Grid,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react';

import Announcements from './announcements/Announcements';
import CourseSideNav from './course/CourseSideNav';
import People from './people/People';
import SectionSelect from './course/SectionSelect'
import CourseHome from './course/CourseHome';
import CourseSettings from './course/CourseSettings';
import PeopleProfile from './people/PeopleProfile';
import ProtectedRoute from './ProtectedRoute';
import WikiDocs from './Rift/wiki/WikiDocs';
import SingleDoc from './Rift/wiki/SingleDoc';
import Quizzes from './quizzes/Quizzes';
import QuizForm from './quizzes/QuizForm';
import QuizRoute from './QuizRoute';
import Lectures from './lectures/Lectures';
import Lecture from './lectures/Lecture';
import CreateLecture from './lectures/CreateLecture';
import Attendance from './attendance/Attendance';
import Assignments from './assignments/Assignments';
import Assignment from './assignments/Assignment';
import CreateAssignment from './assignments/CreateAssignment';
import FetchEnrollment from './course/FetchEnrollment';
import JournalEntries from './course/JournalEntries';

class Course extends React.Component {
  state = { sidebar: false };

  componentDidMount() {
    const { match: { params: { id }}, dispatch } = this.props;
    dispatch(setActiveCourse(id))
  }

  toggleSidebar = () => { this.setState({ sidebar: !this.state.sidebar }) };

  sidebarItems = () => {
    const { match: { params: { id: courseId } } } = this.props;
    const navs = [
      { name: 'Home', path: `/courses/${courseId}` },
      { name: 'Announcements', path: `/courses/${courseId}/announcements` },
      { name: 'People', path: `/courses/${courseId}/people` },
      { name: 'Attendance', path: `/courses/${courseId}/attendance` },
      { name: 'Sections', path: `/courses/${courseId}/sections` },
      { name: 'Quizzes', path: `/courses/${courseId}/quizzes` },
      { name: 'Lectures', path: `/courses/${courseId}/lectures` },
      { name: 'Assignments', path: `/courses/${courseId}/assignments` },
      { name: 'WikiDocs', path: `/courses/${courseId}/wiki` },
      { name: 'Settings', path: `/courses/${courseId}/settings` }
    ]
    return navs.map(nav => {
      return (
        <Menu.Item
          key={nav.name}
          as={Link} to={nav.path}
          position='right'
          name={nav.name}
          onClick={() => {
            if (this.state.sidebar)
              this.setState({ sidebar: false });
          }}
        />
      )
    })
  }

  renderRoutes = () => (
      <Segment basic>
        <FetchEnrollment>
          <Switch>
            <ProtectedRoute exact path="/courses/:id" component={CourseHome} />
            <ProtectedRoute path="/courses/:id/people" component={People} />
            <ProtectedRoute path="/courses/:id/sections" component={SectionSelect} />
            <ProtectedRoute path="/courses/:id/settings" component={CourseSettings} />
            <ProtectedRoute path="/courses/:id/user/:id" component={PeopleProfile} />
            <ProtectedRoute path="/courses/:id/attendance" component={Attendance} />
            <ProtectedRoute path="/courses/:id/announcements" component={Announcements} />
            <ProtectedRoute exact path='/courses/:id/quizzes/:id' component={QuizRoute} />
            <ProtectedRoute exact path='/courses/:id/quizzes' component={Quizzes} />
            <ProtectedRoute adminOnly={true} exact path='/courses/:id/quizform' component={QuizForm} />
            <ProtectedRoute exact path='/courses/:id/lectures' component={Lectures} />
            <ProtectedRoute exact path='/courses/:id/lectures/create' component={CreateLecture} />
            <ProtectedRoute exact path='/courses/:id/lectures/:id' component={Lecture} />
            <ProtectedRoute exact path='/courses/:id/assignments' component={Assignments} />
            <ProtectedRoute exact path='/courses/:id/journal_entries' component={JournalEntries} />
            <ProtectedRoute adminOnly={true} exact path='/courses/:id/assignments/create' component={CreateAssignment} />
            <ProtectedRoute exact path='/courses/:id/assignments/:id' component={Assignment} />
            <ProtectedRoute exact path='/courses/:id/wiki' component={WikiDocs} />
            <ProtectedRoute exact path='/courses/:id/wiki/:doc_id' component={SingleDoc} />
          </Switch>
        </FetchEnrollment>
      </Segment>
    )

  render() {
    const { sidebar } = this.state;

    return (
      <Segment basic>
        <Container fluid style={styles.noBorder}>
          <Grid style={styles.noBorder}>
            <Grid.Row only='computer'>
              <Grid.Column mobile={16} tablet={16} computer={3} only='computer'>
                <Segment style={styles.sidebar} basic>
                  <Route component={CourseSideNav} />
                </Segment>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={16} computer={13}>
                { this.renderRoutes() }
              </Grid.Column>
            </Grid.Row>
            <Grid.Row only='mobile tablet'>
              <Grid.Column mobile={16} tablet={16} computer={2} only='computer'>
                <Icon
                  name='sidebar'
                  size='large'
                  inverted
                  color='black'
                  onClick={this.toggleSidebar}
                />
              </Grid.Column>
              <Grid.Column mobile={16} tablet={16} computer={14}>
                <Sidebar.Pushable style={styles.pusher}>
                  <Sidebar
                    as={Menu}
                    animation='push'
                    width='thin'
                    visible={sidebar}
                    icon='labeled'
                    vertical
                  >
                      { this.sidebarItems() }
                  </Sidebar>
                  <Sidebar.Pusher>
                    { this.renderRoutes() }
                  </Sidebar.Pusher>
                </Sidebar.Pushable>
              </Grid.Column>
            </Grid.Row>
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
  sidebar: {
    height: "65vh",
    width: '11em',
  },
  pusher: {
    height: '100vh'
  }
}

export default connect()(Course);
