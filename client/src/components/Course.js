import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setActiveCourse } from '../actions/course';
import { Route, Switch } from 'react-router-dom';
import { Container, Grid, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';
import CourseSideNav from './course/CourseSideNav';
import People from './people/People';
import SectionSelect from './course/SectionSelect'
import CourseHome from './course/CourseHome';
import CourseSettings from './tether/CourseSettings';
import PeopleProfile from './tether/PeopleProfile';
import Assignment from './assignments/Assignment';
import Wiki from './Rift/wiki/Wiki';
import Quizzes from './quizzes/Quizzes';
import QuizForm from './quizzes/QuizForm';
import SingleQuiz from './quizzes/SingleQuiz';
import QuizRoute from './QuizRoute';
import Lectures from './Rift/lectures/Lectures';
import Lecture from './Rift/lectures/Lecture';
import CreateLecture from './Rift/lectures/CreateLecture';
import EditLecture from './Rift/lectures/EditLecture';
import Attendance from './attendance/Attendance';
import Assignments from './assignments/Assignments';
import Assignment from './assignments/Assignment';
import CreateAssignment from './assignments/CreateAssignment';

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
      { name: 'People', path: `/courses/${courseId}/people` },
      { name: 'Attendance', path: `/courses/${courseId}/attendance` },
      { name: 'Sections', path: `/courses/${courseId}/sections` },
      { name: 'Quizzes', path: `/courses/${courseId}/quizzes` },
      { name: 'Lectures', path: `/courses/${courseId}/lectures` },
      { name: 'Assignments', path: `/courses/${courseId}/assignments` },
      { name: 'Wiki', path: `/courses/${courseId}/wiki` }
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
      <Switch>
<<<<<<< HEAD
        <ProtectedRoute exact path="/courses/:id" component={CourseHome} />
        <ProtectedRoute path="/courses/:id/people" component={People} />
        <ProtectedRoute path="/courses/:id/sections" component={SectionSelect} />
        <ProtectedRoute path="/courses/:id/settings" component={CourseSettings} />
        <ProtectedRoute path="/courses/:id/user/:id" component={PeopleProfile} />
        <ProtectedRoute path="/courses/:id/attendance" component={Attendance} />
        <ProtectedRoute exact path='/courses/:id/quizzes/:id' component={QuizRoute} />
        <ProtectedRoute exact path='/courses/:id/quizzes' component={Quizzes} />
        <ProtectedRoute adminOnly={true} exact path='/courses/:id/quizform' component={QuizForm} />
        <ProtectedRoute exact path='/courses/:id/lectures' component={Lectures} />
        <ProtectedRoute exact path='/courses/:id/lectures/create' component={CreateLecture} />
        <ProtectedRoute exact path='/courses/:id/lectures/:id' component={Lecture} />
        <ProtectedRoute exact path='/courses/:id/assignments' component={Assignments} />
        <ProtectedRoute exact path='/courses/:id/assignments/create' component={CreateAssignment} />
        <ProtectedRoute exact path='/courses/:id/assignments/:id' component={Assignment} />
        <ProtectedRoute exact path='/courses/:id/wiki' component={Wiki} />
=======
        <Route exact path="/courses/:id" component={CourseHome} />
        <Route path="/courses/:id/people" component={People} />
        <Route path="/courses/:id/sections" component={SectionSelect} />
        <Route path="/courses/:id/settings" component={CourseSettings} />
        <Route path="/courses/:id/user/:id" component={PeopleProfile} />
        <Route path="/courses/:id/attendance" component={Attendance} />
        <Route exact path='/courses/:id/quizzes' component={Quizzes} />
        <Route exact path='/courses/:id/quizform' component={QuizForm} />
        <Route exact path='/courses/:id/quizzes/:id' component={SingleQuiz} />
        <Route exact path='/courses/:id/lectures' component={Lectures} />
        <Route exact path='/courses/:id/lectures/create' component={CreateLecture} />
        <Route exact path='/courses/:id/lectures/:id' component={Lecture} />
        <Route exact path='/courses/:id/lectures/:id/edit' component={EditLecture} />  
        <Route exact path='/courses/:id/assignments' component={Assignments} />
        <Route exact path='/courses/:id/assignments/create' component={CreateAssignment} />
        <Route exact path='/courses/:id/assignments/:id' component={Assignment} />
        <Route exact path='/courses/:id/wiki' component={Wiki} />
>>>>>>> more change
      </Switch>
    </Segment>
  )

  render() {
    const { sidebar } = this.state;

    return (
      <Segment basic>
        <Container fluid style={styles.noBorder}>
          <Grid style={styles.noBorder}>
            <Grid.Row only='computer'>
              <Grid.Column mobile={16} tablet={16} computer={2} only='computer'>
                <Segment style={styles.sidebar} basic>
                  <Route component={CourseSideNav} />
                </Segment>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={16} computer={14}>
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
